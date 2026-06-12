type AiAdvisory = {
  publicSummary: string;
  publicMessage: string;
  priorityActions: string[];
  institutionAdvice: string[];
  notificationMessage: string;
  disclaimer: string;
};

type AlertStatus = {
  shouldNotify: boolean;
  trigger: string;
  urgency: string;
  recommendedChannel: string[];
  message: string;
};

type AiAdvisoryPanelProps = {
  aiAdvisory?: AiAdvisory;
  alertStatus?: AlertStatus;
};

function getUrgencyBadgeClass(urgency?: string) {
  if (urgency === "High") {
    return "bg-red-50 text-red-700 border-red-100";
  }

  if (urgency === "Medium") {
    return "bg-amber-50 text-amber-700 border-amber-100";
  }

  if (urgency === "Low") {
    return "bg-yellow-50 text-yellow-700 border-yellow-100";
  }

  return "bg-emerald-50 text-emerald-700 border-emerald-100";
}

export default function AiAdvisoryPanel({
  aiAdvisory,
  alertStatus,
}: AiAdvisoryPanelProps) {
  if (!aiAdvisory) {
    return null;
  }

  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <span className="inline-flex rounded-full bg-teal-50 px-4 py-2 text-xs font-semibold text-teal-700">
            AI Health Advisory Layer
          </span>

          <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900">
            Arahan Kewaspadaan Berbasis AI
          </h2>

          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
            Sistem menerjemahkan hasil prediksi menjadi ringkasan kewaspadaan,
            tindakan prioritas masyarakat, arahan instansi kesehatan, dan pesan
            notifikasi.
          </p>
        </div>

        {alertStatus && (
          <div
            className={`rounded-2xl border px-4 py-3 text-sm font-semibold ${getUrgencyBadgeClass(
              alertStatus.urgency,
            )}`}>
            Urgency: {alertStatus.urgency}
          </div>
        )}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl bg-slate-50 p-5">
          <h3 className="font-semibold text-slate-900">Ringkasan Publik</h3>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            {aiAdvisory.publicSummary}
          </p>
        </div>

        <div className="rounded-2xl bg-slate-50 p-5">
          <h3 className="font-semibold text-slate-900">Pesan Kewaspadaan</h3>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            {aiAdvisory.publicMessage}
          </p>
        </div>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-100 p-5">
          <h3 className="font-semibold text-slate-900">
            Tindakan Prioritas Masyarakat
          </h3>

          <ul className="mt-3 space-y-2">
            {aiAdvisory.priorityActions.map((item) => (
              <li
                key={item}
                className="rounded-xl bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-100 p-5">
          <h3 className="font-semibold text-slate-900">
            Arahan untuk Instansi Kesehatan
          </h3>

          <ul className="mt-3 space-y-2">
            {aiAdvisory.institutionAdvice.map((item) => (
              <li
                key={item}
                className="rounded-xl bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {alertStatus && (
        <div className="mt-5 rounded-2xl border border-cyan-100 bg-cyan-50 p-5">
          <h3 className="font-semibold text-cyan-800">
            Status Notifikasi Early Warning
          </h3>

          <p className="mt-2 text-sm leading-6 text-cyan-800">
            {alertStatus.message}
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {alertStatus.recommendedChannel.map((channel) => (
              <span
                key={channel}
                className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-cyan-700">
                {channel}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-4">
        <p className="text-xs leading-6 text-slate-500">
          <strong>Catatan:</strong> {aiAdvisory.disclaimer}
        </p>
      </div>
    </section>
  );
}
