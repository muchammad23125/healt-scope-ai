
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      wilayah: "Surabaya Timur",
      penyakit: "DBD",
      risiko: "TINGGI",
      confidence: 87
    },
    {
      wilayah: "Jakarta Selatan",
      penyakit: "ISPA",
      risiko: "SEDANG",
      confidence: 72
    }
  ]);
}
