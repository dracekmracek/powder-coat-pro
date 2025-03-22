import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ColorSwatchProps {
  colorName: string;
  colorCode: string;
  colorHex: string;
  texture?: 'matte' | 'glossy' | 'metallic' | 'structured';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({
  colorName,
  colorCode,
  colorHex,
  texture = 'glossy',
  size = 'md',
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Konfigurace velikosti swatch podle parametru
  const sizeStyles = {
    sm: 'w-16 h-16 rounded-md',
    md: 'w-24 h-24 rounded-lg',
    lg: 'w-32 h-32 rounded-xl',
  }[size];
  
  // Různé styly textury
  const getTextureStyles = () => {
    switch (texture) {
      case 'matte':
        return {
          background: colorHex,
          boxShadow: 'none',
          filter: 'brightness(0.95)',
        };
      case 'glossy':
        return {
          background: `linear-gradient(135deg, ${colorHex}e6, ${colorHex})`,
          boxShadow: `0 10px 15px -3px ${colorHex}40`,
        };
      case 'metallic':
        return {
          background: `linear-gradient(135deg, ${colorHex}cc, ${colorHex}, ${colorHex}80)`,
          boxShadow: `0 10px 15px -3px ${colorHex}40`,
          filter: 'brightness(1.1) contrast(1.05)',
        };
      case 'structured':
        return {
          background: colorHex,
          boxShadow: `0 10px 15px -3px ${colorHex}40`,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.15' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1.5'/%3E%3Ccircle cx='13' cy='13' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`,
        };
      default:
        return {
          background: colorHex,
        };
    }
  };
  
  return (
    <motion.div 
      className="flex flex-col items-center group cursor-pointer"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div 
        className={`relative ${sizeStyles} transition-all duration-300 mb-2 overflow-hidden`}
        style={getTextureStyles()}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Odlesk na povrchu pro lesklé a metalické textury */}
        {(texture === 'glossy' || texture === 'metallic') && (
          <motion.div 
            className="absolute top-[10%] left-[5%] w-[30%] h-[15%] rounded-full blur-[3px]"
            style={{
              background: 'linear-gradient(to bottom right, rgba(255,255,255,0.7), rgba(255,255,255,0))',
            }}
            animate={{ 
              opacity: isHovered ? 0.9 : 0.6,
              scale: isHovered ? 1.1 : 1,
              rotate: isHovered ? -10 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
        )}
        
        {/* Efekt zvýraznění při hoveru */}
        <motion.div 
          className="absolute inset-0 bg-white mix-blend-overlay rounded-inherit"
          animate={{ opacity: isHovered ? 0.15 : 0 }}
          transition={{ duration: 0.2 }}
        />
      </div>
      
      <div className="text-center">
        <p className="font-medium text-base text-foreground">{colorName}</p>
        <p className="text-xs text-muted-foreground">{colorCode}</p>
      </div>
    </motion.div>
  );
};

export default ColorSwatch; 