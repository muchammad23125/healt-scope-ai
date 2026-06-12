export default function RecommendationList({
  recommendations,
}: {
  recommendations: string[];
}) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h3 className="text-xl font-bold">Rekomendasi Tindakan</h3>
      <p className="mt-1 text-sm text-gray-600">
        Saran otomatis untuk masyarakat dan instansi kesehatan.
      </p>

      <ul className="mt-4 space-y-3">
        {recommendations.map((item) => (
          <li
            key={item}
            className="rounded-xl bg-gray-50 p-4 text-sm leading-relaxed text-gray-700">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
