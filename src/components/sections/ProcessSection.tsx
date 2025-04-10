import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import SectionHeader from '../SectionHeader';
import ScrollReveal from '../ScrollReveal';
import SprayEffect from '@/components/ui/SprayEffect';
import { ChevronDownIcon, ThermometerIcon, ClockIcon, DropletIcon, ZapIcon, InfoIcon, ArrowRight } from 'lucide-react';

// Komponenta pro parametr procesu s ikonou
const ProcessParameter: React.FC<{
  name: string;
  value: string;
  unit?: string;
  index: number;
}> = ({ name, value, unit, index = 0 }) => {
  // Vrátí ikonu podle názvu parametru
  const getParameterIcon = (paramName: string) => {
    const lowerName = paramName.toLowerCase();
    if (lowerName.includes('teplota')) return <ThermometerIcon className="h-4 w-4 text-blue-500" />;
    if (lowerName.includes('doba')) return <ClockIcon className="h-4 w-4 text-amber-500" />;
    if (lowerName.includes('tlak') || lowerName.includes('médium') || lowerName.includes('prostředí')) 
      return <DropletIcon className="h-4 w-4 text-sky-500" />;
    if (lowerName.includes('napětí') || lowerName.includes('metoda')) 
      return <ZapIcon className="h-4 w-4 text-purple-500" />;
    
    return <DropletIcon className="h-4 w-4 text-blue-500" />;
  };

  return (
    <motion.div 
      className="bg-muted/20 rounded-lg p-1.5 flex items-center gap-1.5"
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-muted/30 flex items-center justify-center">
        {getParameterIcon(name)}
      </div>
      <div className="flex-grow">
        <div className="text-xs text-muted-foreground leading-tight">{name}</div>
        <div className="font-medium text-xs leading-tight">
          {value}
          {unit && <span className="text-muted-foreground text-xs ml-0.5">{unit}</span>}
        </div>
      </div>
    </motion.div>
  );
};

