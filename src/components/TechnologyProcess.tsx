
import React from 'react';
import { Check } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const TechnologyProcess: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 hidden md:block"></div>
      
      <div className="space-y-12">
        <ScrollReveal>
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="md:text-right md:pr-12">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
                Krok 1
              </span>
              <h3 className="text-xl font-semibold mb-2">Příjem zakázky a kontrola</h3>
              <p className="text-muted-foreground">
                Pečlivá kontrola vstupního materiálu, konzultace s klientem ohledně požadovaných parametrů.
              </p>
            </div>
            
            <div className="hidden md:block">
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white z-10">
                <Check size={16} />
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-border p-6 ml-8">
                <img 
                  src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80" 
                  alt="Příjem zakázky" 
                  className="rounded-lg w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>
        
        <ScrollReveal>
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="md:order-2 md:pl-12">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
                Krok 2
              </span>
              <h3 className="text-xl font-semibold mb-2">Chemická předúprava</h3>
              <p className="text-muted-foreground">
                Odmašťování, fosfátování a další procesy pro dokonalou přípravu povrchu dle technologického postupu.
              </p>
            </div>
            
            <div className="md:order-1 hidden md:block">
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white z-10">
                <Check size={16} />
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-border p-6 mr-8">
                <img 
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80" 
                  alt="Chemická předúprava" 
                  className="rounded-lg w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>
        
        <ScrollReveal>
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="md:text-right md:pr-12">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
                Krok 3
              </span>
              <h3 className="text-xl font-semibold mb-2">Nanášení práškové barvy</h3>
              <p className="text-muted-foreground">
                Elektrostatické nanášení práškové barvy pomocí automatického zařízení WAGNER a pistolí PEM-C4-HiCoat.
              </p>
            </div>
            
            <div className="hidden md:block">
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white z-10">
                <Check size={16} />
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-border p-6 ml-8">
                <img 
                  src="https://images.unsplash.com/photo-1549497538-303791108f95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80" 
                  alt="Nanášení barvy" 
                  className="rounded-lg w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>
        
        <ScrollReveal>
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="md:order-2 md:pl-12">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
                Krok 4
              </span>
              <h3 className="text-xl font-semibold mb-2">Vytvrzování v peci</h3>
              <p className="text-muted-foreground">
                Vytvrzení nanesené práškové barvy při teplotách až 225°C s využitím pece s termosifonovým uzávěrem.
              </p>
            </div>
            
            <div className="md:order-1 hidden md:block">
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white z-10">
                <Check size={16} />
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-border p-6 mr-8">
                <img 
                  src="https://images.unsplash.com/photo-1606210122158-eeb10e0823bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80" 
                  alt="Vytvrzování" 
                  className="rounded-lg w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>
        
        <ScrollReveal>
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="md:text-right md:pr-12">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
                Krok 5
              </span>
              <h3 className="text-xl font-semibold mb-2">Kontrola kvality</h3>
              <p className="text-muted-foreground">
                Důkladná kontrola každého lakovaného dílu včetně měření tloušťky vrstvy a vizuální kontroly.
              </p>
            </div>
            
            <div className="hidden md:block">
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white z-10">
                <Check size={16} />
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-border p-6 ml-8">
                <img 
                  src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80" 
                  alt="Kontrola kvality" 
                  className="rounded-lg w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default TechnologyProcess;
