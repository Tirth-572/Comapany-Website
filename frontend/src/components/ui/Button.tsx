import * as React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-300 ease-in-out focus:outline-none disabled:opacity-50 disabled:pointer-events-none rounded-xl';
    
    const variants = {
      primary: 'bg-secondary text-primary hover:bg-accent hover:text-text-on-dark border border-transparent shadow-sm hover:shadow-md',
      secondary: 'bg-transparent border border-border text-text-primary hover:bg-secondary/10 hover:border-secondary hover:text-primary',
      ghost: 'bg-transparent text-text-primary hover:bg-primary/5',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...(props as any)}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
