import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeader from '@/components/SectionHeader';
import CoatingTexture from '@/components/ui/CoatingTexture';
import ColorSwatch from '@/components/ui/ColorSwatch';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SurfacesSection: React.FC = () => {
  return (
    <section id="surfaces" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-muted/20 z-0" />
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5 z-0" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title="Povrchová úprava"
          subtitle="Specializujeme se na vysoce kvalitní práškové lakování s profesionální předúpravou povrchu"
          accent={true}
        />
        
        {/* Main service cards with subtle hover effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
          <ScrollReveal>
            <Card className="group border-border/40 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
              <div className="absolute right-0 top-0 w-24 h-24 bg-primary/5 rounded-bl-full z-0 transition-all duration-300 group-hover:scale-150 group-hover:opacity-20" />
              
              <CardHeader className="relative z-10">
                <CardTitle className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                  SLUŽBY POVRCHOVÝCH ÚPRAV
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <p className="text-muted-foreground mb-6">
                  Provádíme kvalitní nástřik práškovými barvami i pro tvarově složité díly v rámci automatizovaného provozu.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-foreground/90 flex items-center mb-3">
                      <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2"></span>
                      Předúpravy:
                    </h4>
                    <p className="text-muted-foreground ml-4 pl-2 border-l-2 border-primary/20">
                      Chemické odmaštění, zinečnatý fosfát
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-foreground/90 flex items-center mb-3">
                      <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2"></span>
                      Barevné možnosti:
                    </h4>
                    <ul className="list-none space-y-2 text-muted-foreground ml-4 pl-2 border-l-2 border-primary/20">
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary/70 mr-2 mt-1.5"></span>
                        Hladké, jemné nebo hrubé struktury
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary/70 mr-2 mt-1.5"></span>
                        Lesklé, pololesklé, matné provedení
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary/70 mr-2 mt-1.5"></span>
                        Kompletní vzorník RAL
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary/70 mr-2 mt-1.5"></span>
                        Vhodné pro interiér i exteriér
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary/70 mr-2 mt-1.5"></span>
                        Balení a doprava hotových dílů
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <Card className="group border-border/40 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
              <div className="absolute right-0 top-0 w-24 h-24 bg-primary/5 rounded-bl-full z-0 transition-all duration-300 group-hover:scale-150 group-hover:opacity-20" />
              
              <CardHeader className="relative z-10">
                <CardTitle className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                  TRYSKACÍ ZAŘÍZENÍ
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <p className="text-muted-foreground mb-6">
                  Využíváme kvalitní tryskací zařízení s ocelovým a nerezovým granulátem pro dokonalou předúpravu (TZNZ 4, MODIFIKACE: TZNZ 4-11/20-23).
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <motion.div 
                    className="p-4 rounded-lg bg-gradient-to-br from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/20 transition-colors duration-300"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <p className="font-medium text-sm text-muted-foreground">Průměr obrobku</p>
                    <p className="text-2xl font-bold text-primary">2,000 mm</p>
                  </motion.div>
                  <motion.div 
                    className="p-4 rounded-lg bg-gradient-to-br from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/20 transition-colors duration-300"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                  >
                    <p className="font-medium text-sm text-muted-foreground">Výška obrobku</p>
                    <p className="text-2xl font-bold text-primary">2,300 mm</p>
                  </motion.div>
                  <motion.div 
                    className="p-4 rounded-lg bg-gradient-to-br from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/20 transition-colors duration-300"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                  >
                    <p className="font-medium text-sm text-muted-foreground">Nosnost závěsu</p>
                    <p className="text-2xl font-bold text-primary">1,000 kg</p>
                  </motion.div>
                </div>
                
                <div>
                  <h4 className="font-medium text-foreground/90 flex items-center mb-3">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2"></span>
                    Typické aplikace:
                  </h4>
                  <ul className="list-none space-y-2 text-muted-foreground ml-4 pl-2 border-l-2 border-primary/20">
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary/70 mr-2 mt-1.5"></span>
                      Tryskání ocelových dílů na stupeň Sa2,5
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary/70 mr-2 mt-1.5"></span>
                      Tryskání nerezových a hliníkových dílů balotinou
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary/70 mr-2 mt-1.5"></span>
                      Možnost volby mezi zinečnatým a železitým fosfátem
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
        
        {/* Finish type showcase with interactive coating textures */}
        <div className="mt-16">
          <ScrollReveal>
            <h3 className="text-2xl font-semibold text-center mb-8">Ukázky typů povrchů</h3>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <ScrollReveal delay={100}>
              <div className="flex flex-col items-center">
                <CoatingTexture variant="matte" color="#374151" size="lg" />
                <h4 className="mt-4 font-medium text-lg">Matný povrch</h4>
                <p className="text-sm text-muted-foreground text-center mt-1">
                  Elegantní matné provedení s nízkou odrazivostí, ideální pro moderní design.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="flex flex-col items-center">
                <CoatingTexture variant="glossy" color="#1f77b4" size="lg" />
                <h4 className="mt-4 font-medium text-lg">Lesklý povrch</h4>
                <p className="text-sm text-muted-foreground text-center mt-1">
                  Vysoce lesklé provedení s dokonalou odrazivostí pro reprezentativní vzhled.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <div className="flex flex-col items-center">
                <CoatingTexture variant="textured" color="#2c7a4e" size="lg" />
                <h4 className="mt-4 font-medium text-lg">Strukturovaný povrch</h4>
                <p className="text-sm text-muted-foreground text-center mt-1">
                  Povrch s reliéfní strukturou pro zvýšenou odolnost a skrytí drobných vad.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <div className="flex flex-col items-center">
                <CoatingTexture variant="metallic" color="#8a6642" size="lg" />
                <h4 className="mt-4 font-medium text-lg">Metalický povrch</h4>
                <p className="text-sm text-muted-foreground text-center mt-1">
                  Efektní metalický povrch s vysokou kvalitou a luxusním vzhledem.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
        
        {/* Color samples */}
        <div className="mt-16">
          <ScrollReveal>
            <h3 className="text-2xl font-semibold text-center mb-8">Vzorník často používaných barevných odstínů</h3>
          </ScrollReveal>
          
          <div className="flex flex-wrap justify-center gap-6">
            <ScrollReveal delay={100}>
              <ColorSwatch colorName="RAL 9005" colorCode="Černá" colorHex="#0f0f0f" />
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <ColorSwatch colorName="RAL 9003" colorCode="Bílá" colorHex="#f9f9f9" />
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <ColorSwatch colorName="RAL 3001" colorCode="Červená" colorHex="#a52019" />
            </ScrollReveal>
            <ScrollReveal delay={250}>
              <ColorSwatch colorName="RAL 5015" colorCode="Modrá" colorHex="#2271b3" />
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <ColorSwatch colorName="RAL 6005" colorCode="Zelená" colorHex="#2f4538" />
            </ScrollReveal>
            <ScrollReveal delay={350}>
              <ColorSwatch colorName="RAL 9006" colorCode="Stříbrná" colorHex="#a5a5a5" texture="metallic" />
            </ScrollReveal>
          </div>
        </div>
      </div>
      
      {/* Parallax background elements */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl z-0" />
    </section>
  );
};

export default SurfacesSection;
