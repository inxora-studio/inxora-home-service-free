# Inxora Home Service Free

Landing page satu halaman untuk jasa perawatan rumah. Desain berbahasa Indonesia dengan hero rumah, empat layanan, harga awal, pengenalan usaha, proses kerja, area layanan, FAQ, dan kontak WhatsApp.

Foto asli dari Unsplash/Pexels disimpan sebagai WebP lokal. Font Manrope juga disimpan lokal. Sumber dan lisensi aset ada di [docs/ASSETS.md](docs/ASSETS.md).

## Stack

Next.js 16 App Router, React 19, TypeScript strict, Tailwind CSS 4, pemeriksaan TypeScript, dan Prettier. npm adalah package manager utama; package-lock.json dikomit. Node.js 22.18 atau lebih baru diperlukan untuk menjalankan pengujian TypeScript.

## Menjalankan project

```powershell
npm.cmd ci
npm.cmd run dev
```

Buka URL Local yang dicetak Next.js. Di Windows yang memblokir npm.ps1, gunakan npm.cmd seperti contoh di atas. Salin .env.example menjadi .env.local ketika menyiapkan URL produksi.

## Mengganti konten

- `src/config/business.json`: nama, nomor WhatsApp, area, dan jam operasional. Isi nomor asli untuk mengaktifkan tautan WhatsApp; nomor kosong menampilkan pratinjau pesan tanpa mengirim apa pun.
- `src/content/home.ts`: layanan, tarif, teks, proses, FAQ, dan navigasi.
- `public/images/`: enam foto WebP. Pertahankan nama file atau ubah path pada konten dan komponen terkait.
- `src/app/globals.css`: warna, tipografi, komposisi, dan breakpoint.
- `src/app/motion.css`: durasi animasi hero, reveal scroll, menu, dialog, dan FAQ.
- `src/components/ui/scroll-motion.tsx`: observer reveal satu kali, tanpa scroll listener atau pustaka animasi tambahan.
- `src/components/sections/`: setiap bagian halaman dalam file sendiri.

Layanan, harga, area, dan jam operasional awal adalah contoh. Ganti dengan data usaha yang sah, lalu set `demo` menjadi `false`. Foto stok bukan dokumentasi proyek atau tim Inxora. Tidak ada rating atau testimoni rekaan.

## Animasi

Hero masuk bertahap, foto settle satu kali, dan bagian di bawahnya muncul ringan saat masuk viewport. Kartu layanan dan langkah kerja memakai stagger pendek. Hover, menu mobile, dialog WhatsApp, dan FAQ memiliki transisi. Reduced motion mematikan animasi; konten tetap tersedia tanpa JavaScript dan pada navigasi keyboard.

QA visual akhir dilakukan pengguna sesuai instruksi terakhir. Status pemeriksaan kode ada di [docs/VALIDATION.md](docs/VALIDATION.md).

## Struktur

- src/app: route, layout, metadata, dan halaman status Next.js.
- src/components/ui: elemen antarmuka dasar yang dipakai ulang.
- src/components/layout: header, footer, dan navigasi milik template.
- src/components/sections: bagian halaman sesuai kebutuhan bisnis.
- src/config: identitas usaha, URL, dan identitas edisi.
- src/content: data menu, produk, layanan, proyek, atau kamar.
- src/features: fitur khusus seperti pencarian atau ringkasan pesanan.
- src/hooks: hook React yang dipakai lebih dari satu komponen.
- src/lib: helper kontak, format mata uang, URL, dan metadata.
- src/types: tipe domain yang dibutuhkan template.
- public/images dan public/fonts: aset milik proyek dengan izin distribusi.
- scripts: inisialisasi template dan build statis lintas sistem operasi.
- tests: pengujian konfigurasi kontak dan inisialisasi.
- docs: panduan arsitektur, pengembangan, edisi, distribusi, dan GitHub.

## Perintah

- npm run dev: development.
- npm run check: typecheck, pengujian, dan pengecekan format.
- npm run format: merapikan format.
- npm run build: production build Next.js.
- npm start: menjalankan production build.
- npm run build:static: membuat folder out untuk hosting statis.

## Dokumen

- [Arsitektur](docs/ARCHITECTURE.md)
- [Membuat template baru](docs/CREATE-TEMPLATE.md)
- [GitHub template repository](docs/GITHUB.md)
- [Design brief](docs/DESIGN-BRIEF.md)
- [Free dan Premium](docs/FREE-PREMIUM.md)
- [Deployment](docs/DEPLOYMENT.md)
- [Checklist rilis](docs/RELEASE-CHECKLIST.md)

Kontak kosong tidak membuat tautan WhatsApp. Metadata memakai placeholder yang harus diganti. Indexing default nonaktif untuk mencegah demo diterbitkan sebagai website bisnis asli.

Edisi Free ini berisi satu landing page dengan kontak WhatsApp setelah dikonfigurasi. Tidak ada CMS, database, autentikasi, pembayaran, formulir booking, kalender ketersediaan, galeri proyek, atau source fitur Premium tersembunyi. Permintaan kunjungan memerlukan konfirmasi pemilik usaha.
