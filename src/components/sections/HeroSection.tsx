import React, { useEffect, useRef } from 'react';
import { motion, Variants, useAnimationControls } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';

const HeroSection: React.FC = () => {
  // Animace pro text nadpisu
  const titleVariants: Variants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  const titleWords = "Betrim - Práškové lakování".split(' ');

  // Vylepšená animace pro částice s náhodnějším pohybem
  const getRandomPath = (i: number) => {
    const pathTypes = [
      // Kruhová dráha
      {
        x: [0, 50, 0, -50, 0],
        y: [0, 50, 100, 50, 0],
      },
      // Vlnkovitý pohyb
      {
        x: [0, 25, 50, 75, 100, 75, 50, 25, 0],
        y: [50, 0, 50, 0, 50, 100, 50, 100, 50],
      },
      // Diagonální pohyb
      {
        x: [0, 100, 0, -100, 0],
        y: [0, 100, 0, -100, 0],
      },
      // Chaotický pohyb
      {
        x: [0, 80, -30, 60, 0],
        y: [0, -40, 100, 30, 0],
      },
      // Zpomalující se pohyb
      {
        x: [0, 100, 50, 0],
        y: [0, 50, 100, 0],
      }
    ];

    // Vybereme náhodnou dráhu a připravíme ji pro konkrétní částici
    const randomPathIndex = Math.floor(Math.random() * pathTypes.length);
    const basePath = pathTypes[randomPathIndex];
    
    // Aplikujeme náhodné škálování a posunutí pro každou částici
    const xScale = 0.5 + Math.random() * 1.5;
    const yScale = 0.5 + Math.random() * 1.5;
    
    return {
      x: basePath.x.map(x => x * xScale * (Math.random() > 0.5 ? 1 : -1)),
      y: basePath.y.map(y => y * yScale * (Math.random() > 0.5 ? 1 : -1)),
    };
  };

  const generateParticles = (count: number) => {
    return Array.from({ length: count }, (_, i) => {
      const path = getRandomPath(i);
      const size = 30 + Math.random() * 80;
      const duration = 5 + Math.random() * 15;
      const delay = Math.random() * 5;
      const opacity = 0.2 + Math.random() * 0.4;
      
      return (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [opacity * 0.7, opacity, opacity * 0.7],
            scale: [0.8, 1.2, 0.8],
            x: path.x,
            y: path.y,
          }}
          transition={{ 
            duration: duration,
            repeat: Infinity,
            repeatType: "reverse",
            delay: delay,
            ease: "easeInOut"
          }}
          className="absolute rounded-full"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: 'blur(10px)',
            backgroundColor: `hsla(${200 + Math.random() * 30}, 70%, 50%, ${opacity})`,
          }}
        />
      );
    });
  };
  
  return (
    <section id="hero" className="pt-32 pb-20 sm:pt-40 sm:pb-28 bg-secondary relative overflow-hidden">
      {/* Animované pozadí */}
      <div className="absolute inset-0 overflow-hidden">
        {generateParticles(20)}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"
          animate={{ 
            opacity: [0.6, 0.8, 0.6]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>
      
      {/* Hlavní obsah */}
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <ScrollReveal>
              <motion.span 
                className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Profesionální povrchové úpravy od 1997
              </motion.span>
            </ScrollReveal>
            
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                {titleWords.map((word, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={titleVariants}
                    className="inline-block mr-2 relative"
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>
            </div>
            
            <ScrollReveal delay={200}>
              <motion.p 
                className="text-lg text-muted-foreground mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                První zakázková lakovna ve Fulneku. Nabízíme kvalitní služby v oblasti práškového lakování s důrazem na spokojenost zákazníků a prvotřídní výsledky.
              </motion.p>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <div className="flex flex-wrap gap-4">
                <motion.a 
                  href="#contact" 
                  className="px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors"
                  whileHover={{ scale: 1.05, boxShadow: '0 5px 15px rgba(14, 165, 233, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                >
                  Kontaktujte nás
                </motion.a>
                <motion.a 
                  href="#about" 
                  className="px-6 py-3 bg-white text-primary rounded-md font-medium border border-primary/20 hover:bg-primary/5 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                >
                  Více o nás
                </motion.a>
              </div>
            </ScrollReveal>
          </div>
          
          <ScrollReveal delay={400} className="relative">
            <motion.div 
              className="relative rounded-xl overflow-hidden aspect-video shadow-xl border border-border"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="/images/powder-coating-hero.jpg" 
                alt="Práškové lakování Betrim" 
                className="w-full h-full object-cover"
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              />
              
              {/* Efekt částic kolem obrázku */}
              <motion.div 
                className="absolute -bottom-8 -right-8 w-40 h-40 bg-primary rounded-full blur-2xl"
                animate={{ 
                  opacity: [0.2, 0.4, 0.2], 
                  scale: [1, 1.2, 1] 
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <motion.div 
                className="absolute -top-8 -left-8 w-32 h-32 bg-blue-400 rounded-full blur-2xl"
                animate={{ 
                  opacity: [0.2, 0.4, 0.2], 
                  scale: [1, 1.2, 1] 
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1
                }}
              />
            </motion.div>
            
            {/* Plovoucí šipka dolů pro plynulý přechod do další sekce */}
            <motion.div 
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-12 hidden lg:block"
              animate={{ 
                y: [0, 10, 0],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <a href="#about" className="inline-block">
                <motion.svg 
                  width="40" 
                  height="40" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="text-primary/70"
                >
                  <path d="M12 5v14"></path>
                  <path d="m19 12-7 7-7-7"></path>
                </motion.svg>
              </a>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
