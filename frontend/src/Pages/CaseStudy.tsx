import { useParams } from "react-router-dom";
import { projects } from "../data/Projects";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import Footer from "../Components/Footer";

const CaseStudy = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) return null;

  return (
    <section className="bg-black text-white min-h-screen px-6 sm:px-10 py-28">
      <div className="max-w-5xl mx-auto">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-[11px] tracking-[0.4em] uppercase text-white/40">
            Case Study
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-light">
            {project.name}
          </h1>

          <p className="mt-4 text-white/60 max-w-2xl">
            {project.hero}
          </p>

          {/* LIVE LINK */}
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 text-sm text-white/70 hover:text-white transition"
          >
            View Live Project <FiExternalLink />
          </a>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          className="mt-20 overflow-hidden rounded-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-[320px] sm:h-[440px] object-cover"
          />
        </motion.div>

        {/* CONTENT */}
        <div className="mt-24 grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-xl font-light">Project Story</h3>
            <div className="mt-6 h-px w-10 bg-white/20" />
            <p className="mt-6 text-sm text-white/60 leading-relaxed whitespace-pre-line">
              {project.desc}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-light">Proof of Work</h3>
            <ul className="mt-6 space-y-4 text-sm text-white/60">
              {project.proof.map(item => (
                <li key={item}>— {item}</li>
              ))}
            </ul>

            <p className="mt-10 text-[11px] tracking-widest uppercase text-white/40">
              {project.timeline}
            </p>

            <p className="mt-6 text-[11px] tracking-widest uppercase text-white/40">
              {project.tech.join(" · ")}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CaseStudy;
