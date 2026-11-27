import { steps } from "@/content/home";

export function Process() {
  return (
    <section
      className="process-section container section-space"
      id="cara-kerja"
      aria-labelledby="process-title"
    >
      <div className="process-intro" data-reveal>
        <p className="eyebrow">
          <span className="section-marker" />
          Nggak perlu ribet
        </p>
        <h2 id="process-title">
          Dari “nanti dulu”
          <br />
          jadi <span>“akhirnya beres.”</span>
        </h2>
        <p>
          Mulai dengan cerita. Selebihnya,
          <br />
          kita bicarakan dan kerjakan bersama.
        </p>
      </div>
      <ol className="process-list">
        {steps.map((step, index) => (
          <li key={step.title} data-reveal data-reveal-delay={index}>
            <span className="step-number">0{index + 1}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
