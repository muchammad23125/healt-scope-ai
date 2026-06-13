import { NextResponse } from "next/server";
import { predictOutbreakRisk } from "@/lib/outbreak-risk";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const requiredFields = [
      "region",
      "temperature",
      "humidity",
      "rainfall",
      "riskScore",
      "riskStatus",
    ];

    for (const field of requiredFields) {
      if (
        body[field] === undefined ||
        body[field] === null ||
        body[field] === ""
      ) {
        return NextResponse.json(
          {
            message: `Field ${field} wajib diisi.`,
          },
          {
            status: 400,
          }
        );
      }
    }

    const result = predictOutbreakRisk({
      region: String(body.region),

      temperature: Number(body.temperature),

      humidity: Number(body.humidity),

      rainfall: Number(body.rainfall),

      riskScore: Number(body.riskScore),

      riskStatus: String(body.riskStatus),
    });

    return NextResponse.json({
      success: true,
      message: "Prediksi risiko wabah berhasil.",
      data: result,
    });
  } catch (error) {
    console.error("OUTBREAK API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Gagal memproses prediksi risiko wabah.",
      },
      {
        status: 500,
      }
    );
  }
}