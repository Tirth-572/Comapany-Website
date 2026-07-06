import * as React from 'react';
import { cn } from '../../lib/utils';
import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';

interface CardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className, ...props }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={cn(
        'bg-surface border border-border rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-[0_8px_30px_rgb(250,199,117,0.12)] hover:border-secondary/50 transition-all duration-300',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};
