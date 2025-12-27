import { motion } from "framer-motion";
import {
  HiOutlineCpuChip,
  HiOutlineRocketLaunch,
  HiOutlineServerStack,
  HiOutlineCloudArrowUp,
} from "react-icons/hi2";

const items = [
  {
    icon: HiOutlineCpuChip,
    title: "Modern Stack",
    subtitle: "React · TypeScript · Node",
    gradient: "from-sky-400/30 to-blue-500/30",
  },
  {
    icon: HiOutlineRocketLaunch,
    title: "High Performance",
    subtitle: "Optimized & fast",
    gradient: "from-violet-400/30 to-purple-500/30",
  },
  {
    icon: HiOutlineServerStack,
    title: "Scalable APIs",
    subtitle: "Production ready",
    gradient: "from-emerald-400/30 to-teal-500/30",
  },
  {
    icon: HiOutlineCloudArrowUp,
    title: "Cloud Deployed",
    subtitle: "Docker · CI/CD",
    gradient: "from-orange-400/30 to-amber-500/30",
  },
];

export default function TrustStrip() {
  return (
    <section className="relative w-full mt-24 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="
            flex gap-3 overflow-x-auto pb-3
            sm:overflow-visible sm:flex-wrap sm:justify-center
            scrollbar-none
          "
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.08 },
            },
          }}
        >
          {items.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                whileHover={{
                  y: -4,
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.4, 0.0, 0.2, 1],
                }}
                className={`
                  group relative
                  flex items-center gap-3
                  min-w-[220px] sm:min-w-[unset]
                  rounded-full px-4 py-2.5
                  backdrop-blur-xl
                  bg-gradient-to-br ${item.gradient}
                  border border-white/20
                  shadow-[0_14px_45px_rgba(0,0,0,0.25)]
                `}
              >
                {/* Subtle glow */}
                <span
                  className="
                    pointer-events-none absolute inset-0 rounded-full
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-500
                    bg-white/5
                  "
                />

                {/* Icon */}
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: [0.4, 0.0, 0.2, 1],
                  }}
                  className="
                    flex h-9 w-9 items-center justify-center
                    rounded-full bg-white/20
                  "
                >
                  <Icon className="h-5 w-5 text-white" />
                </motion.div>

                {/* Text */}
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-white">
                    {item.title}
                  </p>
                  <p className="text-[11px] text-white/70">
                    {item.subtitle}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
