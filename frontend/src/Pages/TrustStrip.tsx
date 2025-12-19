import {
    FaReact,
    FaNodeJs,
    FaDocker,
  } from "react-icons/fa";
  import {
    SiTailwindcss,
    SiTypescript,
    SiExpress,
  } from "react-icons/si";
  
  const techStack = [
    { name: "React", icon: FaReact },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Node.js", icon: FaNodeJs },
    { name: "Express", icon: SiExpress },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Docker", icon: FaDocker },
  ];
  
  const TrustStrip = () => {
    return (
      <section className="relative w-full bg-black px-5 sm:px-6 pt-16 sm:pt-20 pb-0">
        <div className="mx-auto max-w-6xl text-center">
  
          {/* TITLE */}
          <h2 className="text-[14px] sm:text-[16px] tracking-[0.32em] uppercase text-white/85">
            Technologies trusted by modern teams
          </h2>
  
          {/* DESCRIPTION */}
          <p className="mx-auto mt-4 max-w-md sm:max-w-xl text-[13px] sm:text-[14px] leading-relaxed text-white/50">
            Built with proven technologies used by startups and growing businesses worldwide.
          </p>
  
          {/* MICRO DIVIDER */}
          <div className="flex justify-center my-5 sm:my-6">
            <div className="w-px h-6 bg-white/20" />
          </div>
  
          {/* TECH GRID */}
          <div
            className="
              mx-auto max-w-4xl
              grid grid-cols-2
              sm:grid-cols-3
              md:grid-cols-4
              lg:grid-cols-6
              gap-y-10 sm:gap-y-12
              place-items-center
            "
          >
            {techStack.map(({ name, icon: Icon }) => (
              <div
                key={name}
                className="
                  flex flex-col items-center gap-3
                  text-white/35
                  hover:text-white/70
                  transition-colors duration-300
                "
              >
                <Icon className="text-[26px] sm:text-[28px] md:text-[30px]" />
                <span className="text-[10px] tracking-widest uppercase">
                  {name}
                </span>
              </div>
            ))}
          </div>
  
        </div>
      </section>
    );
  };
  
  export default TrustStrip;
  