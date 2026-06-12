type Factor = {
  factor: string;
  score: number;
  impact: string;
  description: string;
};

export default function ExplainableFactors({ factors }: { factors: Factor[] }) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h3 className="text-xl font-bold">Faktor yang Paling Berpengaruh</h3>
      <p className="mt-1 text-sm text-gray-600">
        Sistem menjelaskan indikator utama yang memengaruhi hasil prediksi.
      </p>

      <div className="mt-4 space-y-3">
        {factors.slice(0, 5).map((factor) => (
          <div key={factor.factor} className="rounded-xl bg-gray-50 p-4">
            <div className="flex items-center justify-between gap-3">
              <p className="font-semibold">{factor.factor}</p>
              <span className="rounded-full border px-3 py-1 text-sm">
                {factor.impact}
              </span>
            </div>

            <p className="mt-1 text-sm leading-relaxed text-gray-600">
              {factor.description}
            </p>

            <p className="mt-2 text-sm font-medium">
              Skor faktor: {factor.score}/100
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
