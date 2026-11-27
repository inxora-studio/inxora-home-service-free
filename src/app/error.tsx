"use client";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main className="status-page">
      <h1>Halaman belum bisa dimuat</h1>
      <p>Silakan coba memuat halaman kembali.</p>
      <button
        className="button button-dark"
        type="button"
        onClick={() => reset()}
      >
        Muat ulang
      </button>
    </main>
  );
}
