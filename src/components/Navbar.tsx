
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { WalletButton } from './WalletButton';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-blue-500/90 py-2 shadow-md" : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-white">
            $SHAK
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#" className="text-white hover:text-amber-200 transition-colors">Home</a>
            <a href="#tokenomics" className="text-white hover:text-amber-200 transition-colors">Tokenomics</a>
            <a href="#supply" className="text-white hover:text-amber-200 transition-colors">Supply</a>
            <a href="#community" className="text-white hover:text-amber-200 transition-colors">Community</a>
            <WalletButton />
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "md:hidden absolute left-0 right-0 bg-blue-500 shadow-md transition-all duration-300 overflow-hidden",
          isMenuOpen ? "max-h-64 py-4" : "max-h-0"
        )}>
          <div className="flex flex-col space-y-4 px-4">
            <a href="#" className="text-white hover:text-amber-200 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#tokenomics" className="text-white hover:text-amber-200 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Tokenomics</a>
            <a href="#supply" className="text-white hover:text-amber-200 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Supply</a>
            <a href="#community" className="text-white hover:text-amber-200 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Community</a>
            <div className="py-2">
              <WalletButton isMobile />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
