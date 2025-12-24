import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  HiOutlineSparkles,
  HiOutlineCube,
  HiOutlineLightBulb,
  HiOutlineCake,
} from "react-icons/hi2";

const cards = [
  {
    step: "01",
    title: "Discovery",
    desc: "Understand goals, users, and constraints deeply.",
    fullDesc:
      "We conduct deep research, align on business goals, understand user needs, and identify constraints before planning the project.",
    icon: HiOutlineSparkles,
    image: "/discovery.jpg",
  },
  {
    step: "02",
    title: "Design",
    desc: "UX, UI, and architecture shaped with restraint.",
    fullDesc:
      "Our design phase focuses on usability, visual appeal, and architecture, creating wireframes, prototypes, and high-fidelity designs.",
    icon: HiOutlineCube,
    image: "/design.jpg",
  },
  {
    step: "03",
    title: "Build",
    desc: "Focused execution with clarity and iteration.",
    fullDesc:
      "Development is done in sprints with clear checkpoints, continuous integration, and careful testing to ensure high performance.",
    icon: HiOutlineLightBulb,
    image: "/build.jpg",
  },
  {
    step: "04",
    title: "Launch",
    desc: "Clean delivery, polish, and long-term support.",
    fullDesc:
      "We deploy to production, provide documentation, and offer ongoing support for improvements and maintenance.",
    icon: HiOutlineCake,
    image: "/launch.jpg",
  },
];

export default function AfterTestimonialsPremium() {
  const navigate = useNavigate();
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const Card = ({ index, step, title, desc, fullDesc, Icon, image }: any) => {
    const isExpanded = expandedCard === index;
    return (
      <motion.div
        whileHover={{ y: -5, scale: 1.03 }}
        className="relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer group"
        onClick={() =>
          setExpandedCard(isExpanded ? null : index)
        }
      >
        {/* Image */}
        <div className="relative h-48 sm:h-56 md:h-60 w-full rounded-3xl overflow-hidden shadow-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-500" />
        </div>

        {/* Content */}
        <div
          className={`relative z-10 p-4 sm:p-6 flex flex-col gap-3 bg-black/40 backdrop-blur-sm -mt-16 rounded-b-3xl shadow-lg transition-all duration-500 ${
            isExpanded ? "h-auto" : "h-56"
          }`}
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 text-white/90 shadow-md">
            <Icon className="w-5 h-5" />
          </div>

          <p className="text-sm text-white/40 tracking-widest">{step}</p>
          <h3 className="text-lg sm:text-xl font-semibold text-white">{title}</h3>
          <p className="text-white/60 text-sm leading-relaxed">
            {isExpanded ? fullDesc : desc}
          </p>

          {/* Tap to expand cue */}
          {!isExpanded && (
            <div className="absolute bottom-4 right-4 flex items-center gap-1 opacity-60 group-hover:opacity-100 transition-all">
              <span className="text-white/70 text-xs">Tap to expand</span>
              <motion.span
                animate={{ y: [0, -3, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                ⬇
              </motion.span>
            </div>
          )}
        </div>
      </motion.div>
    );
  };

  return (
    <section className="relative px-5 sm:px-10 py-8 bg-black">
      <div className="max-w-7xl mx-auto rounded-[36px] bg-[#111214] p-8 sm:p-12">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[11px] tracking-[0.4em] uppercase text-white/40">
            Our Process
          </span>
          <h2 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-light leading-tight text-white">
            How we turn ideas <br /> into reality
          </h2>
          <p className="mt-6 text-lg text-white/60 leading-relaxed">
            Smooth, intentional, and visually engaging process for every client.
          </p>
        </motion.div>

        {/* DESKTOP GRID */}
        <div className="hidden md:grid grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <Card
              key={card.step}
              index={index}
              step={card.step}
              title={card.title}
              desc={card.desc}
              fullDesc={card.fullDesc}
              Icon={card.icon}
              image={card.image}
            />
          ))}
        </div>

        {/* MOBILE SLIDER */}
        <div className="md:hidden mt-8">
          <Swiper
            modules={[Pagination]}
            slidesPerView={1.1}
            spaceBetween={16}
            pagination={{
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className} bg-white !h-2 !w-6 !rounded-full"></span>`;
              },
            }}
          >
            {cards.map((card, index) => (
              <SwiperSlide key={card.step}>
                <Card
                  index={index}
                  step={card.step}
                  title={card.title}
                  desc={card.desc}
                  fullDesc={card.fullDesc}
                  Icon={card.icon}
                  image={card.image}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-8"
        >
          <div>
            <h3 className="text-3xl sm:text-4xl font-light text-white">
              Ready to start a project?
            </h3>
            <p className="mt-4 text-white/60">
              Let’s talk about what you’re building and see if we’re aligned.
            </p>
          </div>

          <button
            onClick={() => navigate("/startproject")}
            className="
              inline-flex items-center justify-center
              rounded-full
              bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500
              px-8 py-4
              text-[12px] tracking-[0.35em] uppercase
              text-black
              hover:brightness-110
              transition
              shadow-[0_20px_40px_rgba(0,0,0,0.35)]
            "
          >
            Start a project →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
