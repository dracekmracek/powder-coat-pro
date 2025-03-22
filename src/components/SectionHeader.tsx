import React from 'react';
import { cn } from '@/lib/utils';
import ScrollReveal from './ScrollReveal';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  centered = true,
  className
}) => {
  return (
    <div className={cn('mb-12 text-center w-full', className)}>
      <ScrollReveal>
        <h2 className="section-title max-w-3xl mx-auto">{title}</h2>
      </ScrollReveal>
      
      {subtitle && (
        <ScrollReveal delay={100}>
          <p className="section-subtitle max-w-3xl mx-auto">{subtitle}</p>
        </ScrollReveal>
      )}
    </div>
  );
};

export default SectionHeader;
