import { generateRecommendations } from "./recommendation-engine";
import { generateWarningNote } from "./warning-note";
import { generateAiHealthAdvisory } from "./ai-health-advisory";
import { generateAlertStatus } from "./alert-status";
import { getDataSources, getModelInfo } from "./prediction-metadata";

import { predictDisease } from "./disease-predictor";

export type DiseaseType =
  | "DBD"
  | "ISPA"
  | "Leptospirosis"
  | "Heat Stress"
  | "Dermatitis";
export type RiskLevel = "Aman" | "Waspada" | "Siaga" | "Bahaya";

export type OutbreakPredictionInput = {
  region: string;

  temperature: number;

  humidity: number;

  rainfall: number;

  riskScore: number;

  riskStatus: string;
};

export function predictOutbreakRisk(input: OutbreakPredictionInput) {
  const diseaseResult = predictDisease(
    input.temperature,
    input.humidity,
    input.rainfall,
  );

  const predictedDisease = diseaseResult.primaryDisease;

  const climateResult = calculateClimateScore(predictedDisease, input);

  // const finalRiskScore = Math.round(
  //   climateResult.climateScore * 0.4 + input.riskScore * 0.6,
  // );
  const finalRiskScore = input.riskScore;

  const vulnerabilityResult = {
    vulnerabilityLevel: input.riskStatus,
    vulnerabilityScore: input.riskScore,

    factors: [
      {
        factor: "Kondisi Lingkungan",
        score: input.riskScore,
        impact:
          input.riskScore >= 80
            ? "Tinggi"
            : input.riskScore >= 50
              ? "Sedang"
              : "Rendah",

        description:
          "Kerentanan wilayah dihitung berdasarkan kondisi cuaca realtime dan skor risiko pada peta nasional.",
      },
    ],
  };

  const riskLevel = getRiskLevel(finalRiskScore);

  const explainableFactors = [
    ...climateResult.factors,
    {
      factor: "Risk Score Realtime",
      score: input.riskScore,
      impact: getImpact(input.riskScore),

      description:
        "Skor risiko diperoleh dari analisis kondisi cuaca realtime pada lokasi pengguna.",
    },
    {
      factor: "Status Risiko",
      score: input.riskScore,
      impact: getImpact(input.riskScore),

      description: `Status saat ini adalah ${input.riskStatus}.`,
    },
    {
      factor: "Kerentanan Lingkungan",
      score: input.riskScore,
      impact: getImpact(input.riskScore),

      description:
        "Kerentanan wilayah dihitung berdasarkan kelembapan, curah hujan, dan suhu lingkungan.",
    },
  ].sort((a, b) => b.score - a.score);

  const topFactors = explainableFactors.slice(0, 3).map((item) => item.factor);

  // return {
  //   region: input.region,
  //   disease: input.disease,
  //   forecastRange: `${input.forecastDays} hari ke depan`,
  //   riskLevel,
  //   riskScore: finalRiskScore,
  //   vulnerabilityLevel: vulnerabilityResult.vulnerabilityLevel,
  //   vulnerabilityScore: vulnerabilityResult.vulnerabilityScore,
  //   confidence: Number(Math.min(0.95, 0.62 + finalRiskScore / 260).toFixed(2)),
  //   warningNote: generateWarningNote({
  //     region: input.region,
  //     disease: input.disease,
  //     riskLevel,
  //     forecastDays: input.forecastDays,
  //     topFactors,
  //   }),
  //   recommendations: generateRecommendations(input.disease, riskLevel),
  //   explainableFactors,
  //   vulnerabilityFactors: vulnerabilityResult.factors,
  // };

  const forecastDays = 7;

  const forecastRange = `${forecastDays} hari ke depan`;

  const confidence = Number(
    Math.min(0.95, 0.62 + finalRiskScore / 260).toFixed(2),
  );

  const warningNote = generateWarningNote({
    region: input.region,
    disease: predictedDisease,
    riskLevel,
    forecastDays,
    topFactors,
  });

  const recommendations = generateRecommendations(predictedDisease, riskLevel);

  const basePrediction = {
    region: input.region,

    disease: predictedDisease,

    diseaseScores: diseaseResult.diseaseScores,

    forecastRange,

    riskLevel,

    riskScore: finalRiskScore,

    vulnerabilityLevel: vulnerabilityResult.vulnerabilityLevel,

    vulnerabilityScore: vulnerabilityResult.vulnerabilityScore,

    confidence,

    warningNote,

    recommendations,

    explainableFactors,

    vulnerabilityFactors: vulnerabilityResult.factors,
  };

  return {
    ...basePrediction,

    aiAdvisory: generateAiHealthAdvisory({
      region: input.region,

      disease: predictedDisease,

      forecastRange,

      riskLevel,

      riskScore: finalRiskScore,

      vulnerabilityLevel: vulnerabilityResult.vulnerabilityLevel,

      vulnerabilityScore: vulnerabilityResult.vulnerabilityScore,

      confidence,

      recommendations,

      explainableFactors,
    }),

    alertStatus: generateAlertStatus(riskLevel, finalRiskScore),

    modelInfo: getModelInfo(forecastRange),

    dataSources: getDataSources(),

    inputSnapshot: {
      temperature: input.temperature,

      humidity: input.humidity,

      rainfall: input.rainfall,

      riskScore: input.riskScore,

      riskStatus: input.riskStatus,
    },
  };
}

