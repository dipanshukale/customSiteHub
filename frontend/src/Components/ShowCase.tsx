const projects = [
    { title: "SaaS Platform", desc: "High-performance web app" },
    { title: "Startup Website", desc: "Brand-focused landing" },
    { title: "Developer Tool", desc: "Clean & scalable UI" },
  ];
  
  const Showcase = () => {
    return (
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((p) => (
          <div
            key={p.title}
            className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:bg-white/10 transition"
          >
            <h3 className="text-xl font-medium">{p.title}</h3>
            <p className="text-white/60 mt-2">{p.desc}</p>
  
            <div className="mt-6 h-px bg-white/10 group-hover:bg-white/30 transition" />
          </div>
        ))}
      </div>
    );
  };
  
  export default Showcase;
  