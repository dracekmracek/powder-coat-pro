<<<<<<< Updated upstream
import React from 'react';
=======
import React, { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';
>>>>>>> Stashed changes
import ScrollReveal from '@/components/ScrollReveal';
import ParticleCanvas from '@/components/ui/ParticleCanvas';

const HeroSection: React.FC = () => {
<<<<<<< Updated upstream
  return (
    <section id="hero" className="pt-32 pb-20 sm:pt-40 sm:pb-28 bg-secondary overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <ScrollReveal>
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Profesionální povrchové úpravy od 1997
              </span>
            </ScrollReveal>
            
            <ScrollReveal delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Betrim - Práškové lakování
=======
  const [isActive, setIsActive] = useState(false);
  
  useEffect(() => {
    // Aktivace efektů po načtení stránky
    const timer = setTimeout(() => setIsActive(true), 500);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);
  
  // Animace pro text nadpisu
  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 2.0,
        ease: [0.215, 0.61, 0.355, 1] // cubic-bezier pro plynulejší pohyb
      },
    }),
  };

  const titleWords = "Betrim - Profesionální práškové lakování".split(' ');
  
  return (
    <section id="hero" className="py-16 md:py-20 bg-secondary relative overflow-hidden">
      {/* Interaktivní pozadí s částicemi */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <ParticleCanvas colorScheme="blue" particleCount={80} />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10 md:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <ScrollReveal>
              <motion.div 
                className="inline-block mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="relative inline-flex px-3 py-1 rounded-full bg-primary/15 text-primary text-sm font-medium overflow-hidden group">
                  <span className="relative z-10">Betrim - První lakovna ve Fulneku od 1997</span>
                  {/* Animovaný outline pro badge */}
                  <motion.span 
                    className="absolute inset-0 rounded-full border border-primary/30"
                    animate={{ 
                      scale: [1, 1.05, 1],
                      opacity: [0.7, 1, 0.7] 
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                </span>
              </motion.div>
            </ScrollReveal>
            
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
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
>>>>>>> Stashed changes
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
<<<<<<< Updated upstream
              <p className="text-lg text-muted-foreground mb-8">
                První zakázková lakovna ve Fulneku. Nabízíme kvalitní služby v oblasti práškového lakování s důrazem na spokojenost zákazníků a prvotřídní výsledky.
              </p>
=======
              <motion.p 
                className="text-lg text-muted-foreground mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Specializujeme se na vysoce kvalitní průmyslové práškové lakování s důrazem na detail a preciznost. Naší prioritou je spokojenost zákazníků a dlouhodobá životnost našich povrchových úprav.
              </motion.p>
>>>>>>> Stashed changes
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#contact" 
<<<<<<< Updated upstream
                  className="px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors"
                >
                  Kontaktujte nás
                </a>
                <a 
                  href="#about" 
                  className="px-6 py-3 bg-white text-primary rounded-md font-medium border border-primary/20 hover:bg-primary/5 transition-colors"
=======
                  className="px-6 py-3 bg-primary text-white rounded-md font-medium"
                  whileHover={{ scale: 1.03, backgroundColor: "#0286c9" }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                >
                  Kontaktujte nás
                </motion.a>
                
                <motion.a 
                  href="#about" 
                  className="px-6 py-3 bg-white text-primary rounded-md font-medium border border-primary/20"
                  whileHover={{ scale: 1.03, boxShadow: '0 2px 5px rgba(14, 165, 233, 0.15)' }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.4 }}
>>>>>>> Stashed changes
                >
                  Více o nás
                </a>
              </div>
            </ScrollReveal>
          </div>
          
          <ScrollReveal delay={400} className="relative">
<<<<<<< Updated upstream
            <div className="relative rounded-xl overflow-hidden aspect-video shadow-xl border border-border">
=======
            <motion.div 
              className="relative rounded-xl overflow-hidden aspect-video shadow-powder"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
>>>>>>> Stashed changes
              <img 
                src="/powder-coat-pro/images/powder-coating-hero.jpg" 
                alt="Práškové lakování Betrim" 
                className="w-full h-full object-cover"
              />
<<<<<<< Updated upstream
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent opacity-60"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full blur-xl opacity-20"></div>
=======
              
              {/* Efekt gradientu */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent mix-blend-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              />
              
              {/* Animované zvýraznění detailů */}
              <motion.div
                className="absolute w-28 h-28 border-2 border-white/50 rounded-full pointer-events-none"
                initial={{ scale: 0, x: "30%", y: "30%" }}
                animate={{
                  opacity: [0, 0.7, 0],
                  scale: [0.5, 1.5, 2],
                  x: ["30%", "30%", "30%"],
                  y: ["30%", "30%", "30%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
              />
            </motion.div>
            
            {/* Plovoucí textová ikona s fakty */}
            <motion.div 
              className="absolute -bottom-5 -left-5 md:bottom-10 md:left-10 glass shadow-xl rounded-lg p-4 max-w-48"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <p className="font-medium">Vlastní lakovna</p>
              </div>
              <p className="text-sm text-muted-foreground">První zakázková lakovna ve Fulneku s dlouholetou tradicí od roku 1997</p>
              
              {/* Animovaný podtržený efekt */}
              <motion.div 
                className="h-0.5 bg-primary/30 rounded-full mt-2"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.8, delay: 1.5 }}
              />
            </motion.div>
>>>>>>> Stashed changes
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
