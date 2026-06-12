import { NextResponse } from "next/server";

import fs from "fs";
import path from "path";

import { calculateRisk } from "@/services/riskEngine";
import { predictDisease } from "@/services/diseaseEngine";

export const runtime = "nodejs";

/* CACHE */

let cachedRiskMap: any = null;
let cacheTimestamp = 0;

const CACHE_DURATION = 15 * 60 * 1000;

/* 15 MENIT */

type WeatherSnapshot = {
  temperature: number;
  humidity: number;
  rain: number;
};

function average(values?: number[]) {
  if (!Array.isArray(values)) return null;

  const validValues = values.filter(
    (value) => typeof value === "number" && Number.isFinite(value),
  );

  if (!validValues.length) return null;

  return (
    validValues.reduce((total, value) => total + value, 0) / validValues.length
  );
}

function sum(values?: number[]) {
  if (!Array.isArray(values)) return null;

  const validValues = values.filter(
    (value) => typeof value === "number" && Number.isFinite(value),
  );

  if (!validValues.length) return null;

  return validValues.reduce((total, value) => total + value, 0);
}

function roundNumber(value: number, digit = 1) {
  const multiplier = 10 ** digit;
  return Math.round(value * multiplier) / multiplier;
}

function getWeatherSnapshot(
  weather: any,
  dayIndex: number,
  fallback: WeatherSnapshot,
): WeatherSnapshot {
  const startHour = dayIndex * 24;
  const endHour = startHour + 24;

  const hourlyTemperature = weather.hourly?.temperature_2m?.slice(
    startHour,
    endHour,
  );

  const hourlyHumidity = weather.hourly?.relative_humidity_2m?.slice(
    startHour,
    endHour,
  );

  const hourlyRain = weather.hourly?.rain?.slice(startHour, endHour);

  const dailyMaxTemperature = weather.daily?.temperature_2m_max?.[dayIndex];
  const dailyMinTemperature = weather.daily?.temperature_2m_min?.[dayIndex];
  const dailyRain = weather.daily?.precipitation_sum?.[dayIndex];

  const averageDailyTemperature =
    typeof dailyMaxTemperature === "number" &&
    typeof dailyMinTemperature === "number"
      ? (dailyMaxTemperature + dailyMinTemperature) / 2
      : null;

  return {
    temperature: roundNumber(
      average(hourlyTemperature) ??
        averageDailyTemperature ??
        fallback.temperature,
    ),
    humidity: roundNumber(average(hourlyHumidity) ?? fallback.humidity),
    rain: roundNumber(sum(hourlyRain) ?? dailyRain ?? fallback.rain),
  };
}

/*
  Status prediksi dihitung dari:
  - humidity
  - rain
  - temperature

  Bukan langsung dari riskScore.
*/

function calculateWeatherStatus(
  humidity: number,
  rain: number,
  temperature: number,
) {
  const isHighRisk =
    rain >= 20 ||
    (humidity >= 80 && rain >= 5) ||
    (temperature >= 34 && humidity >= 75);

  const isWarningRisk = rain >= 5 || humidity >= 75 || temperature >= 32;

  if (isHighRisk) return "high";
  if (isWarningRisk) return "warning";
  return "safe";
}

export async function GET() {
  try {
    const now = Date.now();

    /* CEK CACHE */

    if (cachedRiskMap && now - cacheTimestamp < CACHE_DURATION) {
      console.log("Using Cache");

      return NextResponse.json({
        success: true,
        cached: true,
        total: cachedRiskMap.length,
        data: cachedRiskMap,
      });
    }

    const filePath = path.join(
      process.cwd(),
      "public",
      "data",
      "district-centroids.json",
    );

    const centroids = JSON.parse(fs.readFileSync(filePath, "utf8"));

    const sampleDistricts = centroids.slice(0, 519);

    const results = await Promise.all(
      sampleDistricts.map(async (district: any) => {
        try {
          const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${district.latitude}&longitude=${district.longitude}&current=temperature_2m,relative_humidity_2m,rain&hourly=temperature_2m,relative_humidity_2m,rain&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&forecast_days=8`,
          );

          const weather = await response.json();

          const currentTemperature = weather.current?.temperature_2m ?? 0;
          const currentHumidity = weather.current?.relative_humidity_2m ?? 0;
          const currentRain = weather.current?.rain ?? 0;

          const currentWeather: WeatherSnapshot = {
            temperature: currentTemperature,
            humidity: currentHumidity,
            rain: currentRain,
          };

          /*
            Index prediksi:
            0 = hari ini
            1 = besok
            2 = lusa
            3 = 3 hari setelah hari ini
            7 = 7 hari setelah hari ini

            Karena +7 hari tidak termasuk hari ini,
            forecast_days harus 8 agar index 7 tersedia.
          */

          const todayWeather = currentWeather;
          const day3Weather = getWeatherSnapshot(weather, 3, currentWeather);
          const day7Weather = getWeatherSnapshot(weather, 7, currentWeather);

          /*
            Risk score tetap dihitung untuk:
            - ranking Top 5
            - pewarnaan peta utama
            - informasi tambahan

            Namun status hari ini, +3 hari, dan +7 hari
            dihitung menggunakan calculateWeatherStatus().
          */

          const todayRisk = calculateRisk(
            todayWeather.humidity,
            todayWeather.rain,
            todayWeather.temperature,
          );

          const day3Risk = calculateRisk(
            day3Weather.humidity,
            day3Weather.rain,
            day3Weather.temperature,
          );

          const day7Risk = calculateRisk(
            day7Weather.humidity,
            day7Weather.rain,
            day7Weather.temperature,
          );

          const todayStatus = calculateWeatherStatus(
            todayWeather.humidity,
            todayWeather.rain,
            todayWeather.temperature,
          );

          const day3Status = calculateWeatherStatus(
            day3Weather.humidity,
            day3Weather.rain,
            day3Weather.temperature,
          );

          const day7Status = calculateWeatherStatus(
            day7Weather.humidity,
            day7Weather.rain,
            day7Weather.temperature,
          );

          const disease = predictDisease(
            todayWeather.humidity,
            todayWeather.rain,
            todayWeather.temperature,
          );

          return {
            shapeName: district.shapeName,

            latitude: district.latitude,
            longitude: district.longitude,

            temperature: todayWeather.temperature,
            humidity: todayWeather.humidity,
            rain: todayWeather.rain,

            riskScore: todayRisk.score,
            riskStatus: todayStatus,

            disease,

            todayStatus,
            day3Status,
            day7Status,

            todayWeather,
            day3Weather,
            day7Weather,

            day3RiskScore: day3Risk.score,
            day7RiskScore: day7Risk.score,

            forecast: weather.daily,
          };
        } catch (error) {
          console.error("Risk map district error:", district.shapeName, error);

          return {
            shapeName: district.shapeName,
            error: true,
          };
        }
      }),
    );

    /* UPDATE CACHE */

    cachedRiskMap = results;
    cacheTimestamp = Date.now();

    console.log("Cache Updated");

    return NextResponse.json({
      success: true,
      cached: false,
      total: results.length,
      data: results,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to generate risk map",
      },
      {
        status: 500,
      },
    );
  }
}
