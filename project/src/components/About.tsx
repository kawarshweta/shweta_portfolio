import { Code } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-black text-white relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative max-w-3xl mx-auto">
          <h2
            id="about-heading"
            className="text-3xl md:text-6xl font-bold mb-12 text-center animate-slide-up text-indigo-400"
          >
            About Me
          </h2>
          <article className="space-y-10">
            <div className="flex items-center justify-center mb-6 animate-fade-in [animation-delay:0.4s]">
              <Code
                size={36}
                className="text-indigo-400 mr-3 animate-spin-slow"
              />
              <h3 className="text-3xl md:text-4xl font-semibold text-white">
                My Journey
              </h3>
            </div>
            <p className="text-base md:text-lg text-gray-200 leading-relaxed text-center">
              I’m a frontend developer with over 2.5 years of experience, driven
              to create{" "}
              <span className="font-bold text-indigo-400 uppercase">
                immersive, high-performance web applications
              </span>{" "}
              that captivate and inspire.
            </p>
            <p className="text-sm md:text-base text-gray-300 italic leading-relaxed text-center max-w-2xl mx-auto border-y-2 border-indigo-400/50 py-3 [box-shadow:0_0_12px_rgba(99,102,241,0.4)] animate-fade-in [animation-delay:0.6s]">
              My mission is to craft accessible, user-centric
              applications that empower users and bring ideas to life.
            </p>
            {/* <p className="text-sm md:text-base text-gray-300 leading-relaxed text-center">
              When I’m not coding, I explore design frontiers, creative design ideas and embrace outdoor adventures, always
              pushing the limits of what the web can achieve.
            </p> */}
          </article>
        </div>
      </div>
      <style>{`
        .animate-spin-slow {
          animation: spin 15s linear infinite;
        }
        .animate-text-glow {
          animation: text-glow 1.5s ease-in-out infinite alternate;
        }
        @keyframes text-glow {
          from { text-shadow: 0 0 10px rgba(99, 102, 241, 0.5); }
          to { text-shadow: 0 0 20px rgba(99, 102, 241, 0.9); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-slide-up,
          .animate-fade-in,
          .animate-pulse,
          .animate-spin-slow,
          .animate-text-glow {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
