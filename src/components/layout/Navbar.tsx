"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {

  const pathname = usePathname();

  const menuClass = (path: string) =>
    pathname === path
      ? `
        relative
        text-[16px]
        font-semibold
        text-[#0F766E]
        after:absolute
        after:left-0
        after:-bottom-2
        after:w-full
        after:h-[3px]
        after:bg-[#0F766E]
        after:rounded-full
      `
      : `
        relative
        text-[16px]
        font-medium
        text-slate-700
        hover:text-[#0F766E]
        transition-all
      `;

  return (

    <header
      className="
        sticky
        top-0
        z-50
        bg-white/90
        backdrop-blur-xl
        border-b
        border-slate-200
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          h-[92px]
          flex
          items-center
          justify-between
        "
      >

        {/* LOGO */}
        <div
          className="
            flex
            items-center
            gap-4
            -ml-4
          "
        >

          {/* ICON */}
          <div
            className="
              w-14
              h-14
              rounded-2xl
              bg-gradient-to-br
              from-[#0F766E]
              to-[#14B8A6]
              flex
              items-center
              justify-center
              shadow-lg
            "
          >

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v8m4-4H8m12 0A9 9 0 1112 3a9 9 0 019 9z"
              />

            </svg>

          </div>

          {/* TEXT */}
          <div>

            <h1
              className="
                text-[30px]
                leading-none
                font-extrabold
                text-slate-900
              "
            >
              Health Scope
            </h1>

            <p
              className="
                mt-1
                text-sm
                text-slate-500
              "
            >
              Early Warning Disease System Indonesia
            </p>

          </div>

        </div>

        {/* MENU */}
        <nav
          className="
            hidden
            lg:flex
            items-center
            gap-10
          "
        >

          <Link
            href="/"
            className={menuClass("/")}
          >
            Home
          </Link>

          <Link
            href="/prediksi-wabah"
            className={menuClass("/prediksi-wabah")}
          >
            Prediksi Wabah
          </Link>

          <Link
            href="/dampak-sistem"
            className={menuClass("/dampak-sistem")}
          >
            Dampak Sistem
          </Link>

          <Link
            href="/edukasi"
            className={menuClass("/edukasi")}
          >
            Edukasi
          </Link>

          <Link
            href="/berita"
            className={menuClass("/berita")}
          >
            Berita Kesehatan
          </Link>

        </nav>

      </div>

    </header>

  );
}