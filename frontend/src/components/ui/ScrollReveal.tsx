import { motion, useInView, useAnimation, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  staggerChildren?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  once?: boolean;
}

export const ScrollReveal = ({
  children,
  className = '',
  delay = 0,
  staggerChildren = 0,
  direction = 'up',
  duration = 0.6,
  once = true,
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-10%" });
  const controls = useAnimation();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [isInView, controls, once]);

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const directionOffset = 40;
  const initialOffset = {
    up: { y: directionOffset, x: 0 },
    down: { y: -directionOffset, x: 0 },
    left: { x: directionOffset, y: 0 },
    right: { x: -directionOffset, y: 0 },
    none: { x: 0, y: 0 },
  }[direction];

  const variants = {
    hidden: { 
      opacity: 0, 
      ...initialOffset 
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        ease: [0.22, 1, 0.36, 1], // Smooth premium easing
        delay,
        staggerChildren,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
};
