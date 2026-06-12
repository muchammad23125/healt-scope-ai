type Prediction = {
  region: string;
  disease: string;
  forecastRange: string;
  riskLevel: string;
  riskScore: number;
  vulnerabilityLevel: string;
  vulnerabilityScore: number;
  confidence: number;
  warningNote: string;
};

export default function OutbreakPredictionCard({
  prediction,
}: {
  prediction: Prediction;
}) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <p className="text-sm font-medium text-gray-500">
        Early Warning Prediction
      </p>

      <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold">{prediction.riskLevel}</h2>
          <p className="mt-1 text-gray-600">
            {prediction.disease} • {prediction.region} •{" "}
            {prediction.forecastRange}
          </p>
        </div>

        <div className="rounded-2xl border px-5 py-3 text-center">
          <p className="text-sm text-gray-500">Risk Score</p>
          <p className="text-2xl font-bold">{prediction.riskScore}/100</p>
        </div>
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-2">
        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-sm text-gray-500">Kerentanan Wilayah</p>
          <p className="text-xl font-semibold">
            {prediction.vulnerabilityLevel}
          </p>
          <p className="text-sm text-gray-600">
            Skor {prediction.vulnerabilityScore}/100
          </p>
        </div>

        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-sm text-gray-500">Confidence</p>
          <p className="text-xl font-semibold">
            {Math.round(prediction.confidence * 100)}%
          </p>
          <p className="text-sm text-gray-600">
            Keyakinan sistem terhadap hasil prediksi
          </p>
        </div>
      </div>

      <div className="mt-5 rounded-xl border p-4">
        <p className="font-semibold">Catatan Kewaspadaan</p>
        <p className="mt-1 text-sm leading-relaxed text-gray-700">
          {prediction.warningNote}
        </p>
      </div>
    </div>
  );
}
