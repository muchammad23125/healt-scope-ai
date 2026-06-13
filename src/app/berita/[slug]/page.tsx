import Link from "next/link";
import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export const dynamic = "force-dynamic";

type Category = {
  id: string;
  name: string;
  slug: string;
};

type ArticleRow = {
  id: string;
  category_id: string | null;
  title: string;
  slug: string;
  description: string;
  image_url: string | null;
  image_path: string | null;
  published_date: string;
  status: string;
  created_at?: string;
  categories: Category | Category[] | null;
};

type DetailBerita = {
  id: string | number;
  kategori: string;
  tanggal: string;
  title: string;
  desc: string;
  image: string;
  slug: string;
};

const MAX_WORDS = 900;

const dummyBerita: DetailBerita[] = [
  {
    id: 1,
    kategori: "DBD",
    tanggal: "12 Juni 2026",
    title: "Kasus DBD Meningkat Saat Curah Hujan Tinggi",
    slug: "kasus-dbd-meningkat-saat-curah-hujan-tinggi",
    desc: "Peningkatan curah hujan menyebabkan bertambahnya titik genangan air yang berpotensi menjadi sarang nyamuk Aedes aegypti. Kondisi ini perlu menjadi perhatian masyarakat karena nyamuk dapat berkembang biak pada tempat-tempat yang sering terabaikan, seperti pot bunga, talang air, ban bekas, dan wadah penampungan air. Upaya pencegahan dapat dilakukan melalui gerakan 3M Plus, yaitu menguras, menutup, dan mendaur ulang barang bekas yang berpotensi menjadi tempat berkembang biaknya nyamuk.",
    image:
      "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    kategori: "ISPA",
    tanggal: "11 Juni 2026",
    title: "Perubahan Cuaca Ekstrem Picu Risiko ISPA",
    slug: "perubahan-cuaca-ekstrem-picu-risiko-ispa",
    desc: "Perubahan suhu yang tidak stabil dapat meningkatkan risiko infeksi saluran pernapasan, terutama pada anak-anak, lansia, dan masyarakat dengan daya tahan tubuh rendah. Kondisi udara yang lembap, paparan debu, serta perubahan cuaca mendadak dapat memperberat gejala batuk, pilek, dan gangguan pernapasan lainnya. Masyarakat disarankan menjaga pola hidup sehat, menggunakan masker saat diperlukan, serta segera memeriksakan diri apabila mengalami gejala yang tidak kunjung membaik.",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    kategori: "Leptospirosis",
    tanggal: "10 Juni 2026",
    title: "Waspadai Leptospirosis Setelah Banjir",
    slug: "waspadai-leptospirosis-setelah-banjir",
    desc: "Kontak langsung dengan air yang terkontaminasi dapat meningkatkan risiko penyebaran leptospirosis. Penyakit ini dapat menular melalui luka terbuka pada kulit yang terkena air atau tanah yang tercemar urine hewan, terutama tikus. Setelah banjir, masyarakat perlu menggunakan alas kaki, membersihkan lingkungan, serta segera mencuci bagian tubuh yang terkena air banjir dengan sabun dan air bersih.",
    image:
      "https://images.unsplash.com/photo-1547683905-f686c993aae5?q=80&w=1200&auto=format&fit=crop",
  },
];

function formatDate(dateString?: string | null) {
  if (!dateString) return "-";

  return new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(dateString));
}

function normalizeArticle(row: ArticleRow): DetailBerita {
  const relation = Array.isArray(row.categories)
    ? row.categories[0]
    : row.categories;

  return {
    id: row.id,
    kategori: relation?.name ?? "Tanpa Kategori",
    tanggal: formatDate(row.published_date ?? row.created_at),
    title: row.title,
    desc: row.description,
    image:
      row.image_url ||
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=1200&auto=format&fit=crop",
    slug: row.slug,
  };
}

function limitWords(text: string, maxWords: number) {
  const words = text.trim().split(/\s+/);

  if (words.length <= maxWords) {
    return text;
  }

  return `${words.slice(0, maxWords).join(" ")}...`;
}

function splitParagraphs(text: string) {
  return text
    .split(/\n+/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

async function getDetailBerita(slug: string): Promise<DetailBerita | null> {
  const { data, error } = await supabase
    .from("articles")
    .select(
      `
      id,
      category_id,
      title,
      slug,
      description,
      image_url,
      image_path,
      published_date,
      status,
      created_at,
      categories:category_id (
        id,
        name,
        slug
      )
    `,
    )
    .eq("slug", slug)
    .eq("status", "published")
    .maybeSingle();

  if (error) {
    console.error("Gagal mengambil detail berita:", error.message);
  }

  if (data) {
    return normalizeArticle(data as ArticleRow);
  }

  const dummyDetail = dummyBerita.find((item) => item.slug === slug);

  return dummyDetail ?? null;
}

type DetailBeritaPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function DetailBeritaPage({
  params,
}: DetailBeritaPageProps) {
  const { slug } = await params;
  const berita = await getDetailBerita(slug);

  if (!berita) {
    notFound();
  }

  const limitedDescription = limitWords(berita.desc, MAX_WORDS);
  const paragraphs = splitParagraphs(limitedDescription);

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <section className="bg-gradient-to-br from-[#EAF7F8] via-white to-[#F0FDFA]">
        <div className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-16 lg:px-6">
          <Link
            href="/berita"
            className="inline-flex text-sm font-semibold text-[#0F766E] transition hover:translate-x-[-4px]">
            ← Kembali ke Berita
          </Link>

          <div className="mt-8">
            <span className="inline-flex rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700">
              {berita.kategori}
            </span>

            <h1 className="mt-5 text-[34px] font-bold leading-[44px] text-slate-900 sm:text-[44px] sm:leading-[54px] md:text-[56px] md:leading-[66px]">
              {berita.title}
            </h1>

            <p className="mt-5 text-base font-medium text-slate-500">
              Dipublikasikan pada {berita.tanggal}
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-5xl px-5 md:px-8 lg:px-6">
          <article className="overflow-hidden rounded-[32px] border border-slate-100 bg-white shadow-xl">
            <div className="relative">
              <img
                src={berita.image}
                alt={berita.title}
                className="h-[260px] w-full object-cover sm:h-[360px] md:h-[460px]"
              />

              <div className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-sm font-bold text-[#0F766E] backdrop-blur-md">
                {berita.kategori}
              </div>
            </div>

            <div className="px-6 py-8 md:px-10 md:py-10">
              <div className="mb-8 border-b border-slate-100 pb-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0F766E]">
                  Detail Berita
                </p>

                <h2 className="mt-3 text-2xl font-bold text-slate-900 md:text-3xl">
                  {berita.title}
                </h2>
              </div>

              <div className="space-y-5 text-base leading-8 text-slate-700 md:text-lg md:leading-9">
                {paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-10 rounded-3xl bg-slate-50 p-5 text-sm leading-7 text-slate-500">
                <p>
                  Catatan: Informasi ini ditampilkan berdasarkan data yang
                  dipublikasikan oleh Admin Health Scope AI. Untuk informasi
                  lebih lanjut atau pertanyaan, silakan hubungi tim kami melalui
                  halaman kontak. Kami berkomitmen untuk memberikan informasi
                  yang akurat dan terpercaya kepada masyarakat.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