function calculateClimateScore(
  disease: DiseaseType,
  input: OutbreakPredictionInput,
) {
  let score = 0;

  const factors: Array<{
    factor: string;
    score: number;
    impact: string;
    description: string;
  }> = [];

  /* =====================
     DBD
  ===================== */

  if (disease === "DBD") {
    if (input.rainfall >= 30) {
      score += 35;

      factors.push({
        factor: "Curah Hujan",
        score: 90,
        impact: "Tinggi",
        description:
          "Curah hujan tinggi meningkatkan potensi genangan air sebagai tempat berkembang biak nyamuk.",
      });
    } else if (input.rainfall >= 15) {
      score += 22;

      factors.push({
        factor: "Curah Hujan",
        score: 65,
        impact: "Sedang",
        description:
          "Curah hujan sedang dapat meningkatkan potensi genangan air.",
      });
    }

    if (input.humidity >= 80) {
      score += 25;

      factors.push({
        factor: "Kelembapan",
        score: 80,
        impact: "Tinggi",
        description:
          "Kelembapan tinggi mendukung aktivitas dan perkembangbiakan nyamuk.",
      });
    }

    if (input.temperature >= 26 && input.temperature <= 32) {
      score += 20;

      factors.push({
        factor: "Suhu",
        score: 70,
        impact: "Sedang",
        description: "Suhu berada pada rentang ideal perkembangan vektor DBD.",
      });
    }
  }

  /* =====================
     ISPA
  ===================== */

  if (disease === "ISPA") {
    if (input.humidity <= 60) {
      score += 25;

      factors.push({
        factor: "Kelembapan Rendah",
        score: 70,
        impact: "Sedang",
        description:
          "Kelembapan rendah dapat meningkatkan risiko gangguan pernapasan.",
      });
    }

    if (input.temperature >= 33 || input.temperature <= 22) {
      score += 20;

      factors.push({
        factor: "Suhu Ekstrem",
        score: 75,
        impact: "Tinggi",
        description:
          "Suhu ekstrem dapat memengaruhi daya tahan tubuh dan risiko ISPA.",
      });
    }
  }

  /* =====================
     LEPTOSPIROSIS
  ===================== */

  if (disease === "Leptospirosis") {
    if (input.rainfall >= 20) {
      score += 35;

      factors.push({
        factor: "Curah Hujan",
        score: 85,
        impact: "Tinggi",
        description:
          "Curah hujan tinggi meningkatkan risiko genangan dan penyebaran bakteri leptospira.",
      });
    }

    if (input.humidity >= 80) {
      score += 25;

      factors.push({
        factor: "Kelembapan",
        score: 75,
        impact: "Tinggi",
        description:
          "Lingkungan lembap mendukung kelangsungan hidup bakteri leptospira.",
      });
    }

    if (input.temperature >= 24 && input.temperature <= 32) {
      score += 15;

      factors.push({
        factor: "Suhu",
        score: 60,
        impact: "Sedang",
        description:
          "Suhu hangat mendukung perkembangan bakteri pada lingkungan terbuka.",
      });
    }
  }

  /* =====================
     HEAT STRESS
  ===================== */

  if (disease === "Heat Stress") {
    if (input.temperature >= 34) {
      score += 45;

      factors.push({
        factor: "Suhu Tinggi",
        score: 95,
        impact: "Tinggi",
        description:
          "Paparan suhu tinggi dapat menyebabkan heat stress dan dehidrasi.",
      });
    }

    if (input.humidity >= 70) {
      score += 20;

      factors.push({
        factor: "Kelembapan",
        score: 65,
        impact: "Sedang",
        description:
          "Kelembapan tinggi mengurangi efektivitas pendinginan alami tubuh.",
      });
    }

    if (input.rainfall <= 5) {
      score += 10;

      factors.push({
        factor: "Curah Hujan Rendah",
        score: 55,
        impact: "Sedang",
        description:
          "Kondisi kering berkepanjangan meningkatkan risiko paparan panas.",
      });
    }
  }

  /* =====================
     DERMATITIS
  ===================== */

  if (disease === "Dermatitis") {
    if (input.humidity >= 80) {
      score += 30;

      factors.push({
        factor: "Kelembapan Tinggi",
        score: 85,
        impact: "Tinggi",
        description:
          "Kelembapan tinggi dapat memicu iritasi dan gangguan kesehatan kulit.",
      });
    }

    if (input.temperature >= 30) {
      score += 20;

      factors.push({
        factor: "Suhu Panas",
        score: 70,
        impact: "Sedang",
        description: "Cuaca panas dapat memperburuk kondisi kulit sensitif.",
      });
    }

    if (input.rainfall >= 15) {
      score += 10;

      factors.push({
        factor: "Curah Hujan",
        score: 50,
        impact: "Rendah",
        description:
          "Lingkungan lembap akibat hujan dapat memperburuk risiko dermatitis.",
      });
    }
  }

  return {
    climateScore: Math.min(score, 100),
    factors,
  };
}

function getRiskLevel(score: number): RiskLevel {
  if (score >= 80) return "Bahaya";
  if (score >= 60) return "Siaga";
  if (score >= 35) return "Waspada";
  return "Aman";
}

function getImpact(score: number) {
  if (score >= 75) return "Tinggi";
  if (score >= 45) return "Sedang";
  return "Rendah";
}
