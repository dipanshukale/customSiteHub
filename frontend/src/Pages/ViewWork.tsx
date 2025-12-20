import { motion } from "framer-motion";
import { viewWork } from "../data/ViewWorkContent";
import { FiExternalLink } from "react-icons/fi";

const ViewWork = () => {
  return (
    <section className="bg-black text-white min-h-screen px-6 sm:px-10 py-32">
      <div className="max-w-6xl mx-auto space-y-40">

        {/* INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl"
        >
          <span className="text-[11px] tracking-[0.45em] uppercase text-white/40">
            View Work
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-light tracking-tight">
            Built with responsibility, <br /> not shortcuts.
          </h1>

          <p className="mt-6 text-white/60 leading-relaxed">
            Every product below represents real hours, real decisions,
            real debugging, and real accountability.
            This is how we build when businesses depend on us.
          </p>
        </motion.div>

        {/* PROJECTS */}
        {viewWork.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.15 }}
            className="grid md:grid-cols-2 gap-20 items-start"
          >
            {/* IMAGE */}
            <div className="rounded-3xl overflow-hidden border border-white/10">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[340px] sm:h-[420px] object-cover"
              />
            </div>

            {/* CONTENT */}
            <div>
              <span className="text-[11px] tracking-widest uppercase text-white/40">
                {item.category}
              </span>

              <h2 className="mt-4 text-3xl sm:text-4xl font-light">
                {item.title}
              </h2>

              <div className="mt-6 h-px w-10 bg-white/20" />

              <p className="mt-6 text-sm sm:text-base text-white/60 leading-relaxed whitespace-pre-line">
                {item.story}
              </p>

              <ul className="mt-8 space-y-3 text-sm text-white/60">
                {item.highlights.map(h => (
                  <li key={h}>— {h}</li>
                ))}
              </ul>

              <p className="mt-8 text-[11px] tracking-widest uppercase text-white/40">
                {item.timeline}
              </p>

              {/* LIVE */}
              <a
                href={item.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 text-[11px]
                tracking-[0.35em] uppercase text-white/70 hover:text-white transition"
              >
                View Live Work <FiExternalLink />
              </a>
            </div>
          </motion.div>
        ))}

        {/* CLOSING */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="max-w-3xl"
        >
          <h3 className="text-2xl font-light">
            Work is not delivered. <br /> It is carried.
          </h3>

          <p className="mt-6 text-white/60 leading-relaxed">
            We don’t measure success in launches.
            We measure it in how calmly a system runs
            when real people depend on it.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default ViewWork;
