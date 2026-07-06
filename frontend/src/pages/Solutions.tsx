import { motion } from 'framer-motion';
import { Typography } from '../components/ui/Typography';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Rocket, Briefcase, Building, Layers } from 'lucide-react';
import { PageTransition } from '../components/ui/PageTransition';
import { ScrollReveal } from '../components/ui/ScrollReveal';

export const Solutions = () => {
  const solutions = [
    {
      icon: Rocket,
      title: 'For Startups',
      desc: 'Rapid MVP development, scalable architecture setup, and agile engineering to help you reach market faster.',
    },
    {
      icon: Briefcase,
      title: 'For SMBs',
      desc: 'Digital transformation, custom CRM/ERP integration, and automation tools to streamline operations.',
    },
    {
      icon: Building,
      title: 'For Enterprise',
      desc: 'Legacy modernization, microservices architecture, and dedicated engineering teams for large-scale impact.',
    },
    {
      icon: Layers,
      title: 'For Government',
      desc: 'Highly secure, accessible, and compliant citizen-facing portals and internal management systems.',
    },
  ];

  return (
    <PageTransition className="w-full pb-32">
      <section className="pt-32 pb-20 premium-hero-bg relative overflow-hidden border-b border-border/10">
        <div className="absolute inset-0 bg-noise"></div>
        <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
          <ScrollReveal direction="up" staggerChildren={0.2}>
            <Typography variant="h1" className="mb-6 text-text-primary">
              Solutions by <span className="text-secondary italic">Business Size</span>.
            </Typography>
            <Typography variant="body" className="max-w-3xl mx-auto text-xl text-text-secondary">
              From ambitious startups to global enterprises, we provide engineering solutions that fit your scale and complexity.
            </Typography>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <ScrollReveal direction="up" staggerChildren={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((sol, i) => (
              <motion.div key={sol.title}>
                <Card className="h-full flex flex-col items-center text-center p-12 bg-surface border-transparent hover:premium-border hover:-translate-y-2 hover:premium-glow transition-all duration-300 group">
                  <div className="w-20 h-20 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-8 group-hover:scale-110 transition-transform shadow-lg">
                    <sol.icon size={40} strokeWidth={1.5} />
                  </div>
                  <Typography variant="h3" className="mb-4 text-text-primary">{sol.title}</Typography>
                  <Typography variant="body" className="mb-8 max-w-md text-text-secondary">{sol.desc}</Typography>
                  <Button variant="secondary" className="hover:premium-glow transition-shadow" onClick={() => window.location.href = '/contact'}>Learn More</Button>
                </Card>
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
};
