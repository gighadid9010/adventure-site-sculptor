
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { WalletButton } from '@/components/WalletButton';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useWallet } from '@solana/wallet-adapter-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { connected } = useWallet();

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
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'py-3 glassmorphism-dark' : 'py-5 bg-transparent'
      )}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-purple-300 bg-clip-text text-transparent">SHARKIE</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#characters">Characters</NavLink>
          <NavLink href="#newsletter">Community</NavLink>
          {connected ? (
            <WalletMultiButton className="!bg-purple-600 hover:!bg-purple-700 !rounded-full !font-medium" />
          ) : (
            <WalletButton />
          )}
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
        'md:hidden absolute top-full left-0 w-full glassmorphism-dark transition-all duration-300',
        isMenuOpen ? 'max-h-[300px] py-4' : 'max-h-0 py-0 overflow-hidden'
      )}>
        <div className="container mx-auto flex flex-col space-y-4 px-4">
          <NavLink href="#home" mobile onClick={() => setIsMenuOpen(false)}>Home</NavLink>
          <NavLink href="#features" mobile onClick={() => setIsMenuOpen(false)}>Features</NavLink>
          <NavLink href="#characters" mobile onClick={() => setIsMenuOpen(false)}>Characters</NavLink>
          <NavLink href="#newsletter" mobile onClick={() => setIsMenuOpen(false)}>Community</NavLink>
          <div className="py-2">
            {connected ? (
              <WalletMultiButton className="!bg-purple-600 hover:!bg-purple-700 !rounded-full !w-full !font-medium" />
            ) : (
              <WalletButton isMobile />
            )}
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
        'font-medium text-purple-100/90 hover:text-white transition-colors relative group',
        mobile && 'py-2'
      )}
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all group-hover:w-full"></span>
    </a>
  );
};

export default Navbar;
