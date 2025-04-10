import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { ArrowRight, Zap, Shield, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import ParticleCanvas from '@/components/ui/ParticleCanvas';

const HeroSection: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const controls = useAnimation();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
      controls.start("visible");
    }, 300);
    
    return () => clearTimeout(timer);
  }, [controls]);
  
  // Klíčové výhody s ikonami
  const benefits = [
    { text: 'Moderní lakovací zařízení', icon: <Zap className="w-full h-full" /> },
    { text: 'Certifikovaná kvalita', icon: <Shield className="w-full h-full" /> }
  ];
  
  // Plynulý scroll na další sekci
  const scrollToNextSection = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section 
      id="hero" 
      className="relative min-h-[60vh] md:min-h-[40vh] overflow-hidden"
    >
      {/* Vylepšené pozadí s efekty */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-50 via-slate-100 to-white dark:from-gray-900 dark:via-blue-950/50 dark:to-gray-900">
        {/* Částice */}
        <div className="absolute inset-0 overflow-hidden">
          <ParticleCanvas colorScheme="blue" particleCount={45} />
        </div>
        
        {/* Vlnité pozadí */}
        <div className="absolute inset-0 opacity-10 dark:opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none">
            <path 
              d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,250.7C960,235,1056,181,1152,186.7C1248,192,1344,256,1392,288L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" 
              fill="url(#blueGradient)" 
              fillOpacity="0.6"
            ></path>
            <path 
              d="M0,160L48,165.3C96,171,192,181,288,197.3C384,213,480,235,576,224C672,213,768,171,864,138.7C960,107,1056,85,1152,80C1248,75,1344,85,1392,90.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" 
              fill="url(#primaryGradient)" 
              fillOpacity="0.4"
            ></path>
            <defs>
              <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#0ea5e9" />
              </linearGradient>
              <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0ea5e9" />
                <stop offset="100%" stopColor="#38bdf8" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Světelné efekty - kruhy */}
        <div className="absolute top-1/4 right-1/4 w-[30vw] h-[30vw] bg-blue-400/10 rounded-full filter blur-[80px] dark:bg-blue-500/10 transform -translate-y-1/2"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[25vw] h-[25vw] bg-primary/10 rounded-full filter blur-[60px] dark:bg-primary/10 transform translate-y-1/2"></div>
      </div>
      
      {/* Hlavní obsah */}
      <div className="container relative z-10 mx-auto pt-8 sm:pt-8 pb-16">
        <div className="flex flex-col">
          {/* Hlavní sekce */}
          <div className="flex items-start pt-0 pb-8 px-4 md:px-6 lg:px-8">
            <div className="w-full mt-0">
              
              {/* Hlavní textový a vizuální blok */}
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                {/* Levá část - Hlavní text */}
                <div className="w-full md:w-1/2 lg:w-5/12 order-1 flex flex-col items-center md:items-start">
                  <div className="relative">
                    {/* Logo značky */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="mb-3 flex justify-center md:justify-start"
                    >
                      <div className="inline-flex items-center py-1.5 px-4 gap-2 text-xs font-medium border rounded-full bg-white/90 text-primary border-primary/20 backdrop-blur-md shadow-sm dark:bg-gray-900/90 dark:border-blue-500/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                        <span>První lakovna ve Fulneku od roku 1997</span>
                      </div>
                    </motion.div>
                    
                    {/* Hlavní nadpis */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                      className="relative mb-4"
                    >
                      <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl sm:text-6xl md:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-[1.15] sm:leading-[1.1] text-center md:text-left"
                      >
                        <div>
                          <motion.span 
                            initial={{ y: 80 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
                            className="block"
                          >
                            Profesionální
                          </motion.span>
                        </div>
                        <div className="mt-1">
                          <motion.div 
                            initial={{ y: 80 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, ease: [0.4, 0.0, 0.2, 1], delay: 0.1 }}
                            className="block"
                          >
                            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-primary">
                              práškové
                              <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 1.2, delay: 1 }}
                                className="absolute h-1 bg-gradient-to-r from-blue-600 to-primary -bottom-1 left-0 rounded-full" 
                              />
                            </span>
                          </motion.div>
                        </div>
                        <div className="mt-1">
                          <motion.span 
                            initial={{ y: 80 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, ease: [0.4, 0.0, 0.2, 1], delay: 0.2 }}
                            className="block"
                          >
                            lakování
                          </motion.span>
                        </div>
                      </motion.h1>
                    </motion.div>
                    
                    {/* Popis */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.5 }}
                      className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 max-w-lg text-center md:text-left"
                    >
                      <span className="font-medium">Maximální kvalita</span> a <span className="font-medium">dlouhodobá životnost</span> povrchových úprav. Specializujeme se na průmyslové práškové lakování s důrazem na detail a preciznost.
                    </motion.p>
                    
                    {/* Výhody s ikonami - Skryté na mobilech a tabletech */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.7, delay: 0.6 }}
                      className="hidden md:flex flex-wrap gap-6 mb-6"
                    >
                      {benefits.map((benefit, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-primary flex items-center justify-center text-white p-2.5 shadow-lg shadow-blue-500/20">
                            {benefit.icon}
                          </div>
                          <span className="text-gray-800 dark:text-gray-200 font-medium">{benefit.text}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                    
                    {/* CTA tlačítka */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.8 }}
                      className="flex flex-wrap gap-4 justify-center md:justify-start"
                    >
                      <a 
                        href="#contact" 
                        className="inline-flex items-center px-6 py-3.5 font-medium text-white transition-all rounded-lg bg-gradient-to-r from-blue-600 to-primary hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-lg shadow-blue-500/30 group hover:text-white"
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        <span>Kontaktujte nás</span>
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </a>
                      
                      <a 
                        href="#about" 
                        className="inline-flex items-center px-6 py-3.5 font-medium border-2 rounded-lg text-primary hover:text-white bg-white hover:bg-primary border-primary/20 hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all group shadow-md dark:bg-gray-900 dark:border-blue-500/30"
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        <span>Více o nás</span>
                        <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </a>
                    </motion.div>
                  </div>
                </div>
                
                {/* Pravá část - Obrázek */}
                <div className="w-full md:w-1/2 lg:w-7/12 order-2 hidden md:block">
                  <div className="relative">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="relative"
                    >
                      {/* Hlavní obrázek s efekty */}
                      <div className="relative">
                        <div className="group h-[400px] lg:h-[500px] overflow-hidden rounded-2xl">
                          <img
                            src="/powder-coat-pro/images/powder-coating-hero.jpg"
                            alt="Práškové lakování Betrim"
                            className="w-full h-full object-cover transition-transform duration-10000 ease-in-out group-hover:scale-110 rounded-2xl"
                          />
                          
                          {/* Vrstvy efektů přes obrázek */}
                          <div className="absolute inset-0 bg-black/5 dark:bg-black/30 rounded-2xl" />
                        </div>
                        
                        {/* Informační panel */}
                        <motion.div
                          initial={{ opacity: 0, y: 50 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.9 }}
                          className="absolute -bottom-6 left-10 right-10 py-4 px-6 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg rounded-xl shadow-xl shadow-blue-500/10 border border-white/20 dark:border-gray-800"
                        >
                          <div className="flex justify-between items-center">
                            <div>
                              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 flex items-center">
                                <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                                Nejmodernější technologie
                              </h3>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                Profesionální zařízení pro maximální kvalitu povrchové úpravy
                              </p>
                            </div>
                            <a 
                              href="#technology"
                              className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-primary transition-all shadow-md shadow-blue-500/20 hover:text-white"
                              onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('technology')?.scrollIntoView({ behavior: 'smooth' });
                              }}
                            >
                              Zjistit více
                              <ArrowRight className="w-3 h-3 ml-1.5" />
                            </a>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                    
                    {/* Plavající dekorativní prvek */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1.1 }}
                      className="absolute -left-8 top-32 w-20 h-20 rounded-full bg-gradient-to-r from-blue-100 to-primary p-1 shadow-lg shadow-blue-500/30 hidden lg:block"
                    >
                      <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center p-3">
                        <img 
                          src="/powder-coat-pro/images/Logo_Betrim_only_logo.png" 
                          alt="Betrim logo"
                          className="w-full h-auto"
                        />
                      </div>
                    </motion.div>
                    
                    {/* NOVĚ: Přidaný prvek "25+ let zkušeností" vpravo nahoře */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: -20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.2 }}
                      className="absolute -right-6 top-4 w-24 h-24 rounded-full bg-gradient-to-r from-blue-600 to-primary p-0.5 shadow-lg shadow-blue-500/30 hidden md:flex"
                    >
                      <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex flex-col items-center justify-center p-2 text-center">
                        <span className="text-primary font-bold text-2xl leading-none">25+</span>
                        <span className="text-gray-800 dark:text-gray-200 text-xs leading-tight font-medium">let zkušeností</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll down indikátor */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer z-30"
          onClick={scrollToNextSection}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg shadow-blue-500/20 border border-blue-100 dark:border-gray-700"
          >
            <ArrowRight className="w-5 h-5 text-primary rotate-90" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
