import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export const ParticleBackground = () => {
  // Use MotionValues for performance (no re-renders on mouse move)
  const mouseX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 0);
  const mouseY = useMotionValue(typeof window !== 'undefined' ? window.innerHeight / 2 : 0);

  // Springs for the trailing orbs (different masses/damping for a snake-like tail effect)
  const springConfig1 = { damping: 20, stiffness: 300, mass: 0.2 };
  const springConfig2 = { damping: 30, stiffness: 150, mass: 0.6 };
  const springConfig3 = { damping: 50, stiffness: 80, mass: 1.5 };

  const x1 = useSpring(mouseX, springConfig1);
  const y1 = useSpring(mouseY, springConfig1);
  
  const x2 = useSpring(mouseX, springConfig2);
  const y2 = useSpring(mouseY, springConfig2);
  
  const x3 = useSpring(mouseX, springConfig3);
  const y3 = useSpring(mouseY, springConfig3);

  // Parallax effect for the background grid
  const gridX = useTransform(x3, [0, typeof window !== 'undefined' ? window.innerWidth : 1000], [30, -30]);
  const gridY = useTransform(y3, [0, typeof window !== 'undefined' ? window.innerHeight : 1000], [30, -30]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Largest, Slowest Orb (Deep Glow) */}
      <motion.div
        className="fixed top-0 left-0 w-[600px] h-[600px] rounded-full opacity-15 blur-[120px] bg-accent pointer-events-none"
        style={{
          x: x3,
          y: y3,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      
      {/* Medium Orb (Main Color) */}
      <motion.div
        className="fixed top-0 left-0 w-[300px] h-[300px] rounded-full opacity-30 blur-[80px] bg-secondary pointer-events-none"
        style={{
          x: x2,
          y: y2,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      
      {/* Smallest, Fastest Orb (Cursor Core) */}
      <motion.div
        className="fixed top-0 left-0 w-[100px] h-[100px] rounded-full opacity-50 blur-[30px] bg-white pointer-events-none"
        style={{
          x: x1,
          y: y1,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Floating particles (ambient) */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-secondary/40 rounded-full"
          style={{
            width: Math.random() * 4 + 2 + 'px',
            height: Math.random() * 4 + 2 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
          }}
          animate={{
            y: [0, Math.random() * -100 - 50],
            x: [0, (Math.random() - 0.5) * 50],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: 'linear',
            delay: Math.random() * 10,
          }}
        />
      ))}
      
      {/* Parallax Grid lines */}
      <motion.div 
        className="absolute inset-0 opacity-[0.04]" 
        style={{
          x: gridX,
          y: gridY,
          backgroundImage: 'linear-gradient(var(--color-secondary) 1px, transparent 1px), linear-gradient(90deg, var(--color-secondary) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          width: '110%',
          height: '110%',
          left: '-5%',
          top: '-5%'
        }}
      />
    </div>
  );
};
