"use client";

import { useEffect, useRef, useState } from "react";
import { navigation } from "@/content/home";
import { Icon } from "@/components/ui/icon";
import { Wordmark } from "@/components/ui/wordmark";

export function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="site-header">
      <a
        href="#beranda"
        className="brand-link"
        aria-label="Inxora Home Service, beranda"
        onClick={() => setOpen(false)}
      >
        <Wordmark />
      </a>
      <nav className="desktop-nav" aria-label="Navigasi utama">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="header-contact" href="#kontak">
        Yuk, konsultasi{" "}
        <span className="header-contact-icon">
          <Icon name="arrow" />
        </span>
      </a>
      <button
        className="mobile-menu-toggle"
        type="button"
        ref={toggle}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen(!open)}
      >
        Menu <Icon name={open ? "close" : "menu"} />
      </button>
      <nav
        id="mobile-navigation"
        className="mobile-nav"
        hidden={!open}
        aria-label="Navigasi ponsel"
      >
        {navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
            <Icon name="arrow" />
          </a>
        ))}
        <a href="#kontak" onClick={() => setOpen(false)}>
          Yuk, konsultasi
          <Icon name="chat" />
        </a>
      </nav>
    </header>
  );
}
