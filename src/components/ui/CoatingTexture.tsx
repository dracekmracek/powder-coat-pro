import React from 'react';
import { motion } from 'framer-motion';

interface CoatingTextureProps {
  variant?: 'glossy' | 'matte' | 'textured' | 'metallic';
  color?: string;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  isActive?: boolean;
}

export const CoatingTexture: React.FC<CoatingTextureProps> = ({
  variant = 'glossy',
  color = '#0ea5e9',
  size = 'md',
  onClick,
  isActive = false,
}) => {
  // Velikost komponenty podle parametru size
  const sizeClass = 
    size === 'sm' ? 'w-16 h-16' : 
    size === 'md' ? 'w-24 h-24' : 'w-36 h-36';
  
  // Barevné nastavení pro odlišné varianty
  const getGradient = () => {
    switch (variant) {
      case 'glossy':
        return {
          background: `linear-gradient(135deg, ${color}bb 0%, ${color} 50%, ${color}dd 100%)`,
          boxShadow: `0 10px 30px ${color}33`,
        };
      case 'matte':
        return {
          background: color,
          boxShadow: `0 10px 20px ${color}22`,
        };
      case 'textured':
        return {
          background: `linear-gradient(45deg, ${color}aa 25%, ${color} 25%, ${color} 50%, ${color}aa 50%, ${color}aa 75%, ${color} 75%, ${color})`,
          backgroundSize: '10px 10px',
          boxShadow: `0 10px 20px ${color}33`,
        };
      case 'metallic':
        return {
          background: `linear-gradient(to right, ${color}80 0%, ${color} 50%, ${color}cc 51%, ${color}ee 100%)`,
          boxShadow: `0 10px 30px ${color}44`,
        };
      default:
        return {
          background: color,
          boxShadow: 'none',
        };
    }
  };
  
  // Přidání textury pomocí pseudo prvků pro realistický vzhled
  const getTexture = () => {
    switch (variant) {
      case 'glossy':
        return {
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '-50%',
            left: '-50%',
            width: '200%',
            height: '200%',
            background: 'radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)',
            opacity: 0.7,
          },
        };
      case 'matte':
        return {
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFISURBVGhD7ZexTsMwEIb/iBUWRjpQpA6VmOiGGJAQT8ATwMrKysLKxsgj8AogkFiQGCojDFRt6lLJOYRUjXKu75w4jj3Et/x39t3FOSeZTERRFEVRlP8KbTO83W3ib6YXLYb8+pqfN3C3DH7fvl/gYRQy0zRL7OIAk7cPrP6ktJ1uw8/iC4RZhGRZtmwRRwnK3g6G4wm24VVgUoS6EoPuDobt+YLnPPvZTwwhWboKiSIky1FI7RB4lF2IxR7kIqR2CDzKLsRmCDzKIsR2CDxKLmQfIbDInTCPydHpPGo9fK2+nP3EEJKlFhJDSJZaiBQhWVogV0IMIdmVYfcpeCRuC9ZFiKUOQixyZ9+7ECt1FWLpCn4W1m1uyyEwa4Zcr9eTuX5bLgPgeLZeWRZCbtvlNjxMl9voSJvOtw0upFxFURRFUaTPYfgD5+HOJbSMcSwAAAAASUVORK5CYII=")',
            opacity: 0.05,
            mixBlendMode: 'overlay',
          },
        };
      case 'textured':
        return {
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h20v20H0V0zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm20 0a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM10 37a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm10-17h20v20H20V20zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14z\' fill=\'%23000\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
            opacity: 0.3,
          },
        };
      case 'metallic':
        return {
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '-100%',
            left: '-100%',
            width: '300%',
            height: '300%',
            background: 'linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%)',
            transform: 'rotate(30deg)',
            animation: 'metallicShine 5s linear infinite',
          },
        };
      default:
        return {};
    }
  };
  
  return (
    <motion.div
      className={`rounded-lg ${sizeClass} cursor-pointer relative ${isActive ? 'ring-4 ring-primary ring-opacity-50' : ''}`}
      style={{
        ...getGradient(),
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      {/* Vrstva pro texturu */}
      <div className="absolute inset-0 rounded-lg overflow-hidden">
        {variant === 'glossy' && (
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" />
        )}
        {variant === 'matte' && (
          <div className="absolute inset-0 bg-black/5" />
        )}
        {variant === 'textured' && (
          <div 
            className="absolute inset-0" 
            style={{ 
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h10v10H0V0zm10 10h10v10H10V10z\' fill=\'%23000\' fill-opacity=\'0.08\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
              backgroundSize: '10px 10px',
            }}
          />
        )}
        {variant === 'metallic' && (
          <div className="absolute inset-0 animate-shine">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -rotate-45 translate-x-full" />
          </div>
        )}
      </div>
      
      {/* Odlesk */}
      {variant === 'glossy' && (
        <div className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-b from-white/30 to-transparent rounded-t-lg" />
      )}
      
      {/* Název */}
      <div className="absolute bottom-2 left-0 right-0 text-center text-white text-xs font-medium mix-blend-overlay">
        {variant.charAt(0).toUpperCase() + variant.slice(1)}
      </div>
    </motion.div>
  );
};

export default CoatingTexture; 