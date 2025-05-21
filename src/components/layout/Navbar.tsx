
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bell, Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-30">
      <div className="px-4 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleSidebar}
            className="lg:hidden mr-2"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle sidebar</span>
          </Button>
          
          <Link to="/" className="flex items-center">
            <span className="font-bold text-xl md:text-2xl text-gym-primary">
              FitPro
              <span className="text-gym-accent">Gym</span>
            </span>
          </Link>
        </div>
        
        {/* Normal search for medium+ screens */}
        <div className="hidden md:flex items-center bg-muted rounded-full px-3 py-1.5 w-72">
          <Search className="h-4 w-4 text-muted-foreground mr-2" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-full text-sm"
          />
        </div>
        
        {/* Mobile search toggle */}
        <div className="flex items-center space-x-3">
          {isSearchOpen ? (
            <div className="absolute inset-x-0 top-0 h-16 bg-white flex items-center px-4 z-40">
              <Input 
                autoFocus
                type="text"
                placeholder="Search..."
                className="flex-grow mr-2" 
              />
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
          ) : (
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden" 
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
            </Button>
          )}
          
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1.5 w-2 h-2 rounded-full bg-gym-accent"></span>
          </Button>
          
          <div className="h-9 w-9 rounded-full bg-gym-primary flex items-center justify-center text-white font-medium">
            AD
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
