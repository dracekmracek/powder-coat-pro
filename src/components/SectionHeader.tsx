import React from 'react';
import { cn } from '@/lib/utils';
import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  accent?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  centered = true,
  className,
  titleClassName,
  subtitleClassName,
  accent = false
}) => {
  return (
    <div className={cn(
      'mb-12 w-full', 
      centered ? 'text-center' : 'text-left',
      className
    )}>
      <ScrollReveal>
        <div className="relative inline-block">
          <h2 className={cn(
            "section-title mx-auto relative z-10",
            titleClassName,
            { 'mb-1': accent }
          )}>
            {title}
          </h2>
          
          {accent && (
            <motion.div 
              className="h-1 bg-primary/30 rounded-full mx-auto mt-2 mb-4"
              initial={{ width: 0 }}
              animate={{ width: centered ? '120px' : '80px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ marginLeft: centered ? 'auto' : '0' }}
            />
          )}
        </div>
      </ScrollReveal>
      
      {subtitle && (
        <ScrollReveal delay={100}>
          <p className={cn(
            "section-subtitle mx-auto",
            subtitleClassName
          )}>
            {subtitle}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
};

export default SectionHeader;
