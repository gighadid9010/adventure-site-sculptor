
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Rocket, ShieldCheck, ThumbsUp } from 'lucide-react';

const FeatureCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) => (
  <Card className="bg-white/5 border-purple-500/20 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 h-full">
    <CardHeader>
      <div className="bg-purple-600/20 p-3 rounded-lg w-fit mb-4">
        {icon}
      </div>
      <CardTitle className="text-xl text-white">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-purple-100/70 text-base">{description}</CardDescription>
    </CardContent>
  </Card>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: <Sparkles className="w-6 h-6 text-purple-400" />,
      title: "Crypto Aesthetics",
      description: "Experience Solana-themed visuals with purple/black gradients, pixel art enemies, and blockchain-inspired environments."
    },
    {
      icon: <Rocket className="w-6 h-6 text-purple-400" />,
      title: "Gameplay Memes",
      description: "Collect $SHARK tokens while using crypto-themed powerups like 'To the Moon' Rocket Boost and 'Diamond Hands' Shield."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-purple-400" />,
      title: "Solana Integration",
      description: "Seamlessly connect with popular Solana wallets to enhance your gameplay and track your progress."
    },
    {
      icon: <ThumbsUp className="w-6 h-6 text-purple-400" />,
      title: "Crypto Culture",
      description: "Discover hidden Easter eggs from crypto culture, including Doge memes, 'Wen Moon?' references, and more."
    }
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-100">
            Featured Gameplay
          </h2>
          <p className="text-lg text-purple-100/70 max-w-2xl mx-auto">
            Dive into an underwater crypto adventure with unique gameplay elements designed for crypto enthusiasts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>

      {/* Background effects */}
      <div className="crypto-waves absolute bottom-0 left-0 right-0 h-32 opacity-20"></div>
    </section>
  );
};

export default FeaturesSection;
