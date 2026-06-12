import { sendEmailNotification } from "./email.service";
import { sendTelegramNotification } from "./telegram.service";
import { sendWhatsAppNotification } from "./whatsapp.service";

type NotificationChannel = "email" | "whatsapp" | "telegram";

type SendNotificationParams = {
  channels: NotificationChannel[];
  to: {
    email?: string;
    phone?: string;
    telegramChatId?: string;
  };
  subject?: string;
  message: string;
};

export async function sendNotification({
  channels,
  to,
  subject = "Notifikasi Health Scope Olivia",
  message,
}: SendNotificationParams) {
  const results = [];

  for (const channel of channels) {
    try {
      if (channel === "email") {
        if (!to.email) throw new Error("Email tujuan kosong.");

        const result = await sendEmailNotification({
          to: to.email,
          subject,
          message,
        });

        results.push(result);
      }

      if (channel === "whatsapp") {
        if (!to.phone) throw new Error("Nomor WhatsApp tujuan kosong.");

        const result = await sendWhatsAppNotification({
          to: to.phone,
          message,
        });

        results.push(result);
      }

      if (channel === "telegram") {
        const result = await sendTelegramNotification({
          chatId: to.telegramChatId,
          message,
        });

        results.push(result);
      }
    } catch (error: any) {
      results.push({
        success: false,
        channel,
        error: error.message,
      });
    }
  }

  return results;
}