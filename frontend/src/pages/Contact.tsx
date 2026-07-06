import { motion } from 'framer-motion';
import { Typography } from '../components/ui/Typography';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Mail, Phone, MapPin } from 'lucide-react';
import { PageTransition } from '../components/ui/PageTransition';
import { ScrollReveal } from '../components/ui/ScrollReveal';

export const Contact = () => {
  return (
    <PageTransition className="w-full pb-32">
      <section className="pt-32 pb-20 premium-hero-bg relative overflow-hidden border-b border-border/10">
        <div className="absolute inset-0 bg-noise"></div>
        <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
          <ScrollReveal direction="up" staggerChildren={0.2}>
            <Typography variant="h1" className="mb-6 text-text-primary">
              Get in <span className="text-secondary italic">Touch</span>.
            </Typography>
            <Typography variant="body" className="max-w-3xl mx-auto text-xl text-text-secondary">
              Ready to transform your business? Our team of experts is here to help you build the future.
            </Typography>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <ScrollReveal direction="left" delay={0.2} className="flex flex-col gap-8">
              <div>
                <Typography variant="h3" className="mb-4 text-text-primary">Contact Information</Typography>
                <Typography variant="body" className="mb-8 text-text-secondary">
                  Reach out to us for sales inquiries, partnerships, or general support.
                </Typography>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-secondary/10 rounded-xl text-secondary group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div>
                    <Typography variant="h6" className="text-text-primary">Email</Typography>
                    <Typography variant="body" className="text-sm text-text-secondary">hello@krishivatech.com</Typography>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-secondary/10 rounded-xl text-secondary group-hover:scale-110 transition-transform">
                    <Phone size={24} />
                  </div>
                  <div>
                    <Typography variant="h6" className="text-text-primary">Phone</Typography>
                    <Typography variant="body" className="text-sm text-text-secondary">+1 (555) 123-4567</Typography>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-secondary/10 rounded-xl text-secondary group-hover:scale-110 transition-transform">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <Typography variant="h6" className="text-text-primary">Headquarters</Typography>
                    <Typography variant="body" className="text-sm text-text-secondary">
                      123 Innovation Drive<br/>
                      Tech District<br/>
                      San Francisco, CA 94105
                    </Typography>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal direction="right" delay={0.3}>
              <Card className="p-8 md:p-10 bg-surface border-transparent premium-border premium-glow">
                <form className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-text-primary">First Name</label>
                      <input 
                        type="text" 
                        className="px-4 py-3 bg-background border border-border/50 rounded-xl focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all text-text-primary placeholder:text-text-secondary/50"
                        placeholder="John"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-text-primary">Last Name</label>
                      <input 
                        type="text" 
                        className="px-4 py-3 bg-background border border-border/50 rounded-xl focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all text-text-primary placeholder:text-text-secondary/50"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-text-primary">Email Address</label>
                    <input 
                      type="email" 
                      className="px-4 py-3 bg-background border border-border/50 rounded-xl focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all text-text-primary placeholder:text-text-secondary/50"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-text-primary">Message</label>
                    <textarea 
                      rows={5}
                      className="px-4 py-3 bg-background border border-border/50 rounded-xl focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all text-text-primary resize-none placeholder:text-text-secondary/50"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <Button size="lg" className="w-full mt-2 relative overflow-hidden group">
                    <span className="relative z-10">Send Message</span>
                    <div className="absolute inset-0 -translate-x-full bg-white/20 group-hover:animate-[sweep_1s_ease-in-out_infinite]" />
                  </Button>
                </form>
              </Card>
            </ScrollReveal>
            
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
