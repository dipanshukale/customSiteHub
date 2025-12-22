import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import TestimonialsSlider from "../Components/Testimonial";
import { Link } from "react-router-dom";

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
    <section className="relative bg-black text-white py-28 px-4 md:px-12 overflow-hidden -mt-20 mb-8">

      {/* ================= HEADER ================= */}
      <div className="relative max-w-3xl mx-auto text-center">
        {/* Animated floating dots */}
        <motion.div className="absolute inset-0 -z-10">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              initial={{ x: Math.random() * 600, y: Math.random() * 200, opacity: 0 }}
              animate={{ x: Math.random() * 600, y: Math.random() * 200, opacity: [0.2, 0.8, 0.2] }}
              transition={{ repeat: Infinity, repeatType: "reverse", duration: 5 + Math.random() * 3, delay: Math.random() * 2 }}
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
          We build web apps, products, marketing campaigns, and motion design crafted to elevate your brand.
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
            renderBullet: (index, className) => `<span class="${className} custom-bullet"></span>`,
          }}
        >
          {services.map((s, i) => (
            <SwiperSlide key={i}>
              <motion.div
                className="bg-black/90 rounded-3xl shadow-2xl overflow-hidden cursor-pointer"
                onClick={() => setExpanded(expanded === i ? null : i)}
              >
                <div className="relative h-64 w-full">
                  <img src={s.image} alt={s.title} className="h-full w-full object-cover rounded-3xl" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>
                <div className="p-5">
                  <span className="text-[10px] tracking-[0.35em] uppercase text-white/50">{s.eyebrow}</span>
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
                <img src={s.image} alt={s.title} className="h-full w-full object-cover rounded-3xl" />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  animate={{ opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 bg-black/70 flex flex-col justify-center p-6"
                >
                  <span className="text-[10px] tracking-[0.35em] uppercase text-white/50">{s.eyebrow}</span>
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

     {/* ================= VIDEO HERO ================= */}
<div className="w-screen relative overflow-hidden mb-32 h-[500px] sm:h-[600px]">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
    src="/servicevideo.mp4"
  />

  {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4">
            <div className="flex flex-col items-center justify-center text-center space-y-8 mr-10">

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-light text-white"
              >
                Bringing Ideas to Life
              </motion.h2>

              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-12">
                {[
                  { label: "Projects Shipped", value: "4+" },
                  { label: "Happy Clients", value: "100%" },
                  { label: "Development Hours", value: "300+" },
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                  >
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
                      {stat.value}
                    </h3>
                    <p className="text-sm sm:text-base text-white/60 tracking-wider mt-1">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
        </div>


      {/* ================= WHY US ================= */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-16 py-24 text-center">
        <span className="text-[11px] tracking-[0.45em] uppercase text-white/40 mb-3 block">Why Us</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight max-w-2xl mx-auto">
          Built with intention, not assumptions
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {[
          { title: "No Templates", label: "Philosophy", desc: "Every product is handcrafted from scratch. We design systems around your goals — not recycled layouts or pre-made solutions." },
          { title: "Performance First", label: "Performance", desc: "Speed is a feature, not an option. Clean architecture, optimized assets, and scalable code power every experience we build." },
          { title: "Long-Term Thinking", label: "Vision", desc: "Built to scale, evolve, and last. We focus on systems that grow with your business — not quick fixes or fragile patches." },
        ].map((card) => (
          <div key={card.title} className="group relative rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/20">
            <div className="absolute top-0 left-6 h-[2px] w-12 bg-gradient-to-r from-white/40 to-transparent" />
            <p className="text-[11px] tracking-[0.4em] uppercase text-white/40 mb-4">{card.label}</p>
            <h3 className="text-2xl font-light mb-3">{card.title}</h3>
            <p className="text-white/60 text-sm leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>

      {/* ================= DEEP TYPOGRAPHY SERVICES ================= */}
      <div className="relative w-screen min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="relative z-10 w-full max-w-6xl px-6">
         <div className="flex justify-between items-center mb-16">
          <h3 className="text-sm tracking-[0.4em] uppercase text-white/50">My Services</h3>

          <Link
  to="/work"
  className="group text-xs tracking-widest uppercase text-white/70 cursor-pointer flex items-center gap-1 transition-colors duration-300 focus:outline-none"
>
  See Projects
  <span
    className="
      inline-block
      transition-transform
      duration-300
      group-hover:-rotate-90
      group-focus:-rotate-90
      group-active:-rotate-90
    "
  >
    ↓
  </span>
</Link>

        </div>
          <div className="space-y-6">
            {["Branding", "Web Design", "Marketing", "Drawing"].map((item, i) => (
              <motion.h2
                key={item}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="text-[clamp(3rem,8vw,7rem)] font-extralight tracking-tight text-white hover:text-white/60 transition"
              >
                {item.toUpperCase()}
              </motion.h2>
            ))}
          </div>
        </div>
      </div>

      <TestimonialsSlider />
    </section>
  );
};

export default Services;
