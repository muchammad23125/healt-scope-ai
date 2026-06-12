import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#06263A] text-white mt-0 overflow-hidden">

      {/* TOP FOOTER */}

      <div
        className="
    max-w-7xl
    mx-auto
    px-6
    py-16
  "
      >

        <div
          className="
      grid
      grid-cols-1
      md:grid-cols-2
      lg:grid-cols-[2fr_1fr_1fr]
      gap-16
    "
        >

          {/* BRAND */}

          <div>

            <Link
              href="/"
              className="
      flex
      items-center
      gap-5

      hover:opacity-90
      transition-all
      duration-300
    "
            >

              {/* LOGO */}

              <Image
                src="/images/logo.png"
                alt="Health Scope"
                width={120}
                height={120}
                className="
        w-20
        h-20

        md:w-24
        md:h-24

        object-contain
        shrink-0
      "
              />

              {/* TEXT */}

              <div className="pt-1">

                <h2
                  className="
          text-[30px]
          md:text-[36px]

          font-extrabold
          leading-none
          text-white
        "
                >
                  Health Scope
                </h2>

                <p
                  className="
          mt-2
          text-sm
          text-slate-300
        "
                >
                  Early Warning Disease System Indonesia
                </p>

              </div>

            </Link>

            {/* DESCRIPTION */}

            <p
              className="
      mt-8
      max-w-[450px]

      text-[16px]
      leading-8

      text-slate-300
    "
            >
              Platform pemantauan dan prediksi risiko
              wabah berbasis GIS, data cuaca real-time,
              Explainable AI, serta analisis kesehatan
              wilayah untuk mendukung sistem peringatan
              dini penyakit di Indonesia.
            </p>

            {/* SOCIAL MEDIA */}

            <div
              className="
      flex
      items-center
      gap-4
      mt-8
    "
            >

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
          duration-300

          cursor-pointer
        "
                >

                  <Icon
                    className="
            w-5
            h-5
          "
                  />

                </div>

              ))}

            </div>

          </div>

          {/* TAUTAN CEPAT */}

          <div>

            <h3
              className="
          text-xl
          font-bold
          mb-8
        "
            >
              Tautan Cepat
            </h3>

            <ul
              className="
          space-y-5
          text-slate-300
        "
            >

              <li>
                <Link
                  href="/"
                  className="
              hover:text-[#14B8A6]
              transition-all
            "
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/prediksi-wabah"
                  className="
              hover:text-[#14B8A6]
              transition-all
            "
                >
                  Peta Risiko
                </Link>
              </li>

              <li>
                <Link
                  href="/ai-prediksi"
                  className="
              hover:text-[#14B8A6]
              transition-all
            "
                >
                  AI Prediksi
                </Link>
              </li>

              <li>
                <Link
                  href="/dampak-sistem"
                  className="
              hover:text-[#14B8A6]
              transition-all
            "
                >
                  Dampak Sistem
                </Link>
              </li>

              <li>
                <Link
                  href="/edukasi"
                  className="
              hover:text-[#14B8A6]
              transition-all
            "
                >
                  Edukasi
                </Link>
              </li>

              <li>
                <Link
                  href="/berita"
                  className="
              hover:text-[#14B8A6]
              transition-all
            "
                >
                  Berita Kesehatan
                </Link>
              </li>

            </ul>

          </div>

          {/* SUMBER DATA */}

          <div>

            <h3
              className="
          text-xl
          font-bold
          mb-8
        "
            >
              Sumber Data
            </h3>

            <ul
              className="
          space-y-5
          text-slate-300
        "
            >

              <li>BMKG</li>

              <li>
                Kementerian Kesehatan RI
              </li>

              <li>
                Dinas Kesehatan Daerah
              </li>

              <li>
                Google Trends
              </li>

              <li>
                Open-Meteo API
              </li>

              <li>
                Open Data Indonesia
              </li>

            </ul>

          </div>

        </div>

      </div>

      {/* BOTTOM */}

      <div
        className="
    border-t
    border-white/10
  "
      >

        <div
          className="
      max-w-7xl
      mx-auto
      px-6
      py-6
      text-center
      text-sm
      text-slate-400
    "
        >
          © 2026 Health Scope.
          Early Warning Disease System Indonesia.
          Developed for disease surveillance,
          outbreak prediction, and public health
          decision support.
        </div>

      </div>

    </footer>
  );
}