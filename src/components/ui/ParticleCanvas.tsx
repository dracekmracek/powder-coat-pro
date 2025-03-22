import React, { useRef, useEffect, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
}

interface ParticleCanvasProps {
  className?: string;
  particleCount?: number;
  colorScheme?: 'blue' | 'multi';
  interactive?: boolean;
}

const ParticleCanvas: React.FC<ParticleCanvasProps> = ({
  className = '',
  particleCount = 80,
  colorScheme = 'blue',
  interactive = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, radius: 100, active: false });
  const frameIdRef = useRef<number>(0);
  
  // Funkce pro generování barev částic
  const getRandomColor = () => {
    if (colorScheme === 'blue') {
      // Různé odstíny modré pro soulad s designem
      const hue = 200 + Math.random() * 40;
      const saturation = 60 + Math.random() * 30;
      const lightness = 40 + Math.random() * 30;
      return `hsla(${hue}, ${saturation}%, ${lightness}%, 0.8)`;
    } else {
      // Multibarevné schéma pro různé typy lakování
      const hues = [210, 190, 30, 340, 150]; // modrá, azurová, žlutá, červená, zelená
      const hue = hues[Math.floor(Math.random() * hues.length)];
      const saturation = 60 + Math.random() * 30;
      const lightness = 40 + Math.random() * 30;
      return `hsla(${hue}, ${saturation}%, ${lightness}%, 0.8)`;
    }
  };
  
  // Inicializace částic
  const initParticles = (canvas: HTMLCanvasElement) => {
    const particles: Particle[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 4 + 1,
        speedX: Math.random() * 2 - 1,
        speedY: Math.random() * 2 - 1,
        opacity: Math.random() * 0.5 + 0.3,
        color: getRandomColor(),
      });
    }
    
    particlesRef.current = particles;
  };
  
  // Aktualizace a vykreslení částic
  const animateParticles = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    
    if (!canvas || !ctx) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particlesRef.current.forEach((particle, index) => {
      // Pohyb částic
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      
      // Odraz od hranic plátna
      if (particle.x > canvas.width) {
        particle.x = 0;
      } else if (particle.x < 0) {
        particle.x = canvas.width;
      }
      
      if (particle.y > canvas.height) {
        particle.y = 0;
      } else if (particle.y < 0) {
        particle.y = canvas.height;
      }
      
      // Interakce s myší
      if (interactive && mouseRef.current.active) {
        const dx = particle.x - mouseRef.current.x;
        const dy = particle.y - mouseRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouseRef.current.radius) {
          // Výpočet síly působící na částici (slabší pro vzdálenější částice)
          const force = (mouseRef.current.radius - distance) / mouseRef.current.radius;
          
          // Odpuzení částic od kurzoru
          const angleX = dx / distance || 0;
          const angleY = dy / distance || 0;
          
          particle.speedX += angleX * force * 0.5;
          particle.speedY += angleY * force * 0.5;
          
          // Omezení maximální rychlosti
          const speed = Math.sqrt(particle.speedX * particle.speedX + particle.speedY * particle.speedY);
          if (speed > 3) {
            particle.speedX = (particle.speedX / speed) * 3;
            particle.speedY = (particle.speedY / speed) * 3;
          }
        }
      }
      
      // Zpomalení částic - simulace tření
      particle.speedX *= 0.98;
      particle.speedY *= 0.98;
      
      // Vykreslení částice
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.globalAlpha = particle.opacity;
      ctx.fill();
      
      // Zřídka změna barvy částic - simulace různých druhů laku
      if (Math.random() < 0.001) {
        particle.color = getRandomColor();
      }
    });
    
    frameIdRef.current = requestAnimationFrame(animateParticles);
  };
  
  // Efekt pro inicializaci a animaci
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // Nastavení plného rozměru canvas
    const handleResize = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
        initParticles(canvas);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    // Spuštění animace
    frameIdRef.current = requestAnimationFrame(animateParticles);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameIdRef.current);
    };
  }, [particleCount, colorScheme]);
  
  // Efekt pro sledování pohybu myši
  useEffect(() => {
    if (!interactive) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      // Výpočet souřadnic relativně ke canvas elementu
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };
    
    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [interactive]);
  
  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ zIndex: 0 }}
    />
  );
};

export default ParticleCanvas; 