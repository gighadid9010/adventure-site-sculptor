
import React from 'react';
import { Anchor, Trophy, Users, Compass, ShieldCheck, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  color: string;
}

const FeatureCard = ({ icon, title, description, delay, color }: FeatureCardProps) => {
  return (
    <div 
      className="feature-card opacity-0" 
      style={{ 
        animationDelay: `${delay}s`,
        animationFillMode: 'forwards',
        animation: 'slide-in-bottom 0.6s ease-out forwards'
      }}
    >
      <div className={cn(
        "w-16 h-16 rounded-full flex items-center justify-center mb-4",
        color
      )}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <Compass className="h-8 w-8 text-white" />,
      title: "Explore the Deep",
      description: "Dive into vast underwater worlds filled with secrets and hidden treasures.",
      color: "bg-ocean",
      delay: 0.1
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: "Team Adventures",
      description: "Form alliances with friends and conquer the ocean depths together.",
      color: "bg-coral",
      delay: 0.2
    },
    {
      icon: <Anchor className="h-8 w-8 text-white" />,
      title: "Build Your Base",
      description: "Create and customize your underwater headquarters.",
      color: "bg-seaweed",
      delay: 0.3
    },
    {
      icon: <Trophy className="h-8 w-8 text-white" />,
      title: "Daily Challenges",
      description: "Complete missions and earn special rewards every day.",
      color: "bg-ocean-deep",
      delay: 0.4
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-white" />,
      title: "Safe Trading",
      description: "Exchange items securely with other players in our marketplace.",
      color: "bg-coral-dark",
      delay: 0.5
    },
    {
      icon: <Sparkles className="h-8 w-8 text-white" />,
      title: "Rare Collectibles",
      description: "Discover and collect unique items with special abilities.",
      color: "bg-seaweed-dark",
      delay: 0.6
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Game Features</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Dive into an ocean of endless possibilities with SolSharks. Explore, build, collect, and compete in our underwater world.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
              color={feature.color}
            />
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-ocean/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-coral/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default FeaturesSection;
