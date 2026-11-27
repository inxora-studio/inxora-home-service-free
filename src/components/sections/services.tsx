import Image from "next/image";
import { services } from "@/content/home";
import business from "@/config/business.json";
import { Icon } from "@/components/ui/icon";
import { ContactButton } from "@/components/ui/contact-button";
import { formatRupiah } from "@/lib/format";

export function Services() {
  return (
    <>
      <nav className="service-shortcuts container" aria-label="Jenis layanan">
        {services.map((service) => (
          <a href={`#${service.id}`} key={service.id}>
            <Icon name={service.icon} />
            <span>{service.shortName}</span>
            <Icon name="arrow-up" className="shortcut-arrow" />
          </a>
        ))}
      </nav>
      <section
        className="services-section container section-space"
        id="layanan"
        aria-labelledby="services-title"
      >
        <div className="section-heading" data-reveal>
          <div>
            <p className="eyebrow">
              <span className="section-marker" />
              Untuk setiap sudut rumah
            </p>
            <h2 id="services-title">
              Ada yang perlu dibereskan?
              <br />
              <span>Kami bantu urus.</span>
            </h2>
          </div>
          <p className="section-intro">
            Pilih kebutuhan rumahmu.
            <br />
            Mulai dari satu hal kecil yang bikin
            <br className="desktop-break" /> harimu lebih nyaman.
          </p>
        </div>
        {services.length ? (
          <div className="services-grid">
            {services.map((service, index) => (
              <article
                className="service-card"
                key={service.id}
                id={service.id}
                data-reveal
                data-reveal-delay={index}
              >
                <div className="service-photo">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(min-width: 1100px) 25vw, (min-width: 600px) 50vw, 100vw"
                  />
                  <span className="service-photo-icon">
                    <Icon name={service.icon} />
                  </span>
                </div>
                <div className="service-title-row">
                  <h3>{service.name}</h3>
                  <span>{service.number}</span>
                </div>
                <p className="service-description">{service.description}</p>
                <div className="service-card-bottom">
                  <p>
                    <span>Mulai dari</span>
                    <strong>
                      {formatRupiah(service.price)}
                      <small> / {service.unit}</small>
                    </strong>
                  </p>
                  <ContactButton
                    className="service-action"
                    service={service.name}
                    label={`Tanya layanan ${service.name}`}
                  >
                    <Icon name="arrow-up" />
                  </ContactButton>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="empty-state">
            Daftar layanan sedang diperbarui. Kamu tetap bisa menghubungi kami
            untuk bertanya.
          </p>
        )}
        <p className="price-note">
          {business.demo && <span className="sample-label">Harga contoh</span>}{" "}
          Harga awal untuk lingkup dasar. Material dan pekerjaan tambahan
          dibahas sebelum mulai.
        </p>
      </section>
    </>
  );
}
