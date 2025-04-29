
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import CharacterSection from '@/components/CharacterSection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-purple-900/20">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/4a941966-c6af-44b5-a2a6-306144d0e2a2.png')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <CharacterSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
