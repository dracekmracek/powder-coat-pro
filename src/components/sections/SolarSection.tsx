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
          accent={true}
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
                    <div className="text-primary text-xl font-semibold mb-2">150 kWp</div>
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
                <div className="overflow-x-auto">
                  <p className="text-blue-700 font-medium text-center mx-auto mb-8 max-w-md bg-blue-50 py-2 px-4 rounded-lg border border-blue-100 text-sm md:text-base break-words">
                    Reg. č. CZ.31.3.0/0.0/0.0/22_001/0004206
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center">
                  {/* EU + NextGenEU logo */}
                  <motion.div 
                    className="flex flex-col items-center w-full"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div 
                      className="w-full max-w-[220px] aspect-video rounded-xl mb-3 p-3 relative overflow-hidden shadow-md flex items-center justify-center bg-white border border-blue-100"
                      whileHover={{ 
                        boxShadow: '0 0 25px rgba(59, 130, 246, 0.5)',
                        filter: 'brightness(1.1)'
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <img 
                        src="/powder-coat-pro/images/EU.png" 
                        alt="Evropská Unie logo" 
                        className="w-full h-full object-contain" 
                      />
                    </motion.div>
                    <p className="text-sm text-blue-900 font-medium text-center">Evropská Unie</p>
                  </motion.div>
                  
                  {/* MPO logo */}
                  <motion.div 
                    className="flex flex-col items-center w-full"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div 
                      className="w-full max-w-[220px] aspect-video rounded-xl mb-3 p-3 relative overflow-hidden shadow-md flex items-center justify-center bg-white border border-red-100"
                      whileHover={{ 
                        boxShadow: '0 0 25px rgba(239, 68, 68, 0.5)',
                        filter: 'brightness(1.1)'
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <img 
                        src="/powder-coat-pro/images/ministerstvo_prumyslu.png" 
                        alt="Ministerstvo průmyslu a obchodu logo" 
                        className="w-full h-full object-contain" 
                      />
                    </motion.div>
                    <p className="text-sm text-blue-900 font-medium text-center">Ministerstvo průmyslu a obchodu</p>
                  </motion.div>
                  
                  {/* Národní plán obnovy logo */}
                  <motion.div 
                    className="flex flex-col items-center w-full"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div 
                      className="w-full max-w-[220px] aspect-video rounded-xl mb-3 p-3 relative overflow-hidden shadow-md flex items-center justify-center bg-white border border-green-100"
                      whileHover={{ 
                        boxShadow: '0 0 25px rgba(16, 185, 129, 0.5)',
                        filter: 'brightness(1.1)'
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <img 
                        src="/powder-coat-pro/images/narodni_plan_obnovy.png" 
                        alt="Národní plán obnovy logo" 
                        className="w-full h-full object-contain" 
                      />
                    </motion.div>
                    <p className="text-sm text-blue-900 font-medium text-center">Národní plán obnovy</p>
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
