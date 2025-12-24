type PremiumBackgroundProps = {
    variant?: "dark" | "light";
    video?: string;
    image?: string;
  };
  
  export default function PremiumBackground({
    variant = "dark",
    video,
    image,
  }: PremiumBackgroundProps) {
    return (
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Background Image */}
        {image && (
          <img
            src={image}
            className="absolute inset-0 w-full h-full object-cover opacity-20"
            alt=""
          />
        )}
  
        {/* Optional Video */}
        {video && (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          >
            <source src={video} type="video/mp4" />
          </video>
        )}
  
        {/* Grain */}
        <div
          className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
          style={{
            backgroundImage:
              "url('https://grainy-gradients.vercel.app/noise.svg')",
          }}
        />
  
        {/* Overlay */}
        <div
          className={`absolute inset-0 ${
            variant === "dark"
              ? "bg-black/80"
              : "bg-white/70 backdrop-blur-xl"
          }`}
        />
      </div>
    );
  }
  