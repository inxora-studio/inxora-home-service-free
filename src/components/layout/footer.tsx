import { Wordmark } from "@/components/ui/wordmark";
import { Icon } from "@/components/ui/icon";
import business from "@/config/business.json";

export function Footer() {
  return (
    <footer className="site-footer container">
      <div className="footer-main">
        <div>
          <a
            href="#beranda"
            className="brand-link"
            aria-label="Inxora Home Service, kembali ke beranda"
          >
            <Wordmark />
          </a>
          <p>Sedikit perhatian, banyak kenyamanan.</p>
        </div>
        <nav aria-label="Navigasi footer">
          <a href="#layanan">Layanan</a>
          <a href="#area">Area layanan</a>
          <a href="#faq">FAQ</a>
          <a href="#kontak">Hubungi kami</a>
        </nav>
        <a className="back-to-top" href="#beranda" aria-label="Kembali ke atas">
          <Icon name="arrow-up" />
        </a>
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} {business.name}.
        </span>
        <span>Free template by Inxora Studio</span>
      </div>
      {business.demo && (
        <p className="footer-demo">
          Website contoh. Layanan, harga, area, dan jam operasional adalah
          ilustrasi. Foto stok bukan dokumentasi pekerjaan Inxora.
        </p>
      )}
    </footer>
  );
}
