
import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeader from '@/components/SectionHeader';
import ContactForm from '@/components/ContactForm';
import { MapPin, Phone } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
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
  );
};

export default ContactSection;
