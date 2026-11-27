import business from "@/config/business.json";

export function Wordmark() {
  return (
    <span className="wordmark">
      <span className="wordmark-name">
        {business.shortName}
        <span className="wordmark-dot">.</span>
      </span>
      <span className="wordmark-description">HOME SERVICE</span>
    </span>
  );
}
