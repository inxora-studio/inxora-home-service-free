import type { HomeService } from "@/types/home-service";

// Illustrative template content; replace with the business owner's actual offer.
export const services: HomeService[] = [
  {
    id: "cleaning",
    number: "01",
    name: "Home cleaning",
    shortName: "Bersih-bersih rumah",
    description:
      "Dari lantai sampai sudut jendela. Bantu rumah kembali bersih dan enak ditinggali.",
    price: 150000,
    unit: "kunjungan",
    image: "/images/home-cleaning.webp",
    alt: "Petugas membersihkan kaca jendela dengan alat pembersih",
    icon: "cleaning",
  },
  {
    id: "perbaikan",
    number: "02",
    name: "Perbaikan rumah",
    shortName: "Perbaikan rumah",
    description:
      "Pintu bermasalah, rak yang perlu dipasang, atau perbaikan kecil yang tertunda.",
    price: 175000,
    unit: "pekerjaan",
    image: "/images/home-repair.webp",
    alt: "Pekerja menggunakan alat untuk perbaikan interior rumah",
    icon: "tools",
  },
  {
    id: "plumbing",
    number: "03",
    name: "Pipa & sanitasi",
    shortName: "Pipa & sanitasi",
    description:
      "Kran menetes atau sambungan bocor? Mulai dari pengecekan sumber masalahnya.",
    price: 125000,
    unit: "titik",
    image: "/images/plumbing.webp",
    alt: "Tangan teknisi memperbaiki sambungan pipa dengan kunci pas",
    icon: "water",
  },
  {
    id: "taman",
    number: "04",
    name: "Taman & halaman",
    shortName: "Taman & halaman",
    description:
      "Rapikan tanaman dan halaman. Bikin ruang hijau kecilmu nyaman dinikmati lagi.",
    price: 200000,
    unit: "kunjungan",
    image: "/images/gardening.webp",
    alt: "Sekop kecil, garpu taman, dan tanaman di atas kain goni",
    icon: "garden",
  },
];

export const commitments = [
  {
    title: "Bicarakan dulu, baru dikerjakan.",
    text: "Cakupan pekerjaan dan biaya disepakati sebelum mulai. Kamu tahu apa yang akan dikerjakan.",
  },
  {
    title: "Rumah tetap terasa seperti rumah.",
    text: "Area kerja dijaga dan dirapikan setelah selesai. Hal kecil yang bikin perbedaan.",
  },
  {
    title: "Sesuai kebutuhan rumahmu.",
    text: "Ceritakan kondisinya. Kita mulai dari pekerjaan yang memang perlu ditangani.",
  },
];

export const steps = [
  {
    title: "Ceritakan kebutuhanmu",
    text: "Kirim pesan berisi keluhan, foto kondisi, dan lokasi rumah lewat WhatsApp.",
  },
  {
    title: "Sepakati biaya & waktunya",
    text: "Bahas ruang lingkup, perkiraan biaya, dan pilihan jadwal sebelum kunjungan.",
  },
  {
    title: "Bereskan, lalu cek bersama",
    text: "Pekerjaan dilakukan sesuai kesepakatan. Periksa hasilnya sebelum kunjungan selesai.",
  },
];

export const faqs = [
  {
    question: "Apakah harga di website sudah termasuk material?",
    answer:
      "Harga awal contoh mencakup jasa untuk pekerjaan dengan lingkup dasar. Material, suku cadang, pekerjaan tambahan, dan biaya perjalanan di luar area perlu dibahas terpisah. Mintalah rincian penawaran sebelum menyetujui pekerjaan.",
  },
  {
    question: "Apa saja yang perlu disiapkan sebelum menghubungi?",
    answer:
      "Siapkan jenis layanan, foto atau video singkat kondisi rumah, area lokasi, dan waktu kunjungan yang diinginkan. Informasi ini membantu menentukan apakah diperlukan pengecekan langsung.",
  },
  {
    question: "Bisakah saya meminta kunjungan di hari yang sama?",
    answer:
      "Sampaikan kebutuhan dan waktu yang diinginkan melalui WhatsApp. Kunjungan bergantung pada area serta ketersediaan tim dan baru terjadwal setelah mendapat konfirmasi. Website ini tidak menampilkan kalender ketersediaan langsung.",
  },
  {
    question: "Bagaimana kalau lokasi saya di luar area layanan?",
    answer:
      "Tetap tanyakan area kamu saat menghubungi. Pemilik usaha dapat mengonfirmasi jangkauan, kemungkinan biaya perjalanan, dan jadwal yang sesuai sebelum menerima pekerjaan.",
  },
];

export const navigation = [
  { label: "Beranda", href: "#beranda" },
  { label: "Layanan", href: "#layanan" },
  { label: "Tentang kami", href: "#tentang" },
  { label: "Cara kerja", href: "#cara-kerja" },
  { label: "FAQ", href: "#faq" },
];