// Hlavní komponenta sekce
const ProcessSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [expandedSteps, setExpandedSteps] = useState<number[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);
  
  // Toggle pro rozbalení/zabalení kroku v záložce
  const toggleStep = (stepNumber: number) => {
    setExpandedSteps(prev => 
      prev.includes(stepNumber) 
        ? prev.filter(n => n !== stepNumber) 
        : [...prev, stepNumber]
    );
  };
  
  // Definice záložek
  const tabs = [
    {
      title: 'Předúprava',
      description: 'Odmaštění a příprava povrchu',
      steps: [
        {
          number: 1,
          title: 'Odmaštění',
          description: 'Odstranění mastnoty a nečistot alkalickým přípravkem PRAGOLOD 59, který zajišťuje dokonalou čistotu povrchu před další úpravou.',
          parameters: [
            { name: 'Prostředí', value: 'Alkalické' },
            { name: 'Teplota', value: '60', unit: '°C' },
            { name: 'Tlak', value: 'do 1.2', unit: 'bar' },
            { name: 'Doba', value: '3', unit: 'min' },
          ]
        },
        {
          number: 2,
          title: '1° oplach',
          description: 'První průtočný oplach demineralizovanou vodou pro odstranění zbytků odmašťovacího přípravku.',
          parameters: [
            { name: 'Médium', value: 'Demi voda' },
            { name: 'Teplota', value: '20', unit: '°C' },
            { name: 'Tlak', value: 'do 1.0', unit: 'bar' },
            { name: 'Doba', value: '0.5', unit: 'min' },
          ]
        },
        {
          number: 3,
          title: '2° oplach',
          description: 'Druhý průtočný oplach demineralizovanou vodou pro dokonalé očištění a přípravu na fosfátování.',
          parameters: [
            { name: 'Médium', value: 'Demi voda' },
            { name: 'Teplota', value: '20', unit: '°C' },
            { name: 'Tlak', value: 'do 1.0', unit: 'bar' },
            { name: 'Doba', value: '0.5', unit: 'min' },
          ]
        },
        {
          number: 4,
          title: 'Opl. rám',
          description: 'Oplach rámu demineralizovanou vodou pro zajištění čistoty před fosfátováním.',
          parameters: [
            { name: 'Médium', value: 'Demi voda' },
            { name: 'Teplota', value: '20', unit: '°C' },
            { name: 'Tlak', value: 'do 1.0', unit: 'bar' },
            { name: 'Doba', value: '0.2', unit: 'min' },
          ]
        },
      ]
    },
    {
      title: 'Fosfátování',
      description: 'Vytvoření ochranné vrstvy na povrchu',
      steps: [
        {
          number: 5,
          title: 'Aktivace',
          description: 'Aktivace povrchu pomocí přípravku PRAGOFOS 1972M pro optimální přípravu před fosfátováním, zlepšující rovnoměrnost a kvalitu následné vrstvy.',
          parameters: [
            { name: 'Prostředí', value: 'Kyselé' },
            { name: 'Teplota', value: '20', unit: '°C' },
            { name: 'Tlak', value: 'do 1.0', unit: 'bar' },
            { name: 'Doba', value: '0.5', unit: 'min' },
          ]
        },
        {
          number: 6,
          title: 'Zn-fosfátování',
          description: 'Aplikace zinečnatého fosfátu PRAGOFOS 1920 pro vytvoření ochranné vrstvy a zlepšení přilnavosti práškové barvy.',
          parameters: [
            { name: 'Prostředí', value: 'Kyselé' },
            { name: 'Teplota', value: '55', unit: '°C' },
            { name: 'Tlak', value: 'do 1.0', unit: 'bar' },
            { name: 'Doba', value: '3', unit: 'min' },
          ]
        },
        {
          number: 7,
          title: '1° oplach',
          description: 'První průtočný oplach demineralizovanou vodou po fosfátování pro odstranění zbytků procesu.',
          parameters: [
            { name: 'Médium', value: 'Demi voda' },
            { name: 'Teplota', value: '20', unit: '°C' },
            { name: 'Tlak', value: 'do 1.0', unit: 'bar' },
            { name: 'Doba', value: '0.5', unit: 'min' },
          ]
        },
        {
          number: 8,
          title: '2° oplach',
          description: 'Druhý průtočný oplach demineralizovanou vodou pro dokonalé očištění po fosfátování.',
          parameters: [
            { name: 'Médium', value: 'Demi voda' },
            { name: 'Teplota', value: '20', unit: '°C' },
            { name: 'Tlak', value: 'do 1.0', unit: 'bar' },
            { name: 'Doba', value: '0.5', unit: 'min' },
          ]
        },
      ]
    },
    {
      title: 'Pasivace',
      description: 'Zvýšení korozní odolnosti povrchu',
      steps: [
        {
          number: 9,
          title: 'Pasivace',
          description: 'Proces pasivace pro zvýšení korozní odolnosti povrchu a stability fosfátové vrstvy za použití PRAGOKOR BP.',
          parameters: [
            { name: 'Prostředí', value: 'Kyselé' },
            { name: 'Teplota', value: '20', unit: '°C' },
            { name: 'Tlak', value: 'do 1.0', unit: 'bar' },
            { name: 'Doba', value: '0.5', unit: 'min' },
          ]
        },
        {
          number: 10,
          title: 'Opl. rám',
          description: 'Oplach rámu demineralizovanou vodou po pasivaci před sušením.',
          parameters: [
            { name: 'Médium', value: 'Demi voda' },
            { name: 'Teplota', value: '20', unit: '°C' },
            { name: 'Tlak', value: 'do 1.0', unit: 'bar' },
            { name: 'Doba', value: '0.2', unit: 'min' },
          ]
        },
      ]
    },
    {
      title: 'Příprava na lakování',
      description: 'Sušení a chlazení před lakováním',
      steps: [
        {
          number: 11,
          title: 'Sušení',
          description: 'Tepelné sušení v peci pro dokonalé odstranění vlhkosti před lakováním.',
          parameters: [
            { name: 'Médium', value: 'Vzduch' },
            { name: 'Teplota', value: 'do 130', unit: '°C' },
            { name: 'Doba', value: '10', unit: 'min' },
          ]
        },
        {
          number: 12,
          title: 'Chlazení',
          description: 'Postupné chlazení dílů před aplikací práškové barvy pro optimální výsledky nanášení.',
          parameters: [
            { name: 'Médium', value: 'Vzduch' },
            { name: 'Teplota', value: '20', unit: '°C' },
            { name: 'Doba', value: '10', unit: 'min' },
          ]
        },
      ]
    },
    {
      title: 'Lakování a vytvrzení',
      description: 'Nanášení barvy a fixace povrchu',
      steps: [
        {
          number: 13,
          title: 'Lakování',
          description: 'Nanášení práškové barvy pomocí elektrostatického procesu pistolemi WAGNER PEM-C4-HiCoat pro rovnoměrné pokrytí.',
          parameters: [
            { name: 'Metoda', value: 'Elektrostatická' },
            { name: 'Napětí', value: '60-90', unit: 'kV' },
            { name: 'Tlak vzduchu', value: '5-7', unit: 'bar' },
          ]
        },
        {
          number: 14,
          title: 'Vytvrzení',
          description: 'Vytvrzení práškové barvy ve vypalovací peci pro dosažení finálních mechanických a chemických vlastností.',
          parameters: [
            { name: 'Médium', value: 'Vzduch' },
            { name: 'Teplota', value: 'do 225', unit: '°C' },
            { name: 'Doba', value: '25', unit: 'min' },
          ]
        },
      ]
    },
  ];
  
  // Generuje gradient podle čísla kroku
  const getGradientColor = (number: number) => {
    const colors = [
      'from-blue-500 to-cyan-400',   // Odmaštění
      'from-cyan-500 to-blue-400',   // Oplach
      'from-cyan-500 to-blue-400',   // Oplach
      'from-green-500 to-cyan-400',  // Fosfátování
      'from-cyan-500 to-blue-400',   // Oplach
      'from-teal-500 to-cyan-400',   // Pasivace
      'from-amber-500 to-orange-400', // Sušení
      'from-purple-500 to-blue-400', // Lakování
      'from-red-500 to-orange-400',  // Vytvrzení
    ];
    
    return colors[(number - 1) % colors.length];
  };
  
  return (
    <section id="process" className="py-16 md:py-24 section-bg-gradient relative overflow-hidden">
      {/* Dekorační prvky */}
      <SprayEffect position="left" intensity="light" color="#0ea5e9" size="lg" className="opacity-30" />
      <SprayEffect position="right" intensity="light" color="#06b6d4" size="md" className="opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <SectionHeader 
            title="Technologický postup" 
            subtitle="Detailní přehled našeho procesu práškového lakování pro dosažení nejlepších výsledků"
            accent={true}
          />
        </ScrollReveal>
        
        <div className="mt-8 max-w-3xl mx-auto">
          {/* Informační blok o procesu */}
          <ScrollReveal delay={100}>
            <motion.div 
              className="mb-6 bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100/40 rounded-lg px-4 py-3.5 flex gap-3 items-start shadow-sm hover-card"
              whileHover={{ y: -2, boxShadow: '0 4px 12px rgba(14, 165, 233, 0.1)' }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex-shrink-0 mt-0.5">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <InfoIcon size={18} />
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-blue-900 mb-1.5">Systém zinečnatého fosfátování</h3>
                <p className="text-xs text-blue-800/70 leading-relaxed">
                  Náš technologický postup je navržen pro dosažení maximální kvality a dlouhodobé životnosti povrchu. 
                  Zinečnatý fosfát výrazně zvyšuje korozní odolnost a zajišťuje vynikající přilnavost práškových barev.
                  Pro venkovní použití aplikujeme polyesterové barvy fasádní kvality odolné vůči UV záření.
                </p>
              </div>
            </motion.div>
          </ScrollReveal>
          
          {/* Navigace záložek */}
          <ScrollReveal delay={200}>
            <div className="mb-4">
              <div className="flex justify-center overflow-x-auto pb-2 scrollbar-hide">
                <div className="flex space-x-1.5">
                  {tabs.map((tab, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setActiveTab(index)}
                      className={`px-3.5 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all
                        ${activeTab === index
                          ? 'bg-primary text-white shadow-sm'
                          : 'bg-muted/30 text-muted-foreground hover:bg-muted/50'
                        }`}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                    >
                      {tab.title}
                    </motion.button>
                  ))}
                </div>
              </div>
              <motion.div 
                className="mt-1.5 text-xs text-center text-muted-foreground"
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {tabs[activeTab].description}
              </motion.div>
            </div>
          </ScrollReveal>
          
          {/* Obsah aktivní záložky */}
          <ScrollReveal delay={300}>
            <motion.div 
              className="bg-card rounded-xl border shadow-sm overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="p-4">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-2"
                  >
                    {tabs[activeTab].steps.map((step, stepIndex) => (
                      <motion.div 
                        key={step.number} 
                        className="rounded-lg border hover-card overflow-hidden"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: stepIndex * 0.05 }}
                        layout
                        layoutId={`step-${step.number}`}
                      >
                        <LayoutGroup id={`step-${step.number}-group`}>
                          {/* Hlavička kroku */}
                          <motion.div 
                            className={`p-2.5 flex items-center gap-2 cursor-pointer transition-all ${expandedSteps.includes(step.number) ? 'bg-muted/20' : 'bg-white'}`}
                            onClick={() => toggleStep(step.number)}
                            whileHover={{ backgroundColor: expandedSteps.includes(step.number) ? 'rgba(0,0,0,0.05)' : 'rgba(0,0,0,0.01)' }}
                            whileTap={{ scale: 0.995 }}
                            layout
                            layoutId={`header-${step.number}`}
                          >
                            {/* Číslo kroku */}
                            <motion.div 
                              className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-semibold text-xs bg-gradient-to-r ${getGradientColor(step.number)} text-white shadow-sm`}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              animate={{ 
                                scale: expandedSteps.includes(step.number) ? 1.1 : 1,
                                transition: { duration: 0.2 }
                              }}
                              layout
                              layoutId={`number-${step.number}`}
                            >
                              {step.number}
                            </motion.div>
                            
                            {/* Název a popis */}
                            <motion.div className="flex-grow" layout layoutId={`content-${step.number}`}>
                              <motion.h4 
                                className="font-medium text-xs"
                                animate={{
                                  color: expandedSteps.includes(step.number) ? 'rgba(0,0,0,0.9)' : 'rgba(0,0,0,0.8)',
                                }}
                                layout
                              >
                                {step.title}
                              </motion.h4>
                              <motion.p 
                                className={`text-xs text-muted-foreground leading-tight ${expandedSteps.includes(step.number) ? '' : 'line-clamp-1'}`}
                                layout
                              >
                                {step.description}
                              </motion.p>
                            </motion.div>
                            
                            {/* Ikona rozbalení */}
                            <motion.div 
                              className="text-muted-foreground"
                              animate={{ 
                                rotate: expandedSteps.includes(step.number) ? 180 : 0,
                                scale: expandedSteps.includes(step.number) ? 1.2 : 1,
                              }}
                              transition={{ 
                                duration: 0.3,
                                type: "spring",
                                stiffness: 260,
                                damping: 20 
                              }}
                            >
                              <ChevronDownIcon className="h-4 w-4" />
                            </motion.div>
                          </motion.div>
                          
                          {/* Detaily kroku */}
                          <AnimatePresence mode="wait">
                            {expandedSteps.includes(step.number) && (
                              <motion.div 
                                className="overflow-hidden border-t border-border/50"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ 
                                  height: 'auto', 
                                  opacity: 1,
                                  transition: { 
                                    height: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
                                    opacity: { duration: 0.2, delay: 0.1 }
                                  }
                                }}
                                exit={{ 
                                  height: 0, 
                                  opacity: 0,
                                  transition: { 
                                    height: { duration: 0.2, ease: [0.04, 0.62, 0.23, 0.98] },
                                    opacity: { duration: 0.1 }
                                  }
                                }}
                              >
                                <div className="p-3 pt-2">
                                  {step.parameters.length > 0 && (
                                    <div className="space-y-2">
                                      <div className="text-xs font-medium mb-2 flex items-center gap-1.5 opacity-0">
                                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-transparent"></span>
                                        Parametry procesu
                                      </div>
                                      
                                      <AnimatePresence>
                                        <motion.div
                                          initial={{ opacity: 0 }}
                                          animate={{ opacity: 1 }}
                                          transition={{ duration: 0.2, delay: 0.2 }}
                                          className="space-y-2"
                                        >
                                          <motion.div 
                                            className="text-xs font-medium mb-2 flex items-center gap-1.5"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.2, delay: 0.25 }}
                                          >
                                            <motion.span 
                                              className={`inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r ${getGradientColor(step.number)}`}
                                              initial={{ opacity: 0 }}
                                              animate={{ opacity: 1 }}
                                              transition={{ duration: 0.2, delay: 0.3 }}
                                            ></motion.span>
                                            Parametry procesu
                                          </motion.div>
                                          
                                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                                            {step.parameters.map((param, index) => (
                                              <ProcessParameter
                                                key={index}
                                                name={param.name}
                                                value={param.value}
                                                unit={param.unit}
                                                index={index}
                                              />
                                            ))}
                                          </div>
                                        </motion.div>
                                      </AnimatePresence>
                                    </div>
                                  )}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </LayoutGroup>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </ScrollReveal>
          
          {/* Pozn. pro uživatele */}
          <ScrollReveal delay={400}>
            <motion.div 
              className="mt-3 text-center text-xs text-muted-foreground flex items-center justify-center gap-1.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span>Kliknutím na jednotlivé kroky zobrazíte podrobné parametry procesu</span>
              <ChevronDownIcon className="h-3 w-3" />
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
