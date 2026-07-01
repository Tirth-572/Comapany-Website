import { motion } from 'framer-motion';
import { Typography } from '../components/ui/Typography';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Building2, Store, HeartPulse, GraduationCap, ArrowRight } from 'lucide-react';

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
    <div className="w-full pb-32">
      <section className="pt-32 pb-20 bg-surface">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h1" className="mb-6">
              Industries We <span className="text-secondary italic">Transform</span>.
            </Typography>
            <Typography variant="body" className="max-w-3xl mx-auto text-xl">
              Tailored software solutions engineered for the unique challenges of your industry.
            </Typography>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((ind, i) => (
              <motion.div 
                key={ind.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full flex flex-col items-start hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center text-primary mb-6">
                    <ind.icon size={32} />
                  </div>
                  <Typography variant="h4" className="mb-4">{ind.title}</Typography>
                  <Typography variant="body" className="mb-8 flex-grow">{ind.desc}</Typography>
                  <Button variant="ghost" className="pl-0 hover:bg-transparent hover:text-secondary group w-auto justify-start" onClick={() => window.location.href = '/contact'}>
                    Explore Solutions
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
