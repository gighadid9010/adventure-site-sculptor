
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { WalletButton } from '@/components/WalletButton';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 px-4 md:px-8 transition-all duration-300',
        isScrolled ? 'py-2 bg-black/80 backdrop-blur-sm' : 'py-4 bg-transparent'
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-white">SHARKIE <span className="text-solana-purple">🦈</span></span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#characters">Characters</NavLink>
          <WalletButton />
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        'md:hidden absolute top-full left-0 w-full bg-black/80 backdrop-blur-sm transition-all duration-300 overflow-hidden',
        isMenuOpen ? 'max-h-[180px] py-2' : 'max-h-0 py-0'
      )}>
        <div className="container mx-auto flex flex-col space-y-2 px-4">
          <NavLink href="#home" mobile onClick={() => setIsMenuOpen(false)}>Home</NavLink>
          <NavLink href="#features" mobile onClick={() => setIsMenuOpen(false)}>Features</NavLink>
          <NavLink href="#characters" mobile onClick={() => setIsMenuOpen(false)}>Characters</NavLink>
          <div className="py-1">
            <WalletButton isMobile />
          </div>
        </div>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
  onClick?: () => void;
}

const NavLink = ({ href, children, mobile, onClick }: NavLinkProps) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        'font-medium text-white/90 hover:text-white transition-colors',
        mobile && 'py-1'
      )}
    >
      {children}
    </a>
  );
};

export default Navbar;
