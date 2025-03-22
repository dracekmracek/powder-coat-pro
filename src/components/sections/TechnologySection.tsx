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
          subtitle="Moderní postupy pro dosažení prvotřídní kvality povrchové úpravy"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ScrollReveal>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">PRÁŠKOVÁ LAKOVNA</h3>
              <p className="text-muted-foreground mb-4">
                Příprava povrchu je prováděna v průjezdném postřikovacím zařízení pomocí technologie zinečnatého fosfátování, která zajišťuje vysokou kvalitu a dlouhou životnost.
              </p>
              <p className="text-muted-foreground mb-4">
                Proces zahrnuje alkalické odmaštění (PRAGOLOD 59), dvoustupňový oplach demineralizovanou vodou, aktivaci povrchu (PRAGOFOS 1927) a vlastní fosfátování (PRAGOFOS 1920).
              </p>
              <p className="text-muted-foreground mb-4">
                Nanášení práškových barev provádíme automatickým zařízením WAGNER v kabině Super Cube, která umožňuje rychlou změnu barvy a efektivní provoz. Těžko přístupná místa dokončujeme ručně.
              </p>
              <p className="text-muted-foreground">
                Pro vytvrzení barvy používáme vypalovací pec s teplotou až 225°C vybavenou termosifonovým uzávěrem pro minimalizaci tepelných ztrát. Pro venkovní aplikace používáme výhradně polyesterové barvy odolné vůči povětrnostním vlivům a UV záření.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FeatureCard
                title="Elektrostatické lakování"
                description="Moderní metoda s elektrostatickým nabíjením práškové barvy pro dokonalou přilnavost na kovových površích."
                icon={<PaintBucket size={24} />}
                delay={0}
              />
              
              <FeatureCard
                title="Široká škála barev"
                description="Kompletní vzorník RAL včetně metalických, matných a strukturovaných variant."
                icon={<Droplet size={24} />}
                delay={100}
              />
              
              <FeatureCard
                title="Vícevrstevné lakování"
                description="Speciální postupy pro dosažení specifických vizuálních a funkčních vlastností povrchu."
                icon={<Layers size={24} />}
                delay={200}
              />
              
              <FeatureCard
                title="Kvalitní předúprava"
                description="Důkladné odmašťování a fosfátování pro perfektní přilnavost a dlouhodobou životnost."
                icon={<Workflow size={24} />}
                delay={300}
              />
            </div>
            
            <div className="mt-6 relative aspect-video rounded-xl overflow-hidden shadow-xl">
              <img 
                src="/images/technology/powder-coating-process.jpg" 
                alt="Technologie práškového lakování Betrim" 
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
