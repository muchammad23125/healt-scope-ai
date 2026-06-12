type SendTelegramParams = {
  chatId?: string;
  message: string;
};

export async function sendTelegramNotification({
  chatId,
  message,
}: SendTelegramParams) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const targetChatId = chatId || process.env.TELEGRAM_CHAT_ID;

  if (!token || !targetChatId) {
    throw new Error("Konfigurasi Telegram belum lengkap.");
  }

  const response = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: targetChatId,
        text: message,
        parse_mode: "HTML",
      }),
    },
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.description || "Gagal mengirim Telegram.");
  }

  return {
    success: true,
    channel: "telegram",
    data,
  };
}
