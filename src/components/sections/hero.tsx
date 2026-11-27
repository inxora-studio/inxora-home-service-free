import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Icon } from "@/components/ui/icon";

export function Hero() {
  return (
    <section className="hero" id="beranda" aria-labelledby="hero-title">
      <Image
        className="hero-image"
        src="/images/hero-house.webp"
        alt="Rumah modern berwarna putih dengan halaman hijau dan pepohonan di bawah langit biru"
        fill
        sizes="100vw"
        preload
      />
      <div className="hero-sky" />
      <Header />
      <div className="hero-content">
        <p className="hero-eyebrow">A little care. A happier home.</p>
        <h1 id="hero-title">
          Rumah terawat.
          <br />
          Hidup lebih nyaman.
        </h1>
        <p className="hero-description">
          Dari bersih-bersih sampai perbaikan kecil,
          <br className="desktop-break" /> bantu rumahmu jadi tempat terbaik
          untuk pulang.
        </p>
        <a className="button button-accent" href="#layanan">
          Temukan layananmu <Icon name="arrow" />
        </a>
      </div>
      <div className="hero-bottom">
        <div className="hero-note">
          <span className="hero-note-icon">
            <Icon name="home" />
          </span>
          <span>
            <strong>Rumahmu, sepenuh hati.</strong>
            <span>Perhatian untuk setiap sudutnya.</span>
          </span>
        </div>
        <a className="hero-scroll" href="#layanan">
          <span>Kenali layanan kami</span>
          <span className="scroll-circle">
            <Icon name="arrow" />
          </span>
        </a>
      </div>
    </section>
  );
}
