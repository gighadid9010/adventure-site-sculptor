
import React from 'react';
import { Facebook, Twitter, Instagram, Github, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white py-12 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-ocean mb-2">SolSharks</h3>
            <p className="text-gray-500 max-w-xs">
              Dive into an underwater adventure like no other.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
            <div>
              <h4 className="font-bold mb-3 text-gray-800">Explore</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-500 hover:text-ocean transition-colors">Home</a></li>
                <li><a href="#features" className="text-gray-500 hover:text-ocean transition-colors">Features</a></li>
                <li><a href="#characters" className="text-gray-500 hover:text-ocean transition-colors">Characters</a></li>
                <li><a href="#newsletter" className="text-gray-500 hover:text-ocean transition-colors">Community</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-3 text-gray-800">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-500 hover:text-ocean transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-500 hover:text-ocean transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-500 hover:text-ocean transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-500 hover:text-ocean transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-3 text-gray-800">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-ocean transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-ocean transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-ocean transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-ocean transition-colors">
                  <Youtube size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-ocean transition-colors">
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-100 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} SolSharks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
