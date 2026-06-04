
export default function BeritaPage() {
  return (
    <main className="container-page py-10">
      <h1 className="text-5xl font-bold">
        Berita Kesehatan
      </h1>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {[1,2,3].map((item) => (
          <div key={item} className="bg-white rounded-3xl shadow overflow-hidden">
            <div className="h-52 bg-slate-200"></div>

            <div className="p-6">
              <h3 className="text-2xl font-bold">
                Artikel Kesehatan
              </h3>

              <p className="mt-3 text-slate-500">
                Konten berita dummy untuk testing UI.
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
