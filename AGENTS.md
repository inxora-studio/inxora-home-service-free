# Inxora Template Starter

## Scope

Repository ini fondasi satu template bisnis. Pilih konsep dan arah desain dari brief proyek sebelum membangun antarmuka. Jangan menganggap halaman placeholder sebagai desain final.

## Stack

Next.js App Router, React, strict TypeScript, Tailwind CSS 4. npm dengan package-lock.json. Node 22.18+.

## Konvensi

- Route dan metadata di src/app; gunakan Server Components secara default.
- Gunakan Client Components untuk interaksi yang memang memerlukannya.
- Data usaha di src/config/business.json; data konten di src/content.
- Elemen dasar di components/ui, struktur situs di components/layout, bagian halaman di components/sections.
- Fitur domain di src/features. Jangan memasukkan logika bisnis ke layout global.
- Semua kontak, aset, testimoni, dan klaim harus bersumber atau berlabel contoh.
- Mutu desain, aksesibilitas, dan mobile Free/Premium setara; perbedaan pada kelengkapan.
- Jangan mengirim source Premium dalam distribusi Free.
- Tambahkan integrasi, database, atau pustaka hanya bila ada kebutuhan nyata.
- Jangan memasukkan secrets, node_modules, .next, atau out ke Git.
- Pastikan sitemap hanya memuat route publik yang benar-benar ada.
- Setelah perubahan: npm run format, npm run check, npm run build.
- Jika menjanjikan hosting statis, jalankan npm run build:static dan uji hasilnya.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
