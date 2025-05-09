
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1500&q=80')"
        }}
      />
      
      <div className="absolute inset-0 hero-gradient" />
      
      <div className="relative container mx-auto h-full flex flex-col justify-end pb-20 px-4 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-block bg-gaming-primary/20 text-gaming-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
            Featured Game
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            Cosmic <span className="text-gradient">Odyssey</span>
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Embark on an epic journey through the cosmos, battling alien forces and discovering new worlds in this immersive space adventure game.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-gaming-primary hover:bg-gaming-secondary text-white animate-pulse-glow">
              Play Now
            </Button>
            <Button variant="outline" className="border-gaming-primary text-gaming-primary hover:bg-gaming-primary/10">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
