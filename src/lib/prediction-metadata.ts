export function getModelInfo(forecastRange: string) {
  return {
    modelName: "AI-Assisted Weighted Risk Scoring Model",
    advisoryLayer: "AI-Assisted Health Advisory Layer",
    modelType: "Baseline AI-assisted predictive decision engine",
    forecastType: "Risk index forecasting",
    forecastHorizon: forecastRange,
    isMachineLearningTrained: false,
    mlReadiness:
      "Struktur input-output disiapkan untuk pengembangan ke Random Forest, XGBoost, atau LightGBM ketika dataset historis valid tersedia.",
  };
}

export function getDataSources() {
  return {
    climate:
      "Open-Meteo API sebagai proxy data cuaca berbasis koordinat pada tahap MVP.",
    region:
      "Dataset provinsi dan kabupaten/kota yang dikelola oleh tim.",
    diseaseHistory:
      "Curated MVP dataset berbasis skenario risiko penyakit.",
    searchTrend:
      "Simulasi indeks tren pencarian pada tahap MVP, disiapkan untuk integrasi Google Trends.",
    communityReports:
      "Simulasi laporan masyarakat pada tahap MVP, disiapkan untuk fitur pelaporan partisipatif.",
    futureIntegration:
      "Disiapkan untuk integrasi BMKG, Google Trends, dan data dinas kesehatan pada tahap pengembangan lanjutan.",
  };
}