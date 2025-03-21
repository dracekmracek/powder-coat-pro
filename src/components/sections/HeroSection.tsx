import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="pt-32 pb-20 sm:pt-40 sm:pb-28 bg-secondary overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <ScrollReveal>
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Profesionální povrchové úpravy od 1997
              </span>
            </ScrollReveal>
            
            <ScrollReveal delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Betrim - Práškové lakování
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <p className="text-lg text-muted-foreground mb-8">
                První zakázková lakovna ve Fulneku. Nabízíme kvalitní služby v oblasti práškového lakování s důrazem na spokojenost zákazníků a prvotřídní výsledky.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#contact" 
                  className="px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors"
                >
                  Kontaktujte nás
                </a>
                <a 
                  href="#about" 
                  className="px-6 py-3 bg-white text-primary rounded-md font-medium border border-primary/20 hover:bg-primary/5 transition-colors"
                >
                  Více o nás
                </a>
              </div>
            </ScrollReveal>
          </div>
          
          <ScrollReveal delay={400} className="relative">
            <div className="relative rounded-xl overflow-hidden aspect-video shadow-xl border border-border">
              <img 
                src="/images/powder-coating-hero.jpg" 
                alt="Práškové lakování Betrim" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent opacity-60"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full blur-xl opacity-20"></div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
