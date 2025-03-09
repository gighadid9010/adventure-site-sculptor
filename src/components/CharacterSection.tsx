
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface CharacterCardProps {
  name: string;
  role: string;
  description: string;
  image: string;
  color: string;
  index: number;
}

const CharacterCard = ({ name, role, description, image, color, index }: CharacterCardProps) => {
  const isEven = index % 2 === 0;
  const animation = isEven ? 'slide-in-left' : 'slide-in-right';
  
  return (
    <div 
      className="flex flex-col md:flex-row items-center gap-8 mb-16 opacity-0"
      style={{ 
        animationFillMode: 'forwards',
        animation: `${animation} 0.6s ease-out forwards`,
        animationDelay: `${0.2 * index}s`
      }}
    >
      <div className={cn(
        "relative w-64 h-64 flex-shrink-0 rounded-full p-2 transition-transform duration-500 hover:scale-105",
        isEven ? "md:order-1" : "md:order-2",
        color
      )}>
        <div className="absolute inset-0 bg-white rounded-full opacity-20 blur-md"></div>
        <div className="relative h-full w-full bg-white rounded-full overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div className={cn(
        "md:w-2/3 text-center md:text-left",
        isEven ? "md:order-2" : "md:order-1"
      )}>
        <Badge variant="outline" className="mb-2 px-3 py-1 bg-white border border-gray-200 text-gray-600 rounded-full">
          {role}
        </Badge>
        <h3 className="text-3xl font-bold mb-3">{name}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const CharacterSection = () => {
  const characters = [
    {
      name: "Captain Fin",
      role: "Hero Character",
      description: "The brave leader of the SolSharks team. With his strategic mind and powerful abilities, Captain Fin leads underwater expeditions to discover ancient treasures and protect the ocean realm.",
      image: "/lovable-uploads/bfa664cf-8e11-4176-8653-1e1f8e129bff.png",
      color: "bg-ocean/30"
    },
    {
      name: "Marina",
      role: "Support Character",
      description: "A wise and gentle manta ray with healing powers. Marina provides crucial support during challenging missions and teaches players about the importance of ocean conservation.",
      image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      color: "bg-coral/30"
    },
    {
      name: "Bubbles",
      role: "Scout Character",
      description: "A quick and nimble tropical fish who can squeeze through narrow passages to scout ahead. Bubbles helps locate hidden treasures and alerts the team to potential dangers lurking in the deep.",
      image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      color: "bg-seaweed/30"
    }
  ];

  return (
    <section id="characters" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Meet the Characters</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
          Get to know the amazing characters that will join you on your underwater adventures.
        </p>
        
        <div className="max-w-4xl mx-auto">
          {characters.map((character, index) => (
            <CharacterCard 
              key={index}
              name={character.name}
              role={character.role}
              description={character.description}
              image={character.image}
              color={character.color}
              index={index}
            />
          ))}
        </div>
      </div>
      
      {/* Decorative waves */}
      <div className="absolute top-0 left-0 right-0 h-20 ocean-waves opacity-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-20 ocean-waves opacity-10"></div>
    </section>
  );
};

export default CharacterSection;
