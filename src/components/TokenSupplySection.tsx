
import React from 'react';

const TokenSupplySection = () => {
  return (
    <div className="py-16 bg-amber-200">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold mb-8 text-blue-500" style={{ textShadow: '1px 1px 0 #fff, -1px 1px 0 #fff, 1px -1px 0 #fff, -1px -1px 0 #fff' }}>
          TOKEN SUPPLY
        </h2>
        
        <p className="text-6xl font-bold mb-16 text-blue-500" style={{ textShadow: '1px 1px 0 #fff, -1px 1px 0 #fff, 1px -1px 0 #fff, -1px -1px 0 #fff' }}>
          1,000,000,000
        </p>
        
        <h3 className="text-4xl font-bold mb-16 text-white" style={{ textShadow: '1px 1px 0 #3B82F6, -1px 1px 0 #3B82F6, 1px -1px 0 #3B82F6, -1px -1px 0 #3B82F6' }}>
          TOKEN DISTRIBUTION
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <p className="text-2xl font-bold text-green-700">50%</p>
            <p className="text-xl font-bold text-green-700">Initial Liquidity</p>
            <p className="text-xl font-bold text-green-700">Pool</p>
          </div>
          
          <div className="text-center">
            <p className="text-2xl font-bold text-red-800">20%</p>
            <p className="text-xl font-bold text-red-800">Burning</p>
          </div>
          
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-700">10%</p>
            <p className="text-xl font-bold text-blue-700">Marketing and</p>
            <p className="text-xl font-bold text-blue-700">Collab</p>
          </div>
          
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-500">10%</p>
            <p className="text-xl font-bold text-blue-500">Early Adopters,</p>
            <p className="text-xl font-bold text-blue-500">Investors, and</p>
            <p className="text-xl font-bold text-blue-500">Advisors</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenSupplySection;
