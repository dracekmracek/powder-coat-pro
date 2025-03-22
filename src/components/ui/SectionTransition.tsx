import React from 'react';
import { motion } from 'framer-motion';

interface SectionTransitionProps {
  variant?: 'wave' | 'angle' | 'curve' | 'spray';
  invert?: boolean;
  primaryColor?: string;
  secondaryColor?: string;
}

export const SectionTransition: React.FC<SectionTransitionProps> = ({
  variant = 'wave',
  invert = false,
  primaryColor = 'var(--primary-color, #0ea5e9)',
  secondaryColor = 'var(--secondary-color, #fff)',
}) => {
  // Převrácení barev, pokud je potřeba
  const fromColor = invert ? secondaryColor : primaryColor;
  const toColor = invert ? primaryColor : secondaryColor;
  
  // SVG cesty pro různé typy přechodů
  const getPath = () => {
    switch (variant) {
      case 'wave':
        return (
          <path 
            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill={toColor}
          />
        );
      case 'angle':
        return (
          <path 
            d="M0,288L1440,32L1440,320L0,320Z"
            fill={toColor}
          />
        );
      case 'curve':
        return (
          <path 
            d="M0,224L1440,96L1440,320L0,320Z"
            fill={toColor}
          />
        );
      case 'spray':
        return (
          <>
            <defs>
              <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
              </filter>
            </defs>
            <g filter="url(#blur)">
              <path 
                d="M0,224C173,253,427,283,640,283C853,283,1067,253,1240,224L1440,224L1440,320L0,320Z" 
                fill={toColor}
              />
              <circle cx="300" cy="270" r="40" fill={toColor} opacity="0.7" />
              <circle cx="900" cy="250" r="60" fill={toColor} opacity="0.5" />
              <circle cx="1200" cy="280" r="35" fill={toColor} opacity="0.6" />
              <circle cx="600" cy="290" r="50" fill={toColor} opacity="0.8" />
            </g>
          </>
        );
      default:
        return (
          <path 
            d="M0,96L1440,192L1440,320L0,320Z"
            fill={toColor}
          />
        );
    }
  };
  
  // Animace přechodu
  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeInOut"
      }
    }
  };
  
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 z-10 pointer-events-none">
      <svg
        className="relative block w-full h-auto"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        aria-hidden="true"
        style={{ 
          backgroundColor: fromColor,
          transform: invert ? 'rotateX(180deg)' : 'none',
          marginBottom: invert ? '-1px' : '0',
        }}
      >
        <motion.g
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {getPath()}
        </motion.g>
      </svg>
    </div>
  );
};

export default SectionTransition; 