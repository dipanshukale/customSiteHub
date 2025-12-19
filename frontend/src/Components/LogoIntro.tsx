import { motion } from "framer-motion";

const LogoIntro = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="text-center"
    >
      <h1 className="text-4xl md:text-6xl font-medium tracking-tight">
        Custom<span className="text-white/60">Site</span>Hub
      </h1>
    </motion.div>
  );
};

export default LogoIntro;
