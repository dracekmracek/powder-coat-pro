
import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';
import FeatureCard from '@/components/FeatureCard';
import ScrollReveal from '@/components/ScrollReveal';
import ContactForm from '@/components/ContactForm';
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            
            <FeatureCard
              title="Vypalování v peci"
              description="Vytvrzování laku probíhá v moderní vypalovací peci při teplotách 180-200°C pro dosažení optimálních vlastností."
              icon={<Zap size={24} />}
              delay={400}
            />
            
            <FeatureCard
              title="Kontrola kvality"
              description="Každý zpracovaný díl prochází pečlivou kontrolou kvality před předáním zákazníkovi."
              icon={<ShieldCheck size={24} />}
              delay={500}
            />
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
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 hidden md:block"></div>
            
            <div className="space-y-12">
              <ScrollReveal>
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right md:pr-12">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
                      Krok 1
                    </span>
                    <h3 className="text-xl font-semibold mb-2">Příjem zakázky a kontrola</h3>
                    <p className="text-muted-foreground">
                      Pečlivá kontrola vstupního materiálu, konzultace s klientem ohledně požadovaných parametrů.
                    </p>
                  </div>
                  
                  <div className="hidden md:block">
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white z-10">
                      <Check size={16} />
                    </div>
                    <div className="bg-white rounded-xl shadow-sm border border-border p-6 ml-8">
                      <img 
                        src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80" 
                        alt="Příjem zakázky" 
                        className="rounded-lg w-full h-48 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal>
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:order-2 md:pl-12">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
                      Krok 2
                    </span>
                    <h3 className="text-xl font-semibold mb-2">Chemická předúprava</h3>
                    <p className="text-muted-foreground">
                      Odmašťování, odrezování, fosfátování a další procesy pro dokonalou přípravu povrchu.
                    </p>
                  </div>
                  
                  <div className="md:order-1 hidden md:block">
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white z-10">
                      <Check size={16} />
                    </div>
                    <div className="bg-white rounded-xl shadow-sm border border-border p-6 mr-8">
                      <img 
                        src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80" 
                        alt="Chemická předúprava" 
                        className="rounded-lg w-full h-48 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal>
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right md:pr-12">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
                      Krok 3
                    </span>
                    <h3 className="text-xl font-semibold mb-2">Nanášení práškové barvy</h3>
                    <p className="text-muted-foreground">
                      Elektrostatické nanášení práškové barvy pomocí pneumatických pistolí ve speciální kabině.
                    </p>
                  </div>
                  
                  <div className="hidden md:block">
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white z-10">
                      <Check size={16} />
                    </div>
                    <div className="bg-white rounded-xl shadow-sm border border-border p-6 ml-8">
                      <img 
                        src="https://images.unsplash.com/photo-1549497538-303791108f95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80" 
                        alt="Nanášení barvy" 
                        className="rounded-lg w-full h-48 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal>
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:order-2 md:pl-12">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
                      Krok 4
                    </span>
                    <h3 className="text-xl font-semibold mb-2">Vytvrzování v peci</h3>
                    <p className="text-muted-foreground">
                      Vytvrzení nanesené práškové barvy při teplotách 180-200°C po dobu 10-20 minut.
                    </p>
                  </div>
                  
                  <div className="md:order-1 hidden md:block">
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white z-10">
                      <Check size={16} />
                    </div>
                    <div className="bg-white rounded-xl shadow-sm border border-border p-6 mr-8">
                      <img 
                        src="https://images.unsplash.com/photo-1606210122158-eeb10e0823bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80" 
                        alt="Vytvrzování" 
                        className="rounded-lg w-full h-48 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal>
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right md:pr-12">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
                      Krok 5
                    </span>
                    <h3 className="text-xl font-semibold mb-2">Kontrola kvality</h3>
                    <p className="text-muted-foreground">
                      Důkladná kontrola každého lakovaného dílu včetně měření tloušťky vrstvy a vizuální kontroly.
                    </p>
                  </div>
                  
                  <div className="hidden md:block">
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white z-10">
                      <Check size={16} />
                    </div>
                    <div className="bg-white rounded-xl shadow-sm border border-border p-6 ml-8">
                      <img 
                        src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80" 
                        alt="Kontrola kvality" 
                        className="rounded-lg w-full h-48 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
      
      {/* Surfaces Section */}
      <section id="surfaces" className="bg-secondary">
        <div className="container max-w-7xl mx-auto px-4">
          <SectionHeader
            title="Povrchová úprava"
            subtitle="Různé typy povrchových úprav pro různé účely a požadavky"
          />
          
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
            
            <ScrollReveal delay={300}>
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-border h-full">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1598546644893-2acb863e209d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80" 
                    alt="Metalický povrch" 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Metalický povrch</h3>
                  <p className="text-muted-foreground">Povrch s metalickým efektem, který dodává výrobkům luxusní vzhled.</p>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-border h-full">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1619588346535-854603d17b3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80" 
                    alt="Antikorozní povrch" 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Antikorozní povrch</h3>
                  <p className="text-muted-foreground">Speciální úprava pro maximální ochranu proti korozi v náročných podmínkách.</p>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={500}>
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-border h-full">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1636488123000-cadebcc92c70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80" 
                    alt="Speciální povrch" 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Speciální povrchy</h3>
                  <p className="text-muted-foreground">Na míru vytvořené povrchové úpravy podle specifických požadavků zákazníka.</p>
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
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="aspect-video rounded-xl overflow-hidden shadow-xl border border-border">
                <img 
                  src="https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80" 
                  alt="Naše lakovna" 
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <h3 className="text-2xl font-semibold mb-4">Vybavení naší práškové lakovny</h3>
              <p className="text-muted-foreground mb-6">
                Naše lakovna je vybavena moderními technologiemi pro práškové lakování, které umožňují dosahovat nejvyšší kvality povrchové úpravy.
              </p>
              
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
              <h3 className="text-2xl font-semibold mb-4">Naše zásady kvality</h3>
              <p className="text-muted-foreground mb-6">
                Naše firma si zakládá na dodržování nejvyšších standardů kvality ve všech fázích procesu lakování. Kvalitu považujeme za klíčový faktor našeho úspěchu.
              </p>
              
              <div className="space-y-6">
                <div className="bg-secondary p-6 rounded-xl">
                  <h4 className="font-semibold mb-2">Certifikace a standardy</h4>
                  <p className="text-sm text-muted-foreground">
                    Dodržujeme přísné normy a standardy pro práškové lakování. Naše procesy jsou certifikovány a pravidelně kontrolovány.
                  </p>
                </div>
                
                <div className="bg-secondary p-6 rounded-xl">
                  <h4 className="font-semibold mb-2">Kontrola kvality</h4>
                  <p className="text-sm text-muted-foreground">
                    Každý výrobek prochází důkladnou kontrolou kvality před odesláním zákazníkovi. Kontrolujeme tloušťku vrstvy, přilnavost, vzhled a další parametry.
                  </p>
                </div>
                
                <div className="bg-secondary p-6 rounded-xl">
                  <h4 className="font-semibold mb-2">Neustálé zlepšování</h4>
                  <p className="text-sm text-muted-foreground">
                    Pravidelně investujeme do nových technologií a vzdělávání našich zaměstnanců, abychom neustále zlepšovali kvalitu našich služeb.
                  </p>
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
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Adresa</h3>
                    <p className="text-muted-foreground">Průmyslová zóna 123, 742 45 Fulnek</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Telefon</h3>
                    <p className="text-muted-foreground">+420 555 123 456</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-muted-foreground">info@praskovaLakovna.cz</p>
                  </div>
                </div>
                
                <div className="pt-6 mt-8">
                  <h3 className="font-semibold text-xl mb-4">Mapa</h3>
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
