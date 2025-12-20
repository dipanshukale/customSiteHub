import { FaReact, FaNodeJs, FaDocker } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiExpress } from "react-icons/si";
import { motion } from "framer-motion";

const techStack = [
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "Express", icon: SiExpress, color: "#ffffff" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Docker", icon: FaDocker, color: "#2496ED" },
];

const TrustStrip = () => {
  return (
    <section className="relative w-full bg-black py-20 sm:py-24 overflow-hidden">
      {/* Background glow */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5"
            style={{
              width: 140 + i * 30,
              height: 140 + i * 30,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 40, -40, 0],
              y: [0, -30, 30, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 30 + i * 6,
            }}
          />
        ))}
      </motion.div>

      <div className="max-w-6xl mx-auto text-center px-5 sm:px-6">
      <h2
  className="
    text-4xl
    sm:text-6xl
    md:text-7xl
    font-extralight
    tracking-tight
    leading-[1.05]
    font-['Montserrat']
  "
>
  <span className="text-white/85">Production</span>{" "}
  <span className="text-white/45">Stack</span>{" "}
</h2>




        {/* Description */}
        <p className="mt-4 max-w-3xl mx-auto text-white/50 text-lg sm:text-xl leading-relaxed">
          We leverage the latest technologies to craft scalable, high-performance
          digital solutions that empower businesses worldwide.
        </p>

        {/* Divider */}
        <div className="w-20 h-[2px] bg-gradient-to-r from-white/20 via-white/50 to-white/20 mx-auto mt-6 rounded-full" />

        {/* Tech Carousel */}
        <motion.div
          className="
            mt-12
            flex
            gap-8
            items-stretch
            justify-start
            md:justify-center
            overflow-x-auto
            py-6
            px-2
            scrollbar-thin
            scrollbar-thumb-white/20
            scrollbar-track-black/10
          "
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
        >
          {techStack.map(({ name, icon: Icon, color }, i) => (
            <motion.div
              key={name}
              className="
                min-w-[120px]
                sm:min-w-[140px]
                bg-black/80
                backdrop-blur-md
                rounded-3xl
                flex
                flex-col
                items-center
                justify-center
                text-center
                gap-3
                p-6
                shadow-xl
                hover:shadow-2xl
                transition-all
              "
              whileHover={{ scale: 1.06, y: -6 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12, type: "spring", stiffness: 120 }}
            >
              <div
                className="p-4 rounded-full"
                style={{
                  background: `linear-gradient(135deg, ${color}33, transparent)`,
                }}
              >
                <Icon className="text-4xl sm:text-5xl text-white" />
              </div>

              <span className="text-white/60 text-xs sm:text-sm font-semibold uppercase tracking-wide">
                {name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustStrip;
