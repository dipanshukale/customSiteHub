import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const links = [
  { label: "Work", path: "/work" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  /* Lock body scroll when menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  /* Close menu on ESC */
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
              <button
                onClick={() => navigate("/")}
                className="text-[13px] tracking-[0.35em] uppercase text-white/85 select-none"
              >
                Custom<span className="text-white/40">Site</span>Hub
              </button>

              {/* DESKTOP LINKS */}
              <div className="hidden md:flex gap-14 text-[12px] tracking-widest text-white/50">
                {links.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => navigate(link.path)}
                    className="hover:text-white transition"
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              {/* DESKTOP CTA */}
              <div className="hidden md:block">
                <button
                  onClick={() => navigate("/contact")}
                  className="rounded-full border border-white/10 px-6 py-2 text-[11px]
                  tracking-widest text-white/80 hover:border-white/30 transition"
                >
                  START PROJECT
                </button>
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

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-[800ms]
        ease-[cubic-bezier(.19,1,.22,1)]
        ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {/* BACKDROP */}
        <div
          onClick={() => setMenuOpen(false)}
          className="absolute inset-0 bg-black/95"
        />

        {/* MENU CONTENT */}
        <div
          className={`relative z-10 flex h-full flex-col items-center
          justify-center gap-12 text-center transition-all duration-[900ms]
          ${menuOpen ? "translate-y-0" : "translate-y-6"}`}
        >
          {links.map((link, i) => (
            <button
              key={link.label}
              onClick={() => {
                navigate(link.path);
                setMenuOpen(false);
              }}
              style={{ transitionDelay: `${i * 80}ms` }}
              className="text-[28px] sm:text-[32px] font-light
              tracking-[0.25em] text-white/85 hover:text-white transition"
            >
              {link.label}
            </button>
          ))}

          <button
            onClick={() => {
              navigate("/contact");
              setMenuOpen(false);
            }}
            className="mt-16 rounded-full border border-white/15 px-12 py-3
            text-[11px] tracking-widest text-white/85 hover:bg-white/5 transition"
          >
            START PROJECT
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
