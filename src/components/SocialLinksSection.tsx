
import React from 'react';
import { WalletButton } from './WalletButton';
import { Twitter, X, Instagram } from 'lucide-react';

const SocialLinksSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Join Our Community</h2>
        
        <div className="flex justify-center space-x-8 mb-12">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-black rounded-full p-3 hover:opacity-80 transition-opacity">
            <Twitter size={24} className="text-white" />
          </a>
          
          <a href="#" className="bg-black rounded-full p-3 hover:opacity-80 transition-opacity">
            <X size={24} className="text-white" />
          </a>
          
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-black rounded-full p-3 hover:opacity-80 transition-opacity">
            <Instagram size={24} className="text-white" />
          </a>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="inline-block">
            <WalletButton />
          </div>
        </div>
        
        <p className="text-sm text-gray-600">
          © 2024 SHAK Token. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default SocialLinksSection;
