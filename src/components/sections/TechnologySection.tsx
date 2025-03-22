import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../SectionHeader';
import ScrollReveal from '../ScrollReveal';
import SprayEffect from '@/components/ui/SprayEffect';
import ThreeDModel from '@/components/ui/3DModel';
import ParticleCanvas from '@/components/ui/ParticleCanvas';

const TechnologySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isHovered, setIsHovered] = useState<number | null>(null);
  
  const tabs = [
    {
      title: 'Příprava povrchu',
      description: 'Proces čištění a odmaštění povrchu pro optimální přilnavost laku.',
      content: (
        <div className="space-y-4">
          <p>
            Příprava povrchu je prováděna v průjezdném postřikovacím stroji s moderní technologií zinečnatého fosfátování.
            Pro dokonalé odmaštění používáme PRAGOLOD 59, což je silně alkalický odmašťovací přípravek. 
          </p>
          <motion.div 
            className="rounded-xl overflow-hidden shadow-xl relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src="/powder-coat-pro/images/surface-preparation.jpg" 
              alt="Příprava povrchu" 
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-4 text-white">
                <h4 className="font-semibold mb-1">Proces odmaštění a fosfátování</h4>
                <p className="text-sm opacity-90">Vysoká kvalita předúpravy pro maximální životnost lakovaných povrchů</p>
              </div>
            </div>
          </motion.div>
          <div className="bg-muted/30 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Technologický postup:</h4>
            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li className="pl-2">Odmaštění pomocí PRAGOLOD 59</li>
              <li className="pl-2">Dvoustupňový průtočný oplach demineralizovanou vodou</li>
              <li className="pl-2">Aktivace povrchu PRAGOFOS 1927</li>
              <li className="pl-2">Fosfátování pomocí PRAGOFOS 1920</li>
              <li className="pl-2">Sušení v peci při teplotě 100 až 120°C</li>
            </ol>
          </div>
        </div>
      ),
    },
    {
      title: 'Nanášení prášku',
      description: 'Automatické i ruční nanášení s rychlou změnou barvy.',
      content: (
        <div className="space-y-4">
          <p>
            Nanášení práškových barev se provádí pomocí automatického zařízení firmy "WAGNER" v kombinaci s ručním dokončováním složitých tvarů.
            Plastová kabina Super Cube je dimenzována pro rychlou změnu barvy a efektivní vícebarevný provoz.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <ThreeDModel className="mb-4" />
              <p className="text-sm text-center text-muted-foreground">
                <em>Interaktivní 3D model - pohybujte myší pro změnu úhlu pohledu</em>
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="bg-muted/30 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Technické parametry:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span>Typ zařízení:</span>
                    <span className="font-medium">WAGNER PEM-C4-HiCoat</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Typ kabiny:</span>
                    <span className="font-medium">Super Cube</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Odsávání:</span>
                    <span className="font-medium">Filtrační s cyklónovým odlučovačem</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Max. výška:</span>
                    <span className="font-medium">1,500 mm</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Max. šířka:</span>
                    <span className="font-medium">1,200 mm</span>
                  </li>
                </ul>
              </div>
              
              <div className="rounded-lg overflow-hidden border border-primary/20">
                <div className="bg-primary/10 p-3 border-b border-primary/20">
                  <h4 className="font-medium">Výhody našeho systému nanášení</h4>
                </div>
                <div className="p-3">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center text-primary">✓</div>
                      <span>Rychlá změna barvy při vícebarevném provozu</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center text-primary">✓</div>
                      <span>Kombinace automatického a ručního nanášení</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center text-primary">✓</div>
                      <span>Přesné dávkování pro úsporu materiálu</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center text-primary">✓</div>
                      <span>Důsledná recyklace barvy pro ekologický provoz</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Vypalování',
      description: 'Vytvrzení práškového laku při teplotách až 225°C.',
      content: (
        <div className="space-y-4">
          <p>
            Po nanesení práškové barvy následuje vytvrzení v moderní vypalovací peci při teplotě až 225°C. 
            Naše pec je v provedení s termosifonovým uzávěrem, který minimalizuje únik tepla do okolí a přispívá k úspoře energie.
          </p>
          
          <div className="relative rounded-xl overflow-hidden shadow-xl h-64">
            <img 
              src="/powder-coat-pro/images/powder-coating-oven.jpg" 
              alt="Vypalovací pec" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute inset-0 bg-black/40" />
              <motion.div 
                className="z-10 bg-white/90 backdrop-blur-sm p-6 rounded-lg max-w-md text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="mb-2 mx-auto w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3V4M12 20V21M21 12H20M4 12H3M18.364 18.364L17.657 17.657M6.343 6.343L5.636 5.636M18.364 5.636L17.657 6.343M6.343 17.657L5.636 18.364M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="#d97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="font-semibold mb-1">Vypalovací pec s přesnou teplotní kontrolou</h4>
                <p className="text-sm">Konstantní teplota a rovnoměrný ohřev zajišťují dokonalé vytvrzení povrchu</p>
              </motion.div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-5 rounded-lg border border-amber-200">
              <h4 className="font-medium mb-3 text-amber-800">Parametry teplotního procesu</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Cílová teplota</span>
                    <span className="text-sm font-medium">225°C</span>
                  </div>
                  <div className="h-2 bg-amber-200 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-amber-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 1.5 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Doba vytvrzování</span>
                    <span className="text-sm font-medium">25 min</span>
                  </div>
                  <div className="h-2 bg-amber-200 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-amber-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: '80%' }}
                      transition={{ duration: 1.2 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Energetická efektivita</span>
                    <span className="text-sm font-medium">92%</span>
                  </div>
                  <div className="h-2 bg-amber-200 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-amber-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: '92%' }}
                      transition={{ duration: 1.3 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-5 rounded-lg border border-muted bg-muted/10">
              <h4 className="font-medium mb-3">Výhody procesu vypalování</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">1</div>
                  <div>
                    <p className="font-medium">Termosifonový uzávěr</p>
                    <p className="text-muted-foreground">Minimalizace úniku tepla a úspora energie až o 30%</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">2</div>
                  <div>
                    <p className="font-medium">Přesné řízení teploty</p>
                    <p className="text-muted-foreground">Rovnoměrné vytvrzení po celé ploše dílu</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">3</div>
                  <div>
                    <p className="font-medium">Monitorování procesu</p>
                    <p className="text-muted-foreground">Kontinuální kontrola parametrů pro konzistentní výsledky</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
  ];
  
  return (
    <section id="technology" className="py-16 bg-secondary/40 relative overflow-hidden">
      {/* Interaktivní částicové pozadí */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <ParticleCanvas colorScheme="blue" particleCount={60} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <SectionHeader 
            title="Technologie lakování" 
            subtitle="Používáme moderní technologické postupy a zařízení pro dosažení nejlepších výsledků"
          />
        </ScrollReveal>
        
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <ScrollReveal>
              <div className="sticky top-20 space-y-2">
                {tabs.map((tab, index) => (
                  <motion.div
                    key={index}
                    className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${activeTab === index ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-white hover:bg-muted/50'}`}
                    onClick={() => setActiveTab(index)}
                    onMouseEnter={() => setIsHovered(index)}
                    onMouseLeave={() => setIsHovered(null)}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    animate={{
                      y: isHovered === index && activeTab !== index ? -5 : 0,
                      boxShadow: activeTab === index ? '0 10px 25px rgba(14, 165, 233, 0.2)' : isHovered === index ? '0 5px 15px rgba(0, 0, 0, 0.1)' : '0 1px 2px rgba(0, 0, 0, 0.05)',
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className={`font-medium text-lg ${activeTab === index ? 'text-white' : 'text-foreground'}`}>{tab.title}</h3>
                    <p className={`text-sm ${activeTab === index ? 'text-white/80' : 'text-muted-foreground'}`}>{tab.description}</p>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
          
          <div className="lg:col-span-2">
            <ScrollReveal>
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                {tabs[activeTab].content}
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
        
        {/* Dekorativní spray efekt */}
        <div className="hidden md:block">
          <SprayEffect position="right" intensity="light" color="#0ea5e9" size="lg" />
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
