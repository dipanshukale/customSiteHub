import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { viewWork } from "../data/ViewWorkContent";
import { FiExternalLink, FiX } from "react-icons/fi";

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };

const ViewWork = () => {
  const [active, setActive] = useState<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative bg-black text-white">
      {/* subtle noise + gradient */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-black/20 mix-blend-overlay" />
      </div>

      {/* container with proper padding */}
      <div ref={containerRef} className="relative z-10 max-w-6xl mx-auto px-5 sm:px-10 py-24 space-y-32">

        {/* Intro */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto text-center space-y-5"
        >
          <span className="text-[11px] tracking-[0.45em] uppercase text-white/40">Case Studies</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light leading-tight">
            Cinematic work <br /> built to trust.
          </h1>
          <p className="text-white/60 leading-relaxed sm:text-lg">
            These are not just visuals. Each system is crafted, tested, and delivered with growth in mind.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-28">
          {viewWork.map((item, index) => (
            <motion.section
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: index * 0.1 }}
              className="snap-start grid md:grid-cols-2 gap-10 md:gap-16 items-center"
            >
              {/* Image with depth + hover */}
              <motion.div
                className="relative rounded-3xl overflow-hidden border border-white/10 shadow-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 sm:h-80 md:h-96 object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.9 }}
                />
                <div className="absolute inset-0 bg-black/10" />
              </motion.div>

              {/* Text content */}
              <div className="space-y-4 max-w-xl">
                <span className="text-[11px] tracking-widest uppercase text-white/40">{item.category}</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-light">{item.title}</h2>
                <p className="text-white/60 leading-relaxed sm:text-base">
                  {item.story.slice(0, 180)}…
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <motion.button
                    onClick={() => setActive(item)}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="text-[11px] tracking-[0.35em] uppercase text-white/70 hover:text-white transition"
                  >
                    Read Full Story
                  </motion.button>
                  <motion.a
                    href={item.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="inline-flex items-center gap-1 text-[11px] tracking-[0.35em] uppercase text-white/50 hover:text-white transition"
                  >
                    Live <FiExternalLink />
                  </motion.a>
                </div>
              </div>
            </motion.section>
          ))}
        </div>
      </div>

      {/* Glass story modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md"
          >
            <motion.div
              initial={{ y: 50, scale: 0.96 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 50, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              className="relative w-full sm:max-w-3xl max-h-[85vh] rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] backdrop-blur-3xl p-6 sm:p-10 overflow-hidden"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-5 right-5 text-white/50 hover:text-white transition z-20"
              >
                <FiX size={24} />
              </button>

              <div className="overflow-y-auto max-h-[75vh] snap-y snap-mandatory pr-4 space-y-8 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                <div className="snap-start">
                  <img
                    src={active.image}
                    alt={active.title}
                    className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                <div className="snap-start">
                  <span className="text-[11px] tracking-widest uppercase text-white/40">{active.category}</span>
                  <h3 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-light">{active.title}</h3>
                  <p className="text-white/65 mt-2 leading-relaxed">{active.story}</p>
                </div>
                <div className="snap-start">
                  <span className="text-[11px] tracking-widest uppercase text-white/40">Highlights</span>
                  <ul className="space-y-2 text-white/60 text-sm mt-2">
                    {active.highlights.map((h: string) => (
                      <li key={h} className="flex gap-2"><span className="text-white/30">—</span> {h}</li>
                    ))}
                  </ul>
                </div>
                <div className="snap-start pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] tracking-widest uppercase text-white/40">{active.timeline}</span>
                  <a
                    href={active.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[11px] tracking-[0.35em] uppercase text-white/70 hover:text-white transition"
                  >
                    View Live <FiExternalLink />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ViewWork;
