import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  id: string;
  label: string;
}

// Vylepšená navigace s konzistentním pořadím
const navItems: NavItem[] = [
  { id: 'about', label: 'O nás' },
  { id: 'technology', label: 'Technologie' },
  { id: 'process', label: 'Postup' },
  { id: 'surfaces', label: 'Povrchy' },
  { id: 'facility', label: 'Lakovna' },
  { id: 'solar', label: 'FVE' },
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
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleScroll = useCallback(() => {
    const currentPosition = window.scrollY;
    setScrollPosition(currentPosition);
    
    // Určení aktivní sekce na základě pozice scrollu
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(current => {
      const sectionHeight = (current as HTMLElement).offsetHeight;
      const sectionTop = (current as HTMLElement).offsetTop - 100;
      const sectionId = current.getAttribute('id') || '';
      
      if (currentPosition > sectionTop && currentPosition <= sectionTop + sectionHeight) {
        setActiveSection(sectionId);
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Inicializace při načtení
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Oddělené funkce pro ovládání menu
  const openMenu = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMenuOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Jednoduchá navigační funkce
  const navigateToSection = useCallback((id: string) => {
    // Nejprve zavřeme menu
    setIsMenuOpen(false);
    
    // Přidáme malé zpoždění
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
    }, 100);
  }, []);

  // Určuje, zda je navbar průhledný
  const isTransparent = scrollPosition < 50 && !isMenuOpen;

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-300",
          isTransparent 
            ? "bg-transparent" 
            : "bg-white bg-opacity-95 backdrop-blur-md shadow-sm"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo - bez href */}
            <div
              className={cn(
                "font-bold text-xl z-10 flex items-center cursor-pointer",
                isTransparent ? "text-white" : "text-primary"
              )}
              onClick={() => navigateToSection('hero')}
            >
              <img 
                src="/images/Logo_Betrim.png" 
                alt="Betrim" 
                className="h-10 w-auto"
              />
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex space-x-1">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => navigateToSection(item.id)}
                      className={cn(
                        "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 relative",
                        activeSection === item.id
                          ? "text-primary"
                          : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                      )}
                    >
                      {item.label}
                      {activeSection === item.id && (
                        <span 
                          className="absolute bottom-0 left-0 h-0.5 bg-primary/70 w-full"
                        />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            
            {/* Mobilní menu tlačítko - zjednodušené */}
            <motion.button 
              className={cn(
                "md:hidden z-50 p-2 rounded-md",
                "text-foreground"
              )}
              onClick={openMenu}
              type="button"
              aria-label="Otevřít menu"
              whileTap={{ scale: 0.9 }}
            >
              <Menu size={24} />
            </motion.button>
          </div>
        </div>
      </header>

      {/* Mobilní menu - oddělené od hlavní navigace s animací */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-gray-900 text-white shadow-xl z-[100] md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30 
            }}
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <div className="flex justify-center items-center">
                <img 
                  src="/images/Logo_Betrim_only_logo.png" 
                  alt="Betrim" 
                  className="h-12 w-auto"
                />
              </div>
              <motion.button 
                onClick={closeMenu}
                type="button"
                className="p-2 rounded-md text-white hover:bg-gray-800"
                aria-label="Zavřít menu"
                whileTap={{ scale: 0.9 }}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              >
                <X size={24} />
              </motion.button>
            </div>
            
            <nav className="p-4">
              <motion.ul 
                className="flex flex-col space-y-4"
                initial="closed"
                animate="open"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
                  },
                  closed: {
                    transition: { staggerChildren: 0.05, staggerDirection: -1 }
                  }
                }}
              >
                {navItems.map((item) => (
                  <motion.li 
                    key={item.id} 
                    className="border-b border-gray-700 pb-2"
                    variants={{
                      open: {
                        y: 0,
                        opacity: 1,
                        transition: {
                          y: { stiffness: 1000, velocity: -100 }
                        }
                      },
                      closed: {
                        y: 50,
                        opacity: 0,
                        transition: {
                          y: { stiffness: 1000 }
                        }
                      }
                    }}
                  >
                    <motion.button
                      onClick={() => navigateToSection(item.id)}
                      className={cn(
                        "flex justify-between w-full text-left px-4 py-3 rounded-md",
                        activeSection === item.id
                          ? "text-primary bg-gray-800"
                          : "text-gray-100 hover:text-primary hover:bg-gray-800"
                      )}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>{item.label}</span>
                      {activeSection === item.id && (
                        <motion.span 
                          className="h-2 w-2 rounded-full bg-primary" 
                          layoutId="mobileActiveIndicator"
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 500 }}
                        />
                      )}
                    </motion.button>
                  </motion.li>
                ))}
              </motion.ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
