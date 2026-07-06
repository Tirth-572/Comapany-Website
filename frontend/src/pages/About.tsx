import { motion } from 'framer-motion';
import { Typography } from '../components/ui/Typography';
import { Card } from '../components/ui/Card';
import { Users, Target, Lightbulb, Award } from 'lucide-react';
import { PageTransition } from '../components/ui/PageTransition';
import { ScrollReveal } from '../components/ui/ScrollReveal';

export const About = () => {
  return (
    <PageTransition className="w-full pb-32">
      {/* Hero Section */}
      <section className="pt-32 pb-20 premium-hero-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-noise"></div>
        <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
          <ScrollReveal direction="up" staggerChildren={0.2}>
            <Typography variant="h1" className="mb-6 text-text-primary">
              Engineering the <span className="text-secondary italic">Future</span>.
            </Typography>
            <Typography variant="body" className="max-w-3xl mx-auto text-xl text-text-secondary">
              Our mission is to create innovative products that solve real-world business challenges with elegant design, scalable architecture, and intelligent engineering.
            </Typography>
          </ScrollReveal>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <Typography variant="h2" className="mb-4 text-text-primary">Our Core Values</Typography>
              <Typography variant="body" className="max-w-2xl mx-auto text-text-secondary">
                The principles that drive our innovation and define our culture.
              </Typography>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" staggerChildren={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Target, title: 'Innovation', desc: 'Pushing boundaries to build what\'s next.' },
              { icon: Award, title: 'Excellence', desc: 'Premium quality in every line of code.' },
              { icon: Users, title: 'Collaboration', desc: 'Working closely with partners for success.' },
              { icon: Lightbulb, title: 'Intelligence', desc: 'Leveraging AI for smarter solutions.' },
            ].map((value, i) => (
              <motion.div key={value.title}>
                <Card className="h-full flex flex-col items-center text-center bg-surface border-transparent hover:premium-border hover:-translate-y-2 hover:premium-glow transition-all duration-300 group">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform">
                    <value.icon size={28} />
                  </div>
                  <Typography variant="h5" className="mb-3 text-text-primary">{value.title}</Typography>
                  <Typography variant="body" className="text-sm text-text-secondary">{value.desc}</Typography>
                </Card>
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
};
