import { motion, useMotionValue, useTransform, useViewportScroll } from "framer-motion";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    name: "CraftiCrazy",
    slug: "crafticrazy",
    subtitle: "Creative Commerce Platform",
    desc: "A performance-first marketplace designed for independent creators, balancing speed, scale, and visual restraint.",
    tech: "React · Node · MongoDB · Tailwind",
    image: "/craft.jpg",
  },
  {
    name: "Restaurant QR System",
    slug: "restaurant-qr",
    subtitle: "Scan-to-Order Experience",
    desc: "A real-time ordering system crafted for modern restaurants with frictionless UX and kitchen clarity.",
    tech: "React · Express · MongoDB · Socket.IO",
    image: "/restaurant.jpg",
  },
  {
    name: "HomeMealHub",
    slug: "homemealhub",
    subtitle: "Subscription Food Platform",
    desc: "A trust-led food subscription platform connecting home cooks with professionals through refined UX.",
    tech: "MERN · Payments · Admin Panel",
    image: "/HomeMeal.jpg",
  },
];

export default function SelectedWork() {
  const navigate = useNavigate();
  const { scrollY } = useViewportScroll();

  return (
    <section className="relative bg-black text-white px-5 sm:px-10  lg:-mt-32  sm:pt-36 pb-32 overflow-x-hidden">
     
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-20 sm:mb-28 max-w-3xl text-center md:text-left">
          <span className="text-[11px] tracking-[0.45em] uppercase text-white/40">
            Selected Work
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-7xl font-extralight tracking-tight leading-tight">
            Products built by
            <br />
            <span className="text-white/90">Custom</span>
            <span className="text-white/40">Site</span>
            <span className="text-white/70">Hub</span>
          </h1>

          <p className="mt-6 max-w-xl text-sm sm:text-base text-white/60 leading-relaxed">
            Fewer projects. Sharper execution.
            Each product below is designed to age well — technically and visually.
          </p>
        </div>

        {/* Scroll Indicators */}
       

        {/* Projects */}
        <div className="flex flex-col gap-24 sm:gap-28 md:gap-[10vh] snap-y snap-mandatory">
          {projects.map((project, i) => {
            const isReversed = i % 2 !== 0;

            return (
              <section
                key={project.slug}
                className="snap-start grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center relative"
              >
                {/* Parallax Image */}
                <motion.div
                  className={`relative h-[260px] sm:h-[360px] md:h-[520px] rounded-3xl overflow-hidden border border-white/10 bg-black md:sticky md:top-32 ${
                    isReversed ? "md:order-2" : ""
                  }`}
                  style={{
                    y: useTransform(scrollY, [i * 600, (i + 1) * 600], [0, -40]),
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Subtle Glass & Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-white/10" />
                  <div className="absolute inset-0 ring-1 ring-white/10 rounded-3xl" />
                </motion.div>

                {/* Content */}
                <motion.div
                  className={`max-w-xl ${isReversed ? "md:order-1" : ""}`}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.15 }}
                >
                  <span className="text-[11px] tracking-widest uppercase text-white/40">
                    {project.subtitle}
                  </span>

                  <h3 className="mt-4 text-3xl sm:text-4xl font-light tracking-tight">
                    {project.name}
                  </h3>

                  <div className="mt-4 h-px w-12 bg-white/20" />

                  <p className="mt-6 text-sm sm:text-base text-white/60 leading-relaxed">
                    {project.desc}
                  </p>

                  <p className="mt-5 text-[11px] tracking-widest uppercase text-white/40">
                    {project.tech}
                  </p>

                  <button
                    onClick={() => navigate(`/case-study/${project.slug}`)}
                    className="mt-6 sm:mt-10 inline-flex items-center gap-3 text-[11px] tracking-[0.35em] uppercase text-white/70 hover:text-white transition relative"
                  >
                    View Case Study
                    <span className="absolute bottom-0 left-0 h-px w-8 bg-white/30 transition-all duration-500 group-hover:w-16" />
                  </button>
                </motion.div>

                {/* Mobile fade depth */}
                <div className="absolute md:hidden -bottom-12 left-0 right-0 h-24 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}
