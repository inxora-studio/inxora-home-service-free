import Image from "next/image";
import { commitments } from "@/content/home";
import { Icon } from "@/components/ui/icon";

export function About() {
  return (
    <section
      className="about-section"
      id="tentang"
      aria-labelledby="about-title"
    >
      <div className="container about-grid">
        <div className="about-visual" data-reveal="image">
          <Image
            src="/images/living-room.webp"
            alt="Ruang keluarga yang rapi dengan sofa, cahaya alami, dan tanaman hijau"
            fill
            sizes="(min-width: 900px) 45vw, 100vw"
          />
          <div className="about-photo-caption">
            <span>
              Small details.
              <br />A big difference.
            </span>
            <Icon name="home" />
          </div>
        </div>
        <div className="about-content" data-reveal data-reveal-delay="1">
          <p className="eyebrow">
            <span className="section-marker" />
            Tentang Inxora
          </p>
          <h2 id="about-title">
            Karena rumah
            <br />
            bukan sekadar
            <br />
            <span>tempat tinggal.</span>
          </h2>
          <p className="about-intro">
            Ada pagi yang dimulai di sini. Ada cerita saat pulang. Kami ingin
            urusan merawat rumah terasa lebih ringan, supaya kamu punya waktu
            untuk menikmatinya.
          </p>
          <div className="commitments">
            {commitments.map((item) => (
              <div className="commitment" key={item.title}>
                <span className="check-icon">
                  <Icon name="check" />
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <a className="text-link" href="#cara-kerja">
            Begini cara kami bekerja <Icon name="arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}
