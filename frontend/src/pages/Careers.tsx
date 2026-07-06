import { motion } from 'framer-motion';
import { Typography } from '../components/ui/Typography';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { ArrowRight, MapPin, Clock, Mail, Phone } from 'lucide-react';
import { PageTransition } from '../components/ui/PageTransition';
import { ScrollReveal } from '../components/ui/ScrollReveal';

export const Careers = () => {
  const jobs = [
    { title: 'Senior Frontend Engineer', dept: 'Engineering', location: 'Remote', type: 'Full-time' },
    { title: 'AI Solutions Architect', dept: 'AI / Machine Learning', location: 'New York, NY', type: 'Full-time' },
    { title: 'Product Manager', dept: 'Product', location: 'Remote', type: 'Full-time' },
    { title: 'DevOps Engineer', dept: 'Infrastructure', location: 'London, UK', type: 'Full-time' },
  ];

  return (
    <PageTransition className="w-full pb-32">
      <section className="pt-32 pb-20 premium-hero-bg relative overflow-hidden border-b border-border/10">
        <div className="absolute inset-0 bg-noise"></div>
        <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
          <ScrollReveal direction="up" staggerChildren={0.2}>
            <Typography variant="h1" className="mb-6 text-text-primary">
              Join Our <span className="text-secondary italic">Mission</span>.
            </Typography>
            <Typography variant="body" className="max-w-3xl mx-auto text-xl text-text-secondary">
              We're always looking for brilliant minds to help us build the future of software engineering.
            </Typography>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <ScrollReveal direction="up" staggerChildren={0.1} className="flex flex-col gap-6">
            {jobs.map((job, i) => (
              <motion.div key={job.title}>
                <Card className="flex flex-col md:flex-row items-start md:items-center justify-between p-8 bg-surface border-transparent hover:premium-border hover:-translate-y-2 hover:premium-glow transition-all duration-300 group">
                  <div className="mb-6 md:mb-0">
                    <Typography variant="h5" className="mb-2 text-text-primary">{job.title}</Typography>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary">
                      <span className="font-medium text-primary">{job.dept}</span>
                      <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                      <span className="flex items-center gap-1"><Clock size={14} /> {job.type}</span>
                    </div>
                  </div>
                  <Button variant="secondary" className="shrink-0 group/btn" onClick={() => window.location.href = '/contact'}>
                    Apply Now
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Card>
              </motion.div>
            ))}
          </ScrollReveal>

          {/* Direct Contact Section */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="mt-16 bg-surface border border-transparent premium-border rounded-2xl p-8 text-center max-w-2xl mx-auto premium-glow">
              <Typography variant="h4" className="mb-4 text-text-primary">Can't find the right role?</Typography>
              <Typography variant="body" className="mb-8 text-text-secondary">
                We are always open to talking with talented individuals. Drop us an email or simply call to talk!
              </Typography>
              
              <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                <a href="mailto:tirthvadariya572@gmail.com" className="flex items-center gap-3 hover:opacity-80 transition-opacity group">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                    <Mail size={20} />
                  </div>
                  <div className="text-left">
                    <Typography variant="body" className="text-sm font-semibold text-text-primary">Email Us</Typography>
                    <Typography variant="body" className="text-sm text-text-secondary">tirthvadariya572@gmail.com</Typography>
                  </div>
                </a>

                <a href="tel:+916355390653" className="flex items-center gap-3 hover:opacity-80 transition-opacity group">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                    <Phone size={20} />
                  </div>
                  <div className="text-left">
                    <Typography variant="body" className="text-sm font-semibold text-text-primary">Call to Talk</Typography>
                    <Typography variant="body" className="text-sm text-text-secondary">+91 63553 90653</Typography>
                  </div>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
};
