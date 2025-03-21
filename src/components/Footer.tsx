
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Prášková Lakovna</h3>
            <p className="mb-6 text-primary-foreground/90">
              První zakázková lakovna ve Fulneku s činností od roku 1997. Kvalitní služby v oblasti práškového lakování.
            </p>
            <div className="flex space-x-4">
              {/* Social links could go here */}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Rychlý kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={20} className="mr-3 mt-1 flex-shrink-0" />
                <span>+420 555 123 456</span>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="mr-3 mt-1 flex-shrink-0" />
                <span>info@praskovaLakovna.cz</span>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 flex-shrink-0" />
                <span>Průmyslová zóna 123, 742 45 Fulnek</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Provozní doba</h3>
            <ul className="space-y-1">
              <li className="flex justify-between">
                <span>Pondělí - Pátek</span>
                <span>7:00 - 15:30</span>
              </li>
              <li className="flex justify-between">
                <span>Sobota - Neděle</span>
                <span>Zavřeno</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/70">
          <p>© {currentYear} Prášková Lakovna Fulnek. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
