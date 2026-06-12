"use client";

import { useState } from "react";
import RiskMap from "@/components/maps/RiskMap";
import OutbreakPredictionCard from "@/components/prediction/OutbreakPredictionCard";
import ExplainableFactors from "@/components/prediction/ExplainableFactors";
import RecommendationList from "@/components/prediction/RecommendationList";
import AiAdvisoryPanel from "@/components/maps/AiAdvisoryPanel";

const demoPayloads = {
  DBD: {
    region: "Surabaya",
    disease: "DBD",
    forecastDays: 7,
    temperature: 29,
    humidity: 88,
    rainfall: 42,
    windSpeed: 12,
    populationDensity: 9000,
    previousCases: 55,
    searchTrendIndex: 82,
    communityReports: 28,
  },
  ISPA: {
    region: "Surabaya",
    disease: "ISPA",
    forecastDays: 7,
    temperature: 34,
    humidity: 55,
    rainfall: 5,
    windSpeed: 22,
    populationDensity: 9200,
    previousCases: 42,
    searchTrendIndex: 68,
    communityReports: 20,
  },
  Diare: {
    region: "Surabaya",
    disease: "Diare",
    forecastDays: 7,
    temperature: 30,
    humidity: 78,
    rainfall: 28,
    windSpeed: 10,
    populationDensity: 7800,
    previousCases: 25,
    searchTrendIndex: 61,
    communityReports: 16,
  },
};

type DiseaseType = "DBD" | "ISPA" | "Diare";

type UserRiskContext = {
  region: string;
  province?: string;
  latitude: number;
  longitude: number;
  temperature: number;
  humidity: number;
  rain: number;
  riskScore: number;
  riskStatus: string;
  diseasePrediction: string;
  riskPeriod: string;
};

export default function PrediksiPage() {
  const [prediction, setPrediction] = useState<any>(null);
  const [selectedDisease, setSelectedDisease] = useState<DiseaseType>("DBD");
  const [loading, setLoading] = useState(false);
  const [userRiskContext, setUserRiskContext] =
    useState<UserRiskContext | null>(null);

  async function runPrediction(type: DiseaseType) {
    try {
      setLoading(true);
      setSelectedDisease(type);

      const basePayload = demoPayloads[type];

      const payload = {
        ...basePayload,
        region: userRiskContext?.region ?? basePayload.region,
        temperature: userRiskContext?.temperature ?? basePayload.temperature,
        humidity: userRiskContext?.humidity ?? basePayload.humidity,
        rainfall: userRiskContext?.rain ?? basePayload.rainfall,
        userLatitude: userRiskContext?.latitude,
        userLongitude: userRiskContext?.longitude,
        userRiskScore: userRiskContext?.riskScore,
        userRiskStatus: userRiskContext?.riskStatus,
        userDiseasePrediction: userRiskContext?.diseasePrediction,
        userRiskPeriod: userRiskContext?.riskPeriod,
      };

      const response = await fetch("/api/outbreak-prediction", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const json = await response.json();

      if (!response.ok) {
        throw new Error(json.message || "Gagal menjalankan prediksi.");
      }

      setPrediction(json.data);
    } catch (error) {
      console.error(error);
      alert("Gagal menjalankan prediksi risiko wabah.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50">

      <section className="container-page py-8 lg:py-10">

        {/* HEADER */}
        <div
          className="
    mb-10
    md:mb-14

    flex
    flex-col
    items-center
    text-center

    px-4
    sm:px-6
    lg:px-0
  "
        >

          <span
            className="
      inline-flex
      rounded-full
      bg-teal-50

      px-3
      py-2

      sm:px-4

      text-xs
      sm:text-sm

      font-semibold
      text-teal-700
    "
          >
            Prediksi Wabah Nasional
          </span>

          <h1
            className="
      mt-4

      text-[32px]
      leading-[40px]

      sm:text-[40px]
      sm:leading-[48px]

      md:text-[52px]
      md:leading-[60px]

      lg:text-5xl

      font-bold
      tracking-tight
      text-slate-900
    "
          >
            Peta Risiko Nasional
          </h1>

          <p
            className="
      mt-4

      max-w-full
      sm:max-w-2xl
      lg:max-w-4xl

      text-[15px]
      leading-7

      sm:text-base

      md:text-lg
      md:leading-8

      text-slate-600
    "
          >
            Lihat persebaran risiko penyakit di Indonesia melalui
            peta interaktif berbasis GIS, dilengkapi prediksi risiko
            wabah 3–7 hari ke depan berbasis data iklim,
            riwayat penyakit, tren pencarian, dan kerentanan wilayah.
          </p>

        </div>

        {/* MAP */}

        <div
          className="
        rounded-[2rem]
        border
        border-slate-200
        bg-white
        p-3
        shadow-sm
      "
        >

          <RiskMap
            onUserRiskChange={setUserRiskContext}
          />

        </div>

      </section>

    </main>
  );
}
