import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/powder-coat-pro/images/Logo_Betrim.png" 
                alt="Betrim" 
                className="h-10 w-auto mr-2" 
              />
              <h3 className="text-xl font-bold">Betrim</h3>
            </div>
            <p className="mb-6 text-primary-foreground/90">
              Prášková lakovna ve Fulneku s tradicí od roku 1997. Poskytujeme kvalitní služby v oblasti práškového lakování a povrchových úprav.
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
                <span>+420 603 269 881</span>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="mr-3 mt-1 flex-shrink-0" />
                <span>schich@betrim.cz</span>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 flex-shrink-0" />
                <span>Masarykova 411, 742 45 Fulnek</span>
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
          <p>© {currentYear} Betrim s.r.o. | IČO: 25376837 | DIČ: CZ25376837 | Všechna práva vyhrazena</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
