
import React from 'react';
import BeachHeroSection from '@/components/BeachHeroSection';
import TokenomicsSection from '@/components/TokenomicsSection';
import TokenSupplySection from '@/components/TokenSupplySection';
import SocialLinksSection from '@/components/SocialLinksSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-sky-400 relative overflow-x-hidden">
      {/* Beach background with palm trees */}
      <Navbar />
      <BeachHeroSection />
      <TokenomicsSection />
      <TokenSupplySection />
      <SocialLinksSection />
      <Footer />
    </div>
  );
};

export default Index;
