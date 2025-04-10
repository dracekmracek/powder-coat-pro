import React from 'react';
import { Mail, Phone, MapPin, Clock, ExternalLink, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const contactInfo = [
    { icon: <Phone size={18} />, text: '+420 603 269 881', href: 'tel:+420603269881' },
    { icon: <Mail size={18} />, text: 'schich@betrim.cz', href: 'mailto:schich@betrim.cz' },
    { icon: <MapPin size={18} />, text: 'Masarykova 411, 742 45 Fulnek', href: 'https://maps.google.com/?q=Masarykova+411,+742+45+Fulnek' },
  ];
  
  const hours = [
    { days: 'Pondělí - Pátek', hours: '7:00 - 15:30' },
    { days: 'Sobota - Neděle', hours: 'Zavřeno' },
  ];
  
  return (
    <footer className="relative overflow-hidden">
      {/* Dekorační prvky pozadí */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary-dark/80 to-black z-0"></div>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="absolute top-0 inset-x-0 h-64 bg-[radial-gradient(circle_at_center,_var(--primary-dark)_0%,_transparent_70%)] opacity-50"></div>
      <div className="absolute -left-20 -top-20 w-64 h-64 rounded-full bg-primary-light/10 blur-3xl"></div>
      <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-primary-light/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Logo a info o společnosti */}
          <div className="md:col-span-5">
            <motion.div 
              className="mb-6 flex items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white p-2 rounded-xl mr-4 shadow-lg">
                <img 
                  src="/powder-coat-pro/images/Logo_Betrim.png" 
                  alt="Betrim" 
                  className="h-12 w-auto" 
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Betrim</h3>
                <p className="text-primary-foreground/70 text-sm">Specialista na práškové lakování</p>
              </div>
            </motion.div>
            
            <motion.p 
              className="mb-8 text-primary-foreground/90 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Prášková lakovna ve Fulneku s tradicí od roku 1997. Poskytujeme kvalitní služby v oblasti práškového lakování a povrchových úprav.
            </motion.p>
          </div>
          
          {/* Rychlý kontakt */}
          <div className="md:col-span-4">
            <motion.h3 
              className="text-xl font-bold mb-6 text-white inline-flex items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="mr-2">Rychlý kontakt</span>
              <div className="h-1 w-8 bg-primary-light/50 rounded-full"></div>
            </motion.h3>
            
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.li 
                  key={index}
                  className="group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <a 
                    href={item.href} 
                    className="flex items-start group-hover:text-primary-light transition-colors duration-200"
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-primary-light/20 group-hover:bg-primary-light/30 flex items-center justify-center mr-3 text-white">
                      {item.icon}
                    </div>
                    <span className="mt-1.5 text-white group-hover:text-primary-light transition-colors duration-200">{item.text}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
            
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a 
                href="#contact" 
                className="inline-flex items-center text-white hover:text-primary-light group"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('contact');
                  if (element) {
                    window.scrollTo({
                      top: element.offsetTop - 80,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                <span>Přejít na kontaktní formulář</span>
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </motion.div>
          </div>
          
          {/* Provozní doba a další informace */}
          <div className="md:col-span-3">
            <motion.h3 
              className="text-xl font-bold mb-6 text-white inline-flex items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="mr-2">Provozní doba</span>
              <div className="h-1 w-8 bg-primary-light/50 rounded-full"></div>
            </motion.h3>
            
            <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-white/10 mb-6">
              <div className="flex items-center text-primary-foreground/90 mb-3">
                <Clock size={18} className="mr-2" />
                <span className="text-sm font-medium">Otevírací hodiny</span>
              </div>
              
              <ul className="space-y-2">
                {hours.map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex justify-between text-sm border-b border-white/5 pb-2 last:border-0 last:pb-0"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                  >
                    <span className="text-primary-foreground/70">{item.days}</span>
                    <span className="font-medium text-white">{item.hours}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {/* Odkaz na mapu byl odstraněn */}
            </motion.div>
          </div>
        </div>
        
        {/* Copyright a další odkazy */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center text-primary-foreground/70 text-sm">
          <motion.p 
            className="mb-4 md:mb-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            © {currentYear} Betrim s.r.o. | IČO: 25376837 | DIČ: CZ25376837 | Všechna práva vyhrazena
          </motion.p>
          
          <motion.div 
            className="flex space-x-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <a href="/powder-coat-pro/privacy" className="hover:text-white transition-colors duration-200">Ochrana osobních údajů</a>
            <a href="/powder-coat-pro/terms" className="hover:text-white transition-colors duration-200">Podmínky použití</a>
            <a href="/powder-coat-pro/cookies" className="hover:text-white transition-colors duration-200">Zásady cookies</a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
