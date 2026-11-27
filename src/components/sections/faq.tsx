import { faqs } from "@/content/home";
import { Icon } from "@/components/ui/icon";

export function FAQ() {
  if (!faqs.length) return null;
  return (
    <section
      className="faq-section container section-space"
      id="faq"
      aria-labelledby="faq-title"
    >
      <div className="faq-intro" data-reveal>
        <p className="eyebrow">
          <span className="section-marker" />
          Biar makin jelas
        </p>
        <h2 id="faq-title">
          Tanya dulu.
          <br />
          <span>Tenang kemudian.</span>
        </h2>
        <p>
          Beberapa hal yang perlu kamu tahu
          <br />
          sebelum kami datang ke rumah.
        </p>
        <a className="text-link" href="#kontak">
          Punya pertanyaan lain? <Icon name="arrow" />
        </a>
      </div>
      <div className="faq-list" data-reveal data-reveal-delay="1">
        {faqs.map((faq, index) => (
          <details
            className="faq-item"
            key={faq.question}
            name="home-faq"
            open={index === 0}
          >
            <summary>
              {faq.question}
              <span className="faq-toggle">
                <Icon name="plus" />
              </span>
            </summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
