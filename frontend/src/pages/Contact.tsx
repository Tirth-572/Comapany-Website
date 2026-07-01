import { motion } from 'framer-motion';
import { Typography } from '../components/ui/Typography';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact = () => {
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
              Get in <span className="text-secondary italic">Touch</span>.
            </Typography>
            <Typography variant="body" className="max-w-3xl mx-auto text-xl">
              Ready to transform your business? Our team of experts is here to help you build the future.
            </Typography>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-8"
            >
              <div>
                <Typography variant="h3" className="mb-4">Contact Information</Typography>
                <Typography variant="body" className="mb-8">
                  Reach out to us for sales inquiries, partnerships, or general support.
                </Typography>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/5 rounded-xl text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <Typography variant="h6">Email</Typography>
                    <Typography variant="body" className="text-sm">hello@krishivatech.com</Typography>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/5 rounded-xl text-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <Typography variant="h6">Phone</Typography>
                    <Typography variant="body" className="text-sm">+1 (555) 123-4567</Typography>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/5 rounded-xl text-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <Typography variant="h6">Headquarters</Typography>
                    <Typography variant="body" className="text-sm">
                      123 Innovation Drive<br/>
                      Tech District<br/>
                      San Francisco, CA 94105
                    </Typography>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="p-8 md:p-10">
                <form className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-primary">First Name</label>
                      <input 
                        type="text" 
                        className="px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:border-secondary transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-primary">Last Name</label>
                      <input 
                        type="text" 
                        className="px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:border-secondary transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-primary">Email Address</label>
                    <input 
                      type="email" 
                      className="px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:border-secondary transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-primary">Message</label>
                    <textarea 
                      rows={5}
                      className="px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:border-secondary transition-colors resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <Button size="lg" className="w-full mt-2">Send Message</Button>
                </form>
              </Card>
            </motion.div>
            
          </div>
        </div>
      </section>
    </div>
  );
};
