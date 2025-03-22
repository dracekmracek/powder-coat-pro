import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface SprayEffectProps {
  color?: string;
  size?: 'sm' | 'md' | 'lg';
  position?: 'left' | 'right' | 'top' | 'bottom';
  intensity?: 'light' | 'medium' | 'heavy';
  className?: string;
}

export const SprayEffect: React.FC<SprayEffectProps> = ({
  color = '#0ea5e9',
  size = 'md',
  position = 'right',
  intensity = 'medium',
  className = '',
}) => {
  // Dynamicky generujeme sprejové částice
  const [particles, setParticles] = useState<React.ReactNode[]>([]);
  
  useEffect(() => {
    // Počet částic podle intenzity
    const particleCount = 
      intensity === 'light' ? 15 : 
      intensity === 'medium' ? 25 : 40;
    
    // Velikost efektu podle parametru size
    const effectSize = 
      size === 'sm' ? 200 : 
      size === 'md' ? 350 : 500;
    
    // Pozice podle parametru
    const positionStyles = {
      left: position === 'left' ? '-15%' : position === 'right' ? '70%' : position === 'top' ? '40%' : '40%',
      top: position === 'top' ? '-15%' : position === 'bottom' ? '70%' : position === 'left' ? '40%' : '40%'
    };
    
    // Alfa hodnota barvy
    const baseOpacity = intensity === 'light' ? 0.4 : intensity === 'medium' ? 0.6 : 0.8;
    
    // Převod hex barvy na rgba
    const hexToRgba = (hex: string, alpha: number) => {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };
    
    const generateParticles = () => {
      return Array.from({ length: particleCount }).map((_, i) => {
        // Náhodné velikosti a pozice pro každou částici
        const particleSize = Math.random() * 20 + 5;
        const x = Math.random() * effectSize - effectSize / 2;
        const y = Math.random() * effectSize - effectSize / 2;
        const delay = Math.random() * 5;
        const duration = 3 + Math.random() * 7;
        const opacity = Math.random() * 0.3 + baseOpacity;
        
        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${particleSize}px`,
              height: `${particleSize}px`,
              backgroundColor: hexToRgba(color, opacity),
              filter: `blur(${Math.random() * 5 + 3}px)`,
              x,
              y,
            }}
            animate={{
              x: x + (Math.random() * 40 - 20),
              y: y + (Math.random() * 40 - 20),
              opacity: [opacity * 0.7, opacity, opacity * 0.5],
              scale: [0.8, 1.2, 0.9],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              repeatType: "reverse",
              delay: delay,
              ease: "easeInOut"
            }}
          />
        );
      });
    };
    
    setParticles(generateParticles());
  }, [color, size, position, intensity]);
  
  return (
    <div 
      className={`absolute overflow-hidden pointer-events-none z-0 ${className}`}
      style={{
        width: size === 'sm' ? '300px' : size === 'md' ? '500px' : '700px',
        height: size === 'sm' ? '300px' : size === 'md' ? '500px' : '700px',
        left: position === 'left' ? '-15%' : position === 'right' ? '70%' : position === 'top' ? '40%' : '40%',
        top: position === 'top' ? '-15%' : position === 'bottom' ? '70%' : position === 'left' ? '40%' : '40%',
      }}
    >
      {particles}
    </div>
  );
};

export default SprayEffect; 