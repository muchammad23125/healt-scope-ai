type RiskLevel = "Aman" | "Waspada" | "Siaga" | "Bahaya";
type DiseaseType = "DBD" | "ISPA" | "Diare";

export function generateRecommendations(
  disease: DiseaseType,
  riskLevel: RiskLevel
) {
  if (riskLevel === "Aman") {
    return [
      "Tetap jaga kebersihan lingkungan.",
      "Pantau informasi kesehatan wilayah secara berkala.",
    ];
  }

  const recommendations: Record<DiseaseType, Record<RiskLevel, string[]>> = {
    DBD: {
      Aman: [],
      Waspada: [
        "Lakukan PSN 3M Plus di lingkungan rumah.",
        "Pantau dan bersihkan genangan air.",
        "Gunakan lotion anti nyamuk bila beraktivitas di luar ruangan.",
      ],
      Siaga: [
        "Prioritaskan PSN 3M Plus secara serentak.",
        "Lakukan pemeriksaan jentik di wilayah rawan.",
        "Bersihkan tempat penampungan air dan barang bekas.",
        "Segera periksa ke fasilitas kesehatan jika mengalami demam tinggi.",
      ],
      Bahaya: [
        "Aktifkan notifikasi peringatan dini kepada masyarakat.",
        "Koordinasikan fogging prioritas sesuai arahan petugas kesehatan.",
        "Lakukan pemeriksaan jentik massal pada wilayah berisiko tinggi.",
        "Tingkatkan kesiapan fasilitas kesehatan setempat.",
      ],
    },
    ISPA: {
      Aman: [],
      Waspada: [
        "Gunakan masker saat berada di area padat.",
        "Kurangi paparan debu dan polusi udara.",
        "Jaga daya tahan tubuh dan konsumsi air yang cukup.",
      ],
      Siaga: [
        "Kurangi aktivitas luar ruangan pada jam rawan.",
        "Gunakan masker di ruang publik.",
        "Lakukan edukasi gejala ISPA kepada masyarakat.",
        "Segera periksa jika mengalami batuk, demam, atau sesak napas.",
      ],
      Bahaya: [
        "Aktifkan peringatan kesehatan wilayah.",
        "Batasi aktivitas luar ruangan untuk kelompok rentan.",
        "Siapkan layanan kesehatan untuk gangguan pernapasan.",
        "Pantau kelompok rentan seperti anak-anak dan lansia.",
      ],
    },
    Diare: {
      Aman: [],
      Waspada: [
        "Biasakan cuci tangan menggunakan sabun.",
        "Pastikan air minum dimasak atau berasal dari sumber aman.",
        "Hindari konsumsi makanan yang tidak higienis.",
      ],
      Siaga: [
        "Pantau kebersihan sumber air masyarakat.",
        "Lakukan edukasi sanitasi dan keamanan pangan.",
        "Waspadai wilayah dengan genangan atau banjir.",
        "Segera periksa jika mengalami diare berkepanjangan.",
      ],
      Bahaya: [
        "Aktifkan edukasi darurat terkait air bersih dan sanitasi.",
        "Koordinasikan pemeriksaan kualitas air.",
        "Siapkan layanan kesehatan untuk penanganan dehidrasi.",
        "Prioritaskan bantuan pada wilayah dengan sanitasi buruk.",
      ],
    },
  };

  return recommendations[disease][riskLevel];
}