import type { SVGProps } from "react";
import type { ServiceIcon } from "@/types/home-service";

type IconName =
  | ServiceIcon
  | "arrow"
  | "arrow-up"
  | "check"
  | "home"
  | "location"
  | "clock"
  | "chat"
  | "plus"
  | "close"
  | "menu"
  | "copy";

const paths: Record<IconName, React.ReactNode> = {
  arrow: (
    <>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </>
  ),
  "arrow-up": <path d="M6 18 18 6M6 6h12v12" />,
  check: <path d="m5 12 4 4L19 6" />,
  home: (
    <>
      <path d="m3 10 9-7 9 7M5 9v12h14V9" />
      <path d="M9 21v-7h6v7" />
    </>
  ),
  cleaning: (
    <>
      <path d="m14 3-5 9M7 11l8 4-4 7-8-4 4-7ZM6 17l3 2M18 4v4M16 6h4M19 12v4M17 14h4" />
    </>
  ),
  tools: (
    <>
      <path d="m14 6 4 4M3 21l6-6M14 3a6 6 0 0 0-7 8L3 15l6 6 4-4a6 6 0 0 0 8-7l-4 4-7-7 4-4Z" />
    </>
  ),
  water: (
    <>
      <path d="M12 2S5 10 5 15a7 7 0 0 0 14 0C19 10 12 2 12 2Z" />
      <path d="M9 15a3 3 0 0 0 3 3" />
    </>
  ),
  garden: (
    <>
      <path d="M12 22V11M12 15C5 15 3 11 3 5c6 0 9 3 9 10ZM12 11c0-6 3-9 9-9 0 6-3 9-9 9Z" />
      <path d="m7 9 5 6m5-9-5 5" />
    </>
  ),
  location: (
    <>
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  chat: (
    <>
      <path d="M21 11.5a9 9 0 0 1-13 8L3 21l1.5-5A9 9 0 1 1 21 11.5Z" />
      <path d="M8 10h8M8 14h5" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  close: <path d="m6 6 12 12M6 18 18 6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  copy: (
    <>
      <rect x="8" y="8" width="12" height="13" rx="2" />
      <path d="M15 8V3H3v13h5" />
    </>
  ),
};

export function Icon({
  name,
  ...props
}: SVGProps<SVGSVGElement> & { name: IconName }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
