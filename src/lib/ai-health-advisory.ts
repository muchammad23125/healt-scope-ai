export type DiseaseType = "DBD" | "ISPA" | "Diare";
export type RiskLevel = "Aman" | "Waspada" | "Siaga" | "Bahaya";

export type ExplainableFactor = {
  factor: string;
  score: number;
  impact: string;
  description: string;
};

export type AiHealthAdvisoryInput = {
  region: string;
  disease: DiseaseType;
  forecastRange: string;
  riskLevel: RiskLevel;
  riskScore: number;
  vulnerabilityLevel: string;
  vulnerabilityScore: number;
  confidence: number;
  recommendations: string[];
  explainableFactors: ExplainableFactor[];
};

export function generateAiHealthAdvisory(input: AiHealthAdvisoryInput) {
  const topFactors = input.explainableFactors
    .slice(0, 3)
    .map((factor) => factor.factor);

  return {
    publicSummary: generatePublicSummary(input),
    publicMessage: generatePublicMessage(input, topFactors),
    priorityActions: generatePriorityActions(input),
    institutionAdvice: generateInstitutionAdvice(input),
    notificationMessage: generateNotificationMessage(input),
    disclaimer:
      "Informasi ini bersifat peringatan dini dan edukasi kesehatan masyarakat, bukan diagnosis medis. Masyarakat tetap disarankan mengikuti arahan tenaga kesehatan dan instansi terkait.",
  };
}

function generatePublicSummary(input: AiHealthAdvisoryInput) {
  return `Wilayah ${input.region} berada pada status ${input.riskLevel} untuk risiko ${input.disease} dalam ${input.forecastRange}. Skor risiko tercatat ${input.riskScore}/100 dengan tingkat kerentanan wilayah ${input.vulnerabilityLevel}.`;
}

function generatePublicMessage(
  input: AiHealthAdvisoryInput,
  topFactors: string[]
) {
  if (input.riskLevel === "Aman") {
    return `Kondisi wilayah ${input.region} saat ini relatif aman untuk risiko ${input.disease}. Masyarakat tetap disarankan menjaga kebersihan lingkungan dan memantau informasi kesehatan secara berkala.`;
  }

  const factorText = topFactors.length
    ? `Faktor utama yang memengaruhi kondisi ini adalah ${topFactors.join(", ")}.`
    : "Beberapa indikator lingkungan dan kesehatan menunjukkan adanya potensi peningkatan risiko.";

  return `Masyarakat di wilayah ${input.region} perlu meningkatkan kewaspadaan terhadap risiko ${input.disease}. ${factorText} Sistem menyarankan masyarakat mengikuti langkah pencegahan sesuai rekomendasi yang tersedia.`;
}

function generatePriorityActions(input: AiHealthAdvisoryInput) {
  if (input.recommendations.length > 0) {
    return input.recommendations.slice(0, 4);
  }

  return [
    "Pantau informasi kesehatan wilayah secara berkala.",
    "Jaga kebersihan lingkungan sekitar.",
    "Segera periksa ke fasilitas kesehatan jika mengalami gejala yang mengkhawatirkan.",
  ];
}

function generateInstitutionAdvice(input: AiHealthAdvisoryInput) {
  if (input.riskLevel === "Aman") {
    return [
      "Lanjutkan pemantauan wilayah secara berkala.",
      "Pertahankan edukasi kesehatan preventif kepada masyarakat.",
    ];
  }

  if (input.disease === "DBD") {
    if (input.riskLevel === "Bahaya") {
      return [
        "Prioritaskan pemeriksaan jentik massal pada wilayah berisiko tinggi.",
        "Koordinasikan fogging prioritas sesuai arahan petugas kesehatan.",
        "Perkuat pemantauan laporan demam tinggi pada fasilitas kesehatan setempat.",
      ];
    }

    return [
      "Prioritaskan pemeriksaan jentik di wilayah rawan.",
      "Lakukan edukasi PSN 3M Plus berbasis wilayah.",
      "Pantau titik genangan dan lingkungan padat penduduk.",
    ];
  }

  if (input.disease === "ISPA") {
    if (input.riskLevel === "Bahaya") {
      return [
        "Aktifkan peringatan kesehatan untuk kelompok rentan.",
        "Siapkan layanan kesehatan untuk keluhan gangguan pernapasan.",
        "Pertimbangkan pembatasan aktivitas luar ruangan pada area berisiko.",
      ];
    }

    return [
      "Lakukan edukasi penggunaan masker di area padat.",
      "Pantau kelompok rentan seperti anak-anak dan lansia.",
      "Tingkatkan informasi pencegahan ISPA di fasilitas umum.",
    ];
  }

  if (input.disease === "Diare") {
    if (input.riskLevel === "Bahaya") {
      return [
        "Koordinasikan pemeriksaan kualitas air bersih.",
        "Siapkan layanan kesehatan untuk potensi kasus dehidrasi.",
        "Prioritaskan edukasi sanitasi pada wilayah rawan genangan.",
      ];
    }

    return [
      "Pantau kebersihan sumber air masyarakat.",
      "Lakukan edukasi cuci tangan dan keamanan pangan.",
      "Waspadai wilayah dengan genangan atau sanitasi buruk.",
    ];
  }

  return [
    "Lakukan pemantauan wilayah secara berkala.",
    "Perkuat edukasi kesehatan masyarakat.",
  ];
}

function generateNotificationMessage(input: AiHealthAdvisoryInput) {
  if (input.riskLevel === "Aman") {
    return `Info HealthScope: ${input.region} berada pada status Aman untuk risiko ${input.disease}. Tetap jaga kebersihan dan pantau informasi kesehatan.`;
  }

  return `Peringatan HealthScope: ${input.region} berada pada status ${input.riskLevel} untuk risiko ${input.disease} dalam ${input.forecastRange}. Skor risiko ${input.riskScore}/100. Ikuti rekomendasi pencegahan dan pantau informasi terbaru.`;
}