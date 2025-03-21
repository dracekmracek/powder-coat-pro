
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number; // delay in milliseconds
};

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  className,
  delay = 0 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('active');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);
  
  return (
    <div ref={ref} className={cn('reveal', className)}>
      {children}
    </div>
  );
};

export default ScrollReveal;
