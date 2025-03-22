import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface ModelProps {
  className?: string;
}

const ThreeDModel: React.FC<ModelProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Plynulejší pohyb modelu
  const springConfig = { damping: 15, stiffness: 150 };
  const rotateX = useSpring(useTransform(y, [-100, 100], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(x, [-100, 100], [-15, 15]), springConfig);

  // Efekt světelných odlesků - reagují na pohyb myši
  const highlightX = useTransform(x, [-100, 100], [-20, 20]);
  const highlightY = useTransform(y, [-100, 100], [-20, 20]);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      
      // Výpočet pozice myši relativně k středu kontejneru
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      x.set(e.clientX - centerX);
      y.set(e.clientY - centerY);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [x, y]);
  
  return (
    <div 
      ref={containerRef} 
      className={`relative aspect-square w-full max-w-md mx-auto perspective-1000 ${className}`}
    >
      <motion.div
        className="w-full h-full relative"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* 3D model - stylizovaná geometrická reprezentace lakovaného produktu */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/80 to-blue-600/80 shadow-xl">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3/4 h-3/4 bg-white/10 rounded-full transform -translate-z-10" />
          </div>
          
          {/* Odlesky - reagují na pohyb myši */}
          <motion.div 
            className="absolute w-1/2 h-1/2 rounded-full bg-white/30 blur-md"
            style={{ 
              x: highlightX, 
              y: highlightY,
              top: '20%',
              left: '20%',
              filter: 'blur(25px)'
            }}
          />
          
          {/* Simulace lakovaného povrchu */}
          <div className="absolute inset-4 rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center overflow-hidden">
            <div className="text-white text-opacity-10 text-3xl font-bold">BETRIM</div>
            
            {/* Textura lakovaného povrchu */}
            <div className="absolute inset-0 opacity-20 mix-blend-overlay" 
              style={{ 
                backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.2\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'1\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'1\'/%3E%3C/g%3E%3C/svg%3E")',
              }} 
            />
          </div>
        </div>
        
        {/* Stín pod modelem */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-3/4 h-4 bg-black/20 blur-md rounded-full"/>
      </motion.div>
    </div>
  );
};

export default ThreeDModel; 