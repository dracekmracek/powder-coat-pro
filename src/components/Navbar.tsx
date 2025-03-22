import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: 'about', label: 'O nás' },
  { id: 'technology', label: 'Technologie' },
  { id: 'process', label: 'Postup' },
  { id: 'surfaces', label: 'Povrchy' },
  { id: 'facility', label: 'Lakovna' },
  { id: 'quality', label: 'Kvalita' },
  { id: 'contact', label: 'Kontakt' }
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState('');

  // Blokování scrollování při otevřeném menu
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100%';
      document.body.style.position = 'fixed'; // Přidáno pro lepší blokování scrollu
      document.body.style.width = '100%'; // Přidáno pro zabránění horizontálnímu posunu
    } else {
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.body.style.position = ''; // Reset pozice
      document.body.style.width = ''; // Reset šířky
    }
    
    return () => {
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isMenuOpen]);

  const handleScroll = useCallback(() => {
    setScrollPosition(window.scrollY);
    
    // Determine active section based on scroll position
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    
    sections.forEach(current => {
      const sectionHeight = (current as HTMLElement).offsetHeight;
      const sectionTop = (current as HTMLElement).offsetTop - 100;
      const sectionId = current.getAttribute('id') || '';
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        setActiveSection(sectionId);
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Vylepšená funkce pro navigaci - spolehlivější fungování odkazů
  const handleNavClick = useCallback((id: string) => {
    // Nejdřív zavřeme menu okamžitě
    closeMenu();
    
    // Pak se přesuneme na danou sekci s malým zpožděním
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 150); // Zvýšené zpoždění pro spolehlivější fungování
  }, [closeMenu]);

  // Určuje, zda je navbar průhledný nebo ne na základě pozice scrollu
  const isTransparent = scrollPosition < 50 && !isMenuOpen;

  return (
    <header 
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isTransparent 
          ? "bg-transparent" 
          : "bg-white bg-opacity-90 backdrop-blur-md shadow-sm"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a 
            href="#hero" 
            className={cn(
              "font-bold text-xl z-10 flex items-center",
              isTransparent ? "text-white" : "text-primary"
            )}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('hero');
            }}
          >
            <img 
              src="/powder-coat-pro/images/Logo_Betrim.png" 
              alt="Betrim" 
              className="h-10 w-auto" 
            />
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={cn(
                      "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200",
                      activeSection === item.id
                        ? "text-primary"
                        : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                    )}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className={cn(
              "md:hidden z-50 p-2 rounded-md",
              isTransparent ? "text-foreground" : "text-foreground"
            )}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Mobile Navigation - upravené pro lepší fungování odkazů */}
          {isMenuOpen && (
            <div className="fixed inset-0 bg-white/95 backdrop-blur-sm z-40 flex flex-col justify-start overflow-auto h-[100vh] pt-20 md:hidden">
              <nav className="container px-4 py-6">
                <ul className="flex flex-col space-y-6">
                  {navItems.map((item) => (
                    <li key={item.id} className="border-b border-border/30 pb-4">
                      <button
                        onClick={() => handleNavClick(item.id)}
                        className={cn(
                          "block w-full text-left px-4 py-2 text-xl font-medium transition-colors duration-200",
                          activeSection === item.id
                            ? "text-primary"
                            : "text-foreground/80 hover:text-primary"
                        )}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
