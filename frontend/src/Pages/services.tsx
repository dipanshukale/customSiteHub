import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const services = [
  {
    eyebrow: "Core Capability",
    title: "Web Development",
    desc: "High-performance websites engineered to convert attention into growth. Built fast, scalable, and future-ready.",
    more: "We specialize in React, TypeScript, Node.js, and Tailwind CSS to deliver ultra-modern websites. Your brand will shine with clean design, performance, and scalability.",
    image: "./web development.jpg",
  },
  {
    eyebrow: "Engineering",
    title: "Product Development",
    desc: "From MVP to production systems, we architect products developers love and businesses rely on.",
    more: "Our team handles architecture, APIs, and seamless deployment. We ensure maintainable code, automated testing, and high-performance systems.",
    image: "./product.jpg",
  },
  {
    eyebrow: "Growth Systems",
    title: "Digital Marketing",
    desc: "SEO-ready builds, conversion-focused UX, and marketing systems designed to scale revenue, not vanity metrics.",
    more: "We combine marketing strategy, analytics, and UX/UI design to drive conversions, engagement, and measurable growth for your brand.",
    image: "./digital growth.jpg",
  },
  {
    eyebrow: "Creative Studio",
    title: "Motion & Video",
    desc: "Cinematic motion design and premium video editing that elevates brand perception and engagement.",
    more: "We create video campaigns, motion graphics, and animated content that amplifies storytelling and strengthens brand identity.",
    image: "./video editing.jpg",
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="services"
      className="relative bg-black text-white px-6 sm:px-10 md:px-16 py-28"
    >
      {/* ================= HEADER ================= */}
      <div className="max-w-6xl mx-auto mb-24 text-center">
        <span className="block text-[11px] tracking-[0.45em] uppercase text-white/50 mb-6">
          Services
        </span>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight max-w-3xl mx-auto">
          What our freelancers are exceptional at
        </h2>

        <p className="mt-8 max-w-xl mx-auto text-sm sm:text-base text-white/60 leading-relaxed">
          We design and develop digital systems that help businesses grow,
          scale, and stand out — without unnecessary complexity.
        </p>
      </div>

      {/* ================= GRID ================= */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12, duration: 1 }}
            className="group relative cursor-pointer"
          >
            {/* IMAGE */}
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src={service.image}
                alt={service.title}
                className="
                  h-[260px] sm:h-[320px] w-full object-cover
                  transition-transform duration-[1400ms]
                  ease-[cubic-bezier(.19,1,.22,1)]
                  group-hover:scale-110
                "
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/80" />
            </div>

            {/* CONTENT */}
            <div className="relative mt-10">
              <span className="text-[10px] tracking-[0.35em] uppercase text-white/45">
                {service.eyebrow}
              </span>

              <h3 className="mt-4 text-2xl sm:text-3xl font-light tracking-tight">
                {service.title}
              </h3>

              <div className="mt-6 h-px w-10 bg-white/20" />

              <p className="mt-6 text-sm sm:text-[15px] text-white/60 leading-relaxed max-w-md">
                {service.desc}
              </p>

              {/* LEARN MORE */}
              <div className="mt-6">
                <span
                  onClick={() => toggle(i)}
                  className="inline-block text-[11px] tracking-widest uppercase text-white/70 group-hover:text-white transition cursor-pointer"
                >
                  {activeIndex === i ? "Show Less ↑" : "Learn More →"}
                </span>

                <AnimatePresence>
                  {activeIndex === i && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5 }}
                      className="mt-4 text-white/60 text-sm sm:text-[15px] leading-relaxed max-w-md"
                    >
                      {service.more}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ================= FOOT CTA ================= */}
      <div className="mt-32 text-center">
        <a
          href="#contact"
          className="inline-flex items-center gap-3 rounded-full border border-white/20 px-10 py-4 text-[12px] tracking-widest uppercase text-white/80 hover:border-white/40 transition"
        >
          View All Services
        </a>
      </div>
    </section>
  );
};

export default Services;
