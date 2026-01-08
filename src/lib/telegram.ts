const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

interface LeadData {
  name: string;
  phone: string;
  company: string;
  source?: string;
}

export async function sendToTelegram(data: LeadData): Promise<boolean> {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.error("Telegram credentials not configured");
    return false;
  }

  const timestamp = new Date().toLocaleString("uz-UZ", { timeZone: "Asia/Tashkent" });
  const cleanPhone = data.phone.replace(/\s/g, "");

  const message = [
    "🔔 *Yangi lid\!*",
    "",
    "👤 *Ism:* *" + data.name + "*",
    "📞 *Telefon:* `" + cleanPhone + "`",
    "🏢 *Kompaniya:* " + data.company,
    "📍 *Manba:* " + (data.source || "Landing page"),
    "",
    "⏰ *Vaqt:* " + timestamp,
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
          parse_mode: "MarkdownV2",
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
