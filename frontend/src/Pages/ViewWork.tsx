import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { viewWork } from "../data/ViewWorkContent";
import { FiExternalLink, FiX } from "react-icons/fi";
import Footer from "../Components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function ViewWork() {
  const [active, setActive] = useState<any>(null);

  return (
    <section className="relative bg-black text-white px-4 sm:px-6 py-24">

      {/* ===== PREMIUM CONTAINER ===== */}
      <div
        className="
          relative
          max-w-6xl
          mx-auto
          rounded-[32px]
          px-6 sm:px-10 md:px-14
          py-20 sm:py-24
          bg-gradient-to-b
          from-[#141414]
          via-[#0f0f0f]
          to-[#0a0a0a]
          border border-white/10
          shadow-[0_40px_120px_rgba(0,0,0,0.8)]
          overflow-hidden
        "
      >
        {/* subtle inner glow */}
        <div className="pointer-events-none absolute inset-0 rounded-[32px] ring-1 ring-white/5" />

        {/* noise */}
        <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]" />

        {/* ===== HEADER ===== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          className="relative z-10 max-w-3xl mx-auto text-center space-y-4"
        >
          <span className="text-[11px] tracking-[0.45em] uppercase text-white/40">
            Case Studies
          </span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light leading-tight">
            Crafted systems,
            <br /> not just visuals.
          </h2>

          <p className="text-white/60 sm:text-lg leading-relaxed">
            Each product is engineered with clarity, performance, and longevity
            at its core.
          </p>
        </motion.div>

        {/* ===== CARDS ===== */}
        <div className="relative z-10 mt-24 space-y-24">

          {viewWork.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 1 }}
              className="
                grid
                md:grid-cols-2
                gap-10 md:gap-16
                items-center
              "
            >
              {/* IMAGE CARD */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="
                  relative
                  rounded-3xl
                  overflow-hidden
                  bg-black
                  border border-white/10
                  shadow-[0_30px_80px_rgba(0,0,0,0.7)]
                "
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 sm:h-80 md:h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </motion.div>

              {/* CONTENT CARD */}
              <div className="space-y-4 max-w-xl">
                <span className="text-[11px] tracking-widest uppercase text-white/40">
                  {item.category}
                </span>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-light">
                  {item.title}
                </h3>

                <p className="text-white/60 leading-relaxed">
                  {item.story.slice(0, 180)}…
                </p>

                <div className="flex gap-6 pt-2">
                  <button
                    onClick={() => setActive(item)}
                    className="
                      text-[11px]
                      tracking-[0.35em]
                      uppercase
                      text-white/70
                      hover:text-white
                      transition
                    "
                  >
                    Read Story
                  </button>

                  <a
                    href={item.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-1
                      text-[11px]
                      tracking-[0.35em]
                      uppercase
                      text-white/50
                      hover:text-white
                      transition
                    "
                  >
                    Live <FiExternalLink />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ===== MODAL ===== */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xl"
          >
            <motion.div
              initial={{ y: 60, scale: 0.95 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 60, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              className="
                relative
                w-full
                sm:max-w-3xl
                max-h-[85vh]
                rounded-3xl
                bg-[#0a0a0a]
                border border-white/10
                p-6 sm:p-10
                text-white
              "
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-5 right-5 text-white/50 hover:text-white"
              >
                <FiX size={24} />
              </button>

              <div className="overflow-y-auto max-h-[75vh] space-y-6 pr-2">
                <img
                  src={active.image}
                  alt={active.title}
                  className="w-full h-64 sm:h-80 object-cover rounded-2xl"
                />
                <p className="text-white/70 leading-relaxed">
                  {active.story}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Footer/>
    </section>
  );
}
