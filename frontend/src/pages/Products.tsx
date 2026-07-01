import { motion } from 'framer-motion';
import { Typography } from '../components/ui/Typography';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Bot, Cloud, Database, BarChart, ArrowRight } from 'lucide-react';

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
    <div className="w-full pb-32">
      <section className="pt-32 pb-20 bg-surface">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h1" className="mb-6">
              Our <span className="text-secondary italic">Products</span>.
            </Typography>
            <Typography variant="body" className="max-w-3xl mx-auto text-xl">
              A suite of intelligent, scalable, and secure digital products designed for modern enterprises.
            </Typography>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product, i) => (
              <motion.div 
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full flex flex-col items-start hover:border-secondary/50 transition-colors duration-300">
                  <div className="flex justify-between items-start w-full mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-white">
                      <product.icon size={24} />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      product.status === 'Live' ? 'bg-secondary/20 text-secondary' : 'bg-border text-text-secondary'
                    }`}>
                      {product.status}
                    </span>
                  </div>
                  
                  <Typography variant="h4" className="mb-3">{product.title}</Typography>
                  <Typography variant="body" className="mb-6 flex-grow">{product.desc}</Typography>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {product.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-surface border border-border rounded-full text-xs text-text-secondary font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button variant="ghost" className="pl-0 hover:bg-transparent hover:text-secondary group w-auto justify-start" onClick={() => window.location.href = '/contact'}>
                    View Details
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
