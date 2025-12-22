import { motion } from "framer-motion";
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

  return (
    <section className="bg-black px-5 sm:px-10">
      {/* APPLE MATERIAL CONTAINER */}
      <div
        className="
          max-w-7xl mx-auto
          rounded-[28px]
          bg-[#111214]
          px-6 sm:px-12 lg:px-16
          py-16 sm:py-20
          shadow-[0_50px_100px_rgba(0,0,0,0.55)]
        "
      >
        {/* HEADER */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-[11px] tracking-[0.4em] uppercase text-white/45">
            Selected Work
          </span>

          <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-light leading-tight text-white">
            Designed to feel
            <br /> quietly inevitable
          </h2>

          <p className="mt-4 text-base text-white/60 leading-relaxed max-w-xl">
            A focused collection of products shaped with clarity,
            precision, and long-term thinking.
          </p>
        </div>

        {/* PROJECTS */}
        <div className="space-y-20 sm:space-y-16">
          {projects.map((project, i) => {
            const reverse = i % 2 !== 0;

            return (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center"
              >
                {/* IMAGE */}
                <div
                  className={`relative h-[260px] sm:h-[400px] md:h-[480px]
                  rounded-2xl overflow-hidden
                  ${reverse ? "md:order-2" : ""}
                `}
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Mobile overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/85 to-transparent md:hidden">
                    <p className="text-[10px] uppercase tracking-widest text-white/55">
                      {project.subtitle}
                    </p>
                    <h3 className="mt-1 text-2xl font-light text-white">
                      {project.name}
                    </h3>
                  </div>
                </div>

                {/* CONTENT */}
                <div className={`${reverse ? "md:order-1" : ""} max-w-xl`}>
                  <div className="hidden md:block">
                    <p className="text-[11px] uppercase tracking-widest text-white/50">
                      {project.subtitle}
                    </p>
                    <h3 className="mt-3 text-4xl font-light text-white">
                      {project.name}
                    </h3>
                  </div>

                  <p className="mt-4 text-base text-white/60 leading-relaxed">
                    {project.desc}
                  </p>

                  <p className="mt-3 text-[11px] uppercase tracking-widest text-white/45">
                    {project.tech}
                  </p>

                  <button
                    onClick={() => navigate(`/case-study/${project.slug}`)}
                    className="
                      mt-6 inline-flex items-center
                      text-[11px] tracking-[0.35em] uppercase
                      text-white/70 hover:text-white transition
                    "
                  >
                    View case study →
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
