import { motion } from 'framer-motion';
import { Typography } from '../components/ui/Typography';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { ArrowRight, MapPin, Clock } from 'lucide-react';

export const Careers = () => {
  const jobs = [
    { title: 'Senior Frontend Engineer', dept: 'Engineering', location: 'Remote', type: 'Full-time' },
    { title: 'AI Solutions Architect', dept: 'AI / Machine Learning', location: 'New York, NY', type: 'Full-time' },
    { title: 'Product Manager', dept: 'Product', location: 'Remote', type: 'Full-time' },
    { title: 'DevOps Engineer', dept: 'Infrastructure', location: 'London, UK', type: 'Full-time' },
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
              Join Our <span className="text-secondary italic">Mission</span>.
            </Typography>
            <Typography variant="body" className="max-w-3xl mx-auto text-xl">
              We're always looking for brilliant minds to help us build the future of software engineering.
            </Typography>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex flex-col gap-6">
            {jobs.map((job, i) => (
              <motion.div 
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="flex flex-col md:flex-row items-start md:items-center justify-between p-8 hover:border-secondary transition-colors">
                  <div className="mb-6 md:mb-0">
                    <Typography variant="h5" className="mb-2">{job.title}</Typography>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary">
                      <span className="font-medium text-primary">{job.dept}</span>
                      <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                      <span className="flex items-center gap-1"><Clock size={14} /> {job.type}</span>
                    </div>
                  </div>
                  <Button variant="secondary" className="shrink-0 group" onClick={() => window.location.href = '/contact'}>
                    Apply Now
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
