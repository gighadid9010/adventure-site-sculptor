
import React from 'react';
import { WalletButton } from './WalletButton';
import { useWallet } from '@solana/wallet-adapter-react';

const BeachHeroSection = () => {
  const { connected } = useWallet();

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-sky-400">
      {/* Sky and clouds */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-300 to-sky-400"></div>
      
      {/* Sand island */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-64 bg-amber-200 rounded-tl-[100%] rounded-tr-[100%]"></div>
      </div>
      
      {/* Left palm tree */}
      <div className="absolute bottom-32 left-0">
        <div className="relative">
          <div className="w-8 h-32 bg-amber-800 skew-x-12 rounded-full"></div>
          <div className="absolute -top-8 -left-12">
            <div className="w-24 h-16 bg-green-600 rotate-12 rounded-full"></div>
          </div>
          <div className="absolute -top-12 -left-8">
            <div className="w-32 h-16 bg-green-500 rotate-12 rounded-full"></div>
          </div>
          <div className="absolute -top-8 left-0">
            <div className="w-32 h-16 bg-green-400 -rotate-12 rounded-full"></div>
          </div>
        </div>
      </div>
      
      {/* Right palm tree */}
      <div className="absolute bottom-32 right-0">
        <div className="relative">
          <div className="w-8 h-32 bg-amber-800 -skew-x-12 rounded-full"></div>
          <div className="absolute -top-8 -right-12">
            <div className="w-24 h-16 bg-green-600 -rotate-12 rounded-full"></div>
          </div>
          <div className="absolute -top-12 -right-8">
            <div className="w-32 h-16 bg-green-500 -rotate-12 rounded-full"></div>
          </div>
          <div className="absolute -top-8 right-0">
            <div className="w-32 h-16 bg-green-400 rotate-12 rounded-full"></div>
          </div>
        </div>
      </div>
      
      {/* Beach gradient water */}
      <div className="absolute bottom-48 left-0 right-0 h-96 bg-gradient-to-t from-blue-400 to-blue-300"></div>
      
      {/* Water bubbles */}
      <div className="absolute bottom-80 left-1/4 w-16 h-16 bg-blue-200 rounded-full opacity-30"></div>
      <div className="absolute bottom-96 left-1/2 w-12 h-12 bg-blue-200 rounded-full opacity-30"></div>
      <div className="absolute bottom-64 right-1/4 w-20 h-20 bg-blue-200 rounded-full opacity-30"></div>

      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10 pt-20 pb-24 flex flex-col md:flex-row items-center">
        {/* Left content - Shark and info */}
        <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
          <div className="mb-6">
            <img 
              src="/lovable-uploads/4368b6cc-39b7-4269-bb32-662ff297cf63.png" 
              alt="SHAK Character" 
              className="max-w-xs mx-auto md:mx-0"
            />
          </div>
          
          <div className="mt-8 space-y-4 text-black">
            <h2 className="text-2xl font-bold">Welcome to $SHAK Pre-Launch!</h2>
            
            <div className="space-y-2">
              <p className="font-semibold">Solana Address:</p>
              <p className="text-sm bg-white/20 p-2 rounded">8stPZMTB9zyfD4DgGVAPnmeMNooGBbY8anVWR6KExXkz</p>
            </div>
            
            <div>
              <p className="font-semibold">Send:</p>
              <p>Minimum Buy - 0.2 Sol</p>
              <p>Max Buy - 5 Sol</p>
            </div>
            
            <div className="space-y-1">
              <p>0.2 Sol = 200,000 SHAK</p>
              <p>0.5 Sol = 500,000 SHAK</p>
              <p>1 Sol = 1.2 M SHAK</p>
              <p>2 Sol = 2.2 M SHAK</p>
              <p>5 Sol = 5.5 M SHAK</p>
            </div>
            
            <div className="pt-4">
              <img 
                src="/lovable-uploads/129e008d-9055-46f9-8ca1-dabe6cef64c4.png" 
                alt="Divider" 
                className="mx-auto md:mx-0 h-6"
              />
            </div>
          </div>
        </div>
        
        {/* Right content - Title */}
        <div className="md:w-1/2">
          <div className="text-center md:text-right">
            <h1 className="text-4xl md:text-6xl font-bold text-amber-300 drop-shadow-lg filter" style={{ textShadow: '2px 2px 0 #000, -2px 2px 0 #000, 2px -2px 0 #000, -2px -2px 0 #000' }}>
              <span className="block">$SHAK IS</span>
              <span className="block mt-2">SWIMMING</span>
              <span className="block mt-2">ON SOLANA</span>
              <span className="block mt-2">OCEAN</span>
            </h1>
          </div>
        </div>
      </div>
      
      {/* Connect wallet button */}
      <div className="absolute top-4 right-4 z-50">
        <WalletButton />
      </div>
    </div>
  );
};

export default BeachHeroSection;
