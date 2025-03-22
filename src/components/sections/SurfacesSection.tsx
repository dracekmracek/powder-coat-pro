import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeader from '@/components/SectionHeader';

const SurfacesSection: React.FC = () => {
  return (
    <section id="surfaces" className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title="Povrchová úprava"
          subtitle="Specializujeme se na vysoce kvalitní práškové lakování s profesionální předúpravou povrchu"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <ScrollReveal>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">SLUŽBY POVRCHOVÝCH ÚPRAV</h3>
              <p className="text-muted-foreground mb-4">
                Provádíme kvalitní nástřik práškovými barvami i pro tvarově složité díly v rámci automatizovaného provozu.
              </p>
              
              <h4 className="font-medium mt-6 mb-3">Předúpravy:</h4>
              <p className="text-muted-foreground mb-4">
                Chemické odmaštění, zinečnatý fosfát
              </p>
              
              <h4 className="font-medium mt-6 mb-3">Barevné možnosti:</h4>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-4">
                <li>Hladké, jemné nebo hrubé struktury</li>
                <li>Lesklé, pololesklé, matné provedení</li>
                <li>Kompletní vzorník RAL</li>
                <li>Vhodné pro interiér i exteriér</li>
                <li>Balení a doprava hotových dílů</li>
              </ul>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
              <h3 className="text-xl font-semibold mb-4">TRYSKACÍ ZAŘÍZENÍ</h3>
              <p className="text-muted-foreground mb-4">
                Využíváme kvalitní tryskací zařízení s ocelovým a nerezovým granulátem pro dokonalou předúpravu.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                <div className="p-4 bg-primary/5 rounded-lg">
                  <p className="font-medium">Průměr obrobku</p>
                  <p className="text-2xl font-bold text-primary">2,000 mm</p>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg">
                  <p className="font-medium">Výška obrobku</p>
                  <p className="text-2xl font-bold text-primary">2,300 mm</p>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg">
                  <p className="font-medium">Nosnost závěsu</p>
                  <p className="text-2xl font-bold text-primary">1,000 kg</p>
                </div>
              </div>
              
              <h4 className="font-medium mb-2">Typické aplikace:</h4>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-4">
                <li>Tryskání ocelových dílů na stupeň Sa2,5</li>
                <li>Tryskání nerezových a hliníkových dílů balotinou</li>
                <li>Možnost volby mezi zinečnatým a železitým fosfátem</li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ScrollReveal>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-border h-full">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/powder-coat-pro/images/surfaces/surface-finish-1.jpg" 
                  alt="Matná povrchová úprava Betrim" 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Matný povrch</h3>
                <p className="text-muted-foreground">Elegantní matné provedení s nízkou odrazivostí, ideální pro moderní design.</p>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-border h-full">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/powder-coat-pro/images/surfaces/color-samples.jpg" 
                  alt="Lesklá povrchová úprava Betrim" 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Lesklý povrch</h3>
                <p className="text-muted-foreground">Vysoce lesklé provedení s dokonalou odrazivostí pro reprezentativní vzhled.</p>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-border h-full">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/powder-coat-pro/images/technology/powder-coating-process.jpg" 
                  alt="Strukturovaná povrchová úprava Betrim" 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Strukturovaný povrch</h3>
                <p className="text-muted-foreground">Povrch s reliéfní strukturou pro zvýšenou odolnost a skrytí drobných vad.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default SurfacesSection;
