
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';

const Index = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') || '');
        if (target) {
          window.scrollTo({
            top: target.getBoundingClientRect().top + window.scrollY - 70,
            behavior: 'smooth'
          });
        }
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-dark-charcoal" 
      style={{ 
        backgroundImage: `url('/lovable-uploads/4a941966-c6af-44b5-a2a6-306144d0e2a2.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      <Navbar />
      <HeroSection />
      {/* FeaturesSection and CharacterSection have been removed as requested */}
    </div>
  );
};

export default Index;
