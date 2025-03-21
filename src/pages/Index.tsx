
import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';
import FeatureCard from '@/components/FeatureCard';
import ScrollReveal from '@/components/ScrollReveal';
import ContactForm from '@/components/ContactForm';
import TechnologyProcess from '@/components/TechnologyProcess';
import { 
  Layers, 
  Droplet, 
  PaintBucket, 
  Workflow, 
  Check, 
  Zap, 
  Image, 
  Factory, 
  ShieldCheck, 
  Sun, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';

const Index: React.FC = () => {
  // Add scroll reveal for all sections
  useEffect(() => {
    const handleScrollAnimation = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 100;
        
        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 sm:pt-40 sm:pb-28 bg-secondary overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal>
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  Od roku 1997
                </span>
              </ScrollReveal>
              
              <ScrollReveal delay={100}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                  Profesionální práškové lakování
                </h1>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <p className="text-lg text-muted-foreground mb-8">
                  První zakázková lakovna ve Fulneku s činností od roku 1997. Komplexní služby v oblasti práškového lakování s důrazem na kvalitu a spokojenost zákazníků.
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
                  src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80" 
                  alt="Práškové lakování" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent opacity-60"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full blur-xl opacity-20"></div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <SectionHeader
            title="O naší lakovně"
            subtitle="První zakázková lakovna ve Fulneku s více než 25 lety zkušeností"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal className="order-2 lg:order-1">
              <h3 className="text-2xl font-semibold mb-4">Naše firma zahájila činnost v oboru práškového lakování počátkem roku 1997</h3>
              <p className="text-muted-foreground mb-6">
                Jako první zakázková lakovna ve Fulneku jsme přinesli profesionální služby v oblasti práškového lakování s důrazem na kvalitu a spokojenost našich zákazníků.
              </p>
              <p className="text-muted-foreground mb-6">
                Mezi naše hlavní cíle patří v první řadě spokojenost zákazníka a to jak v počátku obchodního vztahu, tak i v průběhu užívání našich služeb.
              </p>
              <p className="text-muted-foreground mb-6">
                Naší nejlepší reklamou je spokojený zákazník, který dokáže ocenit naši flexibilitu a 100% péči včetně komplexnosti a finalizace, kterou nabízíme.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                    <Check size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Kvalita</h4>
                    <p className="text-sm text-muted-foreground">Vysoká kvalita zpracování</p>
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
                    <p className="text-sm text-muted-foreground">Kompletní služby na jednom místě</p>
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
                  src="https://images.unsplash.com/photo-1587582816472-81e94768469a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80" 
                  alt="Naše lakovna" 
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* Technology Section */}
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
      
      {/* Process Section */}
      <section id="process" className="bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <SectionHeader
            title="Technologický postup"
            subtitle="Komplexní proces zajišťující maximální kvalitu a trvanlivost povrchové úpravy"
          />
          
          <ScrollReveal>
            <div className="bg-secondary p-6 md:p-8 rounded-xl mb-12">
              <h3 className="text-xl font-semibold mb-4">TECHNICKÉ SPECIFIKACE PRÁŠKOVÉ LAKOVNY</h3>
              <h4 className="font-medium mb-4">Procedura lakování:</h4>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-primary/10 text-left">
                      <th className="p-3 font-medium">OPERACE</th>
                      <th className="p-3 font-medium">PROSTŘEDÍ</th>
                      <th className="p-3 font-medium">DOBA (min)</th>
                      <th className="p-3 font-medium">TEPLOTA (°C)</th>
                      <th className="p-3 font-medium">TLAK (bar)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/30 hover:bg-primary/5">
                      <td className="p-3">1. ODMAŠTĚNÍ</td>
                      <td className="p-3">ALKALICKÉ</td>
                      <td className="p-3">3</td>
                      <td className="p-3">60</td>
                      <td className="p-3">DO 1,2</td>
                    </tr>
                    <tr className="border-b border-border/30 hover:bg-primary/5">
                      <td className="p-3">2. 1° OPLACH</td>
                      <td className="p-3">DEMI VODA</td>
                      <td className="p-3">0,5</td>
                      <td className="p-3">20</td>
                      <td className="p-3">DO 1,0</td>
                    </tr>
                    <tr className="border-b border-border/30 hover:bg-primary/5">
                      <td className="p-3">3. 2° OPLACH</td>
                      <td className="p-3">DEMI VODA</td>
                      <td className="p-3">0,5</td>
                      <td className="p-3">20</td>
                      <td className="p-3">DO 1,0</td>
                    </tr>
                    <tr className="border-b border-border/30 hover:bg-primary/5">
                      <td className="p-3">4. OPL. RÁM</td>
                      <td className="p-3">DEMI VODA</td>
                      <td className="p-3">0,2</td>
                      <td className="p-3">20</td>
                      <td className="p-3">DO 1,0</td>
                    </tr>
                    <tr className="border-b border-border/30 hover:bg-primary/5">
                      <td className="p-3">6. ZN-FOSFÁT</td>
                      <td className="p-3">KYSELÉ</td>
                      <td className="p-3">3</td>
                      <td className="p-3">55</td>
                      <td className="p-3">DO 1,0</td>
                    </tr>
                    <tr className="border-b border-border/30 hover:bg-primary/5">
                      <td className="p-3">7. 1° OPLACH</td>
                      <td className="p-3">DEMI VODA</td>
                      <td className="p-3">0,5</td>
                      <td className="p-3">20</td>
                      <td className="p-3">DO 1,0</td>
                    </tr>
                    <tr className="border-b border-border/30 hover:bg-primary/5">
                      <td className="p-3">8. 2° OPLACH</td>
                      <td className="p-3">DEMI VODA</td>
                      <td className="p-3">0,5</td>
                      <td className="p-3">20</td>
                      <td className="p-3">DO 1,0</td>
                    </tr>
                    <tr className="border-b border-border/30 hover:bg-primary/5">
                      <td className="p-3">9. PASIVACE</td>
                      <td className="p-3">KYSELÉ</td>
                      <td className="p-3">0,5</td>
                      <td className="p-3">20</td>
                      <td className="p-3">DO 1,0</td>
                    </tr>
                    <tr className="border-b border-border/30 hover:bg-primary/5">
                      <td className="p-3">10. OPL.RÁM</td>
                      <td className="p-3">DEMI VODA</td>
                      <td className="p-3">0,2</td>
                      <td className="p-3">20</td>
                      <td className="p-3">DO 1,0</td>
                    </tr>
                    <tr className="border-b border-border/30 hover:bg-primary/5">
                      <td className="p-3">11. SUŠENÍ</td>
                      <td className="p-3">VZDUCH</td>
                      <td className="p-3">10</td>
                      <td className="p-3">DO 130</td>
                      <td className="p-3">-</td>
                    </tr>
                    <tr className="border-b border-border/30 hover:bg-primary/5">
                      <td className="p-3">12. CHLAZENÍ</td>
                      <td className="p-3">VZDUCH</td>
                      <td className="p-3">10</td>
                      <td className="p-3">20</td>
                      <td className="p-3">-</td>
                    </tr>
                    <tr className="border-b border-border/30 hover:bg-primary/5">
                      <td className="p-3">13. LAKOVÁNÍ</td>
                      <td className="p-3">-</td>
                      <td className="p-3">-</td>
                      <td className="p-3">-</td>
                      <td className="p-3">-</td>
                    </tr>
                    <tr className="hover:bg-primary/5">
                      <td className="p-3">14. TVRZENÍ</td>
                      <td className="p-3">VZDUCH</td>
                      <td className="p-3">25</td>
                      <td className="p-3">DO 225</td>
                      <td className="p-3">-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>
          
          <TechnologyProcess />
        </div>
      </section>
      
      {/* Surfaces Section */}
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
      
      {/* Samples Section */}
      <section id="samples" className="bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <SectionHeader
            title="Ukázky povrchů a dílů"
            subtitle="Příklady našich realizací a možností povrchové úpravy"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <ScrollReveal>
              <div className="relative aspect-square rounded-xl overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1604932551573-1c420fb9fb8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80" 
                  alt="Ukázka 1" 
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="font-semibold">Kovové díly pro strojírenství</h3>
                    <p className="text-sm text-white/80">Matný povrch, RAL 5015</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={100}>
              <div className="relative aspect-square rounded-xl overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1562259929-b4e1fd0aae57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80" 
                  alt="Ukázka 2" 
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="font-semibold">Komponenty pro automobilový průmysl</h3>
                    <p className="text-sm text-white/80">Strukturovaný povrch, RAL 9005</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="relative aspect-square rounded-xl overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1600518665857-125cc59d5db7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80" 
                  alt="Ukázka 3" 
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="font-semibold">Zahradní nábytek</h3>
                    <p className="text-sm text-white/80">Antikorozní úprava, RAL 6005</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <div className="relative aspect-square rounded-xl overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1639058592993-1d27a163e35d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80" 
                  alt="Ukázka 4" 
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="font-semibold">Designové interiérové prvky</h3>
                    <p className="text-sm text-white/80">Metalický povrch, RAL 9006</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <div className="relative aspect-square rounded-xl overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1536566482680-fca31930a0bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80" 
                  alt="Ukázka 5" 
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="font-semibold">Konstrukce pro stavebnictví</h3>
                    <p className="text-sm text-white/80">Lesklý povrch, RAL 3020</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={500}>
              <div className="relative aspect-square rounded-xl overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80" 
                  alt="Ukázka 6" 
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="font-semibold">Elektrotechnické komponenty</h3>
                    <p className="text-sm text-white/80">Speciální povrch, RAL 7035</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* Facility Section */}
      <section id="facility" className="bg-secondary">
        <div className="container max-w-7xl mx-auto px-4">
          <SectionHeader
            title="Naše lakovna"
            subtitle="Moderní zařízení a technologie pro nejlepší výsledky"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <div className="bg-white p-6 rounded-xl shadow-sm h-full">
                <h3 className="text-xl font-semibold mb-4">Maximální rozměry lakovaných dílců</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <p className="font-medium">Délka</p>
                    <p className="text-2xl font-bold text-primary">3,500 mm</p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <p className="font-medium">Výška</p>
                    <p className="text-2xl font-bold text-primary">1,500 mm</p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <p className="font-medium">Šířka</p>
                    <p className="text-2xl font-bold text-primary">1,200 mm</p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <p className="font-medium">Váha</p>
                    <p className="text-2xl font-bold text-primary">110 kg/m</p>
                  </div>
                </div>
                
                <div className="p-4 bg-primary/10 rounded-lg text-center">
                  <p className="text-sm font-medium">Po telefonické domluvě je možno tyto parametry překročit</p>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Vybavení naší práškové lakovny</h3>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                        <Check size={14} />
                      </div>
                      <div>
                        <h4 className="font-medium">Automatická linka</h4>
                        <p className="text-sm text-muted-foreground">Pro efektivní zpracování velkých sérií výrobků</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                        <Check size={14} />
                      </div>
                      <div>
                        <h4 className="font-medium">Moderní lakovací kabina</h4>
                        <p className="text-sm text-muted-foreground">S účinným odsáváním a recyklací prášku</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                        <Check size={14} />
                      </div>
                      <div>
                        <h4 className="font-medium">Vypalovací pec</h4>
                        <p className="text-sm text-muted-foreground">S přesnou regulací teploty pro dokonalé vytvrzení</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                        <Check size={14} />
                      </div>
                      <div>
                        <h4 className="font-medium">Předúpravová linka</h4>
                        <p className="text-sm text-muted-foreground">Pro dokonalou přípravu povrchu před lakováním</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                        <Check size={14} />
                      </div>
                      <div>
                        <h4 className="font-medium">Kontrolní stanoviště</h4>
                        <p className="text-sm text-muted-foreground">Pro důkladnou kontrolu kvality každého výrobku</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="aspect-video rounded-xl overflow-hidden shadow-xl border border-border">
                <img 
                  src="https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80" 
                  alt="Naše lakovna" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="mt-6 grid grid-cols-2 gap-6">
                <div className="aspect-square rounded-xl overflow-hidden shadow-sm border border-border">
                  <img 
                    src="https://images.unsplash.com/photo-1511149755252-35875a99dfd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80" 
                    alt="Vybavení lakovny" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden shadow-sm border border-border">
                  <img 
                    src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80" 
                    alt="Lakovací proces" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* Quality Section */}
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
      
      {/* Solar Section */}
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
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80" 
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
      
      {/* Contact Section */}
      <section id="contact" className="bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <SectionHeader
            title="Kontaktujte nás"
            subtitle="Jsme připraveni odpovědět na vaše dotazy a pomoci vám s vaším projektem"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <div className="bg-secondary p-6 md:p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-6">Kontaktní informace</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Lakovna Fulnek</h4>
                      <p className="text-muted-foreground">Betrim s.r.o.</p>
                      <p className="text-muted-foreground">Masarykova 411</p>
                      <p className="text-muted-foreground">742 45 Fulnek</p>
                      <p className="text-muted-foreground mt-2">IČO: 25376837 | DIČ: CZ25376837</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Kontaktní osoby</h4>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                          <Phone size={18} />
                        </div>
                        <div>
                          <p className="font-medium">Jindřich Schich - Jednatel</p>
                          <p className="text-muted-foreground">+420 603 269 881</p>
                          <p className="text-muted-foreground">schich@betrim.cz</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                          <Phone size={18} />
                        </div>
                        <div>
                          <p className="font-medium">Ludmila Bordovská - Účetní</p>
                          <p className="text-muted-foreground">+420 732 203 404</p>
                          <p className="text-muted-foreground">ludmilabordovska@seznam.cz</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                          <Phone size={18} />
                        </div>
                        <div>
                          <p className="font-medium">Jarmila Zemanová - Sekretariát</p>
                          <p className="text-muted-foreground">+420 739 234 955</p>
                          <p className="text-muted-foreground">zemanova@betrim.cz</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                          <Phone size={18} />
                        </div>
                        <div>
                          <p className="font-medium">Vlastimil Fojtík - Vedoucí výroby</p>
                          <p className="text-muted-foreground">+420 604 818 247</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 mt-8">
                  <h4 className="font-semibold text-lg mb-4">Mapa</h4>
                  <div className="aspect-[4/3] rounded-xl overflow-hidden border border-border shadow-sm">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20581.569717398906!2d17.86658766211365!3d49.71277257076461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4713fa3dc5349f73%3A0x400af0f6614e880!2s742%2045%20Fulnek!5e0!3m2!1scs!2scz!4v1696425901234!5m2!1scs!2scz" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen={true} 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Mapa lakovny"
                    ></iframe>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
