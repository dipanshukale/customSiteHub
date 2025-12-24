import { motion } from "framer-motion";

export function TeamCard({ member }: any) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group rounded-3xl bg-white/5 border border-white/10 overflow-hidden"
    >
      <div className="relative h-60 overflow-hidden">
        <img
          src={member.image}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
          alt={member.name}
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-medium">{member.name}</h3>
        <p className="text-xs tracking-wider text-white/40 mt-1">
          {member.role}
        </p>

        <motion.p
          initial={{ opacity: 0, height: 0 }}
          whileHover={{ opacity: 1, height: "auto" }}
          className="text-sm text-white/60 mt-4 leading-relaxed"
        >
          {member.desc}
        </motion.p>

        <span className="mt-4 inline-block text-xs text-white/40">
          Hover to read more →
        </span>
      </div>
    </motion.div>
  );
}
