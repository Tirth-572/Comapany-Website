import { motion } from 'framer-motion';
import { Typography } from '../components/ui/Typography';
import { Card } from '../components/ui/Card';
import { Users, Target, Lightbulb, Award } from 'lucide-react';

export const About = () => {
  return (
    <div className="w-full pb-32">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-surface">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h1" className="mb-6">
              Engineering the <span className="text-secondary italic">Future</span>.
            </Typography>
            <Typography variant="body" className="max-w-3xl mx-auto text-xl">
              Our mission is to create innovative products that solve real-world business challenges with elegant design, scalable architecture, and intelligent engineering.
            </Typography>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <Typography variant="h2" className="mb-4">Our Core Values</Typography>
            <Typography variant="body" className="max-w-2xl mx-auto">
              The principles that drive our innovation and define our culture.
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Target, title: 'Innovation', desc: 'Pushing boundaries to build what\'s next.' },
              { icon: Award, title: 'Excellence', desc: 'Premium quality in every line of code.' },
              { icon: Users, title: 'Collaboration', desc: 'Working closely with partners for success.' },
              { icon: Lightbulb, title: 'Intelligence', desc: 'Leveraging AI for smarter solutions.' },
            ].map((value, i) => (
              <motion.div 
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center text-primary mb-6">
                    <value.icon size={28} />
                  </div>
                  <Typography variant="h5" className="mb-3">{value.title}</Typography>
                  <Typography variant="body" className="text-sm">{value.desc}</Typography>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
