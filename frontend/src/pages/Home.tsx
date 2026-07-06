import { motion } from 'framer-motion';
import { ArrowRight, Code, Shield, Zap } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Typography } from '../components/ui/Typography';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { PageTransition } from '../components/ui/PageTransition';
import { AnimatedCounter } from '../components/ui/AnimatedCounter';
import { ParticleBackground } from '../components/ui/ParticleBackground';
import { TextReveal } from '../components/ui/TextReveal';
import { TiltCard } from '../components/ui/TiltCard';
import { TechMarquee } from '../components/ui/TechMarquee';

export const Home = () => {
  return (
    <PageTransition className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden premium-hero-bg pt-20">
        <ParticleBackground />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,var(--color-background)_100%)] pointer-events-none z-0"></div>

        <div className="container mx-auto px-6 max-w-5xl text-center relative z-10 mt-10">
          <ScrollReveal direction="up" staggerChildren={0.2}>
            <TextReveal className="mb-6 text-5xl md:text-7xl font-heading font-medium tracking-tight text-text-primary leading-tight">
              Engineering Intelligent Products for the Future.
            </TextReveal>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <Typography variant="body" className="mb-10 max-w-2xl mx-auto text-xl text-text-secondary">
                Krishiva Technology is a premium product-based software company building modern digital products, AI-powered platforms, and scalable architecture.
              </Typography>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="w-full sm:w-auto group relative overflow-hidden" onClick={() => window.location.href = '/products'}>
                  <span className="relative z-10 flex items-center">
                    Explore Products
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  {/* Sweep animation overlay */}
                  <div className="absolute inset-0 -translate-x-full bg-white/20 group-hover:animate-[sweep_1s_ease-in-out_infinite]" />
                </Button>
                <Button size="lg" variant="secondary" className="w-full sm:w-auto hover:premium-glow transition-shadow" onClick={() => window.location.href = '/contact'}>
                  Book a Demo
                </Button>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Infinite Marquee Section */}
      <TechMarquee />

      {/* Stats Section */}
      <section className="py-24 bg-surface border-b border-border">
        <div className="container mx-auto px-6 max-w-7xl">
          <ScrollReveal direction="up" staggerChildren={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            {[
              { label: 'Products Built', value: 50, suffix: '+' },
              { label: 'Enterprise Clients', value: 200, suffix: '+' },
              { label: 'Countries Served', value: 15, suffix: '+' },
              { label: 'Years of Innovation', value: 10, suffix: '+' },
            ].map((stat) => (
              <motion.div 
                key={stat.label}
                className="flex flex-col items-center"
              >
                <Typography variant="h2" className="text-secondary mb-2">
                  <AnimatedCounter to={stat.value} duration={2} />{stat.suffix}
                </Typography>
                <Typography variant="body" className="text-text-primary/70 font-medium uppercase tracking-wider text-sm">{stat.label}</Typography>
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Trust & Features Section */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 h-[600px] w-[600px] bg-secondary opacity-5 blur-[150px] -translate-y-1/2 translate-x-1/3 rounded-full"></div>
        <div className="absolute bottom-0 left-0 h-[600px] w-[600px] bg-accent opacity-5 blur-[150px] translate-y-1/2 -translate-x-1/3 rounded-full"></div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <Typography variant="h2" className="mb-6 text-text-primary">Why Choose Krishiva Technology</Typography>
              <Typography variant="body" className="text-text-secondary">
                We create innovative products that solve real-world business challenges with elegant design, scalable architecture, and intelligent engineering.
              </Typography>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal direction="up" delay={0.2} className="h-full">
              <TiltCard className="h-full bg-surface p-8 flex flex-col items-start text-left cursor-pointer group">
                <div className="p-4 bg-secondary/10 rounded-2xl mb-6 text-secondary group-hover:scale-110 transition-transform shadow-[0_0_20px_-5px_rgba(250,199,117,0.3)]">
                  <Code size={32} strokeWidth={1.5} />
                </div>
                <Typography variant="h4" className="mb-4 text-text-primary">Scalable Architecture</Typography>
                <Typography variant="body" className="text-sm text-text-secondary">
                  Future-proof systems designed to grow with your enterprise, handling millions of requests with zero downtime.
                </Typography>
              </TiltCard>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4} className="h-full">
              <TiltCard className="h-full bg-surface p-8 flex flex-col items-start text-left cursor-pointer group">
                <div className="p-4 bg-secondary/10 rounded-2xl mb-6 text-secondary group-hover:scale-110 transition-transform shadow-[0_0_20px_-5px_rgba(250,199,117,0.3)]">
                  <Zap size={32} strokeWidth={1.5} />
                </div>
                <Typography variant="h4" className="mb-4 text-text-primary">AI Integration</Typography>
                <Typography variant="body" className="text-sm text-text-secondary">
                  Intelligent features powered by modern LLMs and Machine Learning to automate complex workflows natively.
                </Typography>
              </TiltCard>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.6} className="h-full">
              <TiltCard className="h-full bg-surface p-8 flex flex-col items-start text-left cursor-pointer group">
                <div className="p-4 bg-secondary/10 rounded-2xl mb-6 text-secondary group-hover:scale-110 transition-transform shadow-[0_0_20px_-5px_rgba(250,199,117,0.3)]">
                  <Shield size={32} strokeWidth={1.5} />
                </div>
                <Typography variant="h4" className="mb-4 text-text-primary">Enterprise Security</Typography>
                <Typography variant="body" className="text-sm text-text-secondary">
                  Bank-grade encryption, compliance with global standards, and secure coding practices embedded by default.
                </Typography>
              </TiltCard>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
