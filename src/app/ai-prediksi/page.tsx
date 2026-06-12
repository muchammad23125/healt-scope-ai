"use client";

import { useState } from "react";

import OutbreakPredictionCard from "@/components/prediction/OutbreakPredictionCard";
import ExplainableFactors from "@/components/prediction/ExplainableFactors";
import RecommendationList from "@/components/prediction/RecommendationList";
import AiAdvisoryPanel from "@/components/maps/AiAdvisoryPanel";

type DiseaseType =
    | "DBD"
    | "ISPA"
    | "Diare";

const demoPayloads = {
    DBD: {
        region: "Indonesia",
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
        region: "Indonesia",
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
        region: "Indonesia",
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

export default function AiPrediksiPage() {

    const [prediction, setPrediction] =
        useState<any>(null);

    const [loading, setLoading] =
        useState(false);

    const [selectedDisease, setSelectedDisease] =
        useState<DiseaseType>("DBD");

    async function runPrediction(
        type: DiseaseType
    ) {

        try {

            setLoading(true);

            setSelectedDisease(type);

            const response =
                await fetch(
                    "/api/outbreak-prediction",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type":
                                "application/json",
                        },
                        body: JSON.stringify(
                            demoPayloads[type]
                        ),
                    }
                );

            const json =
                await response.json();

            if (!response.ok) {

                throw new Error(
                    json.message ||
                    "Prediction failed"
                );

            }

            setPrediction(
                json.data
            );

        } catch (error) {

            console.error(error);

            alert(
                "Gagal menjalankan prediksi."
            );

        } finally {

            setLoading(false);

        }

    }

    return (

        <main className="min-h-screen bg-slate-50">

            <section
                className="
    container-page
    py-10
  "
            >

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
      bg-cyan-50

      px-3
      py-2

      sm:px-4

      text-xs
      sm:text-sm

      font-semibold
      text-cyan-700
    "
                    >
                        AI-Based Early Warning System
                    </span>

                    <h1
                        className="
      mt-4

      text-[30px]
      leading-[38px]

      sm:text-[38px]
      sm:leading-[46px]

      md:text-[46px]
      md:leading-[54px]

      lg:text-5xl

      font-bold
      text-slate-900
    "
                    >
                        Analisis Prediksi Risiko Wabah
                    </h1>

                    <p
                        className="
      mt-4

      max-w-full
      sm:max-w-2xl
      lg:max-w-3xl

      text-[15px]
      leading-7

      sm:text-base

      md:text-lg
      md:leading-8

      text-slate-600
      mx-auto
    "
                    >
                        Simulasi prediksi risiko wabah berbasis
                        Explainable AI menggunakan faktor iklim,
                        riwayat kasus, tren pencarian,
                        laporan masyarakat,
                        dan karakteristik wilayah.
                    </p>

                </div>

                {/* CONTENT */}

                <div
                    className="
      bg-white
      rounded-[2rem]
      border
      border-slate-200
      p-6
      shadow-sm
    "
                >

                    <div
                        className="
        flex
        flex-wrap
        justify-center
        gap-3
        mb-6
      "
                    >

                        {(
                            [
                                "DBD",
                                "ISPA",
                                "Diare",
                            ] as DiseaseType[]
                        ).map((disease) => (

                            <button
                                key={disease}
                                onClick={() =>
                                    runPrediction(
                                        disease
                                    )
                                }
                                disabled={loading}
                                className={`

            px-5
            py-3
            rounded-2xl
            font-semibold
            transition

            ${selectedDisease === disease

                                        ? "bg-teal-600 text-white"

                                        : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                                    }

          `}
                            >
                                Prediksi {disease}
                            </button>

                        ))}

                    </div>

                    {loading && (

                        <div
                            className="
          rounded-2xl
          border
          border-cyan-100
          bg-cyan-50
          p-4
          text-center
          text-cyan-700
        "
                        >
                            Sistem sedang menganalisis data...
                        </div>

                    )}

                    {!prediction && !loading && (

                        <div
                            className="
          rounded-2xl
          border
          border-slate-200
          bg-slate-50
          p-5
          text-center
        "
                        >

                            <h3
                                className="
            font-semibold
            text-slate-900
          "
                            >
                                Jalankan Simulasi Prediksi
                            </h3>

                            <p
                                className="
            mt-2
            text-sm
            text-slate-600
          "
                            >
                                Pilih jenis penyakit untuk
                                memulai analisis risiko wabah.
                            </p>

                        </div>

                    )}

                    {prediction && (

                        <div
                            className="
          mt-6
          space-y-6
        "
                        >

                            <div
                                className="
            grid
            gap-6
            xl:grid-cols-2
          "
                            >

                                <div
                                    className="
              space-y-6
            "
                                >

                                    <OutbreakPredictionCard
                                        prediction={prediction}
                                    />

                                    <RecommendationList
                                        recommendations={
                                            prediction.recommendations
                                        }
                                    />

                                </div>

                                <ExplainableFactors
                                    factors={
                                        prediction.explainableFactors
                                    }
                                />

                            </div>

                            {prediction.aiAdvisory && (

                                <AiAdvisoryPanel
                                    aiAdvisory={
                                        prediction.aiAdvisory
                                    }
                                    alertStatus={
                                        prediction.alertStatus
                                    }
                                />

                            )}

                        </div>

                    )}

                </div>

            </section>

        </main>

    );

}