import React from "react";
import { FiInstagram, FiLinkedin, FiGithub, FiMail } from "react-icons/fi";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0A0E] text-gray-300 py-12 md:py-16 mt-16 md:mt-24 border-t border-white/10">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-5 md:gap-6 text-center">

        {/* Logo / Name */}
        <div>
          <h1 className="text-[13px] md:text-[14px] tracking-[0.25em] md:tracking-[0.4em] uppercase font-extrabold text-white select-none">
            Custom<span className="text-white/40">Site</span>Hub
          </h1>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 md:gap-8 text-xl md:text-2xl mt-3 md:mt-4">
          <a
            href="mailto:CustomSiteHub@gmail.com"
            className="hover:text-white transition transform hover:scale-110"
          >
            <FiMail />
          </a>
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition transform hover:scale-110"
          >
            <FiLinkedin />
          </a>
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition transform hover:scale-110"
          >
            <FiGithub />
          </a>
          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition transform hover:scale-110"
          >
            <FiInstagram />
          </a>
        </div>

        {/* Policy Links */}
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 text-[11px] md:text-xs text-gray-500 mt-2">
          <a href="/privacy" className="hover:text-white transition">
            PRIVACY POLICY
          </a>
          <span className="hidden md:inline">|</span>
          <a href="/terms" className="hover:text-white transition">
            TERMS & CONDITIONS
          </a>
          <span className="hidden md:inline">|</span>
          <a href="/presskit" className="hover:text-white transition">
            PRESSKIT
          </a>
        </div>

        {/* Bottom Line */}
        <div className="text-gray-500 text-[11px] md:text-sm pt-2 w-full">
          <p className="tracking-wide">
            &copy; {new Date().getFullYear()} CustomSiteHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
