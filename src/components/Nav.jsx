import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "../data/portfolio";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleLinkClick = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-ink/90 backdrop-blur border-b border-ink-line" : "bg-transparent"
      }`}
    >
      <nav className="container-page flex items-center justify-between h-16 md:h-[72px]" aria-label="Primary">
        <a
          href="#home"
          className="font-display text-lg text-bone tracking-tight"
          onClick={handleLinkClick}
        >
          Shahnas<span className="text-brass">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="link-underline text-sm text-bone-dim hover:text-bone transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 -mr-2 text-bone"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-out border-b border-ink-line ${
          open ? "max-h-[420px]" : "max-h-0 border-b-0"
        }`}
      >
        <ul className="container-page flex flex-col py-2">
          {nav.map((item) => (
            <li key={item.href} className="border-t border-ink-line first:border-t-0">
              <a
                href={item.href}
                onClick={handleLinkClick}
                className="block py-3.5 text-base text-bone-dim hover:text-bone transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
