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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
          <ScrollReveal>
            <div className="bg-white p-6 rounded-xl shadow-sm h-full">
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
            <div className="bg-white p-6 rounded-xl shadow-sm h-full">
              <h3 className="text-xl font-semibold mb-4">TRYSKACÍ ZAŘÍZENÍ</h3>
              <p className="text-muted-foreground mb-4">
                Využíváme kvalitní tryskací zařízení s ocelovým a nerezovým granulátem pro dokonalou předúpravu (TZNZ 4, MODIFIKACE: TZNZ 4-11/20-23).
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
        
        <div className="mt-12">
          <ScrollReveal>
            <div className="bg-primary/5 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6 text-center">PROFESIONÁLNÍ PRÁŠKOVÁNÍ</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm h-full">
                  <h4 className="text-lg font-semibold mb-3">Komplexní předúprava</h4>
                  <p className="text-muted-foreground">
                    Práškované výrobky jsou postřikem odmaštěny a fosfátovány v 3 až 6 technologických krocích dle konkrétního užití (interiér, exteriér, vlhké prostředí) a typu materiálu.
                  </p>
                  <div className="mt-4 flex items-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">Pro interiér i exteriér</span>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm h-full">
                  <h4 className="text-lg font-semibold mb-3">Naše technologické linky</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>6-stupňová linka předúprav v délce 60 metrů s pasivací (vhodná pro exteriér)</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>4-stupňová linka předúprav v délce 18 metrů</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>3-stupňová předúprava s pasivací pro velkorozměrné díly</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm h-full">
                  <h4 className="text-lg font-semibold mb-3">Technické parametry</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span>Výrobky jsou sušeny při teplotě 110 – 125°C</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span>Možnost volby mezi zinečnatým a železitým fosfátem</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span>Individuální řešení dle potřeb zákazníka</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
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
