
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="w-full backdrop-blur-md bg-background/70 fixed top-0 z-50 border-b border-gaming-primary/20">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 lg:px-8">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-9 h-9 rounded bg-gaming-primary flex items-center justify-center">
            <span className="text-white font-bold text-xl">G</span>
          </div>
          <span className="text-2xl font-bold text-gaming-primary">GameVerse</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-foreground hover:text-gaming-primary transition-colors">Home</Link>
          <Link to="/games" className="text-foreground hover:text-gaming-primary transition-colors">Games</Link>
          <Link to="/about" className="text-foreground hover:text-gaming-primary transition-colors">About</Link>
          <Link to="/contact" className="text-foreground hover:text-gaming-primary transition-colors">Contact</Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-foreground hover:bg-gaming-primary/20">
            <Search className="h-5 w-5" />
          </Button>
          <Button className="hidden md:inline-flex bg-gaming-primary hover:bg-gaming-secondary text-white">
            Submit Game
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
