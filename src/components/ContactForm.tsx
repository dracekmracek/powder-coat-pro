
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Mail, Send } from 'lucide-react';
import { toast } from 'sonner';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Zpráva byla úspěšně odeslána! Budeme vás kontaktovat.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-8 border border-border">
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
          <Mail size={20} />
        </div>
        <h3 className="text-xl font-semibold">Napište nám</h3>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Jméno
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
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
              name="email"
              value={formData.email}
              onChange={handleChange}
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
            name="phone"
            value={formData.phone}
            onChange={handleChange}
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
            name="message"
            value={formData.message}
            onChange={handleChange}
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
