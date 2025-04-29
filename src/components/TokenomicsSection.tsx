
import React from 'react';

const TokenomicsSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold mb-12 text-amber-400" style={{ textShadow: '1px 1px 0 #3B82F6, -1px 1px 0 #3B82F6, 1px -1px 0 #3B82F6, -1px -1px 0 #3B82F6' }}>
          TOKENOMICS
        </h2>
        
        <div className="flex justify-center mb-10">
          <img 
            src="/lovable-uploads/d088e8a2-1fb9-42e1-8d24-db859e3520c2.png" 
            alt="SHAK Token Mascot" 
            className="max-w-xs"
          />
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-blue-50 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Utility</h3>
              <ul className="text-left space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Community governance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Access to exclusive content</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Gaming rewards</span>
                </li>
              </ul>
            </div>
            
            <div className="p-6 bg-amber-50 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-amber-600 mb-4">Ecosystem</h3>
              <ul className="text-left space-y-2">
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>Built on Solana blockchain</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>Fast transactions, low fees</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>Community-driven development</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenomicsSection;
