export type DiseaseType =
  | "DBD"
  | "ISPA"
  | "Leptospirosis"
  | "Heat Stress"
  | "Dermatitis";

export type RiskLevel =
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

export function generateAiHealthAdvisory(
  input: AiHealthAdvisoryInput
) {
  const topFactors =
    input.explainableFactors
      .slice(0, 3)
      .map((factor) => factor.factor);

  return {
    publicSummary:
      generatePublicSummary(input),

    publicMessage:
      generatePublicMessage(
        input,
        topFactors
      ),

    priorityActions:
      generatePriorityActions(input),

    institutionAdvice:
      generateInstitutionAdvice(input),

    notificationMessage:
      generateNotificationMessage(input),

    disclaimer:
      "Informasi ini bersifat peringatan dini dan edukasi kesehatan masyarakat, bukan diagnosis medis. Tetap ikuti arahan tenaga kesehatan dan instansi terkait.",
  };
}

function generatePublicSummary(
  input: AiHealthAdvisoryInput
) {
  return `Wilayah ${input.region} berada pada status ${input.riskLevel} untuk risiko ${input.disease} dalam ${input.forecastRange}. Skor risiko tercatat ${input.riskScore}/100 dengan tingkat kerentanan wilayah ${input.vulnerabilityLevel}.`;
}

function generatePublicMessage(
  input: AiHealthAdvisoryInput,
  topFactors: string[]
) {
  if (input.riskLevel === "Aman") {
    return `Kondisi wilayah ${input.region} saat ini relatif aman untuk risiko ${input.disease}. Masyarakat tetap disarankan menjaga kebersihan lingkungan dan memantau informasi kesehatan secara berkala.`;
  }

  const factorText =
    topFactors.length > 0
      ? `Faktor utama yang memengaruhi kondisi ini adalah ${topFactors.join(", ")}.`
      : "Beberapa indikator lingkungan dan kesehatan menunjukkan adanya potensi peningkatan risiko.";

  return `Masyarakat di wilayah ${input.region} perlu meningkatkan kewaspadaan terhadap risiko ${input.disease}. ${factorText} Sistem menyarankan masyarakat mengikuti langkah pencegahan sesuai rekomendasi yang tersedia.`;
}

function generatePriorityActions(
  input: AiHealthAdvisoryInput
) {
  if (input.recommendations.length > 0) {
    return input.recommendations.slice(0, 4);
  }

  return [
    "Pantau informasi kesehatan wilayah secara berkala.",
    "Jaga kebersihan lingkungan sekitar.",
    "Segera periksa ke fasilitas kesehatan jika mengalami gejala yang mengkhawatirkan.",
  ];
}

function generateInstitutionAdvice(
  input: AiHealthAdvisoryInput
) {

  if (input.riskLevel === "Aman") {
    return [
      "Lanjutkan pemantauan wilayah secara berkala.",
      "Pertahankan edukasi kesehatan preventif kepada masyarakat.",
    ];
  }

  /* DBD */

  if (input.disease === "DBD") {

    if (input.riskLevel === "Bahaya") {
      return [
        "Prioritaskan pemeriksaan jentik massal pada wilayah berisiko tinggi.",
        "Koordinasikan fogging sesuai arahan dinas kesehatan.",
        "Perkuat pemantauan laporan demam tinggi pada fasilitas kesehatan.",
      ];
    }

    return [
      "Prioritaskan pemeriksaan jentik di wilayah rawan.",
      "Lakukan edukasi PSN 3M Plus.",
      "Pantau titik genangan dan lingkungan padat penduduk.",
    ];
  }

  /* ISPA */

  if (input.disease === "ISPA") {

    if (input.riskLevel === "Bahaya") {
      return [
        "Aktifkan peringatan kesehatan untuk kelompok rentan.",
        "Siapkan layanan kesehatan untuk gangguan pernapasan.",
        "Kurangi aktivitas luar ruangan pada kondisi ekstrem.",
      ];
    }

    return [
      "Lakukan edukasi penggunaan masker.",
      "Pantau kelompok rentan seperti anak-anak dan lansia.",
      "Tingkatkan informasi pencegahan ISPA.",
    ];
  }

  /* LEPTOSPIROSIS */

  if (input.disease === "Leptospirosis") {

    if (input.riskLevel === "Bahaya") {
      return [
        "Aktifkan pemantauan wilayah terdampak genangan dan banjir.",
        "Distribusikan alat pelindung diri pada masyarakat berisiko.",
        "Percepat deteksi kasus leptospirosis.",
      ];
    }

    return [
      "Lakukan edukasi bahaya kontak dengan genangan air.",
      "Perkuat pengendalian tikus.",
      "Pantau wilayah rawan banjir.",
    ];
  }

  /* HEAT STRESS */

  if (input.disease === "Heat Stress") {

    if (input.riskLevel === "Bahaya") {
      return [
        "Keluarkan peringatan suhu ekstrem.",
        "Sediakan pos kesehatan untuk penanganan heat stress.",
        "Prioritaskan perlindungan pekerja lapangan.",
      ];
    }

    return [
      "Edukasi masyarakat mengenai dehidrasi.",
      "Batasi aktivitas fisik pada jam panas.",
      "Pantau kelompok rentan seperti lansia dan anak-anak.",
    ];
  }

  /* DERMATITIS */

  if (input.disease === "Dermatitis") {

    if (input.riskLevel === "Bahaya") {
      return [
        "Perkuat layanan kesehatan kulit pada wilayah terdampak.",
        "Distribusikan edukasi pencegahan iritasi kulit.",
        "Pantau kelompok dengan riwayat penyakit kulit kronis.",
      ];
    }

    return [
      "Edukasi kebersihan kulit dan lingkungan.",
      "Kurangi paparan kelembapan berlebih.",
      "Pantau peningkatan kasus iritasi kulit.",
    ];
  }

  return [
    "Lakukan pemantauan wilayah secara berkala.",
    "Perkuat edukasi kesehatan masyarakat.",
  ];
}

function generateNotificationMessage(
  input: AiHealthAdvisoryInput
) {

  if (input.riskLevel === "Aman") {
    return `Info Health Scope: ${input.region} berada pada status Aman untuk risiko ${input.disease}. Tetap jaga kebersihan dan pantau informasi kesehatan.`;
  }

  return `Peringatan Health Scope: ${input.region} berada pada status ${input.riskLevel} untuk risiko ${input.disease} dalam ${input.forecastRange}. Skor risiko ${input.riskScore}/100. Ikuti rekomendasi pencegahan dan pantau informasi terbaru.`;
}