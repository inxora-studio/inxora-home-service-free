# Validasi Inxora Home Service Free

Diperiksa pada 1 November 2026 dengan Node.js 22.22.2 dan Next.js 16.4.3.

- PASS: npm ci dari package-lock.json memasang 49 paket. Tidak ada dependensi baru untuk animasi.
- PASS: npm run format dan npm run check. TypeScript, enam tes konfigurasi/kontak/inisialisasi, dan Prettier berhasil.
- PASS: npm run build. Beranda, halaman 404, robots, dan sitemap berhasil diprerender.
- PASS: npm run build:static setelah perubahan animasi. Folder out berisi HTML, CSS, JavaScript, font, dan foto lokal.
- PASS: pemeriksaan output statis menemukan 11 tujuan anchor dan 18 URL aset lokal yang semuanya tersedia.
- PASS: index.html, 404.html, robots.txt, dan sitemap.xml tersedia. HTML demo berisi noindex.
- PASS: HTML awal tidak berisi data-motion-state="pending", sehingga isi halaman tetap terlihat sebelum JavaScript aktif.
- PASS: HTTP beranda pada development server mengembalikan 200 sebelum perubahan animasi.
- PASS: git diff --check tidak menemukan kesalahan whitespace.

## Delivery gate, pemeriksaan sumber

- R-17/R-18/R-36/R-38 PASS: tidak ada rating, testimoni, sertifikasi, atau angka pelanggan rekaan. Harga, area, jam operasional, dan foto stok dijelaskan sebagai contoh.
- R-23/R-37 PASS: arah visual berasal dari screenshot dan brief pengguna; pengguna menyetujui desain kemudian meminta tambahan animasi.
- R-24 PASS: seluruh anchor navigasi ditemukan dalam HTML ekspor.
- R-25 PASS untuk pasangan warna solid yang dihitung: ink/paper 14,15:1; muted/paper 5,66:1; muted/sand 5,12:1; white/terracotta 5,65:1; judul besar highlight/terracotta 3,57:1; ink/sky 11,98:1. Penempatan teks pada foto masih termasuk QA visual pengguna.
- R-26/R-32 PASS pada inspeksi kode: anchor menuju bagian nyata, menu memiliki aria-expanded, accordion memakai details/summary, dialog memakai showModal dan form method="dialog". Fokus terlihat dan Escape ditangani pada menu serta dialog native. Ini bukan klaim click-through browser.
- R-27 PASS pada inspeksi kode: route loading/error/404 dan fallback daftar layanan/area kosong tersedia. Penyalinan pesan memiliki status berhasil dan gagal.
- R-33 PASS: perubahan UI ditulis langsung pada source; pemrosesan aset hanya mengonversi file foto.
- R-19/Purpose-Gate PASS: alasan gerak dicatat di DESIGN-BRIEF.md. Hero mengurutkan perhatian, reveal menunjukkan pergantian bagian, hover dan accordion memberi umpan balik.
- Liveliness PASS pada rancangan: ENERGY 2 / RHYTHM 3 / MOTION 2, fokus hero rumah, variasi komposisi, dan terracotta sebagai aksen tindakan.
- Resilience PASS pada inspeksi kode: reduced motion menonaktifkan gerak, observer hanya memperkaya konten setelah mount, focusin membuka konten terfokus, cleanup melepas observer dan listener, dan print menampilkan seluruh konten.

## QA visual dan interaksi

Pengguna menyatakan desain sudah bagus dan memilih melakukan preview/QA sendiri. Computer Use dihentikan oleh pengguna; tidak ada browser automation lanjutan. Satu tampilan desktop bagian Tentang sempat diperiksa sebelum penghentian. Animasi final, menu mobile, semua tombol, penyalinan pesan, accordion, dialog, console browser, dan tampilan lintas ukuran belum diklaim lulus pengujian visual/click-through.

Tidak ada pesan WhatsApp yang dikirim. Nomor usaha kosong memakai pratinjau demo; isi nomor usaha asli sebelum penggunaan produksi.
