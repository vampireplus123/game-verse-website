
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-gaming-primary/20 py-12 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded bg-gaming-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <span className="text-xl font-bold text-gaming-primary">GameVerse</span>
            </Link>
            <p className="text-muted-foreground">
              Showcasing original games created with passion and creativity.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-gaming-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/games" className="text-muted-foreground hover:text-gaming-primary transition-colors">Games</Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-gaming-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-gaming-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-gaming-primary transition-colors">Twitter</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-gaming-primary transition-colors">Discord</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-gaming-primary transition-colors">YouTube</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-gaming-primary transition-colors">Instagram</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Subscribe</h3>
            <p className="text-muted-foreground mb-4">Stay updated with our latest games and announcements.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-secondary/50 text-foreground rounded-l-md px-4 py-2 border border-gaming-primary/30 focus:outline-none focus:border-gaming-primary flex-1"
              />
              <button className="bg-gaming-primary hover:bg-gaming-secondary text-white px-4 py-2 rounded-r-md">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gaming-primary/10 mt-12 pt-6 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} GameVerse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
