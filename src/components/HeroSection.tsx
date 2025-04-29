
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
    <section className="relative pt-32 pb-16 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-100">
              SHARKIE: <span className="block mt-2">Crypto Waters</span>
            </h1>
            <p className="text-lg text-purple-100/80 mb-8 max-w-xl mx-auto lg:mx-0">
              Swim through digital oceans! Collect meme coins, dodge bear markets, and ride bull runs in this crypto game on Solana.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {!connected ? (
                <WalletButton />
              ) : (
                <Button 
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8 py-6 text-lg group"
                  onClick={handlePlayNow}
                >
                  Play Now
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              )}
              <Button 
                variant="outline" 
                size="lg"
                className="border-purple-500/50 text-purple-100 hover:bg-purple-900/20 rounded-full px-8 py-6 text-lg"
                onClick={() => window.location.href = "landing.html"}
              >
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 to-purple-700/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 flex items-center justify-center">
              <img
                src="/lovable-uploads/5590c2b2-a716-49be-8588-7d5c7d34f175.png"
                alt="SHARKIE Crypto Game"
                className="object-contain max-w-full mx-auto transform hover:scale-105 transition-all duration-500 shark-shadow"
                style={{
                  maxWidth: "450px",
                  minWidth: "260px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Background effects */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default HeroSection;
