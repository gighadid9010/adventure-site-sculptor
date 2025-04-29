
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black/80 py-12 backdrop-blur-sm border-t border-purple-500/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-100 mb-2">SHARKIE</h3>
            <p className="text-purple-100/50 max-w-xs">
              Dive into an underwater crypto adventure like no other.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
            <div>
              <h4 className="font-bold mb-3 text-white">Explore</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-purple-100/50 hover:text-purple-100 transition-colors">Home</a></li>
                <li><a href="#features" className="text-purple-100/50 hover:text-purple-100 transition-colors">Features</a></li>
                <li><a href="#characters" className="text-purple-100/50 hover:text-purple-100 transition-colors">Characters</a></li>
                <li><a href="#newsletter" className="text-purple-100/50 hover:text-purple-100 transition-colors">Community</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-3 text-white">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-purple-100/50 hover:text-purple-100 transition-colors">Help Center</a></li>
                <li><a href="#" className="text-purple-100/50 hover:text-purple-100 transition-colors">Blog</a></li>
                <li><a href="#" className="text-purple-100/50 hover:text-purple-100 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-purple-100/50 hover:text-purple-100 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-purple-500/10 text-center">
          <p className="text-purple-100/50 text-sm">
            &copy; {new Date().getFullYear()} SHARKIE: Crypto Waters. Built with 💜 on Solana.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
