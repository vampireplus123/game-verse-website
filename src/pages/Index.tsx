
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import GameGrid from '@/components/GameGrid';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16"> {/* Padding to account for fixed navbar */}
        <HeroSection />
        
        <GameGrid />
        
        <section className="py-16 px-4 lg:px-8 bg-gaming-primary/5">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">Want to showcase your own game?</h2>
                <p className="text-muted-foreground mb-6">
                  We welcome game developers to share their creations with our community.
                  Submit your game today and reach a wider audience of passionate gamers.
                </p>
                <Button className="bg-gaming-primary hover:bg-gaming-secondary text-white">
                  Submit Your Game
                </Button>
              </div>
              <div className="md:w-1/2 max-w-md">
                <div className="rounded-lg overflow-hidden border-2 border-gaming-primary/30 shadow-xl shadow-gaming-primary/10 animate-float">
                  <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=700&q=80" 
                    alt="Game Development" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 px-4 lg:px-8">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-2">Join Our Gaming Community</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Connect with other gamers, participate in events, and stay updated with our latest releases.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-[#1DA1F2] hover:bg-[#1A91DA] text-white">
                Twitter
              </Button>
              <Button className="bg-[#5865F2] hover:bg-[#4752C4] text-white">
                Discord
              </Button>
              <Button className="bg-[#FF0000] hover:bg-[#CC0000] text-white">
                YouTube
              </Button>
              <Button className="bg-[#E4405F] hover:bg-[#D53A54] text-white">
                Instagram
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
