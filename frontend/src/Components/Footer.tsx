import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaEnvelope,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-black px-5 sm:px-10 pt-16 pb-12 text-white overflow-hidden">
      {/* AMBIENT BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 w-[600px] h-[600px] -translate-x-1/2 bg-white/10 blur-[180px] opacity-30" />
        <div className="absolute bottom-0 right-1/2 w-[500px] h-[500px] translate-x-1/2 bg-white/5 blur-[160px] opacity-20" />
      </div>

      {/* CONTAINER */}
      <div className="relative max-w-7xl mx-auto rounded-[48px] bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-2xl shadow-[0_100px_200px_rgba(0,0,0,0.7)] p-8 sm:p-16">

        {/* TOP */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* LEFT */}
          <div>
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-light leading-tight tracking-tight">
              <span className="block text-white/90">Building digital systems</span>
              <span className="block text-white/40 mt-1">
                with clarity & restraint
              </span>
            </h2>

            <p className="mt-6 max-w-md text-white/60 leading-relaxed">
              We design and engineer calm, high-performance digital products —
              crafted for longevity, scale, and confident brands.
            </p>

            {/* SOCIAL */}
            <div className="mt-10 flex items-center gap-6">
              {[
                {
                  icon: FaGithub,
                  label: "GitHub",
                  href: "https://github.com/dipanshukale",
                },
                {
                  icon: FaLinkedin,
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/dipanshu-kale-3b7789250/",
                },
                {
                  icon: FaEnvelope,
                  label: "Email",
                  href: "mailto:customsitehub@gmail.com",
                },
              ].map((s, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -3 }}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="group relative w-11 h-11 flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] backdrop-blur-md"
                >
                  <s.icon className="text-white/70 group-hover:text-white transition" />
                  <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 text-sm">
            <div>
              <p className="text-xs tracking-widest uppercase text-white/40">
                Studio
              </p>
              <ul className="mt-4 space-y-3 text-white/65">
                <li><Link to="/about" className="hover:text-white cursor-pointer transition">About</Link></li>
                <li><Link to="/service" className="hover:text-white cursor-pointer transition">Services</Link></li>
                <li><Link to="/work" className="hover:text-white cursor-pointer transition">Work</Link></li>
                <li><Link to="/contact" className="hover:text-white cursor-pointer transition">Contact</Link></li>
              </ul>
            </div>

            <div>
              <p className="text-xs tracking-widest uppercase text-white/40">
                Expertise
              </p>
              <ul className="mt-4 space-y-3 text-white/65">
                <li>Web Engineering</li>
                <li>Product Systems</li>
                <li>UX Architecture</li>
                <li>Motion Design</li>
              </ul>
            </div>

            <div>
              <p className="text-xs tracking-widest uppercase text-white/40">
                Contact
              </p>
              <ul className="mt-4 space-y-3 text-white/65">
                <li>customsitehub@gmail.com</li>
                <li>India</li>
                <li>Remote Worldwide</li>
              </ul>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-20 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* BOTTOM */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-white/40 tracking-wide">
          <span>
            © {new Date().getFullYear()} customsitehub. All rights reserved.
          </span>

          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-white transition">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
