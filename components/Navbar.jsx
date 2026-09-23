"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useLang();
  const n = t.nav;

  const links = [
    { label: n.expertise, href: "#expertise" },
    { label: n.products, href: "#produit" },
    { label: n.faq, href: "#faq" },
  ];

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      background: "var(--bg)",
      borderBottom: "1px solid var(--border)",
      transition: "background 0.2s, border-color 0.2s",
    }}>
      <nav className="sect-inner" style={{ maxWidth: 1152, margin: "0 auto", padding: "0 2.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", flexShrink: 0 }}>
          <img src="/assets/logo-icon.png" alt="NEXIUM.AI" width={28} height={28} />
          <span style={{ fontWeight: 700, fontSize: 13, letterSpacing: "-0.01em", color: "var(--fg)" }}>NEXIUM.AI</span>
        </Link>

        <div style={{ alignItems: "center", gap: 32 }} className="nav-desktop hidden md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href}
              style={{ fontSize: 13, fontWeight: 400, color: "var(--fg-2)", transition: "color 0.15s", textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--fg)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--fg-2)")}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div style={{ alignItems: "center", gap: 10 }} className="nav-desktop hidden md:flex">
          <a href="mailto:ai.nexium@gmail.com"
            style={{ fontSize: 13, fontWeight: 400, color: "var(--fg-2)", textDecoration: "none", transition: "color 0.15s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--fg)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--fg-2)")}
          >
            {n.contact}
          </a>
          <a href="https://console.nexiumai.io" target="_blank" rel="noopener noreferrer"
            className="btn-slide-fill"
            style={{ fontSize: 13, fontWeight: 600, padding: "7px 16px", borderRadius: 6, textDecoration: "none" }}
          >
            {n.cta}
          </a>
        </div>

        <button className="md:hidden" style={{ color: "var(--fg)", background: "none", border: "none", cursor: "pointer", padding: 4 }} onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div style={{ background: "var(--bg)", borderTop: "1px solid var(--border)", padding: "20px 24px", display: "flex", flexDirection: "column", gap: 16 }} className="md:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ fontSize: 14, color: "var(--fg-2)", textDecoration: "none" }}>{l.label}</a>
          ))}
          <a href="https://console.nexiumai.io" target="_blank" rel="noopener noreferrer"
            className="btn-slide-fill"
            style={{ fontSize: 13, fontWeight: 600, padding: "10px 20px", borderRadius: 6, textAlign: "center", textDecoration: "none" }}
          >
            {n.cta}
          </a>
        </div>
      )}
    </header>
  );
}
