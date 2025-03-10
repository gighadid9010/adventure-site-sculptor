
import React from 'react';
import { Button } from '@/components/ui/button';
import { useWallet } from '@solana/wallet-adapter-react';

const HeroSection = () => {
  const { connected } = useWallet();

  const handlePlayNow = () => {
    window.location.href = 'game.html';
  };

  return (
    <section id="home" className="relative min-h-[70vh] overflow-hidden bg-solana-gradient">
      <div className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              SHARKIE: <span className="text-solana-purple">Crypto Waters</span>
              <span className="text-2xl ml-2">🦈 🪙</span>
            </h1>
            
            <p className="text-lg text-white/80 mb-6 max-w-xl">
              Swim through digital oceans! Collect meme coins, dodge bear markets, and ride bull runs in this crypto game on Solana.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {!connected ? (
                <Button className="bg-solana-purple hover:bg-purple-700 text-white">
                  Connect Wallet
                </Button>
              ) : (
                <Button className="bg-solana-purple hover:bg-purple-700 text-white" onClick={handlePlayNow}>
                  Play Now
                </Button>
              )}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <img 
              src="/lovable-uploads/5590c2b2-a716-49be-8588-7d5c7d34f175.png" 
              alt="SHARKIE Crypto Game" 
              className="relative z-10 w-full max-w-md mx-auto h-auto"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-auto">
          <path fill="#09090b" fillOpacity="1" d="M0,64L80,74.7C160,85,320,107,480,101.3C640,96,800,64,960,48C1120,32,1280,32,1360,32L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
