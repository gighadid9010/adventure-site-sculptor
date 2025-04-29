
import React from 'react';
import BeachHeroSection from '@/components/BeachHeroSection';
import TokenomicsSection from '@/components/TokenomicsSection';
import TokenSupplySection from '@/components/TokenSupplySection';
import SocialLinksSection from '@/components/SocialLinksSection';
import WalletButton from '@/components/WalletButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-sky-400 relative overflow-x-hidden">
      {/* Beach background with palm trees */}
      <BeachHeroSection />
      <TokenomicsSection />
      <TokenSupplySection />
      <SocialLinksSection />
    </div>
  );
};

export default Index;
