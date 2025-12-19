import { useEffect, useState } from "react";

const links = ["Work", "Services", "About", "Contact"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  /* Lock body scroll when menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  /* Close menu on ESC key */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        <div className="mx-auto mt-6 w-[92%] max-w-6xl">
          <nav className="pointer-events-auto rounded-full bg-black/55 backdrop-blur-xl px-6 py-4 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
            <div className="flex items-center justify-between">

              {/* LOGO */}
              <span className="text-[13px] tracking-[0.35em] uppercase text-white/85 select-none">
                CUSTOMSITEHUB
              </span>

              {/* DESKTOP LINKS */}
              <div className="hidden md:flex gap-14 text-[12px] tracking-widest text-white/50">
                {links.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="hover:text-white transition"
                  >
                    {link}
                  </a>
                ))}
              </div>

              {/* DESKTOP CTA */}
              <div className="hidden md:block">
                <a
                  href="#contact"
                  className="rounded-full border border-white/10 px-6 py-2 text-[11px] tracking-widest text-white/80 hover:border-white/30 transition"
                >
                  START PROJECT
                </a>
              </div>

              {/* MOBILE MENU TOGGLE */}
              <button
                onClick={() => setMenuOpen((p) => !p)}
                className="md:hidden text-[11px] tracking-widest text-white/70"
              >
                {menuOpen ? "CLOSE" : "MENU"}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* ================= MOBILE FULLSCREEN MENU ================= */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-[800ms] ease-[cubic-bezier(.19,1,.22,1)]
        ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {/* BACKGROUND OVERLAY (click to close) */}
        <div
          onClick={() => setMenuOpen(false)}
          className="absolute inset-0 bg-black/95"
        />

        {/* MENU CONTENT */}
        <div
          className={`relative z-10 flex h-full flex-col items-center justify-center gap-12 text-center transition-all duration-[900ms]
          ${menuOpen ? "translate-y-0" : "translate-y-6"}`}
        >
          {links.map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{ transitionDelay: `${i * 80}ms` }}
              className="text-[28px] sm:text-[32px] font-light tracking-[0.25em] text-white/85 hover:text-white transition"
            >
              {link}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-16 rounded-full border border-white/15 px-12 py-3 text-[11px] tracking-widest text-white/85 hover:bg-white/5 transition"
          >
            START PROJECT
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
