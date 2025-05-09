
import React from 'react';
import GameCard, { GameCardProps } from './GameCard';

// Sample game data
const games: GameCardProps[] = [
  {
    id: "1",
    title: "Cosmic Odyssey",
    coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=60",
    description: "Embark on an epic journey through the cosmos, battling alien forces and discovering new worlds.",
    genre: "Action RPG"
  },
  {
    id: "2",
    title: "Neon Runners",
    coverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=500&q=60",
    description: "Race through futuristic cityscapes in this high-speed cyberpunk racing game.",
    genre: "Racing"
  },
  {
    id: "3",
    title: "Phantom Realms",
    coverImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=500&q=60",
    description: "Explore haunted dimensions and solve mysteries in this atmospheric horror adventure.",
    genre: "Horror"
  },
  {
    id: "4",
    title: "Steel Warriors",
    coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&q=60",
    description: "Command powerful mechs in tactical combat against rival corporations.",
    genre: "Strategy"
  },
  {
    id: "5",
    title: "Mystic Legends",
    coverImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=500&q=60",
    description: "Master the ancient arts of magic in a world threatened by dark forces.",
    genre: "Fantasy RPG"
  },
  {
    id: "6",
    title: "Cyber Heist",
    coverImage: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=500&q=60",
    description: "Infiltrate heavily guarded corporate facilities in this stealth-based cyberpunk game.",
    genre: "Stealth"
  }
];

interface GameGridProps {
  title?: string;
  subtitle?: string;
}

const GameGrid: React.FC<GameGridProps> = ({ title = "Our Games", subtitle = "Check out our latest game creations" }) => {
  return (
    <section className="py-16 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">{title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <GameCard key={game.id} {...game} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameGrid;
