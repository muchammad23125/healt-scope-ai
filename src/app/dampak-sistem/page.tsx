import Link from "next/link";
import {
  Bell,
  MapPinned,
  BarChart3,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function DampakPage() {
  return (
    <main className="bg-[#F6F8FA] overflow-hidden">

      {/* HERO */}
      <section className="relative overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute inset-0 z-0">

          <img
            src="/images/bg-dampak.png"
            alt="Dampak Sistem"
            className="
              w-full
              h-full
              object-cover
              object-center
            "
          />

          {/* DARK OVERLAY */}
          <div className="
            absolute
            inset-0
            bg-[#012B3B]/55
          " />

          {/* LEFT GRADIENT */}
          <div className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#012B3B]
            via-[#012B3B]/70
            to-transparent
          " />

        </div>

        {/* CONTENT */}
        <div className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-6
          pt-28
          pb-36
        ">

          <div className="max-w-3xl">

            <h1 className="
              text-[62px]
              leading-[70px]
              font-extrabold
              text-white
              tracking-[-1px]
            ">
              Dampak di
              <br />

              <span className="text-[#3ED6B0]">
                Dunia Nyata
              </span>
            </h1>

            <p className="
              mt-8
              text-[20px]
              leading-[38px]
              text-slate-200
              max-w-2xl
            ">
              Lihat bagaimana DeteksiBayangan membantu
              masyarakat, pemerintah, dan instansi kesehatan
              dalam mengantisipasi risiko penyakit berbasis
              cuaca melalui sistem peringatan dini yang
              lebih cepat dan berbasis data.
            </p>

          </div>

        </div>

      </section>

      {/* IMPACT CARD */}
      <section className="-mt-16 relative z-20 pb-16">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-3 gap-5">

            {/* CARD 1 */}
            <div className="
              bg-white
              rounded-[26px]
              px-6
              py-6
              shadow-md
              border
              border-slate-100
              flex
              items-start
              gap-5
              min-h-[210px]
            ">

              <div className="
                w-14
                h-14
                rounded-2xl
                bg-red-100
                flex
                items-center
                justify-center
                shrink-0
              ">
                <Bell className="w-7 h-7 text-red-500" />
              </div>

              <div>

                <h2 className="
                  text-[24px]
                  leading-[34px]
                  font-bold
                  text-slate-900
                ">
                  Deteksi Risiko
                  7–14 Hari Lebih Awal
                </h2>

                <p className="
                  mt-4
                  text-[15px]
                  leading-[30px]
                  text-slate-600
                ">
                  Membantu mendeteksi potensi peningkatan
                  penyakit lebih awal sebelum kasus meningkat.
                </p>

              </div>

            </div>

            {/* CARD 2 */}
            <div className="
              bg-white
              rounded-[26px]
              px-6
              py-6
              shadow-md
              border
              border-slate-100
              flex
              items-start
              gap-5
              min-h-[210px]
            ">

              <div className="
                w-14
                h-14
                rounded-2xl
                bg-emerald-100
                flex
                items-center
                justify-center
                shrink-0
              ">
                <MapPinned className="w-7 h-7 text-emerald-600" />
              </div>

              <div>

                <h2 className="
                  text-[24px]
                  leading-[34px]
                  font-bold
                  text-slate-900
                ">
                  Monitoring Risiko
                  Berbasis Wilayah
                </h2>

                <p className="
                  mt-4
                  text-[15px]
                  leading-[30px]
                  text-slate-600
                ">
                  Memudahkan pemantauan risiko penyakit
                  melalui peta interaktif berbasis wilayah.
                </p>

              </div>

            </div>

            {/* CARD 3 */}
            <div className="
              bg-white
              rounded-[26px]
              px-6
              py-6
              shadow-md
              border
              border-slate-100
              flex
              items-start
              gap-5
              min-h-[210px]
            ">

              <div className="
                w-14
                h-14
                rounded-2xl
                bg-indigo-100
                flex
                items-center
                justify-center
                shrink-0
              ">
                <BarChart3 className="w-7 h-7 text-indigo-600" />
              </div>

              <div>

                <h2 className="
                  text-[24px]
                  leading-[34px]
                  font-bold
                  text-slate-900
                ">
                  Mendukung
                  Pengambilan Keputusan
                </h2>

                <p className="
                  mt-4
                  text-[15px]
                  leading-[30px]
                  text-slate-600
                ">
                  Membantu pemerintah menentukan prioritas
                  mitigasi dan penanganan kesehatan.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* USE CASE */}
      <section className="pb-16">

        <div className="w-full px-6 xl:px-10">

          <div className="space-y-6">

            {[
              {
                id: 1,
                image: "/images/case 1.png",
                title:
                  "Membantu Pemerintah Mengantisipasi Risiko DBD",
                desc:
                  "DeteksiBayangan membantu pemerintah dan kelurahan mengidentifikasi potensi peningkatan kasus lebih awal sehingga langkah mitigasi dapat dilakukan lebih cepat.",

                cardBg: "bg-[#F7FCFB]",
                borderColor: "border-[#DDF5EE]",
                badgeBg: "bg-[#E8F8F3]",
                badgeText: "text-[#0F766E]",
                numberBg: "bg-[#0F766E]",
                iconColor: "text-[#0F766E]",
              },

              {
                id: 2,
                image: "/images/case 2.png",
                title:
                  "Mendukung Dinas Kesehatan dalam Kesiapsiagaan",
                desc:
                  "Sistem membantu dinas kesehatan menentukan wilayah prioritas dan mempersiapkan layanan kesehatan berbasis data risiko wilayah.",

                cardBg: "bg-[#F7FAFE]",
                borderColor: "border-[#DCEAFE]",
                badgeBg: "bg-[#EAF3FF]",
                badgeText: "text-blue-700",
                numberBg: "bg-blue-600",
                iconColor: "text-blue-600",
              },

              {
                id: 3,
                image: "/images/case 3.png",
                title:
                  "Meningkatkan Kesadaran Masyarakat",
                desc:
                  "Masyarakat dapat mengetahui potensi risiko penyakit lebih awal dan mendapatkan rekomendasi tindakan pencegahan yang sesuai.",

                cardBg: "bg-[#FFFDF6]",
                borderColor: "border-[#FBEFC8]",
                badgeBg: "bg-[#FEF7DA]",
                badgeText: "text-yellow-700",
                numberBg: "bg-yellow-500",
                iconColor: "text-yellow-600",
              },
            ].map((item) => (

              <div
                key={item.id}
                className={`
                  ${item.cardBg}
                  rounded-[28px]
                  border
                  ${item.borderColor}
                  shadow-sm
                  overflow-hidden
                  grid
                  xl:grid-cols-[520px_1fr]
                `}
              >

                {/* IMAGE */}
                <div className="
                  relative
                  min-h-[360px]
                  overflow-hidden
                  p-5
                ">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                      w-full
                      h-full
                      object-cover
                      object-center
                      rounded-[22px]
                    "
                  />

                  {/* NUMBER */}
                  <div className={`
                    absolute
                    top-6
                    left-6
                    w-14
                    h-14
                    rounded-2xl
                    ${item.numberBg}
                    text-white
                    flex
                    items-center
                    justify-center
                    text-xl
                    font-bold
                    shadow-lg
                  `}>
                    0{item.id}
                  </div>

                </div>

                {/* CONTENT */}
                <div className="
                  px-10
                  py-9
                  flex
                  flex-col
                  justify-center
                ">

                  {/* LABEL */}
                  <div className={`
                    inline-flex
                    w-fit
                    px-4
                    py-2
                    rounded-full
                    ${item.badgeBg}
                    ${item.badgeText}
                    text-xs
                    font-bold
                    tracking-wide
                  `}>
                    USE CASE {item.id}
                  </div>

                  {/* TITLE */}
                  <h2 className="
                    mt-5
                    text-[32px]
                    leading-[44px]
                    font-bold
                    text-slate-900
                    max-w-4xl
                  ">
                    {item.title}
                  </h2>

                  {/* DESCRIPTION */}
                  <p className="
                    mt-5
                    text-[16px]
                    leading-[32px]
                    text-slate-700
                    max-w-5xl
                  ">
                    {item.desc}
                  </p>

                  {/* POINTS */}
                  <div className="
                    mt-7
                    grid
                    md:grid-cols-2
                    gap-x-8
                    gap-y-4
                  ">

                    {[
                      "Analisis risiko lebih cepat",
                      "Mitigasi lebih terarah",
                      "Monitoring berbasis wilayah",
                      "Keputusan berbasis data",
                    ].map((point) => (

                      <div
                        key={point}
                        className="flex items-start gap-3"
                      >

                        <CheckCircle2
                          className={`
                            w-5
                            h-5
                            ${item.iconColor}
                            mt-1
                            shrink-0
                          `}
                        />

                        <p className="
                          text-slate-700
                          text-[15px]
                          leading-[28px]
                        ">
                          {point}
                        </p>

                      </div>

                    ))}

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="pb-4">

        <div className="w-full px-6 xl:px-10">

          <div className="
      bg-gradient-to-r
      from-[#0F766E]
      to-[#064E3B]
      rounded-[32px]
      px-8
      py-8
      flex
      flex-col
      xl:flex-row
      items-start
      xl:items-center
      justify-between
      gap-7
      shadow-lg
    ">

            {/* LEFT */}
            <div className="max-w-3xl">

              <h2 className="
          text-[34px]
          leading-[46px]
          font-bold
          text-white
        ">
                Bersama Membangun
                Kesiapsiagaan Kesehatan
              </h2>

              <p className="
          mt-4
          text-[16px]
          leading-[30px]
          text-emerald-100
        ">
                DeteksiBayangan membantu masyarakat dan
                pemerintah mengambil langkah pencegahan
                lebih awal melalui pemanfaatan data kesehatan
                dan sistem peringatan dini berbasis wilayah.
              </p>

            </div>

            {/* BUTTON */}
            <Link
              href="/prediksi-wabah"
              className="
          bg-white
          hover:bg-slate-100
          transition-all
          duration-300
          px-8
          py-4
          rounded-2xl
          text-[#0F766E]
          font-bold
          text-[16px]
          flex
          items-center
          gap-3
          shrink-0
          shadow-md
        "
            >
              Mulai Prediksi Wabah

              <ArrowRight className="w-5 h-5" />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}