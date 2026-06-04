
import RiskMap from "@/components/maps/RiskMap";

export default function PrediksiPage() {
  return (
    <main className="container-page py-10">
      <div className="mb-10">
        <h1 className="text-5xl font-bold">
          Peta Risiko Nasional
        </h1>

        <p className="mt-3 text-slate-600">
          Lihat persebaran risiko penyakit di Indonesia.
        </p>
      </div>

      <RiskMap />

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <div className="bg-white rounded-3xl shadow-lg p-6">
          <h3 className="font-bold text-danger">
            Risiko Tinggi
          </h3>
          <p className="text-5xl font-bold mt-3">25</p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6">
          <h3 className="font-bold text-warning">
            Risiko Sedang
          </h3>
          <p className="text-5xl font-bold mt-3">87</p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6">
          <h3 className="font-bold text-success">
            Risiko Rendah
          </h3>
          <p className="text-5xl font-bold mt-3">142</p>
        </div>
      </div>
    </main>
  );
}
