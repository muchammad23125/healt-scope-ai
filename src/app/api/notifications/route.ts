import { NextResponse } from "next/server";
import { sendNotification } from "@/services/notification.service";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { channels, to, subject, message } = body;

    if (!channels || !Array.isArray(channels)) {
      return NextResponse.json(
        {
          success: false,
          message: "Channels wajib berupa array.",
        },
        { status: 400 },
      );
    }

    if (!to) {
      return NextResponse.json(
        {
          success: false,
          message: "Data tujuan notifikasi wajib diisi.",
        },
        { status: 400 },
      );
    }

    if (!message) {
      return NextResponse.json(
        {
          success: false,
          message: "Message wajib diisi.",
        },
        { status: 400 },
      );
    }

    const results = await sendNotification({
      channels,
      to,
      subject,
      message,
    });

    return NextResponse.json({
      success: true,
      results,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error.message || "Terjadi kesalahan server.",
      },
      { status: 500 },
    );
  }
}
