import { Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState, useMemo } from 'react';

// Define the type for a single box
interface Box {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  opacity: number;
  animationDuration: number;
  animationDelay: number;
}

const Hero = () => {
  const [boxes, setBoxes] = useState<Box[]>([]);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Memoize the generateBoxes function to prevent unnecessary recalculations
  const generateBoxes = useMemo(() => () => {
    const isMobile = window.innerWidth <= 768;
    const boxCount = isMobile ? 6 : 12;
    const newBoxes: Box[] = [];
    const occupiedAreas: Pick<Box, 'x' | 'y' | 'size'>[] = [];

    const isOverlapping = (box1: Pick<Box, 'x' | 'y' | 'size'>, box2: Pick<Box, 'x' | 'y' | 'size'>) => {
      const buffer = 20;
      return (
        box1.x < box2.x + box2.size + buffer &&
        box1.x + box1.size + buffer > box2.x &&
        box1.y < box2.y + box2.size + buffer &&
        box1.y + box1.size + buffer > box2.y
      );
    };

    for (let i = 0; i < boxCount; i++) {
      let attempts = 0;
      let newBox: Box;

      do {
        const size = Math.random() * 60 + 40;
        newBox = {
          id: i,
          x: Math.random() * (window.innerWidth - size - 50),
          y: Math.random() * (window.innerHeight - size - 100),
          size,
          rotation: Math.random() * 30 - 15,
          opacity: Math.random() * 0.3 + 0.15,
          animationDuration: Math.random() * 20 + 15,
          animationDelay: Math.random() * 5,
        };
        attempts++;
      } while (occupiedAreas.some(occupied => isOverlapping(newBox, occupied)) && attempts < 50);

      if (attempts < 50) {
        occupiedAreas.push({ x: newBox.x, y: newBox.y, size: newBox.size });
        newBoxes.push(newBox);
      }
    }

    return newBoxes;
  }, []);

  useEffect(() => {
    setBoxes(generateBoxes());

    const handleResize = () => setBoxes(generateBoxes());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [generateBoxes]);

  // Memoize decorative squares to prevent unnecessary rerenders
  const decorativeSquares = useMemo(() => [
    { top: 'top-20', left: 'left-10', size: 'w-12 h-12', border: 'border-blue-300/50', bg: 'bg-blue-400/10', delay: '0s' },
    { top: 'top-40', left: 'right-20', size: 'w-16 h-16', border: 'border-purple-400/30', bg: 'bg-purple-400/10', delay: '2s', hideMobile: true },
    { top: 'bottom-40', left: 'left-20', size: 'w-10 h-10', border: 'border-green-400/30', bg: 'bg-green-400/10', delay: '2s', hideMobile: true },
    { top: 'bottom-20', left: 'right-40', size: 'w-14 h-14', border: 'border-yellow-400/30', bg: 'bg-yellow-400/10', delay: '2s' },
    { top: 'top-1/2', left: 'left-1/4', size: 'w-8 h-8', border: 'border-red-400/30', bg: 'bg-red-400/10', delay: '8s' },
    { top: 'top-1/3', left: 'right-1/3', size: 'w-18 h-18', border: 'border-cyan-400/30', bg: 'bg-cyan-400/10', delay: '10s', hideMobile: true },
  ], []);

  // const handleOpenResume = () => {
  //   setIsResumeOpen(true);
  // };

  const handleCloseResume = () => {
    setIsResumeOpen(false);
  };

  return (
    <section
      id="home"
      className="relative pt-16 md:pt-20 bg-black text-white overflow-hidden min-h-screen"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="sparkle-bg">
          {Array.from({ length: 30 }).map((_, index) => (
            <span key={index} className="sparkle" />
          ))}
        </div>

        {boxes.map((box) => (
          <div
            key={box.id}
            className="absolute border border-blue-300/30 bg-blue-200/20 backdrop-blur-sm"
            style={{
              left: `${box.x}px`,
              top: `${box.y}px`,
              width: `${box.size}px`,
              height: `${box.size}px`,
              transform: `rotate(${box.rotation}deg)`,
              opacity: box.opacity,
              animation: `float ${box.animationDuration}s ease-in-out infinite ${box.animationDelay}s alternate`,
              boxShadow: '0 4px 20px rgba(255, 255, 255, 0.05)',
              borderRadius: '4px',
            }}
          />
        ))}

        {decorativeSquares.map((square, index) => (
          <div
            key={index}
            className={`absolute border animate-pulse ${square.size} ${square.border} ${square.bg} ${square.hideMobile ? 'hidden md:block' : ''}`}
            style={{ top: square.top, [square.left.includes('left') ? 'left' : 'right']: square.left.replace(/^(left|right)-/, ''), animationDelay: square.delay }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 z-10" />

      <div className="relative container mx-auto px-4 md:px-6 z-20 flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center justify-center text-center max-w-5xl">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight animate-slide-up">
              Hi, I'm Shweta <br />
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                Frontend Developer
              </span>
            </h1>
          </div>

          <p className="text-gray-400 mb-12 max-w-4xl text-lg md:text-xl leading-relaxed animate-fade-in-delay">
            I build responsive, high-performance websites with modern technologies. <br className="hidden md:block" />
            Let’s create something amazing together!
          </p>

          {/* <div className="flex flex-col sm:flex-row items-center gap-6 mb-12 animate-fade-in-delay-2">
            <button
              onClick={handleOpenResume}
              className="bg-white text-black px-8 py-4 rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 font-semibold flex items-center gap-2"
            >
              <FileText size={20} />
              View Resume
            </button>
          </div> */}

          <div className="flex space-x-6 animate-fade-in-delay-2">
            {[
              { Icon: Github, label: 'GitHub Profile', href: 'https://github.com/kawarshweta' },
              { Icon: Linkedin, label: 'LinkedIn Profile', href: 'https://www.linkedin.com/in/shweta-kawar-188416203/' },
              { Icon: Mail, label: 'Email', href: 'mailto:shwetakawar5@gmail.com' },
            ].map(({ Icon, label, href }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-white hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
                aria-label={label}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {isResumeOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative bg-white w-full max-w-4xl h-[80vh] rounded-lg overflow-hidden">
            <button
              onClick={handleCloseResume}
              className="absolute top-4 right-4 bg-gray-200 text-black p-2 rounded-full hover:bg-gray-300 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <embed
              src="/pdf/Frontend_Developer_Shwetakawar_Resume.pdf"
              className="w-full h-full"
              type="application/pdf"
              title="Shweta's Resume"
            />
          </div>
        </div>
      )}

      <style>
        {`
          .sparkle-bg {
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;
          }

          .sparkle {
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(255, 255, 255, 0.8);
            border-radius: 50%;
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
            animation: sparkle 3s infinite ease-in-out;
            opacity: 0;
          }

          .sparkle:nth-child(odd) {
            animation-duration: 5s;
          }

          .sparkle:nth-child(even) {
            animation-duration: 4s;
          }

          .sparkle:nth-child(3n) {
            animation-delay: 1s;
          }

          .sparkle:nth-child(5n) {
            animation-delay: 2s;
          }

          .sparkle:nth-child(1) { top: 10%; left: 5%; }
          .sparkle:nth-child(2) { top: 20%; left: 15%; }
          .sparkle:nth-child(3) { top: 30%; left: 25%; }
          .sparkle:nth-child(4) { top: 40%; left: 35%; }
          .sparkle:nth-child(5) { top: 50%; left: 45%; }
          .sparkle:nth-child(6) { top: 60%; left: 55%; }
          .sparkle:nth-child(7) { top: 70%; left: 65%; }
          .sparkle:nth-child(8) { top: 80%; left: 75%; }
          .sparkle:nth-child(9) { top: 90%; left: 85%; }
          .sparkle:nth-child(10) { top: 15%; left: 95%; }
          .sparkle:nth-child(11) { top: 25%; left: 10%; }
          .sparkle:nth-child(12) { top: 35%; left: 20%; }
          .sparkle:nth-child(13) { top: 45%; left: 30%; }
          .sparkle:nth-child(14) { top: 55%; left: 40%; }
          .sparkle:nth-child(15) { top: 65%; left: 50%; }
          .sparkle:nth-child(16) { top: 75%; left: 60%; }
          .sparkle:nth-child(17) { top: 85%; left: 70%; }
          .sparkle:nth-child(18) { top: 95%; left: 80%; }
          .sparkle:nth-child(19) { top: 5%; left: 90%; }
          .sparkle:nth-child(20) { top: 12%; left: 8%; }
          .sparkle:nth-child(21) { top: 22%; left: 18%; }
          .sparkle:nth-child(22) { top: 32%; left: 28%; }
          .sparkle:nth-child(23) { top: 42%; left: 38%; }
          .sparkle:nth-child(24) { top: 52%; left: 48%; }
          .sparkle:nth-child(25) { top: 62%; left: 58%; }
          .sparkle:nth-child(26) { top: 72%; left: 68%; }
          .sparkle:nth-child(27) { top: 82%; left: 78%; }
          .sparkle:nth-child(28) { top: 92%; left: 88%; }
          .sparkle:nth-child(29) { top: 8%; left: 98%; }
          .sparkle:nth-child(30) { top: 18%; left: 3%; }

          @keyframes sparkle {
            0% { opacity: 0; transform: scale(0); }
            50% { opacity: 1; transform: scale(1); }
            100% { opacity: 0; transform: scale(0); }
          }

          @keyframes float {
            0% { transform: translateY(0px) rotate(var(--rotation)) scale(1); }
            50% { transform: translateY(-15px) rotate(calc(var(--rotation) + 3deg)) scale(1.05); }
            100% { transform: translateY(-30px) rotate(calc(var(--rotation) + 5deg)) scale(1); }
          }

          @keyframes fade-in {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes slide-up {
            from { opacity: 0; transform: translateY(60px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .animate-fade-in { animation: fade-in 1.2s ease-out; }
          .animate-fade-in-delay { animation: fade-in 1.2s ease-out 0.4s both; }
          .animate-fade-in-delay-2 { animation: fade-in 1.2s ease-out 0.8s both; }
          .animate-slide-up { animation: slide-up 1.2s ease-out 0.2s both; }
          .w-18 { width: 4.5rem; height: 4.5rem; }

          @media (max-width: 768px) {
            .container { padding-top: 2rem; }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;