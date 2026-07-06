import { motion } from 'framer-motion';
import { Typography } from '../components/ui/Typography';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Bot, Cloud, Database, BarChart, ArrowRight } from 'lucide-react';
import { PageTransition } from '../components/ui/PageTransition';
import { ScrollReveal } from '../components/ui/ScrollReveal';

export const Products = () => {
  const products = [
    {
      icon: Bot,
      title: 'Krishiva AI',
      desc: 'Enterprise-grade LLM platform for automating complex workflows.',
      tags: ['Artificial Intelligence', 'Enterprise'],
      status: 'Live',
    },
    {
      icon: Cloud,
      title: 'Krishiva Cloud',
      desc: 'Scalable infrastructure and deployment platform for modern apps.',
      tags: ['Cloud', 'SaaS'],
      status: 'Live',
    },
    {
      icon: Database,
      title: 'DataEngine',
      desc: 'Real-time data processing and analytics warehouse.',
      tags: ['Big Data', 'Analytics'],
      status: 'Live',
    },
    {
      icon: BarChart,
      title: 'SalesFlow',
      desc: 'Intelligent CRM powered by predictive machine learning.',
      tags: ['Business Tools', 'Automation'],
      status: 'Coming Soon',
    },
  ];

  return (
    <PageTransition className="w-full pb-32">
      <section className="pt-32 pb-20 premium-hero-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-noise"></div>
        <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
          <ScrollReveal direction="up" staggerChildren={0.2}>
            <Typography variant="h1" className="mb-6 text-text-primary">
              Our <span className="text-secondary italic">Products</span>.
            </Typography>
            <Typography variant="body" className="max-w-3xl mx-auto text-xl text-text-secondary">
              A suite of intelligent, scalable, and secure digital products designed for modern enterprises.
            </Typography>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <ScrollReveal direction="up" staggerChildren={0.1} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product, i) => (
              <motion.div key={product.title}>
                <Card className="h-full flex flex-col items-start bg-surface border-transparent hover:premium-border hover:-translate-y-2 hover:premium-glow transition-all duration-300 group">
                  <div className="flex justify-between items-start w-full mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                      <product.icon size={24} />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      product.status === 'Live' ? 'bg-secondary/10 text-secondary' : 'bg-primary text-text-secondary'
                    }`}>
                      {product.status}
                    </span>
                  </div>
                  
                  <Typography variant="h4" className="mb-3 text-text-primary">{product.title}</Typography>
                  <Typography variant="body" className="mb-6 flex-grow text-text-secondary">{product.desc}</Typography>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {product.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-background border border-border/50 rounded-full text-xs text-text-secondary font-medium font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button variant="ghost" className="pl-0 hover:bg-transparent hover:text-secondary group/btn w-auto justify-start" onClick={() => window.location.href = '/contact'}>
                    View Details
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
