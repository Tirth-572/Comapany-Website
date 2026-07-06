import { motion } from 'framer-motion';

const technologies = [
  "React", "Node.js", "TypeScript", "Python", "AWS", "Framer Motion", "Docker", "Kubernetes", "GraphQL", "Tailwind CSS", "Next.js", "PostgreSQL", "MongoDB", "Redis"
];

export const TechMarquee = () => {
  return (
    <div className="w-full overflow-hidden bg-surface/50 border-y border-border py-8 relative flex items-center">
      {/* Gradient masks for smooth fade out at edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      
      <div className="flex gap-8 whitespace-nowrap">
        <motion.div
          className="flex gap-8 items-center"
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 20,
            ease: 'linear',
          }}
        >
          {/* Double array to create seamless loop */}
          {[...technologies, ...technologies, ...technologies].map((tech, i) => (
            <div key={i} className="flex items-center gap-4 px-6 py-3 rounded-full bg-primary border border-border/50 text-text-secondary font-medium tracking-wide">
              <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(250,199,117,0.5)]" />
              {tech}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
