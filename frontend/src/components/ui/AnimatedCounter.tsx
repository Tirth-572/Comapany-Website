import { useState, useEffect, useRef } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

export const AnimatedCounter = ({ from = 0, to, duration = 2 }: { from?: number, to: number, duration?: number }) => {
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setCount(to);
      return;
    }

    if (inView) {
      let startTimestamp: number | null = null;
      
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        
        // easeOutQuart
        const ease = 1 - Math.pow(1 - progress, 4);
        
        setCount(Math.floor(ease * (to - from) + from));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      
      window.requestAnimationFrame(step);
    }
  }, [inView, from, to, duration, prefersReducedMotion]);

  return <span ref={ref}>{count}</span>;
};
