import business from "@/config/business.json";
import { ContactButton } from "@/components/ui/contact-button";
import { Icon } from "@/components/ui/icon";

export function Contact() {
  return (
    <section
      className="contact-section"
      id="kontak"
      aria-labelledby="contact-title"
    >
      <div className="container contact-grid">
        <div data-reveal>
          <p className="eyebrow">Your home. Our kind of care.</p>
          <h2 id="contact-title">
            Rumah nyaman
            <br />
            dimulai dari
            <br />
            <span>satu percakapan.</span>
          </h2>
        </div>
        <div className="contact-content" data-reveal data-reveal-delay="2">
          <span className="contact-large-icon">
            <Icon name="chat" />
          </span>
          <p>
            Ceritakan yang ingin kamu bereskan.
            <br />
            Kita cari langkah pertamanya bersama.
          </p>
          <ContactButton className="button button-light">
            <Icon name="chat" />
            {business.whatsapp ? "Chat via WhatsApp" : "Coba chat WhatsApp"}
            <Icon name="arrow-up" />
          </ContactButton>
          <div className="contact-hours">
            <Icon name="clock" />
            <span>
              {business.openingHours.length
                ? business.openingHours.join(" · ")
                : "Hubungi untuk menanyakan jam layanan."}
            </span>
          </div>
          {business.demo && (
            <p className="contact-demo">
              Preview template · Kontak dan jam layanan contoh.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
