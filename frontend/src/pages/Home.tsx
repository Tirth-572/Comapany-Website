import { motion } from 'framer-motion';
import { ArrowRight, Code, Shield, Zap } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Typography } from '../components/ui/Typography';
import { Card } from '../components/ui/Card';

export const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-surface -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-secondary opacity-20 blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-6 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Typography variant="h1" className="mb-6">
              Engineering <span className="text-secondary italic">Intelligent</span> Products for the Future.
            </Typography>
            <Typography variant="body" className="mb-10 max-w-2xl mx-auto text-xl text-text-secondary/80">
              Krishiva Technology is a premium product-based software company building modern digital products, AI-powered platforms, and scalable architecture.
            </Typography>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto group" onClick={() => window.location.href = '/products'}>
                Explore Products
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="secondary" className="w-full sm:w-auto" onClick={() => window.location.href = '/contact'}>
                Book a Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            {[
              { label: 'Products Built', value: '50+' },
              { label: 'Enterprise Clients', value: '200+' },
              { label: 'Countries Served', value: '15+' },
              { label: 'Years of Innovation', value: '10+' },
            ].map((stat, index) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex flex-col items-center"
              >
                <Typography variant="h2" className="text-secondary mb-2">{stat.value}</Typography>
                <Typography variant="body" className="text-white/70 font-medium uppercase tracking-wider text-sm">{stat.label}</Typography>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Features Section */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <Typography variant="h2" className="mb-6">Why Choose Krishiva Technology</Typography>
            <Typography variant="body">
              We create innovative products that solve real-world business challenges with elegant design, scalable architecture, and intelligent engineering.
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="flex flex-col items-start text-left">
              <div className="p-4 bg-primary/5 rounded-2xl mb-6 text-primary">
                <Code size={32} strokeWidth={1.5} />
              </div>
              <Typography variant="h4" className="mb-4">Scalable Architecture</Typography>
              <Typography variant="body" className="text-sm">
                Future-proof systems designed to grow with your enterprise, handling millions of requests with zero downtime.
              </Typography>
            </Card>

            <Card className="flex flex-col items-start text-left">
              <div className="p-4 bg-primary/5 rounded-2xl mb-6 text-primary">
                <Zap size={32} strokeWidth={1.5} />
              </div>
              <Typography variant="h4" className="mb-4">AI Integration</Typography>
              <Typography variant="body" className="text-sm">
                Intelligent features powered by modern LLMs and Machine Learning to automate complex workflows natively.
              </Typography>
            </Card>

            <Card className="flex flex-col items-start text-left">
              <div className="p-4 bg-primary/5 rounded-2xl mb-6 text-primary">
                <Shield size={32} strokeWidth={1.5} />
              </div>
              <Typography variant="h4" className="mb-4">Enterprise Security</Typography>
              <Typography variant="body" className="text-sm">
                Bank-grade encryption, compliance with global standards, and secure coding practices embedded by default.
              </Typography>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};
