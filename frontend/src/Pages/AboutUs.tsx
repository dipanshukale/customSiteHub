import { motion, useScroll, useTransform } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useRef } from "react";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";
import {
  HiOutlineSparkles,
  HiOutlineCube,
  HiOutlineLightBulb,
} from "react-icons/hi2";

/* ---------------- DATA ---------------- */

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

const philosophyCards = [
  {
    title: "Product-first mindset",
    desc: "Every decision starts with user value and long-term product clarity.",
    glow: "from-yellow-400/40",
    icon: HiOutlineSparkles,
  },
  {
    title: "Engineering clarity",
    desc: "Scalable MERN systems built for performance and maintainability.",
    glow: "from-cyan-400/40",
    icon: HiOutlineCube,
  },
  {
    title: "Design restraint",
    desc: "Calm, timeless interfaces that feel confident — not loud.",
    glow: "from-violet-400/40",
    icon: HiOutlineLightBulb,
  },
];

/* ---------------- COMPONENT ---------------- */

export default function AboutUs() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const lampOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

  return (
    <section
      ref={ref}
      className="relative bg-black px-5 sm:px-10 py-28 text-white"
    >
      <div className="relative max-w-7xl mx-auto rounded-[48px] bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-2xl shadow-[0_120px_240px_rgba(0,0,0,0.75)] p-8 sm:p-16 overflow-hidden">

        {/* ---------------- GOLDEN LAMP ---------------- */}
        <motion.div
          style={{ opacity: lampOpacity }}
          className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px]"
        >
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,200,120,0.18),transparent_60%)] blur-[120px]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-yellow-300/40 to-transparent" />
        </motion.div>

        {/* ---------------- HEADER ---------------- */}
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <span className="text-xs tracking-[0.4em] uppercase text-white/40">
            About Us
          </span>
          <h1 className="mt-6 text-[clamp(2.4rem,6vw,4.5rem)] font-light leading-[1.05] tracking-tight">
            <span className="block text-white/90">
              Crafting digital products
            </span>

            <span className="relative inline-block mt-3">
              <span className="relative z-10 text-white/40">
                with intention
              </span>

              {/* subtle underline glow */}
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent blur-sm" />
            </span>
          </h1>

          <p className="mt-6 text-white/60 leading-relaxed">
            We design and build modern software where product thinking,
            engineering clarity, and design restraint work together.
          </p>
        </div>

        {/* DESKTOP — TIMELINE EXPERIENCE */}
        <div className="relative z-10 mt-28 hidden md:block">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />

          <div className="space-y-28">
            {philosophyCards.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="grid grid-cols-2 gap-16 items-center"
              >
                {/* LEFT / RIGHT CARD */}
                <div
                  className={`flex ${i % 2 === 0 ? "justify-end" : "justify-start"
                    }`}
                >
                  <div className="relative max-w-sm rounded-3xl border border-white/10 bg-white/[0.05] p-8 backdrop-blur-xl shadow-2xl overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.glow} to-transparent opacity-40`}
                    />
                    <div className="relative">
                      <item.icon className="w-9 h-9 mb-5 text-white" />
                      <h3 className="text-xl font-medium">{item.title}</h3>
                      <p className="mt-3 text-sm text-white/65 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* TIMELINE NODE */}
                <div className="flex items-center justify-center">
                  <span className="w-4 h-4 rounded-full bg-white shadow-[0_0_30px_rgba(255,255,255,0.6)]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* MOBILE — WALLET STACK */}
        <div className="md:hidden mt-16">
          <Swiper
            slidesPerView={1}
            spaceBetween={18}
            pagination={{ clickable: true }}
          >
            {philosophyCards.map((item) => (
              <SwiperSlide key={item.title}>
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="relative rounded-3xl border border-white/10 bg-white/[0.05] p-7 backdrop-blur-xl shadow-2xl overflow-hidden"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.glow} to-transparent opacity-40`}
                  />
                  <div className="relative flex flex-col items-center text-center">
                    <item.icon className="w-10 h-10 mb-4 text-white" />
                    <h3 className="text-lg font-medium">{item.title}</h3>
                    <p className="mt-2 text-sm text-white/65 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ---------------- TEAM SECTION (UNCHANGED) ---------------- */}
        <div className="relative z-10 mt-16">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs tracking-[0.4em] uppercase text-white/40">
              People
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-light">
              The minds behind the work
            </h2>
            <p className="mt-4 text-white/60">
              A small, focused team driven by craft, clarity, and long-term
              thinking.
            </p>
          </div>

          <div className="hidden md:grid grid-cols-3 gap-10 mt-20">
            {team.map((member) => (
              <div
                key={member.name}
                className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] shadow-lg"
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
                  <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] shadow-lg">
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

        {/* ---------------- STATS (UNCHANGED) ---------------- */}
        <div className="relative z-10 mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            { value: 5, label: "Products Delivered", suffix: "+" },
            { value: 95, label: "Performance Score", suffix: "+" },
            { value: 2, label: "Years Experience", suffix: "+" },
            { value: 90, label: "Client Retention", suffix: "%" },
          ].map((s) => (
            <InView key={s.label} triggerOnce>
              {({ inView, ref }) => (
                <div
                  ref={ref}
                  className="rounded-3xl bg-white/[0.04] border border-white/10 p-6 md:p-8 text-center shadow-lg"
                >
                  <p className="text-4xl md:text-5xl font-light text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400">
                    {inView ? (
                      <CountUp
                        end={s.value}
                        duration={6}
                        suffix={s.suffix}
                      />
                    ) : (
                      `0${s.suffix}`
                    )}
                  </p>
                  <p className="mt-3 text-xs tracking-widest uppercase text-white/40">
                    {s.label}
                  </p>
                </div>
              )}
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
}
