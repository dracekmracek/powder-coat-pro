
import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeader from '@/components/SectionHeader';
import TechnologyProcess from '@/components/TechnologyProcess';

const ProcessSection: React.FC = () => {
  return (
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
  );
};

export default ProcessSection;
