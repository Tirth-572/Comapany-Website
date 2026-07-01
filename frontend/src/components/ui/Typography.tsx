import React from 'react';
import { cn } from '../../lib/utils';

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'small';
  as?: React.ElementType;
}

export const Typography: React.FC<TypographyProps> = ({ 
  variant = 'body', 
  as, 
  className, 
  children, 
  ...props 
}) => {
  const Component = as || (['body', 'small'].includes(variant) ? 'p' : variant);

  const baseStyles = {
    h1: 'text-5xl md:text-7xl font-black font-heading text-primary leading-tight tracking-tight',
    h2: 'text-4xl md:text-5xl font-extrabold font-heading text-primary leading-tight',
    h3: 'text-3xl md:text-4xl font-bold font-heading text-primary',
    h4: 'text-2xl md:text-3xl font-bold font-heading text-primary',
    h5: 'text-xl md:text-2xl font-bold font-heading text-primary',
    h6: 'text-lg md:text-xl font-bold font-heading text-primary',
    body: 'text-base md:text-lg text-text-secondary leading-relaxed font-body',
    small: 'text-sm text-text-secondary font-body',
  };

  return (
    <Component className={cn(baseStyles[variant as keyof typeof baseStyles], className)} {...props}>
      {children}
    </Component>
  );
};
