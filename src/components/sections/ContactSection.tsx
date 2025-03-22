import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeader from '@/components/SectionHeader';
import ContactForm from '@/components/ContactForm';
import { MapPin, Phone, Mail, User, Briefcase, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SprayEffect from '@/components/ui/SprayEffect';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader 
          title="Kontakt" 
          subtitle="Rádi zodpovíme vaše dotazy a připravíme cenovou nabídku na míru"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <ScrollReveal>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-border h-full">
              <h3 className="text-xl font-semibold mb-4">Kontaktní informace</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mr-3">
                    <MapPin size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Betrim s.r.o.</h4>
                    <p className="text-muted-foreground">Masarykova 411</p>
                    <p className="text-muted-foreground">742 45 Fulnek</p>
                    <div className="mt-2 bg-primary/5 px-3 py-2 rounded-md inline-block">
                      <p className="text-sm text-muted-foreground">IČO: <span className="font-medium text-foreground">25376837</span></p>
                      <p className="text-sm text-muted-foreground">DIČ: <span className="font-medium text-foreground">CZ25376837</span></p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-5 relative inline-block">
                    Kontaktní osoby
                    <motion.span 
                      className="absolute -bottom-1 left-0 h-0.5 bg-primary/50"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    />
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        name: "Jindřich Schich",
                        position: "Jednatel",
                        phone: "+420 603 269 881",
                        email: "schich@betrim.cz",
                        delay: 0.1
                      },
                      {
                        name: "Ludmila Bordovská",
                        position: "Účetní",
                        phone: "+420 732 203 404",
                        email: "ludmilabordovska@seznam.cz",
                        delay: 0.2
                      },
                      {
                        name: "Jarmila Zemanová",
                        position: "Sekretariát",
                        phone: "+420 739 234 955",
                        email: "zemanova@betrim.cz",
                        delay: 0.3
                      },
                      {
                        name: "Vlastimil Fojtík",
                        position: "Vedoucí výroby",
                        phone: "+420 604 818 247",
                        delay: 0.4
                      }
                    ].map((person, index) => (
                      <motion.div 
                        key={index}
                        className="bg-white rounded-lg p-4 border border-border/50 shadow-sm hover:shadow-md transition-shadow"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: person.delay }}
                        whileHover={{ y: -5, backgroundColor: 'rgba(14, 165, 233, 0.05)' }}
                      >
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 flex-shrink-0">
                            <User size={16} />
                          </div>
                          <div>
                            <p className="font-semibold">{person.name}</p>
                            <div className="flex items-center text-xs text-muted-foreground">
                              <Briefcase size={12} className="mr-1" />
                              <span>{person.position}</span>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2 pl-11">
                          <a 
                            href={`tel:${person.phone.replace(/\s/g, '')}`} 
                            className="flex items-center text-sm hover:text-primary transition-colors group"
                          >
                            <Phone size={14} className="mr-2" />
                            <span>{person.phone}</span>
                            <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </a>
                          {person.email && (
                            <a 
                              href={`mailto:${person.email}`} 
                              className="flex items-center text-sm hover:text-primary transition-colors group"
                            >
                              <Mail size={14} className="mr-2" />
                              <span>{person.email}</span>
                              <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="pt-8 mt-8 border-t border-border/50">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <h4 className="font-semibold text-lg mb-4">Kde nás najdete</h4>
                  <div className="aspect-[16/9] rounded-xl overflow-hidden border border-border shadow-sm">
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
                </motion.div>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <motion.div
              className="bg-white rounded-xl border border-border shadow-sm overflow-hidden relative"
              whileHover={{ boxShadow: '0 10px 25px -5px rgba(14, 165, 233, 0.2), 0 8px 10px -6px rgba(14, 165, 233, 0.15)' }}
              transition={{ duration: 0.3 }}
            >
              {/* Dekorativní prvek */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50" />
              
              <ContactForm />
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
