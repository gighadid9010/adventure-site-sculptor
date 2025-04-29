
import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const CharacterSection = () => {
  return (
    <section id="characters" className="py-20 relative bg-gradient-to-b from-purple-900/10 to-black/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-100">
            Meet Sharkie
          </h2>
          <p className="text-lg text-purple-100/70 max-w-2xl mx-auto">
            Our brave underwater explorer navigating the volatile waters of the crypto ocean
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/10 to-purple-400/10 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <img
                  src="/lovable-uploads/5590c2b2-a716-49be-8588-7d5c7d34f175.png"
                  alt="Sharkie Character"
                  className="mx-auto object-contain max-w-md animate-float"
                />
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <Card className="bg-white/5 border-purple-500/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-white">Sharkie's Adventures</h3>
                <p className="text-purple-100/80 mb-6">
                  As a savvy crypto enthusiast, Sharkie swims through the volatile crypto waters, collecting valuable tokens while avoiding the dangers of bear markets and FUD.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-purple-600/20 p-2 rounded-full">
                      <ArrowRight className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Collect $SHARK Tokens</h4>
                      <p className="text-purple-100/70">Gather Solana-styled tokens throughout your underwater journey</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-purple-600/20 p-2 rounded-full">
                      <ArrowRight className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Dodge FUD Fish</h4>
                      <p className="text-purple-100/70">Avoid the spreading of Fear, Uncertainty, and Doubt in the crypto waters</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-purple-600/20 p-2 rounded-full">
                      <ArrowRight className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Use Crypto Powerups</h4>
                      <p className="text-purple-100/70">Leverage 'Diamond Hands' shields and 'To the Moon' rocket boosts</p>
                    </div>
                  </div>
                </div>
                
                <Button 
                  className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6"
                  onClick={() => window.location.href = "game.html"}
                >
                  Start Swimming
                  <ArrowRight className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Floating bubbles background effect */}
      <div className="bubble w-8 h-8 left-1/4 animate-[bubble_15s_ease-in_infinite]" style={{top: "20%"}}></div>
      <div className="bubble w-12 h-12 left-1/3 animate-[bubble_25s_ease-in_infinite]" style={{top: "40%"}}></div>
      <div className="bubble w-6 h-6 left-2/3 animate-[bubble_20s_ease-in_infinite]" style={{top: "30%"}}></div>
    </section>
  );
};

export default CharacterSection;
