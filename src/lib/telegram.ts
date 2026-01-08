const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

interface LeadData {
  name: string;
  phone: string;
  company: string;
  source?: string;
}

function escapeMarkdown(text: string): string {
  return text.replace(/[_*[\]()~`>#+\-=|{}.!]/g, "\$&");
}

export async function sendToTelegram(data: LeadData): Promise<boolean> {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.error("Telegram credentials not configured");
    return false;
  }

  const escapedName = escapeMarkdown(data.name);
  const escapedPhone = escapeMarkdown(data.phone);
  const escapedCompany = escapeMarkdown(data.company);
  const timestamp = new Date().toLocaleString("uz-UZ", { timeZone: "Asia/Tashkent" });

  const message = [
    "🔔 *Yangi lid!*",
    "",
    "👤 *Ism:* " + escapedName,
    "📞 *Telefon:* " + escapedPhone,
    "🏢 *Kompaniya:* " + escapedCompany,
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
          parse_mode: "Markdown",
        }),
      }
    );

    const result = await response.json();
    return result.ok;
  } catch (error) {
    console.error("Failed to send to Telegram:", error);
    return false;
  }
}
