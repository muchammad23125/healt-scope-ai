import { generateAiHealthAdvisory } from "@/services/aiAdvisory.service";
import { generateAlertStatus } from "@/services/alertStatus.service";

import {
  getDataSources,
  getModelInfo,
} from "@/services/predictionMetadata.service";

export type DiseaseType =
  | "DBD"
  | "ISPA"
  | "Leptospirosis"
  | "Heat Stress"
  | "Dermatitis";

export type AiRiskLevel =
  | "Aman"
  | "Waspada"
  | "Siaga"
  | "Bahaya";

export type ExplainableFactor = {
  factor: string;
  score: number;
  impact: string;
  description: string;
};

export type BasePrediction = {
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

export function normalizeRiskLabelToAiLevel(
  risk: string,
): AiRiskLevel {

  const value =
    risk.toLowerCase();

  if (
    value.includes("bahaya") ||
    value.includes("tinggi")
  ) {
    return "Bahaya";
  }

  if (
    value.includes("siaga")
  ) {
    return "Siaga";
  }

  if (
    value.includes("waspada") ||
    value.includes("sedang")
  ) {
    return "Waspada";
  }

  return "Aman";
}

export function calculateConfidence(
  riskScore: number,
) {

  return Number(
    Math.min(
      0.95,
      0.60 + riskScore / 250,
    ).toFixed(2),
  );

}

export function attachAiLayerToPrediction(
  basePrediction: BasePrediction,
  inputSnapshot?: Record<
    string,
    unknown
  >,
) {

  return {

    ...basePrediction,

    aiAdvisory:
      generateAiHealthAdvisory({

        region:
          basePrediction.region,

        disease:
          basePrediction.disease,

        forecastRange:
          basePrediction.forecastRange,

        riskLevel:
          basePrediction.riskLevel,

        riskScore:
          basePrediction.riskScore,

        vulnerabilityLevel:
          basePrediction.vulnerabilityLevel,

        vulnerabilityScore:
          basePrediction.vulnerabilityScore,

        confidence:
          basePrediction.confidence,

        recommendations:
          basePrediction.recommendations,

        explainableFactors:
          basePrediction.explainableFactors,

      }),

    alertStatus:
      generateAlertStatus(
        basePrediction.riskLevel,
        basePrediction.riskScore,
      ),

    modelInfo:
      getModelInfo(
        basePrediction.forecastRange,
      ),

    dataSources:
      getDataSources(),

    inputSnapshot:
      inputSnapshot ?? null,

  };

}