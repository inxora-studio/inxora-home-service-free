# Inxora Home Service Free

## Design read

Landing page perawatan rumah untuk pemilik rumah Indonesia, dengan fotografi arsitektur besar dan bahasa visual editorial yang bersih, hangat, serta ramah. ENERGY 2 / RHYTHM 3 / MOTION 2. Antislop diterapkan selama implementasi sesuai pilihan pengguna. Pengguna menyetujui desain lalu meminta animasi yang halus; QA visual akhir dilakukan sendiri oleh pengguna.

## Arah dari pengguna

- Hero gambar rumah sebagai fokus, mengikuti komposisi lapang screenshot pertama.
- Screenshot kedua memberi referensi pengelompokan layanan, fotografi, dan FAQ, tanpa menyalin merek atau semua bagiannya.
- Referensi tambahan: https://dribbble.com/shots/27354585-Gardening-Lawn-Mowing-Home-Services-Website-Design. Halaman tidak dapat diakses alat riset; jangan mengklaim telah meninjau komposisinya.
- Pengguna memberi kebebasan menyesuaikan desain agar modern dan clean, dengan foto asli dari web serta struktur file yang rapi.
- Hanya satu landing page Free. Tidak ada akun, database, kalkulator, galeri proyek, atau sistem pemesanan.

## Keputusan visual dan alasannya

- Biru langit menyambung dengan foto rumah dan memberi suasana siang yang terbuka.
- Putih hangat dan charcoal menjaga tampilan ramah sekaligus keterbacaan teks.
- Terracotta menjadi satu aksen pada tindakan utama, terinspirasi warna kerja di referensi.
- Manrope memiliki bentuk geometris yang bersahabat dan judul besar yang mudah dibaca. Font lokal menghindari unduhan Google Fonts saat build.
- Foto hero memberi fokus utama; kartu foto layanan membantu jenis pekerjaan dikenali sebelum membaca detail.
- Bagian tentang memakai foto dan teks, proses memakai daftar, cakupan area memakai panel sederhana. Komposisi berubah sesuai kebutuhan konten.
- Spasi bervariasi: intro singkat, layanan lapang, proses ringkas, CTA penutup dominan.
- Radius 24px untuk hero, 16px untuk foto, 8px untuk kontrol membedakan konten dan tindakan.
- Ikon menggambarkan rumah, alat, udara, air, kebun, lokasi, dan navigasi sesuai konteks.
- Panah hanya sebagai penunjuk arah pada tautan berpindah bagian dan CTA layanan.
- Gradasi hanya menyambung langit hero dengan foto dan melindungi teks keterangan foto.
- Shadow hanya untuk dialog yang berada di atas halaman.
- Tema terang tetap sesuai foto siang dan arah dari pengguna. Tidak ada sakelar tema.
- Hero masuk bertahap agar judul terbaca lebih dulu, lalu deskripsi dan CTA. Foto settle satu kali, tanpa gerak berulang.
- Reveal satu kali saat scroll membantu perpindahan antarbagian; stagger kartu layanan dan langkah kerja menunjukkan urutan baca. Konten yang sudah terlihat tidak disembunyikan ulang.
- Hover, menu mobile, dialog, dan accordion memiliki transisi singkat untuk memberi umpan balik tindakan.
- prefers-reduced-motion mematikan animasi; konten tetap terlihat tanpa JavaScript, pada navigasi keyboard, dan saat dicetak. Tidak ada parallax, scroll-jacking, atau pustaka animasi tambahan.

## Konten dan perilaku

- Merek demo: Inxora Home Service. Layanan, tarif awal, area, dan jam operasional merupakan contoh yang dilabeli di halaman.
- Tidak ada testimoni, rating, jumlah pelanggan, atau klaim sertifikasi rekaan.
- Foto stok adalah ilustrasi layanan, bukan proyek atau anggota tim Inxora.
- CTA utama menuju kontak. Nomor WhatsApp kosong membuka pratinjau pesan berlabel demo dan tidak mengirim pesan ke nomor rekaan.
- Sesudah business.whatsapp diisi, CTA membuka wa.me dengan pesan sesuai layanan.
- FAQ membahas biaya tambahan, cakupan kerja, lokasi layanan, dan konfirmasi jadwal yang dibutuhkan sebelum menghubungi jasa rumah.
- Sumber aset dan lisensi dicatat di docs/ASSETS.md.

## Kriteria selesai

- Navigasi desktop dan mobile menuju bagian nyata.
- CTA bekerja, dialog ditutup dengan Escape, accordion dapat dioperasikan dengan keyboard.
- Foto dan font tersedia lokal. Tidak ada overflow horizontal di ponsel, tablet, atau desktop.
- Format, typecheck, tes starter, build produksi, dan pemeriksaan visual browser dijalankan.
