
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const adminRole = await prisma.role.create({
    data: { name: "Admin" }
  });

  await prisma.user.create({
    data: {
      roleId: adminRole.id,
      name: "Administrator",
      email: "admin@healthscope.id",
      password: "admin123"
    }
  });

  const wilayah = await prisma.wilayah.createMany({
    data: [
      {
        nama: "Surabaya Timur",
        provinsi: "Jawa Timur",
        latitude: -7.2575,
        longitude: 112.7521
      },
      {
        nama: "Jakarta Selatan",
        provinsi: "DKI Jakarta",
        latitude: -6.2088,
        longitude: 106.8456
      },
      {
        nama: "Bandung",
        provinsi: "Jawa Barat",
        latitude: -6.9147,
        longitude: 107.6098
      }
    ]
  });

  await prisma.penyakit.createMany({
    data: [
      {
        nama: "DBD",
        slug: "dbd",
        deskripsi: "Demam Berdarah Dengue"
      },
      {
        nama: "ISPA",
        slug: "ispa",
        deskripsi: "Infeksi Saluran Pernapasan"
      },
      {
        nama: "Diare",
        slug: "diare",
        deskripsi: "Gangguan pencernaan"
      }
    ]
  });

  await prisma.artikel.createMany({
    data: [
      {
        title: "Waspada DBD Saat Musim Hujan",
        slug: "waspada-dbd",
        excerpt: "Peningkatan risiko DBD saat musim hujan.",
        thumbnail: "/images/news-1.jpg",
        content: "Konten artikel dummy."
      },
      {
        title: "Pencegahan ISPA",
        slug: "pencegahan-ispa",
        excerpt: "Cara mencegah ISPA sejak dini.",
        thumbnail: "/images/news-2.jpg",
        content: "Konten artikel dummy."
      }
    ]
  });

  console.log("Seed completed");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
