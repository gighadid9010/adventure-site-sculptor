
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black" 
      style={{ 
        backgroundImage: `url('/lovable-uploads/4a941966-c6af-44b5-a2a6-306144d0e2a2.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
      <div className="absolute inset-0 bg-black/50 backdrop-filter backdrop-blur-sm"></div>
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
      </div>
    </div>
  );
};

export default Index;
