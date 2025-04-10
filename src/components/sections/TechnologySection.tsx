import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../SectionHeader';
import ScrollReveal from '../ScrollReveal';
import SprayEffect from '@/components/ui/SprayEffect';
import ParticleCanvas from '@/components/ui/ParticleCanvas';

const TechnologySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    {
      title: 'Příprava povrchu',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      ),
      description: 'Proces čištění a odmaštění povrchu pro optimální přilnavost laku.',
      content: (
        <div className="space-y-6">
          <div className="backdrop-blur-sm bg-white/80 shadow-xl p-6 rounded-xl">
            <p className="text-lg leading-relaxed">
              Příprava povrchu je prováděna v průjezdném postřikovacím stroji s moderní technologií zinečnatého fosfátování.
              Pro dokonalé odmaštění používáme PRAGOLOD 59, což je silně alkalický odmašťovací přípravek. 
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div 
              className="rounded-2xl overflow-hidden shadow-xl relative group h-full"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="/powder-coat-pro/images/image7831.png" 
                alt="Příprava povrchu" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end">
                <div className="p-3 text-white w-full" style={{ textShadow: '0px 0px 8px rgba(0,0,0,0.9)' }}>
                  <h4 className="font-bold text-lg text-white" style={{ textShadow: '0px 0px 8px rgba(0,0,0,1), 0px 0px 15px rgba(0,0,0,1)' }}>Příprava povrchu</h4>
                  <p className="text-xs opacity-100 text-white">Vysoká kvalita předúpravy pro maximální životnost</p>
                </div>
              </div>
            </motion.div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200 shadow-lg">
              <h4 className="font-semibold text-xl mb-4 text-blue-800 flex items-center">
                <span className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </span>
                Technologický postup
              </h4>
              <ol className="list-none space-y-4">
                {[
                  "Odmaštění pomocí PRAGOLOD 59",
                  "Dvoustupňový průtočný oplach demineralizovanou vodou",
                  "Aktivace povrchu PRAGOFOS 1927M",
                  "Fosfátování pomocí PRAGOFOS 1920M",
                  "Sušení v peci při teplotě 80 až 120°C"
                ].map((step, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex-shrink-0 flex items-center justify-center mr-3">
                      {index + 1}
                    </div>
                    <span className="text-blue-900">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Nanášení prášku',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      description: 'Automatické i ruční nanášení s rychlou změnou barvy.',
      content: (
        <div className="space-y-4">
          <div className="backdrop-blur-sm bg-white/80 shadow-lg p-4 rounded-xl">
            <p className="leading-relaxed">
              Nanášení práškových barev se provádí pomocí automatického zařízení firmy "WAGNER" v kombinaci s ručním dokončováním složitých tvarů.
              Plastová kabina Super Cube je dimenzována pro rychlou změnu barvy a efektivní vícebarevný provoz.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-1">
              <motion.div
                className="rounded-xl overflow-hidden shadow-lg h-full group relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="/powder-coat-pro/images/powder_airbrush.jpg" 
                  alt="Nanášení práškové barvy" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end">
                  <div className="p-3 text-white w-full" style={{ textShadow: '0px 0px 8px rgba(0,0,0,0.9)' }}>
                    <h4 className="font-bold text-lg text-white" style={{ textShadow: '0px 0px 8px rgba(0,0,0,1), 0px 0px 15px rgba(0,0,0,1)' }}>Aplikace práškové barvy</h4>
                    <p className="text-xs opacity-100 text-white">Přesné nanášení pro kvalitu a úsporu</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-4 rounded-xl border border-slate-200 shadow-lg">
                <h4 className="font-semibold text-slate-800 flex items-center text-lg mb-3">
                  <span className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center mr-2">
                    <svg className="w-3 h-3 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </span>
                  Technické parametry
                </h4>
                <ul className="space-y-2">
                  {[
                    {label: "Typ zařízení", value: "WAGNER PEM-C4-HiCoat"},
                    {label: "Typ kabiny", value: "Super Cube"},
                    {label: "Odsávání", value: "Filtrační s cyklónem"}
                  ].map((item, index) => (
                    <li key={index} className="flex justify-between items-center p-2 border-b border-slate-200 last:border-0 text-sm">
                      <span className="text-slate-600">{item.label}</span>
                      <span className="font-medium text-slate-900 bg-slate-100 px-3 py-1 rounded-full text-xs">{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-4 rounded-xl border border-primary/20 shadow-lg">
                <h4 className="font-semibold text-lg mb-3 flex items-center">
                  <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                    <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Výhody systému
                </h4>
                <ul className="space-y-2 text-sm">
                  {[
                    "Rychlá změna barvy při vícebarevném provozu",
                    "Kombinace auto/ručního nanášení",
                    "Přesné dávkování pro úsporu materiálu",
                    "Recyklace barvy pro ekologický provoz"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 p-1 hover:bg-primary/5 rounded-lg transition-colors">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center text-primary mt-0.5">✓</div>
                      <span className="text-xs">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Vypalování',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
        </svg>
      ),
      description: 'Vytvrzení práškového laku při teplotách až 225°C.',
      content: (
        <div className="space-y-4">
          <div className="backdrop-blur-sm bg-white/80 shadow-lg p-4 rounded-xl">
            <p className="leading-relaxed">
              Po nanesení práškové barvy následuje vytvrzení v moderní vypalovací peci při teplotě až 225°C. 
              Naše pec je v provedení s termosifonovým uzávěrem, který minimalizuje únik tepla do okolí a přispívá k úspoře energie.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-1">
              <motion.div 
                className="rounded-xl overflow-hidden shadow-lg h-full group relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="/powder-coat-pro/images/image7501.png" 
                  alt="Vypalovací pec" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end">
                  <div className="p-3 text-white w-full" style={{ textShadow: '0px 0px 8px rgba(0,0,0,0.9)' }}>
                    <h4 className="font-bold text-lg text-white" style={{ textShadow: '0px 0px 8px rgba(0,0,0,1), 0px 0px 15px rgba(0,0,0,1)' }}>Vypalovací pec</h4>
                    <p className="text-xs opacity-100 text-white">Přesná teplotní kontrola</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-4 rounded-xl border border-amber-200 shadow-lg">
                <h4 className="font-semibold text-amber-800 flex items-center text-lg mb-3">
                  <span className="w-6 h-6 rounded-full bg-amber-200 flex items-center justify-center mr-2">
                    <svg className="w-3 h-3 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </span>
                  Parametry procesu
                </h4>
                <div className="space-y-3">
                  {[
                    {label: "Cílová teplota", value: "až 225°C", percent: 100},
                    {label: "Doba vytvrzování", value: "až 25 min", percent: 80},
                    {label: "Efektivita", value: "92%", percent: 92}
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium text-amber-800">{item.label}</span>
                        <span className="font-medium text-amber-900">{item.value}</span>
                      </div>
                      <div className="h-2 bg-amber-200 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-amber-500"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.percent}%` }}
                          transition={{ duration: 1.5 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-lg">
                <h4 className="font-semibold text-lg mb-3 flex items-center">
                  <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                    <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </span>
                  Výhody procesu
                </h4>
                <ul className="space-y-2 text-sm">
                  {[
                    {
                      title: "Termosifonový uzávěr",
                      description: "Úspora energie až o 30%"
                    },
                    {
                      title: "Přesné řízení teploty",
                      description: "Rovnoměrné vytvrzení dílu"
                    },
                    {
                      title: "Monitorování procesu",
                      description: "Kontinuální kontrola parametrů"
                    }
                  ].map((item, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start gap-2 p-1 hover:bg-slate-50 transition-colors rounded-lg"
                      whileHover={{ x: 2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{item.title}</p>
                        <p className="text-xs text-muted-foreground">{item.description}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];
  
  return (
    <section id="technology" className="py-12 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      {/* Interaktivní částicové pozadí */}
      <div className="absolute inset-0 opacity-30 pointer-events-none overflow-hidden">
        <ParticleCanvas colorScheme="blue" particleCount={60} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <SectionHeader 
            title="Technologie lakování" 
            subtitle="Používáme moderní technologické postupy a zařízení pro dosažení nejlepších výsledků"
            accent={true}
          />
        </ScrollReveal>
        
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1 order-1 lg:order-1">
            <ScrollReveal>
              <div className="lg:sticky lg:top-20 space-y-3">
                {tabs.map((tab, index) => (
                  <motion.div 
                    key={index}
                    className={`
                      p-3 rounded-xl cursor-pointer transition-all
                      ${activeTab === index 
                        ? 'bg-white shadow-lg border-l-4 border-primary' 
                        : 'hover:bg-white/70 bg-white/50 hover:shadow-md border-l-4 border-transparent'}
                    `}
                    onClick={() => setActiveTab(index)}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-start">
                      <div className={`mr-3 p-1.5 rounded-lg ${activeTab === index ? 'bg-primary text-white' : 'bg-primary/10 text-primary'}`}>
                        {tab.icon}
                      </div>
                      <div>
                        <h3 className={`font-semibold mb-0.5 ${activeTab === index ? 'text-primary' : 'text-foreground'}`}>
                          {tab.title}
                        </h3>
                        <p className="text-muted-foreground text-xs line-clamp-2">{tab.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
          
          <div className="lg:col-span-3 order-2 lg:order-2">
            <ScrollReveal delay={100}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/50 backdrop-blur-sm rounded-xl p-5 shadow-lg border border-white/10"
                >
                  {tabs[activeTab].content}
                </motion.div>
              </AnimatePresence>
            </ScrollReveal>
          </div>
        </div>
        
        <div className="hidden md:block">
          <SprayEffect position="right" intensity="light" color="#0ea5e9" size="lg" />
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
