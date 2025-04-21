
import React from 'react';
import { Button } from '@/components/ui/button';
import { useWallet } from '@solana/wallet-adapter-react';
import { ArrowRight } from 'lucide-react';
import { WalletButton } from '@/components/WalletButton';

const HeroSection = () => {
  const { connected } = useWallet();

  const handlePlayNow = () => {
    window.location.href = 'game.html';
  };

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-black to-purple-900/30">
      <div className="container mx-auto px-4 h-full flex flex-col lg:flex-row items-center justify-between relative z-10 pt-24 pb-12">
        <div className="flex-1 flex flex-col justify-center items-start w-full max-w-2xl mb-12 lg:mb-0">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-500 to-purple-300 bg-clip-text text-transparent">SHARKIE:</span>
            <span className="block text-white">Crypto Waters</span>
          </h1>
          <p className="text-lg text-white/80 mb-8 max-w-xl">
            Swim through digital oceans! Collect meme coins, dodge bear markets, and ride bull runs in this crypto game on Solana.
          </p>
          <div className="flex flex-wrap gap-4">
            {!connected ? (
              <WalletButton />
            ) : (
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg rounded-full group" onClick={handlePlayNow}>
                Play Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            )}
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center w-full">
          <img
            src="/lovable-uploads/5590c2b2-a716-49be-8588-7d5c7d34f175.png"
            alt="SHARKIE Crypto Game"
            className="object-contain max-h-[400px] w-full"
            style={{
              maxWidth: "450px",
              minWidth: "260px",
            }}
          />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none -z-10" />
    </section>
  );
};

export default HeroSection;
