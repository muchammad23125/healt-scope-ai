export type DiseaseType =
  | "DBD"
  | "ISPA"
  | "Leptospirosis"
  | "Heat Stress"
  | "Dermatitis";

export type DiseasePredictionResult = {
  primaryDisease: DiseaseType;

  diseaseScores: Record<DiseaseType, number>;
};

export function predictDisease(
  temperature: number,
  humidity: number,
  rainfall: number,
): DiseasePredictionResult {

  const scores: Record<DiseaseType, number> = {
    DBD: 0,
    ISPA: 0,
    Leptospirosis: 0,
    "Heat Stress": 0,
    Dermatitis: 0,
  };

  /* =========================
     DBD
  ========================= */

  if (rainfall >= 25) {
    scores.DBD += 40;
  }

  if (humidity >= 80) {
    scores.DBD += 30;
  }

  if (
    temperature >= 26 &&
    temperature <= 32
  ) {
    scores.DBD += 30;
  }

  /* =========================
     LEPTOSPIROSIS
  ========================= */

  if (rainfall >= 20) {
    scores.Leptospirosis += 45;
  }

  if (humidity >= 80) {
    scores.Leptospirosis += 35;
  }

  if (
    temperature >= 24 &&
    temperature <= 32
  ) {
    scores.Leptospirosis += 20;
  }

  /* =========================
     HEAT STRESS
  ========================= */

  if (temperature >= 34) {
    scores["Heat Stress"] += 60;
  }

  if (humidity >= 70) {
    scores["Heat Stress"] += 25;
  }

  if (rainfall <= 5) {
    scores["Heat Stress"] += 15;
  }

  /* =========================
     DERMATITIS
  ========================= */

  if (humidity >= 80) {
    scores.Dermatitis += 50;
  }

  if (temperature >= 30) {
    scores.Dermatitis += 30;
  }

  if (rainfall >= 15) {
    scores.Dermatitis += 20;
  }

  /* =========================
     ISPA
  ========================= */

  if (humidity <= 60) {
    scores.ISPA += 40;
  }

  if (temperature >= 33) {
    scores.ISPA += 30;
  }

  if (temperature <= 22) {
    scores.ISPA += 30;
  }

  const ranking = Object.entries(scores)
    .sort((a, b) => b[1] - a[1]);

  const primaryDisease =
    ranking[0][0] as DiseaseType;

  return {
    primaryDisease,
    diseaseScores: scores,
  };
}