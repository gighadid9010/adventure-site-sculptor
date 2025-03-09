
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useWallet } from '@solana/wallet-adapter-react';
import { Rocket, Gem, TrendingUp, Bomb } from 'lucide-react';

const HeroSection = () => {
  const bubblesRef = useRef<HTMLDivElement>(null);
  const { connected } = useWallet();

  useEffect(() => {
    // Create animated bubbles
    if (bubblesRef.current) {
      const bubbleContainer = bubblesRef.current;
      
      // Clear any existing bubbles
      bubbleContainer.innerHTML = '';
      
      // Create new bubbles
      for (let i = 0; i < 20; i++) {
        createBubble(bubbleContainer);
      }
    }
    
    // Start bubble generation interval
    const bubbleInterval = setInterval(() => {
      if (bubblesRef.current) {
        createBubble(bubblesRef.current);
      }
    }, 2000);
    
    return () => clearInterval(bubbleInterval);
  }, []);
  
  const createBubble = (container: HTMLDivElement) => {
    const bubble = document.createElement('div');
    
    // Random properties
    const size = Math.random() * 30 + 10;
    const left = Math.random() * 100;
    const duration = Math.random() * 15 + 10;
    const delay = Math.random() * 5;
    const opacity = Math.random() * 0.3 + 0.1;
    
    // Set bubble styles
    bubble.className = 'bubble';
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${left}%`;
    bubble.style.bottom = '-30px';
    bubble.style.opacity = opacity.toString();
    bubble.style.animation = `bubble ${duration}s ease-in infinite`;
    bubble.style.animationDelay = `${delay}s`;
    
    container.appendChild(bubble);
    
    // Remove bubble after animation
    setTimeout(() => {
      if (container.contains(bubble)) {
        container.removeChild(bubble);
      }
    }, (duration + delay) * 1000);
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-solana-gradient">
      {/* Bubbles container */}
      <div ref={bubblesRef} className="absolute inset-0 pointer-events-none z-0"></div>
      
      {/* Animated wave overlays */}
      <div className="absolute inset-x-0 top-1/3 h-[300px] crypto-waves z-0"></div>
      <div className="absolute inset-x-0 top-2/3 h-[200px] crypto-waves z-0" style={{ animationDelay: '2s' }}></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <span className="inline-block py-1 px-3 mb-6 rounded-full bg-white/10 backdrop-blur border border-purple-500/20 text-white font-medium animate-slide-in-bottom" style={{ animationDelay: '0.1s' }}>
              Crypto-themed 2D arcade game
            </span>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-slide-in-bottom" style={{ animationDelay: '0.3s' }}>
              SHARKIE: <br />
              <span className="relative text-solana-purple">
                Crypto Waters
                <span className="text-3xl ml-2">🦈 🪙</span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full"></div>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl animate-slide-in-bottom" style={{ animationDelay: '0.5s' }}>
              Swim through digital oceans! Collect meme coins, dodge bear markets, and ride bull runs in this lighthearted crypto parody on Solana.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-slide-in-bottom" style={{ animationDelay: '0.7s' }}>
              {!connected ? (
                <Button className="btn-connect-wallet">
                  Connect Wallet
                </Button>
              ) : (
                <Button className="btn-play-now" onClick={() => window.location.href = '/game.html'}>
                Play Now
                </Button>

              )}
              <Button variant="outline" className="btn-learn-more">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative animate-slide-in-right" style={{ animationDelay: '0.5s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-3xl"></div>
              <img 
                src="/lovable-uploads/bfa664cf-8e11-4176-8653-1e1f8e129bff.png" 
                alt="SHARKIE Crypto Game Character" 
                className="relative z-10 w-[350px] h-auto mx-auto lg:mx-0 animate-float shark-shadow"
              />
            </div>
            
            {/* Power-up icons */}
            <div className="absolute top-[10%] left-[10%] p-2 bg-black/50 rounded-full animate-float-slow">
              <Rocket size={24} className="text-purple-400" />
            </div>
            <div className="absolute bottom-[15%] right-[5%] p-2 bg-black/50 rounded-full animate-float-fast">
              <Gem size={24} className="text-blue-400" />
            </div>
            <div className="absolute top-[40%] right-[15%] p-2 bg-black/50 rounded-full animate-float">
              <TrendingUp size={24} className="text-green-400" />
            </div>
            <div className="absolute bottom-[40%] left-[25%] p-2 bg-black/50 rounded-full animate-pulse">
              <Bomb size={24} className="text-red-400" />
            </div>
            
            {/* Floating coins */}
            <div className="absolute top-[20%] right-[35%] w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center animate-float-coin">
              <span className="text-xs font-bold">$</span>
            </div>
            <div className="absolute bottom-[25%] left-[15%] w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center animate-float-coin-reverse">
              <span className="text-xs font-bold">$</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,224L60,208C120,192,240,160,360,165.3C480,171,600,213,720,218.7C840,224,960,192,1080,165.3C1200,139,1320,117,1380,106.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
