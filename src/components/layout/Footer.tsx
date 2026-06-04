import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#06263A] text-white mt-0 overflow-hidden">

      {/* TOP FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]
            gap-16
          "
        >

          {/* BRAND */}
          <div>

            {/* LOGO + TEXT */}
            <div className="flex items-start gap-4">

              {/* ICON */}
              <div
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-[#0F766E]
                  flex
                  items-center
                  justify-center
                  shrink-0
                  mt-1
                "
              >
                <span className="text-3xl">
                  🛡️
                </span>
              </div>

              {/* TEXT */}
              <div className="min-w-0">

                <h2
                  className="
                    text-[26px]
                    leading-[32px]
                    font-extrabold
                    break-words
                  "
                >
                  <span className="text-white">
                    Deteksi
                  </span>

                  <span className="text-[#14B8A6]">
                    Bayangan
                  </span>
                </h2>

                <p
                  className="
                    text-sm
                    text-slate-300
                    mt-2
                    leading-relaxed
                  "
                >
                  Early Warning Disease System Indonesia
                </p>

              </div>

            </div>

            {/* DESCRIPTION */}
            <p
              className="
                mt-8
                text-slate-300
                leading-[34px]
                text-[16px]
                max-w-[320px]
              "
            >
              Sistem peringatan dini risiko penyakit
              berbasis cuaca, data historis kesehatan,
              dan tren pencarian masyarakat.
            </p>

            {/* SOCIAL MEDIA */}
            <div className="flex items-center gap-4 mt-8">

              {[
                Facebook,
                Twitter,
                Instagram,
                Youtube,
              ].map((Icon, index) => (

                <div
                  key={index}
                  className="
                    w-11
                    h-11
                    rounded-full
                    border
                    border-white/20
                    flex
                    items-center
                    justify-center
                    hover:bg-[#0F766E]
                    transition-all
                    cursor-pointer
                  "
                >
                  <Icon className="w-5 h-5" />
                </div>

              ))}

            </div>

          </div>

          {/* NAVIGATION */}
          <div>

            <h3 className="text-xl font-bold mb-8">
              Tautan Cepat
            </h3>

            <ul className="space-y-5 text-slate-300">

              <li>
                <Link
                  href="/"
                  className="hover:text-[#14B8A6] transition-all"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/prediksi-wabah"
                  className="hover:text-[#14B8A6] transition-all"
                >
                  Prediksi Wabah
                </Link>
              </li>

              <li>
                <Link
                  href="/dampak-sistem"
                  className="hover:text-[#14B8A6] transition-all"
                >
                  Dampak Sistem
                </Link>
              </li>

              <li>
                <Link
                  href="/edukasi"
                  className="hover:text-[#14B8A6] transition-all"
                >
                  Edukasi
                </Link>
              </li>

              <li>
                <Link
                  href="/berita"
                  className="hover:text-[#14B8A6] transition-all"
                >
                  Berita Kesehatan
                </Link>
              </li>

            </ul>

          </div>

          {/* DATA SOURCE */}
          <div>

            <h3 className="text-xl font-bold mb-8">
              Sumber Data
            </h3>

            <ul className="space-y-5 text-slate-300">

              <li>BMKG</li>
              <li>Dinas Kesehatan</li>
              <li>Kementerian Kesehatan RI</li>
              <li>Google Trends</li>
              <li>Open Data Indonesia</li>

            </ul>

          </div>

          {/* CONTACT */}
          <div>

            <h3 className="text-xl font-bold mb-8">
              Kontak
            </h3>

            <ul className="space-y-5 text-slate-300 leading-[32px]">

              <li>
                info@deteksibayangan.id
              </li>

              <li>
                +62 21 1234 5678
              </li>

              <li>
                Jl. Kesehatan No. 10
                <br />
                Jakarta, Indonesia
              </li>

            </ul>

          </div>

          {/* PARTNERSHIP */}
          <div>

            <h3 className="text-xl font-bold mb-8">
              Partnership
            </h3>

            <div
              className="
                flex
                items-center
                gap-7
                whitespace-nowrap
              "
            >

              {/* KEMENKES */}
              <img
                src="/images/logo kes.png"
                alt="Kementerian Kesehatan"
                className="
                  h-20
                  w-auto
                  object-contain
                  shrink-0
                "
              />

              {/* BMKG */}
              <img
                src="/images/bmkg.png"
                alt="BMKG"
                className="
                  h-16
                  w-auto
                  object-contain
                  shrink-0
                "
              />

            </div>

          </div>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10">

        <div
          className="
            max-w-7xl
            mx-auto
            px-6
            py-6
            text-center
            text-slate-400
            text-sm
          "
        >
          © 2025 DeteksiBayangan. All rights reserved.
        </div>

      </div>

    </footer>
  );
}