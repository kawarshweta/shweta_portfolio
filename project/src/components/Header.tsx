import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  scrolled: boolean;
}

const Header = ({ scrolled }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center py-5">
        <a className="text-xl font-bold flex items-center text-white hover:text-blue-400 transition-all duration-300 transform hover:scale-105">
         &lt;S /&gt;

        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['Home', 'Skills', 'Experience', 'About', 'Projects'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white hover:text-blue-400 transition-all duration-300 transform hover:scale-105"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Navigation Button */}
        <button
          className="md:hidden text-white hover:text-blue-400 transition-all duration-300 transform hover:scale-110 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Contact button for desktop */}
        <a
          href="#contact"
          className="hidden md:block border border-white/30 text-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 font-semibold"
        >
          Contact Me
        </a>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-sm shadow-md">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {['Home', 'Skills', 'Experience', 'About', 'Projects', ''].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white hover:text-blue-400 transition-all duration-300 transform hover:scale-105 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;