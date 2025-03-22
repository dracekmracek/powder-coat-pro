import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeader from '@/components/SectionHeader';

const QualitySection: React.FC = () => {
  return (
    <section id="quality" className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title="Politika kvality"
          subtitle="Kvalita našich služeb je základem dlouhodobé spokojenosti zákazníků"
        />
        
        <div className="max-w-4xl mx-auto bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal delay={200} className="order-2 lg:order-1">
              <div className="bg-secondary p-6 md:p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Politika kvality společnosti Betrim s.r.o.</h3>
                <p className="text-muted-foreground mb-4">
                  Naše společnost realizuje práškové povrchové úpravy kovových materiálů s vysokými nároky na detail a přesnost. Působíme jak na tuzemském, tak zahraničním trhu.
                </p>
                <p className="text-muted-foreground mb-4">
                  Klademe důraz na splnění požadavků zákazníků v oblasti kvality, objemu a technického zpracování zakázek. Rozhodujícím faktorem pro nás je plnění dohodnutých závazků včas a v maximální dohodnuté kvalitě.
                </p>
                <p className="text-muted-foreground mb-4">
                  Podporujeme neustálý rozvoj našich zaměstnanců a aktivně zlepšujeme systém managementu kvality podle normy EN ISO 9001:2015, který uplatňujeme vůči všem zainteresovaným stranám.
                </p>
                
                <div className="mt-6 pt-6 border-t border-border/30 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center">
                  <div>
                    <p className="text-sm text-muted-foreground">Ve Fulneku, 1.5.2023</p>
                  </div>
                  <div className="mt-4 sm:mt-0">
                    <p className="font-medium">Jindřich Schich</p>
                    <p className="text-sm text-muted-foreground">jednatel</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal className="order-1 lg:order-2">
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-xl border border-border">
                <img 
                  src="/powder-coat-pro/images/quality-control.jpg" 
                  alt="Kontrola kvality Betrim" 
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
