
import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeader from '@/components/SectionHeader';

const SamplesSection: React.FC = () => {
  return (
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
  );
};

export default SamplesSection;
