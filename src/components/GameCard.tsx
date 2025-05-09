
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export interface GameCardProps {
  id: string;
  title: string;
  coverImage: string;
  description: string;
  genre: string;
}

const GameCard: React.FC<GameCardProps> = ({ id, title, coverImage, description, genre }) => {
  return (
    <Link to={`/game/${id}`}>
      <Card className="game-card h-full border border-gaming-primary/20 bg-card/60">
        <div className="relative h-48 overflow-hidden rounded-t-lg">
          <img 
            src={coverImage} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="absolute top-2 right-2 bg-gaming-primary/90 text-white text-xs px-2 py-1 rounded-full">
            {genre}
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="font-bold text-lg mb-2 text-foreground">{title}</h3>
          <p className="text-muted-foreground text-sm line-clamp-2">{description}</p>
          <div className="mt-4">
            <Button className="w-full bg-gaming-primary/20 hover:bg-gaming-primary text-gaming-primary hover:text-white border border-gaming-primary/50">
              View Game
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default GameCard;
