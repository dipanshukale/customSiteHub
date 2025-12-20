import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const services = [
  {
    eyebrow: "Core",
    title: "Web Development",
    desc: "High-performance websites engineered to grow your business.",
    more: "We craft scalable systems using React, TypeScript, Node.js & Tailwind — optimized for speed, longevity, and conversion.",
    image: "./web development.jpg",
  },
  {
    eyebrow: "Engineering",
    title: "Product Development",
    desc: "From MVPs to production-grade platforms.",
    more: "Full-cycle product development: architecture, APIs, testing, deployment — designed to scale in real-world scenarios.",
    image: "./product.jpg",
  },
  {
    eyebrow: "Growth",
    title: "Digital Marketing",
    desc: "SEO-ready builds and conversion-focused UX.",
    more: "Analytics-driven UX strategy, performance marketing, and measurable results without vanity metrics.",
    image: "./digital growth.jpg",
  },
  {
    eyebrow: "Creative",
    title: "Motion & Video",
    desc: "Cinematic visuals that elevate brand perception.",
    more: "Premium motion design and storytelling for modern digital brands, crafted with attention to detail.",
    image: "./video editing.jpg",
  },
];

const Services = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="relative bg-black text-white py-28 px-4 md:px-12 overflow-hidden -mt-20">
      {/* ================= HEADER ================= */}
      <div className="relative max-w-3xl mx-auto text-center">
        {/* Animated floating dots */}
        <motion.div className="absolute inset-0 -z-10">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              initial={{ x: Math.random() * 600, y: Math.random() * 200, opacity: 0 }}
              animate={{
                x: Math.random() * 600,
                y: Math.random() * 200,
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 5 + Math.random() * 3,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </motion.div>

        <span className="text-[12px] tracking-[0.5em] uppercase text-white/50 font-sans">
          Services
        </span>

        <div className="flex justify-center items-center mt-4 gap-3">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extralight tracking-tight leading-tight font-['Montserrat']">
            <span className="text-white/70">Digital</span>{" "}
            <span className="text-white/40">Craft</span>{" "}
            <span className="text-white/90">Studio</span>
          </h2>
          {/* Animated tech icon */}
          <motion.div className="flex space-x-1 mt-1">
            {[...Array(5)].map((_, i) => (
              <motion.span
                key={i}
                className="block w-1 h-4 bg-white rounded-full"
                animate={{ scaleY: [1, 2, 1] }}
                transition={{ repeat: Infinity, duration: 1 + i * 0.2, ease: "easeInOut" }}
              />
            ))}
          </motion.div>



        </div>

        <p className="mt-4 text-white/60 text-lg sm:text-xl font-light leading-relaxed font-['Montserrat']">
          We build web apps, products, marketing campaigns, and motion design  crafted to elevate your brand.
        </p>

        {/* Gradient line animation */}
        <motion.div
          className="h-1 w-24 mx-auto mt-6 rounded-full bg-gradient-to-r from-white/30 via-white/50 to-white/30"
          animate={{ x: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </div>

      {/* ================= MOBILE SLIDER ================= */}
      <div className="md:hidden mt-16">
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={20}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} custom-bullet"></span>`;
            },
          }}
        >
          {services.map((s, i) => (
            <SwiperSlide key={i}>
              <motion.div
                className="bg-black/90 rounded-3xl shadow-2xl overflow-hidden cursor-pointer"
                onClick={() => setExpanded(expanded === i ? null : i)}
              >
                <div className="relative h-64 w-full">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="h-full w-full object-cover rounded-3xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>
                <div className="p-5">
                  <span className="text-[10px] tracking-[0.35em] uppercase text-white/50">
                    {s.eyebrow}
                  </span>
                  <h3 className="mt-2 text-2xl font-light">{s.title}</h3>
                  <p className="mt-2 text-white/60 text-sm">{s.desc}</p>
                  <AnimatePresence>
                    {expanded === i && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="mt-2 text-white/60 text-sm"
                      >
                        {s.more}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ================= DESKTOP HORIZONTAL PREMIUM CARDS ================= */}
      <div className="hidden md:flex mt-20 gap-8 overflow-x-auto py-6 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-black/10">
        {services.map((s, i) => {
          const isOpen = expanded === i;
          return (
            <motion.div
              key={i}
              className="min-w-[320px] max-w-xs bg-black/90 rounded-3xl shadow-2xl flex-shrink-0 cursor-pointer overflow-hidden relative"
              onClick={() => setExpanded(isOpen ? null : i)}
            >
              <div className="relative h-64 w-full">
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-full w-full object-cover rounded-3xl"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  animate={{ opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 bg-black/70 flex flex-col justify-center p-6"
                >
                  <span className="text-[10px] tracking-[0.35em] uppercase text-white/50">
                    {s.eyebrow}
                  </span>
                  <h3 className="mt-2 text-2xl font-light">{s.title}</h3>
                  <p className="mt-2 text-white/60 text-sm">{s.desc}</p>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="mt-2 text-white/60 text-sm"
                      >
                        {s.more}
                      </motion.p>
                    )}
                  </AnimatePresence>
                  <button className="mt-4 text-[11px] tracking-widest uppercase text-white/70 hover:text-white transition">
                    {isOpen ? "Close ↑" : "Learn More →"}
                  </button>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
