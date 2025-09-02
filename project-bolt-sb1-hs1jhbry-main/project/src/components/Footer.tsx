import React from 'react';
import { Camera, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Camera className="w-8 h-8 text-orange-500" />
              <span className="text-2xl font-bold">LensArt</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Capturing life's beautiful moments with artistic vision and professional excellence. 
              Creating memories that last a lifetime.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Portfolio', 'Impact', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => document.querySelector(`#${link.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-orange-500 transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Wedding Photography</li>
              <li>Portrait Sessions</li>
              <li>Event Photography</li>
              <li>Lifestyle Shoots</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 mb-4 md:mb-0">
            © {currentYear} LensArt Photography. All rights reserved.
          </p>
          <p className="text-gray-300 flex items-center space-x-1">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-orange-500 fill-current" />
            <span>by Sarah Johnson</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;