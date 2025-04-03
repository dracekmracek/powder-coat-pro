import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeader from '@/components/SectionHeader';

const SolarSection: React.FC = () => {
  return (
    <section id="solar" className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title="Fotovoltaická elektrárna"
          subtitle="Udržitelná energie pro ekologický provoz naší práškové lakovny"
        />
        
        <div className="max-w-4xl mx-auto bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-border">
          <div className="grid grid-cols-1 gap-10">
            <ScrollReveal>
              <div className="bg-secondary p-6 md:p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Instalace FVE ve společnosti BETRIM s.r.o.</h3>
                <p className="text-muted-foreground mb-4">
                  Naše společnost realizovala projekt instalace fotovoltaické elektrárny sloužící pro vlastní spotřebu. 
                  Za pomoci využití obnovitelných zdrojů jsme docílili optimalizace zajištění elektrické 
                  energie pro naši podnikatelskou činnost v oblasti práškového lakování.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                  <motion.div 
                    className="bg-white p-5 rounded-lg shadow-sm"
                    whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-primary text-xl font-semibold mb-2">180 kWp</div>
                    <p className="text-sm text-muted-foreground">Instalovaný výkon elektrárny</p>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-white p-5 rounded-lg shadow-sm"
                    whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-primary text-xl font-semibold mb-2">120+ tun</div>
                    <p className="text-sm text-muted-foreground">Roční úspora emisí CO<sub>2</sub></p>
                  </motion.div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-medium mb-3">Přínosy naší fotovoltaické elektrárny:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center text-primary mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span className="text-sm">Snížení nákladů na výrobu a energetický provoz</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center text-primary mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span className="text-sm">Nezávislý a udržitelný zdroj elektrické energie</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center text-primary mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span className="text-sm">Snížení uhlíkové stopy naší výroby</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center text-primary mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span className="text-sm">Soulad s evropskými ekologickými standardy</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={100}>
              <motion.div 
                className="p-5 sm:p-8 border border-blue-200 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/40"
                whileHover={{ boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.1)' }}
              >
                <h4 className="text-xl font-medium mb-4 text-blue-900 text-center">
                  Projekt spolufinancovaný 
                </h4>
                <p className="text-blue-700 font-medium text-center mb-8">
                  Reg. č. CZ.31.3.0/0.0/0.0/22_001/0004206
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center">
                  {/* EU + NextGenEU logo */}
                  <motion.div 
                    className="flex flex-col items-center w-full"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-full max-w-[180px] aspect-video bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl mb-3 p-3 relative overflow-hidden shadow-md flex items-center justify-center">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto opacity-20">
                          <circle cx="18" cy="18" r="18" fill="#FFCC00" />
                          <g transform="translate(4, 4) scale(0.8)">
                            {Array.from({ length: 12 }).map((_, i) => (
                              <path
                                key={i}
                                d="M18 6L20 12L26 12L21 16L23 22L18 18L13 22L15 16L10 12L16 12L18 6Z"
                                fill="#FFCC00"
                                transform={`rotate(${i * 30} 18 18)`}
                              />
                            ))}
                          </g>
                        </svg>
                      </div>
                      <div className="relative z-10 flex flex-col items-center">
                        <p className="text-white font-bold text-lg leading-tight tracking-wider mb-1">EVROPSKÁ UNIE</p>
                        <p className="text-yellow-300 font-bold text-xs tracking-wide">NextGenerationEU</p>
                      </div>
                      <motion.div 
                        className="absolute bottom-0 left-0 h-1 bg-yellow-400" 
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                      />
                    </div>
                  </motion.div>
                  
                  {/* MPO logo */}
                  <motion.div 
                    className="flex flex-col items-center w-full"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-full max-w-[180px] aspect-video bg-gradient-to-r from-red-600 to-red-700 rounded-xl mb-3 p-3 relative overflow-hidden shadow-md flex items-center justify-center">
                      <div className="relative z-10 flex flex-col items-center">
                        <p className="text-white font-bold text-xs leading-tight mb-1">MINISTERSTVO</p>
                        <p className="text-white font-bold text-xs leading-tight mb-1">PRŮMYSLU A OBCHODU</p>
                        <div className="w-12 h-1 bg-white rounded-full my-1"></div>
                        <svg viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-6">
                          <g stroke="white" strokeWidth="6" strokeLinejoin="round">
                            <path d="M20 10L80 10L80 50L20 50L20 10Z" />
                            <path d="M35 20H65V40H35V20Z" />
                            <path d="M50 10V50" />
                          </g>
                        </svg>
                      </div>
                      <div className="absolute inset-0 bg-red-500/20"></div>
                    </div>
                  </motion.div>
                  
                  {/* Národní plán obnovy logo */}
                  <motion.div 
                    className="flex flex-col items-center w-full"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-full max-w-[180px] aspect-video bg-gradient-to-r from-green-600 to-green-700 rounded-xl mb-3 p-3 relative overflow-hidden shadow-md flex items-center justify-center">
                      <div className="relative z-10 flex flex-col items-center">
                        <p className="text-white font-bold text-xs leading-tight mb-1">NÁRODNÍ PLÁN</p>
                        <p className="text-white font-bold text-sm leading-tight mb-1">OBNOVY</p>
                        <div className="w-12 h-1 bg-white rounded-full my-1"></div>
                        <svg viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-5">
                          <path d="M10 20H90" stroke="white" strokeWidth="4" strokeLinecap="round" />
                          <path d="M50 5V35" stroke="white" strokeWidth="4" strokeLinecap="round" />
                          <path d="M30 30L50 10" stroke="white" strokeWidth="4" strokeLinecap="round" />
                          <path d="M70 30L50 10" stroke="white" strokeWidth="4" strokeLinecap="round" />
                          <circle cx="50" cy="10" r="5" fill="white" />
                          <circle cx="30" cy="30" r="5" fill="white" />
                          <circle cx="70" cy="30" r="5" fill="white" />
                        </svg>
                      </div>
                      <div className="absolute inset-0 bg-green-500/20"></div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarSection;
