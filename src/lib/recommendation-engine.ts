type RiskLevel =
  | "Aman"
  | "Waspada"
  | "Siaga"
  | "Bahaya";

type DiseaseType =
  | "DBD"
  | "ISPA"
  | "Leptospirosis"
  | "Heat Stress"
  | "Dermatitis";

export function generateRecommendations(
  disease: DiseaseType,
  riskLevel: RiskLevel,
) {

  if (riskLevel === "Aman") {
    return [
      "Tetap jaga kebersihan lingkungan.",
      "Pantau informasi kesehatan wilayah secara berkala.",
    ];
  }

  const recommendations: Record<
    DiseaseType,
    Record<RiskLevel, string[]>
  > = {

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

    Leptospirosis: {
      Aman: [],
      Waspada: [
        "Hindari kontak langsung dengan genangan air.",
        "Gunakan alas kaki saat beraktivitas di area lembap.",
        "Jaga kebersihan lingkungan sekitar rumah.",
      ],
      Siaga: [
        "Batasi aktivitas di wilayah yang berpotensi banjir.",
        "Gunakan sarung tangan dan sepatu boot saat membersihkan genangan.",
        "Lakukan pengendalian tikus di lingkungan sekitar.",
        "Segera periksa ke fasilitas kesehatan jika mengalami demam tinggi.",
      ],
      Bahaya: [
        "Aktifkan peringatan kesehatan pada wilayah terdampak banjir.",
        "Distribusikan alat pelindung diri bagi masyarakat berisiko.",
        "Lakukan pengawasan kasus leptospirosis secara aktif.",
        "Percepat penanganan pasien dengan gejala demam dan nyeri otot berat.",
      ],
    },

    "Heat Stress": {
      Aman: [],
      Waspada: [
        "Perbanyak konsumsi air putih setiap hari.",
        "Kurangi aktivitas fisik berat saat cuaca panas.",
        "Gunakan pakaian yang ringan dan menyerap keringat.",
      ],
      Siaga: [
        "Batasi aktivitas luar ruangan pada siang hari.",
        "Cari tempat teduh atau ruangan berpendingin saat suhu meningkat.",
        "Pantau kondisi kelompok rentan seperti lansia dan anak-anak.",
        "Perhatikan tanda awal dehidrasi dan kelelahan panas.",
      ],
      Bahaya: [
        "Keluarkan peringatan cuaca panas ekstrem kepada masyarakat.",
        "Hentikan aktivitas luar ruangan yang tidak mendesak.",
        "Sediakan pos kesehatan untuk penanganan heat stress.",
        "Prioritaskan perlindungan bagi pekerja lapangan dan kelompok rentan.",
      ],
    },

    Dermatitis: {
      Aman: [],
      Waspada: [
        "Jaga kebersihan kulit setelah beraktivitas.",
        "Gunakan pakaian yang bersih dan kering.",
        "Hindari penggunaan produk yang memicu iritasi kulit.",
      ],
      Siaga: [
        "Kurangi paparan lingkungan lembap dalam waktu lama.",
        "Gunakan pelembap untuk menjaga kesehatan kulit.",
        "Segera tangani ruam atau iritasi yang mulai muncul.",
        "Perhatikan kebersihan pakaian dan tempat tidur.",
      ],
      Bahaya: [
        "Lakukan pemeriksaan medis jika terjadi iritasi kulit berat.",
        "Hindari kontak dengan bahan yang dapat memicu alergi.",
        "Tingkatkan edukasi kebersihan kulit pada masyarakat.",
        "Prioritaskan penanganan kelompok dengan riwayat penyakit kulit kronis.",
      ],
    },

  };

  return recommendations[disease][riskLevel];
}