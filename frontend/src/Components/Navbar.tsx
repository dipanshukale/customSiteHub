import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  { label: "Work", path: "/work" },
  { label: "services", path: "/service" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shadow, setShadow] = useState(false);
  const navigate = useNavigate();

  // Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  // Close menu on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Add shadow on scroll for premium depth effect
  useEffect(() => {
    const handleScroll = () => setShadow(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ================= NAVBAR ================= */}
  <header className="fixed top-0 left-0 right-0 z-50 w-full">
  <div className="mx-auto w-[92%] max-w-6xl">
    <nav
      className={`
        flex items-center justify-between
        rounded-full
        px-8 py-4 mt-3
        transition-all duration-500
        border border-white/5

        ${
          shadow
            ? "bg-black/90 shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
            : "bg-black/55 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
        }
      `}
    >

            {/* LOGO */}
            <button
              onClick={() => navigate("/")}
              className="text-[13px] sm:text-[14px] tracking-[0.35em] uppercase text-white/85 select-none font-semibold"
            >
              Custom<span className="text-white/40">Site</span>Hub
            </button>

            {/* DESKTOP LINKS */}
            <div className="hidden md:flex gap-14 text-[12px] tracking-widest text-white/60">
              {links.map((link) => (
                <button
                  key={link.label}
                  onClick={() => navigate(link.path)}
                  className="hover:text-white transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-pink-400 after:via-purple-400 after:to-indigo-400 after:transition-all after:duration-500 hover:after:w-full"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* DESKTOP CTA */}
            <div className="hidden md:block">
              <button
                onClick={() => navigate("/startproject")}
                className="rounded-full border border-white/20 px-6 py-2 text-[11px] tracking-widest text-white/80 hover:bg-white/5 hover:border-white/40 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                START PROJECT
              </button>
            </div>

            {/* MOBILE MENU TOGGLE */}
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="md:hidden text-white/70 hover:text-white transition-all duration-300"
            >
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
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
          className="absolute inset-0 bg-black/95 backdrop-blur-md"
        />

        {/* MENU CONTENT */}
        <div
          className={`relative z-10 flex h-full flex-col items-center justify-center gap-12 text-center transition-all duration-[900ms] ${
            menuOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          {links.map((link, i) => (
            <button
              key={link.label}
              onClick={() => {
                navigate(link.path);
                setMenuOpen(false);
              }}
              style={{ transitionDelay: `${i * 80}ms` }}
              className="text-[28px] sm:text-[32px] font-light tracking-[0.25em] text-white/85 hover:text-white transition-all duration-300"
            >
              {link.label}
            </button>
          ))}

          <button
            onClick={() => {
              navigate("/startproject");
              setMenuOpen(false);
            }}
            className="mt-16 rounded-full border border-white/15 px-12 py-3 text-[11px] tracking-widest text-white/85 hover:bg-white/5 transition-all duration-300"
          >
            START PROJECT
          </button>
        </div>
      </div>

      {/* ================= TOP SPACING FOR PAGE CONTENT ================= */}
      <div className="pt-[100px]" />
    </>
  );
};

export default Navbar;
