import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Mail, Send } from 'lucide-react';
import { toast } from 'sonner';

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');
  
  useEffect(() => {
    // Nastavit URL pouze na klientské straně
    setCurrentUrl(window.location.href);
  }, []);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Pro FormSubmit necháváme původní chování formuláře
    // Pouze přidáváme UI feedback
    setIsSubmitting(true);
    
    // Zobrazit UI feedback 
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  };
  
  if (isSubmitted) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-8 border border-border">
        <div className="text-center py-8">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Děkujeme za zprávu!</h3>
          <p className="text-muted-foreground">Vaše zpráva byla úspěšně odeslána. Ozveme se vám co nejdříve.</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-8 border border-border">
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
          <Mail size={20} />
        </div>
        <h3 className="text-xl font-semibold">Napište nám</h3>
      </div>
      
      <form 
        action="https://formsubmit.co/info@webseidon.cz" 
        method="POST" 
        onSubmit={handleSubmit}
      >
        {/* FormSubmit skrytá pole - pouze základní */}
        <input type="hidden" name="_subject" value="Nová zpráva z webu Betrim Formuláře" />
        <input type="hidden" name="_next" value={currentUrl} />
        <input type="hidden" name="_captcha" value="false" />
        <input type="text" name="_honey" style={{ display: 'none' }} />
        <input type="hidden" name="_template" value="table" />
        
        {/* Překlad a úprava nadpisu */}
        <input type="hidden" name="_title" value="Betrim - Kontaktni formular" />
        
        {/* Přeložené popisky */}
        <input type="hidden" name="form-name" value="Betrim" />
        <input type="hidden" name="_formsubmit_id" value="Kontaktni formular Betrim" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Jméno
            </label>
            <input
              type="text"
              id="name"
              name="Jmeno"
              required
              className={cn(
                "w-full px-4 py-2.5 rounded-md border border-input",
                "focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary",
                "transition-colors"
              )}
              placeholder="Vaše jméno"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="Email"
              required
              className={cn(
                "w-full px-4 py-2.5 rounded-md border border-input",
                "focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary",
                "transition-colors"
              )}
              placeholder="vas@email.cz"
            />
          </div>
        </div>
        
        <div className="mb-5">
          <label htmlFor="phone" className="block text-sm font-medium mb-1">
            Telefon
          </label>
          <input
            type="tel"
            id="phone"
            name="Telefon"
            className={cn(
              "w-full px-4 py-2.5 rounded-md border border-input",
              "focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary",
              "transition-colors"
            )}
            placeholder="+420 123 456 789"
          />
        </div>
        
        <div className="mb-5">
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Zpráva
          </label>
          <textarea
            id="message"
            name="Zprava"
            required
            rows={4}
            className={cn(
              "w-full px-4 py-2.5 rounded-md border border-input",
              "focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary",
              "transition-colors"
            )}
            placeholder="Jak vám můžeme pomoci?"
          />
        </div>
        
        {/* Přidáno pole pro typ zprávy */}
        <input type="hidden" name="Typ_zpravy" value="Webovy formular" />
        <input type="hidden" name="Odeslano_z" value="Betrim.cz" />
        
        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "w-full flex items-center justify-center bg-primary text-white py-3 px-6 rounded-md",
            "hover:bg-primary/90 transition-colors font-medium",
            isSubmitting && "opacity-70 cursor-not-allowed"
          )}
        >
          {isSubmitting ? (
            "Odesílání..."
          ) : (
            <>
              <Send size={18} className="mr-2" />
              Odeslat zprávu
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
