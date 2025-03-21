import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeader from '@/components/SectionHeader';
import { Check } from 'lucide-react';

const FacilitySection: React.FC = () => {
  return (
    <section id="facility" className="bg-secondary">
      <div className="container max-w-7xl mx-auto px-4">
        <SectionHeader
          title="Lakovna Betrim"
          subtitle="Moderní vybavení a technologie pro prvotřídní výsledky"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ScrollReveal>
            <div className="bg-white p-6 rounded-xl shadow-sm h-full">
              <h3 className="text-xl font-semibold mb-4">Maximální rozměry lakovaných dílců</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-primary/5 rounded-lg">
                  <p className="font-medium">Délka</p>
                  <p className="text-2xl font-bold text-primary">3,500 mm</p>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg">
                  <p className="font-medium">Výška</p>
                  <p className="text-2xl font-bold text-primary">1,500 mm</p>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg">
                  <p className="font-medium">Šířka</p>
                  <p className="text-2xl font-bold text-primary">1,200 mm</p>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg">
                  <p className="font-medium">Váha</p>
                  <p className="text-2xl font-bold text-primary">110 kg/m</p>
                </div>
              </div>
              
              <div className="p-4 bg-primary/10 rounded-lg text-center">
                <p className="text-sm font-medium">Po telefonické domluvě na čísle +420 603 269 881 je možno tyto parametry překročit</p>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Vybavení naší práškové lakovny</h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                      <Check size={14} />
                    </div>
                    <div>
                      <h4 className="font-medium">Automatická linka</h4>
                      <p className="text-sm text-muted-foreground">Pro efektivní zpracování velkých sérií výrobků</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                      <Check size={14} />
                    </div>
                    <div>
                      <h4 className="font-medium">Moderní lakovací kabina</h4>
                      <p className="text-sm text-muted-foreground">S účinným odsáváním a recyklací prášku</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                      <Check size={14} />
                    </div>
                    <div>
                      <h4 className="font-medium">Vypalovací pec</h4>
                      <p className="text-sm text-muted-foreground">S přesnou regulací teploty pro dokonalé vytvrzení</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                      <Check size={14} />
                    </div>
                    <div>
                      <h4 className="font-medium">Předúpravová linka</h4>
                      <p className="text-sm text-muted-foreground">Pro dokonalou přípravu povrchu před lakováním</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                      <Check size={14} />
                    </div>
                    <div>
                      <h4 className="font-medium">Kontrolní stanoviště</h4>
                      <p className="text-sm text-muted-foreground">Pro důkladnou kontrolu kvality každého výrobku</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <div className="aspect-video rounded-xl overflow-hidden shadow-xl border border-border">
              <img 
                src="/images/powder-coating-facility-main.jpg" 
                alt="Lakovna Betrim" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="mt-6 grid grid-cols-2 gap-6">
              <div className="aspect-square rounded-xl overflow-hidden shadow-sm border border-border">
                <img 
                  src="/images/powder-coating-equipment.jpg" 
                  alt="Vybavení lakovny Betrim" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden shadow-sm border border-border">
                <img 
                  src="/images/powder-coating-process.jpg" 
                  alt="Práškové lakování Betrim" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default FacilitySection;
