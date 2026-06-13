type RiskLevel = "Aman" | "Waspada" | "Siaga" | "Bahaya";
type DiseaseType =   | "DBD" | "ISPA" | "Leptospirosis" | "Heat Stress" | "Dermatitis";

export function generateWarningNote(params: {
  region: string;
  disease: DiseaseType;
  riskLevel: RiskLevel;
  forecastDays: number;
  topFactors: string[];
}) {
  const { region, disease, riskLevel, forecastDays, topFactors } = params;

  if (riskLevel === "Aman") {
    return `Wilayah ${region} berada pada kondisi relatif aman untuk risiko ${disease} dalam ${forecastDays} hari ke depan. Masyarakat tetap disarankan menjaga kebersihan dan memantau informasi kesehatan secara berkala.`;
  }

  const factorText = topFactors.length
    ? `Faktor utama yang memengaruhi kondisi ini adalah ${topFactors.join(", ")}.`
    : "Beberapa indikator lingkungan dan kesehatan menunjukkan adanya potensi peningkatan risiko.";

  return `Wilayah ${region} diprediksi berada pada status ${riskLevel} untuk risiko ${disease} dalam ${forecastDays} hari ke depan. ${factorText} Masyarakat disarankan meningkatkan kewaspadaan dan mengikuti rekomendasi pencegahan yang diberikan sistem.`;
}