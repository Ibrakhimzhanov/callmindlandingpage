const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

interface LeadData {
  name: string;
  phone: string;
  company: string;
  source?: string;
}

// Экранирование спецсимволов для HTML
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function sendToTelegram(data: LeadData): Promise<boolean> {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.error("Telegram credentials not configured");
    return false;
  }

  const timestamp = new Date().toLocaleString("uz-UZ", { timeZone: "Asia/Tashkent" });
  const cleanPhone = data.phone.replace(/\s/g, "");

  // Используем HTML вместо MarkdownV2 для надёжности
  const message = [
    "🔔 <b>Yangi lid!</b>",
    "",
    "👤 <b>Ism:</b> " + escapeHtml(data.name),
    "📞 <b>Telefon:</b> <code>" + escapeHtml(cleanPhone) + "</code>",
    "🏢 <b>Kompaniya:</b> " + escapeHtml(data.company),
    "📍 <b>Manba:</b> " + escapeHtml(data.source || "Landing page"),
    "",
    "⏰ <b>Vaqt:</b> " + escapeHtml(timestamp),
  ].join("\n");

  try {
    const response = await fetch(
      "https://api.telegram.org/bot" + TELEGRAM_BOT_TOKEN + "/sendMessage",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: "HTML",
        }),
      }
    );

    const result = await response.json();
    if (!result.ok) {
      console.error("Telegram error:", result);
    }
    return result.ok;
  } catch (error) {
    console.error("Failed to send to Telegram:", error);
    return false;
  }
}
