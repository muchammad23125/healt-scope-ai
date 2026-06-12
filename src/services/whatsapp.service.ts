type SendWhatsAppParams = {
  to: string;
  message: string;
};

export async function sendWhatsAppNotification({
  to,
  message,
}: SendWhatsAppParams) {
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const token = process.env.WHATSAPP_TOKEN;

  if (!phoneNumberId || !token) {
    throw new Error("Konfigurasi WhatsApp belum lengkap.");
  }

  const response = await fetch(
    `https://graph.facebook.com/v20.0/${phoneNumberId}/messages`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to,
        type: "text",
        text: {
          body: message,
        },
      }),
    },
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.error?.message || "Gagal mengirim WhatsApp.");
  }

  return {
    success: true,
    channel: "whatsapp",
    data,
  };
}
