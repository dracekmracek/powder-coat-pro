
import React from 'react';
import { cn } from '@/lib/utils';
import ScrollReveal from './ScrollReveal';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  className,
  delay = 0
}) => {
  return (
    <ScrollReveal delay={delay} className={cn('w-full', className)}>
      <div className="feature-card h-full">
        {icon && (
          <div className="mb-4 text-primary">
            {icon}
          </div>
        )}
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </ScrollReveal>
  );
};

export default FeatureCard;
