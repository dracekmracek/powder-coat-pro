import React, { useState, useEffect } from 'react';
import { X, Info, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

type CookieCategory = {
  id: string;
  name: string;
  description: string;
  required: boolean;
};

type CookieSettings = {
  necessary: boolean;
  preferences: boolean;
  analytics: boolean;
  marketing: boolean;
  accepted: boolean;
};

const CookieConsent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [cookieSettings, setCookieSettings] = useState<CookieSettings>({
    necessary: true, // Nezbytné cookies jsou vždy povoleny
    preferences: false,
    analytics: false,
    marketing: false,
    accepted: false,
  });

  const cookieCategories: CookieCategory[] = [
    {
      id: 'necessary',
      name: 'Nezbytné',
      description: 'Tyto cookies jsou nezbytné pro fungování webových stránek a nelze je vypnout.',
      required: true,
    },
    {
      id: 'preferences',
      name: 'Preferenční',
      description: 'Tyto cookies umožňují personalizaci vašeho zážitku na našich stránkách.',
      required: false,
    },
    {
      id: 'analytics',
      name: 'Analytické',
      description: 'Pomáhají nám pochopit, jak návštěvníci používají naše stránky, což nám umožňuje je vylepšovat.',
      required: false,
    },
    {
      id: 'marketing',
      name: 'Marketingové',
      description: 'Používají se k zobrazování relevantních reklam a marketingových sdělení.',
      required: false,
    },
  ];

  useEffect(() => {
    // Kontrola, zda jsou cookies nastaveny
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsOpen(true);
    } else {
      try {
        const savedSettings = JSON.parse(cookieConsent);
        setCookieSettings(savedSettings);
      } catch (e) {
        setIsOpen(true);
      }
    }
  }, []);

  const saveConsent = (settings: CookieSettings) => {
    localStorage.setItem('cookieConsent', JSON.stringify({ ...settings, accepted: true }));
    setIsOpen(false);
    setCookieSettings({ ...settings, accepted: true });
  };

  const handleAcceptAll = () => {
    saveConsent({
      necessary: true,
      preferences: true,
      analytics: true,
      marketing: true,
      accepted: true,
    });
    
    // Zde byste spustili např. analytické skripty
    if (typeof window !== 'undefined') {
      // Aktivovat Google Analytics a další služby
      console.log('Všechny cookies aktivovány');
    }
  };

  const handleRejectAll = () => {
    saveConsent({
      necessary: true, // Nezbytné jsou vždy povoleny
      preferences: false,
      analytics: false,
      marketing: false,
      accepted: true,
    });
  };

  const handleSavePreferences = () => {
    saveConsent(cookieSettings);
    
    // Aktivace/deaktivace služeb podle nastavení
    if (cookieSettings.analytics) {
      // Aktivovat analytické služby
      console.log('Analytické cookies aktivovány');
    }
    
    if (cookieSettings.marketing) {
      // Aktivovat marketingové služby
      console.log('Marketingové cookies aktivovány');
    }
  };

  const handleCategoryChange = (categoryId: string, value: boolean) => {
    setCookieSettings((prev) => ({
      ...prev,
      [categoryId]: value,
    }));
  };

  const openCookieSettings = () => {
    setIsOpen(true);
    setShowDetails(true);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-md"
          >
            <div className="container mx-auto px-4 py-4">
              {!showDetails ? (
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-sm text-gray-700 mb-1">
                      Tato webová stránka používá cookies, abychom vám poskytli co nejlepší uživatelský zážitek. Podle nařízení EU potřebujeme váš souhlas s používáním cookies.
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                      <Link to="/cookies" className="hover:underline flex items-center">
                        <Info size={12} className="mr-1" />
                        <span>Zásady cookies</span>
                      </Link>
                      <Link to="/privacy" className="hover:underline flex items-center">
                        <ExternalLink size={12} className="mr-1" />
                        <span>Ochrana osobních údajů</span>
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                    <button
                      onClick={() => setShowDetails(true)}
                      className="px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                    >
                      Nastavení
                    </button>
                    <button
                      onClick={handleRejectAll}
                      className="px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                    >
                      Odmítnout vše
                    </button>
                    <button
                      onClick={handleAcceptAll}
                      className="px-3 py-1.5 text-xs font-medium text-white bg-primary hover:bg-primary/90 rounded-md transition-colors"
                    >
                      Přijmout vše
                    </button>
                  </div>
                </div>
              ) : (
                <div className="relative">
                  <button
                    onClick={() => setShowDetails(false)}
                    className="absolute top-0 right-0 p-1 text-gray-500 hover:text-gray-700"
                  >
                    <X size={16} />
                  </button>
                  
                  <div className="mb-4 pb-3 border-b border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Nastavení cookies</h3>
                    <p className="text-sm text-gray-600">
                      Zde můžete upravit své preference ohledně cookies. Nezbytné cookies jsou nutné pro správné fungování webu a nelze je vypnout.
                    </p>
                  </div>
                  
                  <div className="space-y-4 mb-4">
                    {cookieCategories.map((category) => (
                      <div key={category.id} className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center">
                            <h4 className="text-sm font-medium text-gray-700">{category.name}</h4>
                            {category.required && (
                              <span className="ml-2 px-1.5 py-0.5 text-xs bg-gray-100 text-gray-500 rounded-sm">
                                Vyžadováno
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-gray-500 mt-1">{category.description}</p>
                        </div>
                        <div className="ml-4">
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={
                                category.id === 'necessary'
                                  ? true
                                  : cookieSettings[category.id as keyof CookieSettings]
                              }
                              onChange={(e) =>
                                !category.required && handleCategoryChange(category.id, e.target.checked)
                              }
                              disabled={category.required}
                              className="sr-only peer"
                            />
                            <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-end gap-2 pt-3 border-t border-gray-200">
                    <button
                      onClick={handleRejectAll}
                      className="px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                    >
                      Odmítnout vše
                    </button>
                    <button
                      onClick={handleSavePreferences}
                      className="px-3 py-1.5 text-xs font-medium text-white bg-primary hover:bg-primary/90 rounded-md transition-colors"
                    >
                      Uložit preference
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Tlačítko pro otevření nastavení cookies - zobrazí se pouze pokud uživatel už rozhodl o cookies */}
      {cookieSettings.accepted && !isOpen && (
        <div className="fixed bottom-4 right-4 z-50">
          <button
            onClick={openCookieSettings}
            className="p-2 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition-colors"
            aria-label="Nastavení cookies"
            title="Nastavení cookies"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path>
              <path d="M8.5 8.5v.01"></path>
              <path d="M16 15.5v.01"></path>
              <path d="M12 12v.01"></path>
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default CookieConsent; 