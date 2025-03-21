
import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeader from '@/components/SectionHeader';

const SurfacesSection: React.FC = () => {
  return (
    <section id="surfaces" className="bg-secondary">
      <div className="container max-w-7xl mx-auto px-4">
        <SectionHeader
          title="Povrchová úprava"
          subtitle="Různé typy povrchových úprav pro různé účely a požadavky"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <ScrollReveal>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">VLASTNÍ POVRCHOVÁ ÚPRAVA</h3>
              <p className="text-muted-foreground mb-4">
                Provádíme nástřik práškovými barvami pro tvarově složité díly ve vysoké kvalitě v rámci kontinuálního automatického provozu.
              </p>
              
              <h4 className="font-medium mt-6 mb-3">Předúpravy:</h4>
              <p className="text-muted-foreground mb-4">
                Chemické odmaštění, zinečnatý fosfát
              </p>
              
              <h4 className="font-medium mt-6 mb-3">Používané barvy:</h4>
              <p className="text-muted-foreground mb-2">
                Široká škála barev dle požadavků zákazníka:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-4">
                <li>Hladké, jemné nebo hrubá struktura</li>
                <li>Lesklé, pololesklé, matné</li>
                <li>Odstíny dle stupnice RAL</li>
                <li>Barvy jak pro vnitřní, tak i vnější prostředí</li>
              </ul>
              
              <h4 className="font-medium mt-6 mb-3">Další služby:</h4>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Balení nastříkaných dílů</li>
                <li>Zajištění dovozu a odvozu stříkaných dílů</li>
              </ul>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
              <h3 className="text-xl font-semibold mb-4">TRYSKACÍ ZAŘÍZENÍ</h3>
              <h4 className="font-medium mb-2">ZÁVĚSNÉ TYP: TZNZ 4, MODIFIKACE: TZNZ 4-11/20-23</h4>
              <p className="text-muted-foreground mb-4">
                Tryská ocelovým a nerezovým granulátem
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
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
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">TRYSKÁNÍ A PRÁŠKOVÁNÍ</h3>
              
              <h4 className="font-medium mb-2">Tryskání:</h4>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-4">
                <li>Tryskáme výrobky ocelovou drtí na Sa2,5</li>
                <li>Provádíme tryskání nerezových a hliníkových dílů balotinou</li>
              </ul>
              
              <h4 className="font-medium mt-6 mb-2">Práškování:</h4>
              <p className="text-muted-foreground mb-4">
                Práškované výrobky jsou postřikem odmaštěny a fosfátovány ve 3 až 6 technologických krocích dle různého užití výrobku (interiér, exteriér, vlhké prostředí) a dle různých materiálů.
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li>Fosfátování s pasivací postřikem na 6-ti stupňové lince předúprav v délce předúprav 60-ti metrů vhodné pro exteriér</li>
                <li>Fosfátování postřikem na 4-stupňové lince předúprav v délce 18-ti metrů</li>
                <li>Fosfátování velko-rozměrných dílů s 3-stupňovou předúpravou v postřikovém zařízení s pasivací</li>
              </ul>
              
              <p className="text-muted-foreground mb-2">
                Výrobky po předúpravě jsou v posledním kroku sušeny při 110 – 125°C
              </p>
              <p className="text-muted-foreground">
                Možno použít zinečnatý fosfát nebo železitý fosfát
              </p>
            </div>
          </ScrollReveal>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ScrollReveal>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-border h-full">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1520106392146-ef585c111254?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80" 
                  alt="Matný povrch" 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Matný povrch</h3>
                <p className="text-muted-foreground">Elegantní matný povrch s nízkou odrazivostí, vhodný pro interiérové i exteriérové použití.</p>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-border h-full">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1532456745301-b2c645d8b80d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80" 
                  alt="Lesklý povrch" 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Lesklý povrch</h3>
                <p className="text-muted-foreground">Vysoce lesklý povrch s vysokou odrazivostí, vhodný pro dekorativní účely.</p>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-border h-full">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1575652756267-5f04c3341cc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80" 
                  alt="Strukturovaný povrch" 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Strukturovaný povrch</h3>
                <p className="text-muted-foreground">Povrch s reliéfní strukturou, vhodný pro zakrytí drobných nerovností a zvýšení odolnosti.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default SurfacesSection;
