import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeader from '@/components/SectionHeader';
import { Check } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="O naší společnosti"
          subtitle="Prášková lakovna BETRIM - tradice a kvalita ve Fulneku od roku 1997"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <ScrollReveal className="order-2 lg:order-1">
            <h3 className="text-2xl font-semibold mb-4">Specialisté na práškové lakování s dlouholetou tradicí</h3>

            <p className="text-muted-foreground mb-6">
              Naší prioritou je spokojenost zákazníka - od začátku obchodního vztahu až po dlouhodobé užívání našich služeb. Klademe důraz na flexibilitu, komplexnost a stoprocentní péči o každou zakázku.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                  <Check size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Kvalita</h4>
                  <p className="text-sm text-muted-foreground">Prvotřídní zpracování zakázek</p>
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
                  <p className="text-sm text-muted-foreground">Kompletní zpracování zakázky</p>
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
                src="/powder-coat-pro/images/powder-coating-facility.jpg" 
                alt="Lakovna Betrim" 
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
