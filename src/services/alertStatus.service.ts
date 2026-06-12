type RiskLevel = "Aman" | "Waspada" | "Siaga" | "Bahaya";

export function generateAlertStatus(riskLevel: RiskLevel, riskScore: number) {
  if (riskLevel === "Bahaya") {
    return {
      shouldNotify: true,
      trigger: "riskLevel = Bahaya",
      urgency: "High",
      recommendedChannel: [
        "Dashboard",
        "Telegram",
        "Email",
        "Instansi Kesehatan",
      ],
      message:
        "Risiko berada pada level bahaya. Sistem merekomendasikan peringatan prioritas kepada masyarakat dan instansi kesehatan.",
    };
  }

  if (riskLevel === "Siaga") {
    return {
      shouldNotify: true,
      trigger: "riskLevel >= Siaga",
      urgency: "Medium",
      recommendedChannel: ["Dashboard", "Telegram", "Email"],
      message:
        "Risiko berada pada level siaga. Sistem merekomendasikan notifikasi kewaspadaan kepada masyarakat.",
    };
  }

  if (riskLevel === "Waspada") {
    return {
      shouldNotify: false,
      trigger: "riskLevel = Waspada",
      urgency: "Low",
      recommendedChannel: ["Dashboard"],
      message:
        "Risiko mulai meningkat. Informasi kewaspadaan cukup ditampilkan melalui dashboard.",
    };
  }

  return {
    shouldNotify: false,
    trigger: "riskLevel = Aman",
    urgency: "Normal",
    recommendedChannel: ["Dashboard"],
    message: "Risiko masih rendah. Sistem tetap melakukan pemantauan berkala.",
  };
}