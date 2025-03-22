import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../SectionHeader';
import ScrollReveal from '../ScrollReveal';
import ProcessStep from '../ui/ProcessStep';
import SprayEffect from '@/components/ui/SprayEffect';

const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  
  // Definice kroků procesu s parametry
  const processSteps = [
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
    {
      number: 9,
      title: 'Pasivace',
      description: 'Proces pasivace pro zvýšení korozní odolnosti povrchu a stability fosfátové vrstvy.',
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
  ];
  
  // Přepínání aktivního kroku
  const toggleStep = (index: number) => {
    setActiveStep(activeStep === index ? null : index);
  };
  
  return (
    <section id="process" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Dekorační prvky */}
      <SprayEffect position="left" intensity="light" color="#0ea5e9" size="lg" className="opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <SectionHeader 
            title="Technologický postup" 
            subtitle="Detailní přehled našeho procesu práškového lakování pro dosažení nejlepších výsledků"
          />
        </ScrollReveal>
        
        {/* Vizualizace procesu jako postranní časová osa */}
        <div className="mt-12 flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3 lg:w-1/4">
            <ScrollReveal>
              <div className="bg-muted/20 p-6 rounded-xl border border-muted">
                <h3 className="text-xl font-medium mb-4">Klíčové fáze procesu</h3>
                
                <div className="space-y-4">
                  {/* Příprava povrchu */}
                  <motion.div 
                    className="p-4 bg-white rounded-lg shadow-sm"
                    whileHover={{ scale: 1.02, boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
                  >
                    <h4 className="font-medium text-primary">1. Předúprava</h4>
                    <p className="text-sm text-muted-foreground">Důkladná příprava povrchu pro optimální přilnavost laku</p>
                  </motion.div>
                  
                  {/* Nanášení */}
                  <motion.div 
                    className="p-4 bg-white rounded-lg shadow-sm"
                    whileHover={{ scale: 1.02, boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
                  >
                    <h4 className="font-medium text-primary">2. Práškování</h4>
                    <p className="text-sm text-muted-foreground">Elektrostatické nanášení práškové barvy</p>
                  </motion.div>
                  
                  {/* Vytvrzování */}
                  <motion.div 
                    className="p-4 bg-white rounded-lg shadow-sm"
                    whileHover={{ scale: 1.02, boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
                  >
                    <h4 className="font-medium text-primary">3. Vytvrzování</h4>
                    <p className="text-sm text-muted-foreground">Tepelné zpracování pro fixaci povrchové úpravy</p>
                  </motion.div>
                  
                  {/* Kontrola */}
                  <motion.div 
                    className="p-4 bg-white rounded-lg shadow-sm"
                    whileHover={{ scale: 1.02, boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
                  >
                    <h4 className="font-medium text-primary">4. Kontrola kvality</h4>
                    <p className="text-sm text-muted-foreground">Důsledná kontrola výsledného povrchu</p>
                  </motion.div>
                </div>
                
                <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h4 className="text-sm font-medium text-blue-800 mb-2">Výhody našeho postupu</h4>
                  <ul className="text-xs text-blue-700 space-y-1">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 text-lg leading-none">•</span>
                      <span>Zinečnatý fosfát zvyšuje korozní odolnost</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 text-lg leading-none">•</span>
                      <span>Důsledná předúprava zajišťuje dlouhou životnost</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 text-lg leading-none">•</span>
                      <span>Vytvrzování s termosifonovým uzávěrem šetří energii</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 text-lg leading-none">•</span>
                      <span>Přesná kontrola teploty pro dokonalé vytvrzení</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
          
          <div className="md:w-2/3 lg:w-3/4">
            <div className="space-y-3">
              {processSteps.map((step, index) => (
                <ScrollReveal key={step.number} delay={index * 50}>
                  <ProcessStep
                    number={step.number}
                    title={step.title}
                    description={step.description}
                    parameters={step.parameters}
                    isActive={activeStep === index}
                    onToggle={() => toggleStep(index)}
                    className="max-w-3xl mx-auto"
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
