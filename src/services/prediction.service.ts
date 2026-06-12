import { generateAiHealthAdvisory } from "@/services/aiAdvisory.service";
import { generateAlertStatus } from "@/services/alertStatus.service";
import {
  getDataSources,
  getModelInfo,
} from "@/services/predictionMetadata.service";

type DiseaseType = "DBD" | "ISPA" | "Diare";
type AiRiskLevel = "Aman" | "Waspada" | "Siaga" | "Bahaya";

type ExplainableFactor = {
  factor: string;
  score: number;
  impact: string;
  description: string;
};

type BasePrediction = {
  region: string;
  disease: DiseaseType;
  forecastRange: string;
  riskLevel: AiRiskLevel;
  riskScore: number;
  vulnerabilityLevel: string;
  vulnerabilityScore: number;
  confidence: number;
  warningNote: string;
  recommendations: string[];
  explainableFactors: ExplainableFactor[];
  vulnerabilityFactors?: unknown[];
};

export function calculateRisk(
  curahHujan: number,
  kelembapan: number,
  suhu: number,
) {
  if (curahHujan > 200 && kelembapan > 80) {
    return {
      risk: "TINGGI",
      confidence: 87,
    };
  }

  if (suhu > 34) {
    return {
      risk: "SEDANG",
      confidence: 72,
    };
  }

  return {
    risk: "RENDAH",
    confidence: 45,
  };
}

export function normalizeRiskLabelToAiLevel(risk: string): AiRiskLevel {
  if (risk === "TINGGI" || risk === "Risiko Tinggi" || risk === "Bahaya") {
    return "Bahaya";
  }

  if (risk === "SEDANG" || risk === "Risiko Sedang" || risk === "Waspada") {
    return "Waspada";
  }

  if (risk === "Siaga") {
    return "Siaga";
  }

  return "Aman";
}

export function attachAiLayerToPrediction(
  basePrediction: BasePrediction,
  inputSnapshot?: Record<string, unknown>,
) {
  return {
    ...basePrediction,

    aiAdvisory: generateAiHealthAdvisory({
      region: basePrediction.region,
      disease: basePrediction.disease,
      forecastRange: basePrediction.forecastRange,
      riskLevel: basePrediction.riskLevel,
      riskScore: basePrediction.riskScore,
      vulnerabilityLevel: basePrediction.vulnerabilityLevel,
      vulnerabilityScore: basePrediction.vulnerabilityScore,
      confidence: basePrediction.confidence,
      recommendations: basePrediction.recommendations,
      explainableFactors: basePrediction.explainableFactors,
    }),

    alertStatus: generateAlertStatus(
      basePrediction.riskLevel,
      basePrediction.riskScore,
    ),

    modelInfo: getModelInfo(basePrediction.forecastRange),

    dataSources: getDataSources(),

    inputSnapshot: inputSnapshot ?? null,
  };
}
