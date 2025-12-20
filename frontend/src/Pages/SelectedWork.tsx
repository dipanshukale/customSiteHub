import { motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const projects = [
  {
    name: "CraftiCrazy",
    slug: "crafticrazy",
    subtitle: "Creative Commerce Platform",
    desc: "A modern marketplace designed for handmade creators, focusing on performance, clarity, and scalable commerce.",
    tech: "React · Node · MongoDB · Tailwind",
    image: "/craft.jpg",
  },
  {
    name: "Restaurant QR Ordering System",
    slug: "restaurant-qr",
    subtitle: "Scan-to-Order Experience",
    desc: "A seamless QR-based ordering system with real-time kitchen flow and an intuitive admin dashboard.",
    tech: "React · Express · MongoDB · Socket.IO",
    image: "/restaurant.jpg",
  },
  {
    name: "HomeMealHub",
    slug: "homemealhub",
    subtitle: "Subscription Food Platform",
    desc: "A meal subscription platform connecting home cooks with students and professionals through recurring orders.",
    tech: "MERN · Payments · Admin Panel",
    image: "/HomeMeal.jpg",
  },
];

const SelectedWork = () => {
  const navigate = useNavigate();

  // Optional: Animate cards on scroll for mobile
  const controls = useAnimation();
  useEffect(() => {
    const handleScroll = () => {
      controls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 1 },
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <section className="relative bg-black text-white px-6 sm:px-10 py-32 -mt-36">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="mb-20 text-center md:text-left">
          <span className="block text-[11px] tracking-[0.45em] uppercase text-white/50 mb-4">
            Selected Work
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight">
            Real products.<br />Built with precision.
          </h2>
          <p className="mt-6 max-w-xl text-sm sm:text-base text-white/60 leading-relaxed mx-auto md:mx-0">
            A curated selection of platforms engineered with performance, scalability, and long-term product vision.
          </p>
        </div>

        {/* PROJECTS */}
        <div className="flex flex-col gap-32">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.15 }}
              className="relative flex flex-col md:flex-row md:gap-16 items-center group"
            >
              {/* IMAGE */}
              <motion.div
                onClick={() => navigate(`/case-study/${project.slug}`)}
                className={`relative rounded-3xl cursor-pointer overflow-hidden border border-white/10 bg-black w-full md:w-1/2
                ${i % 2 !== 0 ? "md:order-2" : ""}`}
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-[280px] sm:h-[380px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              </motion.div>

              {/* CONTENT */}
              <motion.div
                className={`mt-6 md:mt-0 w-full md:w-1/2 flex flex-col items-start`}
                initial={{ x: i % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: i * 0.2 }}
              >
                <span className="text-[11px] tracking-widest uppercase text-white/40">
                  {project.subtitle}
                </span>
                <h3 className="mt-4 text-3xl sm:text-4xl font-light tracking-wide">
                  {project.name}
                </h3>
                <div className="mt-4 h-px w-12 bg-white/20" />
                <p className="mt-6 text-sm sm:text-base text-white/60 leading-relaxed">
                  {project.desc}
                </p>
                <p className="mt-5 text-[11px] tracking-widest uppercase text-white/40">
                  {project.tech}
                </p>

                {/* CTA */}
                <motion.button
                  onClick={() => navigate(`/case-study/${project.slug}`)}
                  className="group mt-10 inline-flex items-center gap-3
                    text-[11px] tracking-[0.35em] uppercase text-white/70"
                 
                >
                  View Case Study
                  <span className="block h-px w-8 bg-white/30 transition-all duration-500 group-hover:w-14" />
                </motion.button>
              </motion.div>

              {/* MOBILE PREMIUM OVERLAP EFFECT */}
              <div className="absolute md:hidden top-0 left-0 right-0 pointer-events-none">
                <motion.div
                  className="w-full h-full bg-gradient-to-t from-black/60 via-transparent to-black/0"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: i * 0.2 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
