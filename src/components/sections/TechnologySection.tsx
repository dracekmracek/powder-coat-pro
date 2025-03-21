
import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeader from '@/components/SectionHeader';
import FeatureCard from '@/components/FeatureCard';
import { PaintBucket, Droplet, Layers, Workflow } from 'lucide-react';

const TechnologySection: React.FC = () => {
  return (
    <section id="technology" className="bg-secondary">
      <div className="container max-w-7xl mx-auto px-4">
        <SectionHeader
          title="Technologie lakování"
          subtitle="Využíváme moderní technologie pro dosažení maximální kvality povrchové úpravy"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ScrollReveal>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">PRÁŠKOVÁ LAKOVNA</h3>
              <p className="text-muted-foreground mb-4">
                Příprava povrchu je prováděna v průjezdném postřikovacím stroji s technologií zinečnatého fosfátování.
              </p>
              <p className="text-muted-foreground mb-4">
                Pro odmaštění používáme PRAGOLOD 59, silně alkalický přípravek pro odstraňování nánosů konzervačních prostředků a mastných nečistot. Následuje dvoustupňový oplach demineralizovanou vodou. Před fosfátováním je zařazena aktivace povrchu PRAGOFOS 1927. Pro vlastní fosfátování používáme PRAGOFOS 1920.
              </p>
              <p className="text-muted-foreground mb-4">
                Sušení probíhá v sušící peci při teplotě 100 až 120°C. Nanášení práškových barev provádíme automatickým zařízením firmy WAGNER.
              </p>
              <p className="text-muted-foreground mb-4">
                Plastová kabina Super Cube je dimenzována pro rychlou změnu barvy. Hodí se pro automatické i ruční nanášení při vícebarevném provozu a povrchovou úpravu větších sérií. Těžko přístupná nebo tvarově složitá místa se dokončují na pracovišti ručního lakýrníka. K odsávání prášku používáme odtahovou filtrační jednotku kombinovanou s cyklónovým odlučovačem. Vlastní nástřik provádíme pistolemi PEM-C4-HiCoat.
              </p>
              <p className="text-muted-foreground mb-4">
                Následuje vytvrzení barvy ve vypalovací peci při teplotě až 225°C. Vypalovací pec je v provedení s termosifonovým uzávěrem, který minimalizuje únik tepla do okolí.
              </p>
              <p className="text-muted-foreground">
                Zinečnatý fosfát je kvalitní předúpravou pod práškovými barvami, která výrazně omezuje rozšíření koroze pod povlakem a zajišťuje dlouhou životnost. Pro venkovní užití používáme výhradně polyesterové barvy fasádní kvality odolné vůči povětrnostním vlivům a UV záření.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FeatureCard
                title="Elektrostatické práškové lakování"
                description="Moderní metoda lakování využívající elektrostatické nabíjení práškové barvy, která přilne na uzemněný kovový povrch."
                icon={<PaintBucket size={24} />}
                delay={0}
              />
              
              <FeatureCard
                title="Široká škála barev RAL"
                description="Nabízíme kompletní vzorník barev dle standardu RAL, včetně metalických, matných i strukturovaných variant."
                icon={<Droplet size={24} />}
                delay={100}
              />
              
              <FeatureCard
                title="Vícevrstevné lakování"
                description="Pro specifické požadavky provádíme vícevrstevné lakování pro dosažení speciálních vizuálních a funkčních vlastností."
                icon={<Layers size={24} />}
                delay={200}
              />
              
              <FeatureCard
                title="Předúprava povrchu"
                description="Kvalitní odmašťování a fosfátování povrchu pro zajištění perfektní přilnavosti a dlouhodobé životnosti nátěru."
                icon={<Workflow size={24} />}
                delay={300}
              />
            </div>
            
            <div className="mt-6 relative aspect-video rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80" 
                alt="Technologie práškového lakování" 
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
