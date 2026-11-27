"use client";

import { useId, useRef, useState } from "react";
import type { ReactNode } from "react";
import business from "@/config/business.json";
import { getWhatsAppUrl } from "@/lib/contact";
import { Icon } from "./icon";

export function ContactButton({
  children,
  service,
  className = "button button-dark",
  label,
}: {
  children: ReactNode;
  service?: string;
  className?: string;
  label?: string;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const [copyStatus, setCopyStatus] = useState("");
  const message = `Halo ${business.name}, saya ingin bertanya tentang ${service || "layanan perawatan rumah"}. Lokasi saya di [area]. Apakah bisa dibantu untuk cek kebutuhan dan perkiraan biayanya?`;
  const url = getWhatsAppUrl(business.whatsapp, message);

  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(message);
      setCopyStatus("Pesan disalin. Kamu bisa menyimpannya sebagai contoh.");
    } catch {
      setCopyStatus(
        "Belum bisa menyalin otomatis. Pilih dan salin teks pesan di atas.",
      );
    }
  }

  if (url)
    return (
      <a
        className={className}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
      >
        {children}
      </a>
    );

  return (
    <>
      <button
        type="button"
        className={className}
        aria-label={label}
        aria-haspopup="dialog"
        onClick={() => {
          setCopyStatus("");
          dialog.current?.showModal();
        }}
      >
        {children}
      </button>
      <dialog
        className="contact-dialog"
        ref={dialog}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            const rect = event.currentTarget.getBoundingClientRect();
            if (
              event.clientX < rect.left ||
              event.clientX > rect.right ||
              event.clientY < rect.top ||
              event.clientY > rect.bottom
            )
              dialog.current?.close();
          }
        }}
        aria-labelledby={titleId}
      >
        <div className="dialog-topline">
          <span className="eyebrow">Pratinjau WhatsApp</span>
          <form method="dialog">
            <button className="icon-button" aria-label="Tutup pratinjau">
              <Icon name="close" />
            </button>
          </form>
        </div>
        <span className="dialog-chat-icon">
          <Icon name="chat" />
        </span>
        <h2 id={titleId}>Mulai dari cerita kecil.</h2>
        <p className="dialog-description">
          Ini contoh pesan awal untuk membicarakan kebutuhan rumahmu.
        </p>
        <p className="message-preview">{message}</p>
        <button
          className="button button-dark dialog-copy"
          onClick={copyMessage}
        >
          <Icon name="copy" /> Salin contoh pesan
        </button>
        <p className="copy-status" role="status">
          {copyStatus}
        </p>
        <p className="demo-disclosure">
          Mode demo. Kontak usaha belum diaktifkan dan tidak ada pesan yang
          dikirim.
        </p>
      </dialog>
    </>
  );
}
