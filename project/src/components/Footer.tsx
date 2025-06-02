import { Github, Linkedin, Twitter, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Karan Shah</h2>
            <p className="text-gray-400">Frontend Developer</p>
          </div>
          
          <div className="flex flex-col space-y-2">
            <div className="flex items-center">
              <Mail size={18} className="mr-2" />
              <a href="mailto:contact@example.com" className="hover:text-gray-300 transition-colors">
                contact@example.com
              </a>
            </div>
            <div className="flex items-center">
              <Phone size={18} className="mr-2" />
              <a href="tel:+1234567890" className="hover:text-gray-300 transition-colors">
                +123 456 7890
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Karan Shah. All rights reserved.
          </p>
          
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300 transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;