import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    eyebrow: "Core Capability",
    title: "Web Development",
    desc: "High-performance websites engineered to convert attention into growth.",
    more: "We build scalable systems using React, TypeScript, Node.js, and Tailwind with obsessive attention to performance and longevity.",
    image: "./web development.jpg",
  },
  {
    eyebrow: "Engineering",
    title: "Product Development",
    desc: "From MVPs to production-grade platforms.",
    more: "Architecture, APIs, testing, and deployment handled with real-world scalability in mind.",
    image: "./product.jpg",
  },
  {
    eyebrow: "Growth Systems",
    title: "Digital Marketing",
    desc: "SEO-ready builds and conversion-focused UX.",
    more: "Analytics-driven decisions, UX strategy, and performance marketing without vanity metrics.",
    image: "./digital growth.jpg",
  },
  {
    eyebrow: "Creative Studio",
    title: "Motion & Video",
    desc: "Cinematic visuals that elevate brand perception.",
    more: "Premium motion design and storytelling crafted for modern digital brands.",
    image: "./video editing.jpg",
  },
];

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState<number | null>(null);

  /* Auto-detect active slide (Apple-like focus) */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onScroll = () => {
      const cards = Array.from(el.children);
      const center = el.scrollLeft + el.offsetWidth / 2;

      cards.forEach((card, i) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        if (Math.abs(cardCenter - window.innerWidth / 2) < rect.width / 2) {
          setActive(i);
        }
      });
    };

    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="services" className="bg-black text-white py-28 overflow-hidden">

      {/* HEADER */}
      <div className="px-6 text-center mb-20">
        <span className="text-[11px] tracking-[0.45em] uppercase text-white/50">
          Services
        </span>

        <h2 className="mt-6 text-4xl sm:text-5xl font-light tracking-tight">
          Crafted with intent
        </h2>

        <p className="mt-6 text-white/60 max-w-md mx-auto">
          Calm systems, engineered for scale and long-term digital growth.
        </p>
      </div>

      {/* ================= MOBILE ULTRA LUXURY ================= */}
      <div className="md:hidden relative">

        <div
          ref={containerRef}
          className="
            flex gap-10 px-8
            overflow-x-auto snap-x snap-mandatory
            scrollbar-hide
          "
        >
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="snap-center min-w-[85vw]"
              animate={{
                scale: active === i ? 1 : 0.92,
                opacity: active === i ? 1 : 0.5,
              }}
              transition={{ duration: 0.4 }}
            >
              {/* IMAGE */}
              <motion.div
                className="relative overflow-hidden rounded-[28px]"
                animate={{ y: active === i ? 0 : 20 }}
                transition={{ duration: 0.6 }}
              >
                <motion.img
                  src={s.image}
                  alt={s.title}
                  className="h-[280px] w-full object-cover"
                  animate={{ scale: active === i ? 1.05 : 1 }}
                  transition={{ duration: 1.2 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </motion.div>

              {/* CONTENT */}
              <div className="mt-10 px-2">
                <span className="text-[10px] tracking-[0.35em] uppercase text-white/45">
                  {s.eyebrow}
                </span>

                <h3 className="mt-3 text-2xl font-light">
                  {s.title}
                </h3>

                <p className="mt-4 text-white/60 leading-relaxed">
                  {s.desc}
                </p>

                <button
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  className="mt-6 text-[11px] tracking-widest uppercase text-white/70"
                >
                  {expanded === i ? "Close ↑" : "Learn More →"}
                </button>

                <AnimatePresence>
                  {expanded === i && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="mt-4 text-white/60 text-sm leading-relaxed"
                    >
                      {s.more}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* PROGRESS DOTS */}
        <div className="mt-10 flex justify-center gap-3">
          {services.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                active === i ? "w-8 bg-white" : "w-2 bg-white/30"
              }`}
            />
          ))}
        </div>

        {/* SWIPE HINT */}
        <div className="mt-6 text-center text-[10px] tracking-[0.35em] uppercase text-white/40">
          Swipe
        </div>
      </div>

      {/* ================= DESKTOP GRID (UNCHANGED PREMIUM) ================= */}
      <div className="hidden md:grid max-w-6xl mx-auto grid-cols-2 gap-20 px-6 mt-32">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 1 }}
          >
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src={s.image}
                alt={s.title}
                className="h-[320px] w-full object-cover transition-transform duration-[1400ms] hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/80" />
            </div>

            <div className="mt-10">
              <span className="text-[10px] tracking-[0.35em] uppercase text-white/45">
                {s.eyebrow}
              </span>

              <h3 className="mt-4 text-3xl font-light">
                {s.title}
              </h3>

              <p className="mt-6 text-white/60 max-w-md">
                {s.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
