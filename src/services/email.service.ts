import nodemailer from "nodemailer";

type SendEmailParams = {
  to: string;
  subject: string;
  message: string;
};

export async function sendEmailNotification({
  to,
  subject,
  message,
}: SendEmailParams) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 465),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const result = await transporter.sendMail({
    from: process.env.SMTP_FROM,
    to,
    subject,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>${subject}</h2>
        <p>${message}</p>
      </div>
    `,
  });

  return {
    success: true,
    channel: "email",
    result,
  };
}