
import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeader from '@/components/SectionHeader';

const QualitySection: React.FC = () => {
  return (
    <section id="quality" className="bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <SectionHeader
          title="Politika kvality"
          subtitle="Kvalita je naší nejvyšší prioritou při práci pro naše zákazníky"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal delay={200} className="order-2 lg:order-1">
            <div className="bg-secondary p-6 md:p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Politika kvality společnosti BETRIM s.r.o.</h3>
              <p className="text-muted-foreground mb-4">
                Společnost BETRIM s.r.o. se zabývá realizací práškových povrchových úprav kovových materiálů v rozsahu nejrozmanitějších požadavků zákazníků na detailní a přesné lakování. Zaměřujeme se nejen na tuzemský, ale také na zahraniční trh.
              </p>
              <p className="text-muted-foreground mb-4">
                Naší vizí je trvale vycházet vstříc požadavkům zákazníků na kvalitu, objem a technické zpracování zakázek a ujišťování zákazníka o dobré spolupráci se seriózní, dynamickou a dobře fungující společností, kde rozhodujícím ukazatelem je plnění dohodnutých závazků v termínu a maximální dohodnuté kvalitě povrchové úpravy nebo poskytnuté služby. Tato snaha vedení společnosti vede a zavazuje ke zvyšování spokojenosti zákazníka, zaměstnanců a spolupracovníků.
              </p>
              <p className="text-muted-foreground mb-4">
                Vytváříme podmínky pro neustálý rozvoj našich zaměstnanců ovlivňujících kvalitu povrchové úpravy a souvisejících poskytovaných služeb. Podporujeme a vytváříme podmínky pro aktivní účast všech zaměstnanců a dalších osob při zlepšování systému managementu kvality.
              </p>
              <p className="text-muted-foreground mb-4">
                Naším záměrem a vizí je zavést a trvale a udržitelně zlepšovat systém managementu kvality podle normy EN ISO 9001:2015. Tuto politiku uplatňujeme ve vztahu ke všem zainteresovaným stranám.
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
                src="https://images.unsplash.com/photo-1631624215749-b10b3dd7bca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80" 
                alt="Kontrola kvality" 
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
