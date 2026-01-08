import { NextRequest, NextResponse } from "next/server";
import { sendToTelegram } from "@/lib/telegram";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, company } = body;

    // Validation
    if (!name || !phone || !company) {
      return NextResponse.json(
        { error: "Barcha maydonlarni to'ldiring" },
        { status: 400 }
      );
    }

    // Phone validation (Uzbekistan format)
    const phoneRegex = /^\+?998\d{9}$/;
    const cleanPhone = phone.replace(/[\s\-()]/g, "");
    if (!phoneRegex.test(cleanPhone)) {
      return NextResponse.json(
        { error: "Telefon raqami noto'g'ri formatda" },
        { status: 400 }
      );
    }

    // Send to Telegram
    const success = await sendToTelegram({
      name,
      phone: cleanPhone,
      company,
      source: "Landing Page Form",
    });

    if (!success) {
      return NextResponse.json(
        { error: "Xatolik yuz berdi. Iltimos qayta urinib ko'ring." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: "Muvaffaqiyatli yuborildi!" });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Server xatosi" },
      { status: 500 }
    );
  }
}
