
import React from 'react';
import { WalletButton } from './WalletButton';

const SocialLinksSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-8 mb-12">
          <a href="#" className="bg-black rounded-full p-3 hover:opacity-80">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </a>
          
          <a href="#" className="bg-black rounded-full p-3 hover:opacity-80">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="2" y1="2" x2="22" y2="22"></line>
              <line x1="22" y1="2" x2="2" y2="22"></line>
            </svg>
          </a>
          
          <a href="#" className="bg-black rounded-full p-3 hover:opacity-80">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 11a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"></path>
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 8v.5"></path>
              <path d="M2 12h20"></path>
            </svg>
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
