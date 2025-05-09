import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { GameCardProps } from '@/components/GameCard';
import GameGrid from '@/components/GameGrid';

// Sample game data with extended information
const games: (GameCardProps & { 
  description: string;
  fullDescription: string;
  developer: string;
  releaseDate: string;
  platforms: string[];
  screenshots: string[];
  features: string[];
  requirements: {
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
  }
})[] = [
  {
    id: "1",
    title: "Cosmic Odyssey",
    coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    description: "Embark on an epic journey through the cosmos, battling alien forces and discovering new worlds.",
    genre: "Action RPG",
    fullDescription: "Cosmic Odyssey is an epic space adventure where you navigate through uncharted galaxies, encounter alien civilizations, and unravel the mysteries of the universe. As the captain of an advanced starship, you'll lead your crew through diplomatic missions, fierce space battles, and perilous planetary expeditions. The game features a rich narrative with branching storylines based on your choices, deep character progression systems, and strategic combat that combines real-time action with tactical decision-making.",
    developer: "Stellar Games",
    releaseDate: "2024-03-15",
    platforms: ["Windows", "MacOS", "Linux"],
    screenshots: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    ],
    features: [
      "Explore 50+ unique planets with diverse ecosystems",
      "Command your own customizable starship",
      "Engage in diplomacy or warfare with 12 alien factions",
      "Recruit crew members with unique abilities and storylines",
      "Strategic real-time combat with pause mechanics",
      "Dynamic story that adapts to your choices"
    ],
    requirements: {
      os: "Windows 10 64-bit / macOS 10.15+ / Ubuntu 18.04+",
      processor: "Intel Core i5-4590 / AMD Ryzen 5 1500X",
      memory: "8 GB RAM",
      graphics: "NVIDIA GTX 970 / AMD Radeon RX 580",
      storage: "30 GB available space"
    }
  },
  // Other games would be defined here similar to the one above
];

const GameDetail = () => {
  const { id } = useParams<{ id: string }>();
  const game = games.find(g => g.id === id);
  
  if (!game) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Game Not Found</h2>
          <p className="mb-6 text-muted-foreground">The game you're looking for doesn't exist or has been removed.</p>
          <Link to="/">
            <Button className="bg-gaming-primary hover:bg-gaming-secondary text-white">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16"> {/* Padding to account for fixed navbar */}
        {/* Hero Banner */}
        <div className="relative h-[50vh] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `url('${game.coverImage}')`
            }}
          />
          <div className="absolute inset-0 hero-gradient" />
          
          <div className="relative container mx-auto h-full flex items-end pb-8 px-4 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end gap-6">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden border-2 border-gaming-primary shadow-xl">
                <img 
                  src={game.coverImage}
                  alt={game.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="inline-block bg-gaming-primary/90 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {game.genre}
                  </span>
                  <span className="inline-block bg-accent/90 text-white px-3 py-1 rounded-full text-xs font-medium">
                    New Release
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                  {game.title}
                </h1>
                <div className="flex items-center text-sm text-gray-300 space-x-4">
                  <span>By {game.developer}</span>
                  <span>•</span>
                  <span>Released {new Date(game.releaseDate).toLocaleDateString()}</span>
                  <span>•</span>
                  <span>{game.platforms.join(", ")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Game Content */}
        <div className="container mx-auto py-8 px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto p-0 mb-6">
                  <TabsTrigger 
                    value="overview" 
                    className="data-[state=active]:border-b-2 data-[state=active]:border-gaming-primary data-[state=active]:text-gaming-primary rounded-none bg-transparent"
                  >
                    Overview
                  </TabsTrigger>
                  <TabsTrigger 
                    value="screenshots" 
                    className="data-[state=active]:border-b-2 data-[state=active]:border-gaming-primary data-[state=active]:text-gaming-primary rounded-none bg-transparent"
                  >
                    Screenshots
                  </TabsTrigger>
                  <TabsTrigger 
                    value="requirements" 
                    className="data-[state=active]:border-b-2 data-[state=active]:border-gaming-primary data-[state=active]:text-gaming-primary rounded-none bg-transparent"
                  >
                    Requirements
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="mt-0">
                  <div className="prose prose-invert max-w-none">
                    <p className="text-lg leading-relaxed mb-6">{game.fullDescription}</p>
                    
                    <h3 className="text-2xl font-bold mb-4">Features</h3>
                    <ul className="space-y-2 mb-6">
                      {game.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="inline-block w-5 h-5 bg-gaming-primary/20 text-gaming-primary rounded-full flex items-center justify-center mr-2 mt-1">
                            ✓
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>
                
                <TabsContent value="screenshots" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {game.screenshots.map((screenshot, index) => (
                      <div key={index} className="rounded-lg overflow-hidden border border-gaming-primary/30">
                        <img 
                          src={screenshot} 
                          alt={`${game.title} Screenshot ${index + 1}`}
                          className="w-full h-auto"
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="requirements" className="mt-0">
                  <div className="bg-card border border-gaming-primary/20 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4">System Requirements</h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4">
                        <div className="font-semibold text-gaming-primary">Operating System:</div>
                        <div>{game.requirements.os}</div>
                        
                        <div className="font-semibold text-gaming-primary">Processor:</div>
                        <div>{game.requirements.processor}</div>
                        
                        <div className="font-semibold text-gaming-primary">Memory:</div>
                        <div>{game.requirements.memory}</div>
                        
                        <div className="font-semibold text-gaming-primary">Graphics:</div>
                        <div>{game.requirements.graphics}</div>
                        
                        <div className="font-semibold text-gaming-primary">Storage:</div>
                        <div>{game.requirements.storage}</div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="bg-card border border-gaming-primary/20 rounded-lg p-6 sticky top-24">
                <div className="mb-6">
                  <Button className="w-full bg-gaming-primary hover:bg-gaming-secondary text-white text-lg py-6">
                    Download Game
                  </Button>
                </div>
                
                <Separator className="my-6 bg-gaming-primary/20" />
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-1">Developer</h4>
                    <p>{game.developer}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-1">Release Date</h4>
                    <p>{new Date(game.releaseDate).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-1">Platforms</h4>
                    <p>{game.platforms.join(", ")}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-1">Genre</h4>
                    <p>{game.genre}</p>
                  </div>
                </div>
                
                <Separator className="my-6 bg-gaming-primary/20" />
                
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3">Share This Game</h4>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="border-gaming-primary/30 text-gaming-primary">
                      Twitter
                    </Button>
                    <Button variant="outline" size="sm" className="border-gaming-primary/30 text-gaming-primary">
                      Facebook
                    </Button>
                    <Button variant="outline" size="sm" className="border-gaming-primary/30 text-gaming-primary">
                      Reddit
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Games */}
        <GameGrid title="Similar Games" subtitle="You might also enjoy these games" />
      </main>
      
      <Footer />
    </div>
  );
};

export default GameDetail;
