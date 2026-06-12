import Link from "next/link";

import {
  Shield,
  CloudRain,
  Activity,
  HeartPulse,
  ArrowRight,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="bg-[#F8FAFC] overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-[100svh] lg:min-h-screen bg-[#EAF7F8] overflow-hidden">

        {/* FULL BACKGROUND IMAGE */}
        <div className="absolute inset-0 z-0">

          <img
            src="/images/bg-placeholder.png"
            alt="GIS Background"
            className="
        absolute
        inset-0
        w-full
        h-full
        object-cover
        object-center
      "
          />

        </div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#EAF7F8] via-[#EAF7F8]/85 to-transparent z-[1]" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-6">

          <div
            className="
        min-h-[100svh]
        lg:min-h-screen

        grid
        lg:grid-cols-2

        items-center
        gap-10

        py-16
        md:py-20
        lg:py-0
      "
          >

            {/* LEFT CONTENT */}
            <div className="max-w-2xl">

              <h1
                className="
            text-[42px]
            leading-[50px]

            md:text-[56px]
            md:leading-[64px]

            lg:text-[72px]
            lg:leading-[82px]

            font-extrabold
            text-slate-900
            tracking-[-2px]
          "
              >
                Waspada Dini,
                <br />
                Hidup Lebih{" "}
                <span className="text-[#0F766E]">
                  Sehat
                </span>
              </h1>

              <p
                className="
            mt-6
            lg:mt-8

            text-[16px]
            leading-[28px]

            md:text-[18px]
            md:leading-[32px]

            lg:text-[20px]
            lg:leading-[38px]

            text-slate-600
            max-w-2xl
          "
              >
                Health Scope adalah sistem peringatan dini risiko penyakit
                berbasis data cuaca, historis kesehatan, dan tren pencarian
                masyarakat.
              </p>

              {/* FEATURE CARDS */}
              <div className="mt-10 flex flex-wrap gap-5">

                {/* CARD */}
                <div
                  className="
              bg-white/90
              backdrop-blur-md
              rounded-3xl
              shadow-xl
              border
              border-white

              px-6
              py-5

              flex
              items-center
              gap-4

              w-full
              sm:w-auto

              lg:min-w-[240px]
            "
                >

                  <div
                    className="
                w-14
                h-14
                shrink-0
                rounded-2xl
                bg-cyan-100
                flex
                items-center
                justify-center
              "
                  >
                    <CloudRain className="text-cyan-600 w-7 h-7" />
                  </div>

                  <div>
                    <p className="font-bold text-lg text-slate-900">
                      Data Cuaca
                    </p>

                    <p className="text-slate-500">
                      Real-time
                    </p>
                  </div>

                </div>

                {/* CARD */}
                <div
                  className="
              bg-white/90
              backdrop-blur-md
              rounded-3xl
              shadow-xl
              border
              border-white

              px-6
              py-5

              flex
              items-center
              gap-4

              w-full
              sm:w-auto

              lg:min-w-[240px]
            "
                >

                  <div
                    className="
                w-14
                h-14
                shrink-0
                rounded-2xl
                bg-emerald-100
                flex
                items-center
                justify-center
              "
                  >
                    <Activity className="text-emerald-600 w-7 h-7" />
                  </div>

                  <div>
                    <p className="font-bold text-lg text-slate-900">
                      Prediksi Risiko
                    </p>

                    <p className="text-slate-500">
                      3–7 Hari
                    </p>
                  </div>

                </div>

                {/* CARD */}
                <div
                  className="
              bg-white/90
              backdrop-blur-md
              rounded-3xl
              shadow-xl
              border
              border-white

              px-6
              py-5

              flex
              items-center
              gap-4

              w-full
              sm:w-auto

              lg:min-w-[240px]
            "
                >

                  <div
                    className="
                w-14
                h-14
                shrink-0
                rounded-2xl
                bg-red-100
                flex
                items-center
                justify-center
              "
                  >
                    <HeartPulse className="text-red-500 w-7 h-7" />
                  </div>

                  <div>
                    <p className="font-bold text-lg text-slate-900">
                      Lindungi Diri
                    </p>

                    <p className="text-slate-500">
                      dan Sesama
                    </p>
                  </div>

                </div>

              </div>

              {/* CTA */}
              <div className="mt-12 flex flex-wrap items-center gap-8">

                <Link href="/ai-prediksi">

                  <button
                    className="
                bg-[#0F766E]
                hover:bg-[#14B8A6]

                transition-all
                duration-300

                text-white

                w-full
                sm:w-auto

                px-9
                py-5

                rounded-2xl

                font-bold
                text-base
                lg:text-lg

                shadow-2xl

                flex
                items-center
                justify-center
                gap-3
              "
                  >
                    Mulai Prediksi Sekarang

                    <ArrowRight className="w-5 h-5" />
                  </button>

                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* TENTANG */}
      <section className="py-24 bg-[#F8FAFC]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="
            bg-white
            rounded-[40px]
            shadow-xl
            border
            border-slate-100
            p-12
            grid
            lg:grid-cols-2
            gap-16
          ">

            {/* LEFT */}
            <div>

              <div className="flex items-center gap-4">

                <div className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-emerald-100
                  flex
                  items-center
                  justify-center
                ">
                  <Shield className="text-[#0F766E]" />
                </div>

                <h2 className="text-4xl font-bold text-slate-900">
                  Tentang Health Scope
                </h2>

              </div>

              <p className="
                mt-8
                text-lg
                leading-[36px]
                text-slate-600
              ">
                Health Scope dikembangkan untuk membantu masyarakat
                mendapatkan informasi risiko penyakit lebih awal
                berdasarkan perubahan cuaca dan pola data kesehatan.
              </p>

              <div className="mt-10 space-y-5">

                {[
                  "Memanfaatkan data cuaca real-time",
                  "Mengintegrasikan data historis kesehatan",
                  "Menganalisis tren pencarian masyarakat",
                  "Prediksi risiko penyakit berbasis wilayah",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-4"
                  >

                    <div className="
                      w-7
                      h-7
                      rounded-full
                      bg-emerald-100
                      flex
                      items-center
                      justify-center
                      text-sm
                    ">
                      ✅
                    </div>

                    <p className="text-lg text-slate-700">
                      {item}
                    </p>

                  </div>

                ))}

              </div>

            </div>

            {/* RIGHT */}
            <div>

              <h2 className="text-4xl font-bold text-slate-900">
                Cara Menggunakan
              </h2>

              <div className="mt-12 space-y-10">

                {[
                  {
                    step: "1",
                    title: "Pilih Lokasi Anda",
                    desc: "Gunakan GPS atau pilih wilayah secara manual.",
                    color: "bg-cyan-100",
                  },
                  {
                    step: "2",
                    title: "Sistem Analisis Data",
                    desc: "Cuaca, historis penyakit, dan trends dianalisis otomatis.",
                    color: "bg-emerald-100",
                  },
                  {
                    step: "3",
                    title: "Lihat Prediksi Risiko",
                    desc: "Dapatkan hasil prediksi dan rekomendasi mitigasi.",
                    color: "bg-red-100",
                  },
                ].map((item) => (

                  <div
                    key={item.step}
                    className="flex gap-6"
                  >

                    <div className={`
                      w-16
                      h-16
                      rounded-full
                      ${item.color}
                      flex
                      items-center
                      justify-center
                      text-xl
                      font-bold
                      text-[#0F766E]
                      shrink-0
                    `}>
                      {item.step}
                    </div>

                    <div>

                      <h3 className="text-2xl font-bold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="
                        mt-3
                        text-lg
                        leading-[32px]
                        text-slate-600
                      ">
                        {item.desc}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* BERITA TERKINI */}
      <section className="pb-24 bg-[#F8FAFC]">

        <div className="max-w-7xl mx-auto px-6">

          {/* HEADER */}

          <div className="flex items-center justify-between mb-10">

            <h2 className="text-4xl font-bold text-slate-900">
              Berita Kesehatan Terkini
            </h2>

            <button className="
        text-[#0F766E]
        font-bold
        hover:opacity-70
        transition-all
      ">
              Lihat Semua Berita →
            </button>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">

            {/* CARD 1 */}
            <div className="
        bg-white
        rounded-[28px]
        overflow-hidden
        shadow-lg
        border
        border-slate-100
        hover:-translate-y-1
        transition-all
      ">

              <div className="relative">

                <img
                  src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=1200&auto=format&fit=crop"
                  alt="DBD"
                  className="w-full h-[210px] object-cover"
                />

                <div className="
            absolute
            top-4
            left-4
            bg-red-500
            text-white
            text-xs
            font-bold
            px-3
            py-1
            rounded-full
          ">
                  DBD
                </div>

              </div>

              <div className="p-6">

                <p className="text-sm text-slate-400">
                  28 Mei 2025
                </p>

                <h3 className="
            mt-3
            text-xl
            font-bold
            text-slate-900
            leading-[32px]
          ">
                  Kasus DBD Meningkat di Musim Penghujan
                </h3>

                <p className="
            mt-4
            text-slate-600
            leading-[30px]
          ">
                  Dinas kesehatan mengimbau masyarakat
                  untuk menjaga kebersihan lingkungan
                  dan mencegah genangan air.
                </p>

              </div>

            </div>

            {/* CARD 2 */}
            <div className="
        bg-white
        rounded-[28px]
        overflow-hidden
        shadow-lg
        border
        border-slate-100
        hover:-translate-y-1
        transition-all
      ">

              <div className="relative">

                <img
                  src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop"
                  alt="ISPA"
                  className="w-full h-[210px] object-cover"
                />

                <div className="
            absolute
            top-4
            left-4
            bg-blue-500
            text-white
            text-xs
            font-bold
            px-3
            py-1
            rounded-full
          ">
                  ISPA
                </div>

              </div>

              <div className="p-6">

                <p className="text-sm text-slate-400">
                  27 Mei 2025
                </p>

                <h3 className="
            mt-3
            text-xl
            font-bold
            text-slate-900
            leading-[32px]
          ">
                  Perubahan Cuaca Picu Peningkatan Kasus ISPA
                </h3>

                <p className="
            mt-4
            text-slate-600
            leading-[30px]
          ">
                  Cuaca tidak menentu dapat melemahkan
                  sistem imun terutama pada anak dan lansia.
                </p>

              </div>

            </div>

            {/* CARD 3 */}
            <div className="
        bg-white
        rounded-[28px]
        overflow-hidden
        shadow-lg
        border
        border-slate-100
        hover:-translate-y-1
        transition-all
      ">

              <div className="relative">

                <img
                  src="https://images.unsplash.com/photo-1547683905-f686c993aae5?q=80&w=1200&auto=format&fit=crop"
                  alt="Leptospirosis"
                  className="w-full h-[210px] object-cover"
                />

                <div className="
            absolute
            top-4
            left-4
            bg-purple-500
            text-white
            text-xs
            font-bold
            px-3
            py-1
            rounded-full
          ">
                  Leptospirosis
                </div>

              </div>

              <div className="p-6">

                <p className="text-sm text-slate-400">
                  26 Mei 2025
                </p>

                <h3 className="
            mt-3
            text-xl
            font-bold
            text-slate-900
            leading-[32px]
          ">
                  Waspadai Leptospirosis saat Banjir
                </h3>

                <p className="
            mt-4
            text-slate-600
            leading-[30px]
          ">
                  Hindari kontak langsung dengan air banjir
                  dan gunakan perlindungan diri.
                </p>

              </div>

            </div>

            {/* CARD 4 */}
            <div className="
        bg-white
        rounded-[28px]
        overflow-hidden
        shadow-lg
        border
        border-slate-100
        hover:-translate-y-1
        transition-all
      ">

              <div className="relative">

                <img
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop"
                  alt="Diare"
                  className="w-full h-[210px] object-cover"
                />

                <div className="
            absolute
            top-4
            left-4
            bg-orange-500
            text-white
            text-xs
            font-bold
            px-3
            py-1
            rounded-full
          ">
                  Diare
                </div>

              </div>

              <div className="p-6">

                <p className="text-sm text-slate-400">
                  25 Mei 2025
                </p>

                <h3 className="
            mt-3
            text-xl
            font-bold
            text-slate-900
            leading-[32px]
          ">
                  Diare Masih Menjadi Penyakit Tertinggi
                </h3>

                <p className="
            mt-4
            text-slate-600
            leading-[30px]
          ">
                  Pastikan makanan dan minuman
                  dikonsumsi dalam kondisi higienis.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* DAMPAK PENGGUNAAN SISTEM */}
      <section className="py-24 bg-[#F5FBFB] overflow-hidden">

        <div className="max-w-[1800px] mx-auto px-8">

          {/* HEADER */}
          <div className="text-center">

            <h2 className="
        text-[52px]
        leading-[62px]
        font-extrabold
        text-slate-900
      ">
              Dampak Penggunaan Sistem
            </h2>

            <p className="
        mt-6
        text-[20px]
        leading-[38px]
        text-slate-600
        max-w-4xl
        mx-auto
      ">
              Health Scope membantu meningkatkan kewaspadaan,
              mitigasi, dan pengambilan keputusan kesehatan
              masyarakat secara lebih cepat dan akurat.
            </p>

          </div>

          {/* WRAPPER */}
          <div className="
      mt-16
      bg-gradient-to-br
      from-[#DDF7F3]
      via-[#EEFFFC]
      to-[#DDF7F3]
      rounded-[48px]
      p-10
      border
      border-white/70
      shadow-[0_20px_60px_rgba(15,118,110,0.08)]
    ">

            {/* HORIZONTAL CARD */}
            <div className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-6
        gap-6
      ">

              {/* CARD */}
              <div className="
          bg-white
          rounded-[30px]
          p-7
          text-center
          shadow-lg
          border
          border-white
          hover:-translate-y-2
          transition-all
          duration-300
        ">

                <div className="
            w-20
            h-20
            mx-auto
            rounded-[24px]
            bg-cyan-100
            flex
            items-center
            justify-center
            text-[38px]
          ">
                  ⏱️
                </div>

                <h3 className="
            mt-6
            text-[24px]
            leading-[34px]
            font-bold
            text-slate-900
          ">
                  Prediksi Risiko
                  Lebih Cepat
                </h3>

                <p className="
            mt-5
            text-[15px]
            leading-[30px]
            text-slate-600
          ">
                  Sistem mendeteksi potensi
                  peningkatan penyakit lebih awal
                  berdasarkan data real-time.
                </p>

              </div>

              {/* CARD */}
              <div className="
          bg-white
          rounded-[30px]
          p-7
          text-center
          shadow-lg
          border
          border-white
          hover:-translate-y-2
          transition-all
          duration-300
        ">

                <div className="
            w-20
            h-20
            mx-auto
            rounded-[24px]
            bg-emerald-100
            flex
            items-center
            justify-center
            text-[38px]
          ">
                  🔔
                </div>

                <h3 className="
            mt-6
            text-[24px]
            leading-[34px]
            font-bold
            text-slate-900
          ">
                  Peringatan Dini
                </h3>

                <p className="
            mt-5
            text-[15px]
            leading-[30px]
            text-slate-600
          ">
                  Membantu mitigasi dilakukan
                  sebelum penyebaran penyakit
                  meningkat lebih luas.
                </p>

              </div>

              {/* CARD */}
              <div className="
          bg-white
          rounded-[30px]
          p-7
          text-center
          shadow-lg
          border
          border-white
          hover:-translate-y-2
          transition-all
          duration-300
        ">

                <div className="
            w-20
            h-20
            mx-auto
            rounded-[24px]
            bg-violet-100
            flex
            items-center
            justify-center
            text-[38px]
          ">
                  👥
                </div>

                <h3 className="
            mt-6
            text-[24px]
            leading-[34px]
            font-bold
            text-slate-900
          ">
                  Kesadaran
                  Masyarakat
                </h3>

                <p className="
            mt-5
            text-[15px]
            leading-[30px]
            text-slate-600
          ">
                  Informasi prediksi membantu
                  masyarakat lebih waspada
                  terhadap risiko penyakit.
                </p>

              </div>

              {/* CARD */}
              <div className="
          bg-white
          rounded-[30px]
          p-7
          text-center
          shadow-lg
          border
          border-white
          hover:-translate-y-2
          transition-all
          duration-300
        ">

                <div className="
            w-20
            h-20
            mx-auto
            rounded-[24px]
            bg-purple-100
            flex
            items-center
            justify-center
            text-[38px]
          ">
                  📊
                </div>

                <h3 className="
            mt-6
            text-[24px]
            leading-[34px]
            font-bold
            text-slate-900
          ">
                  Pengambilan
                  Keputusan
                </h3>

                <p className="
            mt-5
            text-[15px]
            leading-[30px]
            text-slate-600
          ">
                  Membantu menentukan prioritas
                  tindakan kesehatan berdasarkan
                  analisis wilayah risiko.
                </p>

              </div>

              {/* CARD */}
              <div className="
          bg-white
          rounded-[30px]
          p-7
          text-center
          shadow-lg
          border
          border-white
          hover:-translate-y-2
          transition-all
          duration-300
        ">

                <div className="
            w-20
            h-20
            mx-auto
            rounded-[24px]
            bg-pink-100
            flex
            items-center
            justify-center
            text-[38px]
          ">
                  🏥
                </div>

                <h3 className="
            mt-6
            text-[24px]
            leading-[34px]
            font-bold
            text-slate-900
          ">
                  Optimalisasi
                  Fasilitas
                </h3>

                <p className="
            mt-5
            text-[15px]
            leading-[30px]
            text-slate-600
          ">
                  Distribusi tenaga kesehatan
                  dan fasilitas menjadi lebih
                  efektif dan tepat sasaran.
                </p>

              </div>

              {/* CARD */}
              <div className="
          bg-white
          rounded-[30px]
          p-7
          text-center
          shadow-lg
          border
          border-white
          hover:-translate-y-2
          transition-all
          duration-300
        ">

                <div className="
            w-20
            h-20
            mx-auto
            rounded-[24px]
            bg-emerald-100
            flex
            items-center
            justify-center
            text-[38px]
          ">
                  🛡️
                </div>

                <h3 className="
            mt-6
            text-[24px]
            leading-[34px]
            font-bold
            text-slate-900
          ">
                  Pencegahan
                  Penyakit
                </h3>

                <p className="
            mt-5
            text-[15px]
            leading-[30px]
            text-slate-600
          ">
                  Membantu menekan potensi
                  penyebaran penyakit secara
                  lebih cepat dan efektif.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}