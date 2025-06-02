import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header scrolled={scrolled} />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <About />
        <Projects />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;