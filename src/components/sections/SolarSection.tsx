import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeader from '@/components/SectionHeader';

const SolarSection: React.FC = () => {
  return (
    <section id="solar" className="bg-secondary">
      <div className="container max-w-7xl mx-auto px-4">
        <SectionHeader
          title="Fotovoltaická elektrárna"
          subtitle="Ekologický přístup k výrobě a snižování naší uhlíkové stopy"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl border border-border">
              <img 
                src="/powder-coat-pro/images/solar-energy.jpg" 
                alt="Fotovoltaická elektrárna" 
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <h3 className="text-2xl font-semibold mb-4">Výroba energie z obnovitelných zdrojů</h3>
            <p className="text-muted-foreground mb-6">
              V rámci našeho závazku k udržitelnosti a ochraně životního prostředí jsme instalovali fotovoltaickou elektrárnu, která pokrývá významnou část naší spotřeby energie.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-primary text-2xl font-bold mb-2">120 kWp</div>
                <p className="text-sm text-muted-foreground">Instalovaný výkon elektrárny</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-primary text-2xl font-bold mb-2">40%</div>
                <p className="text-sm text-muted-foreground">Pokrytí vlastní spotřeby energie</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-primary text-2xl font-bold mb-2">75 t</div>
                <p className="text-sm text-muted-foreground">Roční úspora emisí CO2</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-primary text-2xl font-bold mb-2">2019</div>
                <p className="text-sm text-muted-foreground">Rok instalace elektrárny</p>
              </div>
            </div>
            
            <p className="text-muted-foreground">
              Díky vlastní výrobě elektřiny snižujeme naši ekologickou stopu a přispíváme k ochraně životního prostředí. Naši zákazníci tak mohou mít jistotu, že jejich výrobky jsou lakovány s ohledem na udržitelnost.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default SolarSection;
