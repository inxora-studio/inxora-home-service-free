import business from "@/config/business.json";
import { Icon } from "@/components/ui/icon";

export function ServiceArea() {
  return (
    <section
      className="area-section container"
      id="area"
      aria-labelledby="area-title"
      data-reveal
    >
      <div className="area-heading">
        <span className="area-icon">
          <Icon name="location" />
        </span>
        <div>
          <p className="eyebrow">Dekat dengan rumahmu</p>
          <h2 id="area-title">Kami datang ke areamu.</h2>
        </div>
      </div>
      <div className="area-content">
        <div className="area-tags">
          {business.serviceAreas.length ? (
            business.serviceAreas.map((area) => <span key={area}>{area}</span>)
          ) : (
            <p>Tanyakan jangkauan layanan melalui kontak kami.</p>
          )}
        </div>
        <p>
          {business.demo ? "Contoh cakupan layanan. " : ""}Belum ada areamu?{" "}
          <a href="#kontak">Tanyakan dulu, yuk.</a>
        </p>
      </div>
    </section>
  );
}
