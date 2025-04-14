import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../SectionHeader';
import ScrollReveal from '../ScrollReveal';
import ColorSwatch from '../ui/ColorSwatch';
import SprayEffect from '@/components/ui/SprayEffect';
import { ChevronLeftIcon, ChevronRightIcon, ZoomInIcon, XIcon } from 'lucide-react';

const SamplesSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [currentColorPalette, setCurrentColorPalette] = useState<'standard' | 'metallic' | 'structured'>('standard');
  
  // Vzorové barvy pro různé typy povrchů
  const colorPalettes = {
    standard: [
      { name: 'Signální bílá', code: 'RAL 9003', hex: '#F4F4F4', texture: 'glossy' as const },
      { name: 'Modrá', code: 'RAL 5010', hex: '#0E294B', texture: 'glossy' as const },
      { name: 'Červená', code: 'RAL 3020', hex: '#CC0605', texture: 'glossy' as const },
      { name: 'Antracitová', code: 'RAL 7016', hex: '#293133', texture: 'glossy' as const },
      { name: 'Žlutá', code: 'RAL 1023', hex: '#FAD201', texture: 'glossy' as const },
      { name: 'Zelená', code: 'RAL 6005', hex: '#0A2F23', texture: 'glossy' as const },
    ],
    metallic: [
      { name: 'Stříbrná', code: 'RAL 9006', hex: '#A5A5A5', texture: 'metallic' as const },
      { name: 'Tmavá perleť', code: 'DB 703', hex: '#444A4F', texture: 'metallic' as const },
      { name: 'Zlatá', code: 'RAL 1036', hex: '#705335', texture: 'metallic' as const },
      { name: 'Modrá metalíza', code: 'Speciál', hex: '#2D5B89', texture: 'metallic' as const },
      { name: 'Champagne', code: 'Speciál', hex: '#DCBA83', texture: 'metallic' as const },
      { name: 'Bronzová', code: 'Speciál', hex: '#6E4A35', texture: 'metallic' as const },
    ],
    structured: [
      { name: 'Černá struktura', code: 'RAL 9005', hex: '#0A0A0A', texture: 'structured' as const },
      { name: 'Šedá struktura', code: 'RAL 7035', hex: '#CBD0CC', texture: 'structured' as const },
      { name: 'Modrá struktura', code: 'RAL 5003', hex: '#1D1E33', texture: 'structured' as const },
      { name: 'Zelená struktura', code: 'RAL 6005', hex: '#0A2F23', texture: 'structured' as const },
      { name: 'Červená struktura', code: 'RAL 3003', hex: '#8D1D2C', texture: 'structured' as const },
      { name: 'Bílá struktura', code: 'RAL 9016', hex: '#F6F6F4', texture: 'structured' as const },
    ],
  };
  
  // Vzorové obrázky lakovaných dílů
  const samples = [
    {
      id: 1,
      category: 'automotive',
      name: 'Automobilové díly',
      src: '/images/samples/automotive-parts.jpg',
      finish: 'metallic',
      description: 'Precizní povrchová úprava pro automobilový průmysl',
    },
    {
      id: 2,
      category: 'furniture',
      name: 'Nábytkové komponenty',
      src: '/images/samples/furniture.jpg',
      finish: 'matte',
      description: 'Odolné a estetické řešení pro nábytkový průmysl',
    },
    {
      id: 3,
      category: 'industrial',
      name: 'Průmyslové komponenty',
      src: '/images/samples/industrial-parts.jpg',
      finish: 'structured',
      description: 'Ochrana a funkčnost pro průmyslové aplikace',
    },
    {
      id: 4,
      category: 'architecture',
      name: 'Architektonické prvky',
      src: '/images/samples/architectural.jpg',
      finish: 'metallic',
      description: 'Venkovní aplikace s vysokou odolností',
    },
    {
      id: 5,
      category: 'automotive',
      name: 'Motocyklové díly',
      src: '/images/samples/motorcycle-parts.jpg',
      finish: 'glossy',
      description: 'Kvalitní povrchy pro motocyklový průmysl',
    },
    {
      id: 6,
      category: 'industrial',
      name: 'Elektronické kryty',
      src: '/images/samples/electronic-enclosures.jpg',
      finish: 'matte',
      description: 'Přesná povrchová úprava pro elektronická zařízení',
    },
  ];
  
  // Filtrované vzorky na základě aktivního filtru
  const filteredSamples = activeFilter === 'all' 
    ? samples 
    : samples.filter(sample => sample.category === activeFilter);
  
  // Otevření modalního okna s detailem obrázku
  const openImageDetail = (src: string) => {
    setActiveImage(src);
    document.body.style.overflow = 'hidden'; // Zakázat scrollování na pozadí
  };
  
  // Zavření modalního okna
  const closeImageDetail = () => {
    setActiveImage(null);
    document.body.style.overflow = 'auto'; // Obnovit scrollování
  };
  
  return (
    <section id="samples" className="py-16 md:py-24 bg-secondary/20 relative">
      {/* Dekorativní prvky */}
      <SprayEffect position="left" intensity="light" color="#0ea5e9" size="md" />
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <SectionHeader 
            title="Ukázky povrchů a dílů" 
            subtitle="Nabízíme širokou škálu barev a povrchových úprav pro různé aplikace"
          />
        </ScrollReveal>
        
        {/* Přepínač barevných palet */}
        <ScrollReveal delay={100}>
          <div className="flex justify-center mb-12">
            <div className="bg-white p-1 rounded-lg shadow-sm flex">
              {(['standard', 'metallic', 'structured'] as const).map((palette) => (
                <motion.button
                  key={palette}
                  className={`px-4 py-2 rounded-md relative ${currentColorPalette === palette ? 'text-white' : 'text-foreground hover:text-primary'}`}
                  onClick={() => setCurrentColorPalette(palette)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {currentColorPalette === palette && (
                    <motion.div
                      className="absolute inset-0 bg-primary rounded-md"
                      layoutId="paletteHighlight"
                      initial={false}
                      transition={{ type: 'spring', duration: 0.3 }}
                    />
                  )}
                  <span className="relative z-10 capitalize">
                    {palette === 'standard' ? 'Standardní' : palette === 'metallic' ? 'Metalické' : 'Strukturované'}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </ScrollReveal>
        
        {/* Barevné swatch palety */}
        <ScrollReveal delay={200}>
          <div className="mb-16">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentColorPalette}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 justify-center"
              >
                {colorPalettes[currentColorPalette].map((color, index) => (
                  <ScrollReveal key={`${color.code}-${index}`} delay={100 + index * 50}>
                    <ColorSwatch
                      colorName={color.name}
                      colorCode={color.code}
                      colorHex={color.hex}
                      texture={color.texture}
                      size="md"
                    />
                  </ScrollReveal>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </ScrollReveal>
        
        {/* Kategorie filtrů */}
        <ScrollReveal delay={300}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {['all', 'automotive', 'furniture', 'industrial', 'architecture'].map((filter) => (
              <motion.button
                key={filter}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeFilter === filter 
                    ? 'bg-primary text-white shadow-md shadow-primary/20' 
                    : 'bg-white text-foreground hover:bg-muted/50'
                }`}
                onClick={() => setActiveFilter(filter)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter === 'all' ? 'Všechny' : 
                  filter === 'automotive' ? 'Automobilové' : 
                  filter === 'furniture' ? 'Nábytek' : 
                  filter === 'industrial' ? 'Průmyslové' : 'Architektura'}
              </motion.button>
            ))}
          </div>
        </ScrollReveal>
        
        {/* Galerie vzorků */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredSamples.map((sample) => (
              <ScrollReveal key={sample.id} delay={100 * sample.id}>
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative aspect-video overflow-hidden group">
                    <img 
                      src={sample.src} 
                      alt={sample.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 w-full">
                        <div className="flex justify-between items-center">
                          <p className="text-white font-medium">{sample.name}</p>
                          <motion.button
                            className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm text-white"
                            whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => openImageDetail(sample.src)}
                          >
                            <ZoomInIcon size={16} />
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`w-3 h-3 rounded-full ${
                        sample.finish === 'glossy' ? 'bg-blue-500' :
                        sample.finish === 'matte' ? 'bg-slate-500' :
                        sample.finish === 'metallic' ? 'bg-amber-500' : 'bg-emerald-500'
                      }`} />
                      <span className="text-sm font-medium capitalize">{sample.finish}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{sample.description}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </AnimatePresence>
        </div>
      </div>
      
      {/* Modalní okno s detailem obrázku */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
            onClick={closeImageDetail}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full bg-transparent rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={activeImage} alt="Detail" className="w-full h-auto rounded-xl" />
              
              <motion.button
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white"
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
                whileTap={{ scale: 0.9 }}
                onClick={closeImageDetail}
              >
                <XIcon size={20} />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SamplesSection;
