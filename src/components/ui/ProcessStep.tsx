import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, ChevronRightIcon, ThermometerIcon, ClockIcon, DropletIcon, ZapIcon } from 'lucide-react';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  parameters?: {
    name: string;
    value: string;
    unit?: string;
  }[];
  isActive?: boolean;
  onToggle?: () => void;
  className?: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  number,
  title,
  description,
  parameters = [],
  isActive = false,
  onToggle,
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Vrátí ikonu podle názvu parametru
  const getParameterIcon = (paramName: string) => {
    const name = paramName.toLowerCase();
    if (name.includes('teplota')) return <ThermometerIcon className="h-4 w-4 text-blue-500" />;
    if (name.includes('doba')) return <ClockIcon className="h-4 w-4 text-amber-500" />;
    if (name.includes('tlak') || name.includes('médium') || name.includes('prostředí')) 
      return <DropletIcon className="h-4 w-4 text-sky-500" />;
    if (name.includes('napětí') || name.includes('metoda')) 
      return <ZapIcon className="h-4 w-4 text-purple-500" />;
    
    return null;
  };
  
  // Generuje gradient podle čísla kroku
  const getGradientColor = () => {
    const colors = [
      'from-blue-500 to-cyan-400',   // Odmaštění
      'from-cyan-500 to-blue-400',   // Oplach
      'from-cyan-500 to-blue-400',   // Oplach
      'from-green-500 to-cyan-400',  // Fosfátování
      'from-cyan-500 to-blue-400',   // Oplach
      'from-teal-500 to-cyan-400',   // Pasivace
      'from-amber-500 to-orange-400', // Sušení
      'from-purple-500 to-blue-400', // Lakování
      'from-red-500 to-orange-400',  // Vytvrzení
    ];
    
    return colors[(number - 1) % colors.length];
  };
  
  return (
    <motion.div 
      className={`rounded-xl border overflow-hidden ${className}`}
      initial={false}
      animate={{
        borderColor: isActive ? 'var(--primary)' : 'var(--border)',
        boxShadow: isActive || isHovered ? '0 4px 20px rgba(14, 165, 233, 0.15)' : '0 1px 3px rgba(0,0,0,0.1)',
      }}
      transition={{ duration: 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div 
        className={`flex items-center gap-4 p-4 cursor-pointer bg-card relative overflow-hidden`}
        onClick={onToggle}
        whileTap={{ scale: 0.98 }}
      >
        {/* Gradient na pozadí */}
        {(isActive || isHovered) && (
          <motion.div 
            className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r ${getGradientColor()} opacity-5`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            exit={{ opacity: 0 }}
          />
        )}
        
        {/* Gradient line na levé straně */}
        <motion.div 
          className={`absolute left-0 top-0 w-1 h-full bg-gradient-to-b ${getGradientColor()}`}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: isActive || isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Číslování kroků s animací */}
        <motion.div 
          className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-semibold text-lg bg-gradient-to-r ${getGradientColor()} text-white`}
          initial={false}
          animate={{ 
            scale: isActive ? 1.1 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          {number}
        </motion.div>
        
        <div className="flex-grow">
          <h4 className="font-medium text-foreground">{title}</h4>
          <p className="text-sm text-muted-foreground line-clamp-1">{description}</p>
        </div>
        
        <motion.div
          initial={false}
          animate={{ rotate: isActive ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`text-${isActive ? 'primary' : 'muted-foreground'}`}
        >
          <ChevronDownIcon className="h-5 w-5" />
        </motion.div>
      </motion.div>
      
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="p-5 pt-2 bg-card border-t border-border/50">
              <p className="text-muted-foreground mb-5">{description}</p>
              
              {parameters.length > 0 && (
                <div className="space-y-3">
                  <h5 className="text-sm font-medium text-foreground mb-2 flex items-center gap-1.5">
                    <span className={`inline-block h-3 w-3 rounded-full bg-gradient-to-r ${getGradientColor()}`}></span>
                    Parametry procesu
                  </h5>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {parameters.map((param, index) => (
                      <motion.div 
                        key={index} 
                        className="bg-muted/20 rounded-lg p-3 flex items-center gap-3"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-muted/30 flex items-center justify-center">
                          {getParameterIcon(param.name)}
                        </div>
                        <div className="flex-grow">
                          <div className="text-sm text-muted-foreground">{param.name}</div>
                          <div className="font-medium">
                            {param.value}
                            {param.unit && <span className="text-muted-foreground text-sm ml-1">{param.unit}</span>}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Vizuální indikátor procesu */}
              <div className="mt-5 pt-4 border-t border-border/30">
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-muted-foreground">Začátek</span>
                  <span className="text-muted-foreground">Konec</span>
                </div>
                <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
                  <motion.div 
                    className={`h-full bg-gradient-to-r ${getGradientColor()}`}
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProcessStep; 