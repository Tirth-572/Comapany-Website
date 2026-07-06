import { motion } from 'framer-motion';
import { Typography } from '../components/ui/Typography';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Building2, Store, HeartPulse, GraduationCap, ArrowRight } from 'lucide-react';
import { PageTransition } from '../components/ui/PageTransition';
import { ScrollReveal } from '../components/ui/ScrollReveal';

export const Industries = () => {
  const industries = [
    {
      icon: HeartPulse,
      title: 'Healthcare',
      desc: 'Secure, compliant platforms for patient management and telemedicine.',
    },
    {
      icon: Building2,
      title: 'Enterprise',
      desc: 'Scalable internal tools, ERPs, and automation for large organizations.',
    },
    {
      icon: Store,
      title: 'Retail & E-commerce',
      desc: 'High-performance storefronts and predictive inventory systems.',
    },
    {
      icon: GraduationCap,
      title: 'Education',
      desc: 'Interactive learning management systems (LMS) and virtual classrooms.',
    },
  ];

  return (
    <PageTransition className="w-full pb-32">
      <section className="pt-32 pb-20 premium-hero-bg relative overflow-hidden border-b border-border/10">
        <div className="absolute inset-0 bg-noise"></div>
        <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
          <ScrollReveal direction="up" staggerChildren={0.2}>
            <Typography variant="h1" className="mb-6 text-text-primary">
              Industries We <span className="text-secondary italic">Transform</span>.
            </Typography>
            <Typography variant="body" className="max-w-3xl mx-auto text-xl text-text-secondary">
              Tailored software solutions engineered for the unique challenges of your industry.
            </Typography>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <ScrollReveal direction="up" staggerChildren={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((ind, i) => (
              <motion.div key={ind.title}>
                <Card className="h-full flex flex-col items-start bg-surface border-transparent hover:premium-border hover:-translate-y-2 hover:premium-glow transition-all duration-300 group">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform">
                    <ind.icon size={32} />
                  </div>
                  <Typography variant="h4" className="mb-4 text-text-primary">{ind.title}</Typography>
                  <Typography variant="body" className="mb-8 flex-grow text-text-secondary">{ind.desc}</Typography>
                  <Button variant="ghost" className="pl-0 hover:bg-transparent hover:text-secondary group/btn w-auto justify-start" onClick={() => window.location.href = '/contact'}>
                    Explore Solutions
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Card>
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
};
