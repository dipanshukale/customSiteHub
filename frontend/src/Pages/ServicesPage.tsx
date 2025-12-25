import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import EyeBot from "../Components/EyeBot";
import Footer from "../Components/Footer";

/* ---------------- DATA ---------------- */

const services = [
  {
    eyebrow: "Core",
    title: "Web Development",
    desc: "High-performance websites engineered for clarity, scale, and speed.",
    more:
      "We build modern React & MERN systems with performance-first architecture, clean UI, and long-term maintainability.",
    image: "/web development.jpg",
  },
  {
    eyebrow: "Engineering",
    title: "Product Development",
    desc: "From MVPs to production-grade platforms.",
    more:
      "Architecture, APIs, authentication, dashboards, and deployments — designed for real-world growth.",
    image: "/product.jpg",
  },
  {
    eyebrow: "Growth",
    title: "Digital Marketing",
    desc: "SEO-ready builds and conversion-focused UX.",
    more:
      "Analytics-driven UX strategy, performance marketing, and measurable outcomes without vanity metrics.",
    image: "/digital growth.jpg",
  },
  {
    eyebrow: "Creative",
    title: "Motion & Video",
    desc: "Cinematic visuals that elevate brand perception.",
    more:
      "Premium motion design and storytelling for digital brands that want to feel confident and modern.",
    image: "/video editing.jpg",
  },
];

/* ---------------- COMPONENT ---------------- */

export default function Services() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative bg-black px-5 sm:px-10 py-28 text-white overflow-hidden">
      {/* ===== GLASS CONTAINER ===== */}
      <div className="relative max-w-7xl mx-auto rounded-[48px] bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-2xl shadow-[0_120px_240px_rgba(0,0,0,0.75)] p-8 sm:p-16 overflow-hidden">

        {/* ===== EYEBOT (PREMIUM RESPONSIVE) ===== */}
        <div className="relative z-20 mt-16 mb-20 flex justify-center md:mt-0 md:mb-0 md:absolute md:top-10 md:right-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative rounded-full bg-white/[0.06] backdrop-blur-2xl border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.6)] p-6 md:p-4"
          >
            <div className="absolute inset-0 rounded-full bg-white/10 blur-2xl opacity-40" />

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <EyeBot />
            </motion.div>
          </motion.div>
        </div>

        {/* ===== HEADER ===== */}
        <div className="relative z-10 max-w-3xl">
          <span className="text-xs tracking-[0.4em] uppercase text-white/40">
            Services
          </span>

          <h1 className="mt-6 text-[clamp(2.6rem,6vw,4.6rem)] font-light leading-[1.05] tracking-tight">
            <span className="block text-white/90">What we build</span>
            <span className="block text-white/40 mt-2">
              with precision & intent
            </span>
          </h1>

          <p className="mt-6 text-white/60 leading-relaxed max-w-xl">
            We design, engineer, and refine digital systems that feel calm,
            confident, and built to last.
          </p>
        </div>

        {/* ===== SERVICES GRID ===== */}
        <div className="relative z-10 mt-24 grid md:grid-cols-2 gap-10">
          {services.map((s, i) => {
            const isOpen = active === i;

            return (
              <motion.div
                key={s.title}
                onClick={() => setActive(isOpen ? null : i)}
                whileHover={{ y: -6 }}
                className="group relative cursor-pointer rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl overflow-hidden shadow-xl"
              >
                {/* IMAGE */}
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>

                {/* CONTENT */}
                <div className="relative p-7">
                  <span className="text-[10px] tracking-[0.35em] uppercase text-white/40">
                    {s.eyebrow}
                  </span>

                  <h3 className="mt-3 text-2xl font-light text-white/90">
                    {s.title}
                  </h3>

                  <p className="mt-3 text-sm text-white/60 leading-relaxed">
                    {s.desc}
                  </p>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="mt-4 text-sm text-white/55 leading-relaxed"
                      >
                        {s.more}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  <div className="mt-6 flex items-center gap-2 text-xs tracking-widest uppercase text-white/40">
                    <span>{isOpen ? "Close" : "Explore"}</span>
                    <span className="w-6 h-px bg-white/30" />
                  </div>
                </div>

                {/* EDGE GLOW */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ===== FOOTNOTE ===== */}
        <div className="relative z-10 mt-24 text-center">
          <p className="text-xs tracking-[0.35em] uppercase text-white/30">
            Built with clarity · Designed to scale
          </p>
        </div>
      </div>
    </section>
  );
}
