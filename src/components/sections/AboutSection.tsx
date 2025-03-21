
import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeader from '@/components/SectionHeader';
import { Check } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <SectionHeader
          title="O naší lakovně"
          subtitle="První zakázková lakovna ve Fulneku s více než 25 lety zkušeností"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal className="order-2 lg:order-1">
            <h3 className="text-2xl font-semibold mb-4">Naše firma zahájila činnost v oboru práškového lakování počátkem roku 1997</h3>
            <p className="text-muted-foreground mb-6">
              Jako první zakázková lakovna ve Fulneku jsme přinesli profesionální služby v oblasti práškového lakování s důrazem na kvalitu a spokojenost našich zákazníků.
            </p>
            <p className="text-muted-foreground mb-6">
              Mezi naše hlavní cíle patří v první řadě spokojenost zákazníka a to jak v počátku obchodního vztahu, tak i v průběhu užívání našich služeb.
            </p>
            <p className="text-muted-foreground mb-6">
              Naší nejlepší reklamou je spokojený zákazník, který dokáže ocenit naši flexibilitu a 100% péči včetně komplexnosti a finalizace, kterou nabízíme.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                  <Check size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Kvalita</h4>
                  <p className="text-sm text-muted-foreground">Vysoká kvalita zpracování</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                  <Check size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Zkušenosti</h4>
                  <p className="text-sm text-muted-foreground">Více než 25 let v oboru</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                  <Check size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Komplexnost</h4>
                  <p className="text-sm text-muted-foreground">Kompletní služby na jednom místě</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                  <Check size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Flexibilita</h4>
                  <p className="text-sm text-muted-foreground">Rychlá reakce na požadavky</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200} className="order-1 lg:order-2">
            <div className="relative rounded-xl overflow-hidden aspect-square shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1587582816472-81e94768469a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80" 
                alt="Naše lakovna" 
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
