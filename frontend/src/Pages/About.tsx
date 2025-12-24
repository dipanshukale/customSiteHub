import { motion, useScroll, useTransform } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useRef } from "react";

const team = [
  {
    name: "Dipanshu Dilip Kale",
    role: "Founder · MERN Developer · Product Development",
    image: "/img2.jpg",
    accent: "from-yellow-400/40 to-transparent",
  },
  {
    name: "Vaibhavi Tingane",
    role: "Frontend Developer",
    image: "/img1.jpg",
    accent: "from-cyan-400/40 to-transparent",
  },
  {
    name: "Latish Kurekar",
    role: "Digital Marketing · Video Editor",
    image: "/editors.jpg",
    accent: "from-violet-400/40 to-transparent",
  },
];

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const lampOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

  return (
    <section ref={ref} className="relative bg-black px-5 sm:px-10 py-28 text-white">
      <div className="relative max-w-7xl mx-auto rounded-[48px] bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-2xl shadow-[0_120px_240px_rgba(0,0,0,0.75)] p-8 sm:p-16 overflow-hidden">

        {/* GOLDEN LAMP */}
        <motion.div
          style={{ opacity: lampOpacity }}
          className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px]"
        >
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,200,120,0.18),transparent_60%)] blur-[120px]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-yellow-300/40 to-transparent" />
        </motion.div>

        {/* HEADER */}
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <span className="text-xs tracking-[0.4em] uppercase text-white/40">
            About Us
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-light">
            Crafting digital products
            <br /> with intention
          </h1>
          <p className="mt-6 text-white/60 leading-relaxed">
            We design and build modern software where product thinking,
            engineering clarity, and design restraint work together.
          </p>
        </div>

        {/* PHILOSOPHY */}
        <div className="relative z-10 mt-28 grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Product-first mindset",
              desc: "Every decision starts with user value and long-term product clarity.",
              color: "from-yellow-400/30 to-transparent",
            },
            {
              title: "Engineering clarity",
              desc: "Scalable MERN systems built for performance and maintainability.",
              color: "from-cyan-400/30 to-transparent",
            },
            {
              title: "Design restraint",
              desc: "Calm, timeless interfaces that feel confident — not loud.",
              color: "from-violet-400/30 to-transparent",
            },
          ].map((item) => (
            <motion.div
              whileHover={{ y: -6 }}
              key={item.title}
              className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-8 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${item.color} opacity-60`} />
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              <h3 className="relative text-xl font-medium">{item.title}</h3>
              <p className="relative mt-4 text-sm text-white/65 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* TEAM SECTION */}
        <div className="relative z-10 mt-36">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs tracking-[0.4em] uppercase text-white/40">
              People
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-light">
              The minds behind the work
            </h2>
            <p className="mt-4 text-white/60">
              A small, focused team driven by craft, clarity, and long-term thinking.
            </p>
          </div>

          {/* DESKTOP GRID */}
          <div className="hidden md:grid grid-cols-3 gap-10 mt-20">
            {team.map((member) => (
              <div
                key={member.name}
                className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03]"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-[360px] w-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${member.accent}`} />
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-lg font-medium">{member.name}</h3>
                  <p className="text-sm text-white/60 mt-1">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* MOBILE SLIDER */}
          <div className="md:hidden mt-16">
            <Swiper
              modules={[Pagination]}
              slidesPerView={1}
              spaceBetween={20}
              pagination={{
                clickable: true,
                renderBullet: (_, className) =>
                  `<span class="${className} !w-8 !h-1.5 !rounded-full !bg-white/40"></span>`,
              }}
            >
              {team.map((member) => (
                <SwiperSlide key={member.name}>
                  <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-[320px] w-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${member.accent}`} />
                    <div className="absolute bottom-0 p-6">
                      <h3 className="text-lg font-medium">{member.name}</h3>
                      <p className="text-sm text-white/60 mt-1">{member.role}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* STATS */}
        <div className="relative z-10 mt-36 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "5+", label: "Products Delivered" },
            { value: "95+", label: "Performance Score" },
            { value: "2+ Years", label: "Experience" },
            { value: "90%", label: "Client Retention" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-3xl bg-white/[0.04] border border-white/10 p-8 text-center"
            >
              <p className="text-4xl font-light">{s.value}</p>
              <p className="mt-3 text-xs tracking-widest uppercase text-white/40">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
