import { motion } from 'framer-motion';
import { Typography } from '../components/ui/Typography';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Rocket, Briefcase, Building, Layers } from 'lucide-react';

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
    <div className="w-full pb-32">
      <section className="pt-32 pb-20 bg-surface">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h1" className="mb-6">
              Solutions by <span className="text-secondary italic">Business Size</span>.
            </Typography>
            <Typography variant="body" className="max-w-3xl mx-auto text-xl">
              From ambitious startups to global enterprises, we provide engineering solutions that fit your scale and complexity.
            </Typography>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((sol, i) => (
              <motion.div 
                key={sol.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full flex flex-col items-center text-center p-12">
                  <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center text-secondary mb-8 shadow-lg">
                    <sol.icon size={40} strokeWidth={1.5} />
                  </div>
                  <Typography variant="h3" className="mb-4">{sol.title}</Typography>
                  <Typography variant="body" className="mb-8 max-w-md">{sol.desc}</Typography>
                  <Button variant="secondary" onClick={() => window.location.href = '/contact'}>Learn More</Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
