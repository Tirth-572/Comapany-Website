import { motion } from 'framer-motion';
import { Typography } from '../components/ui/Typography';
import { Card } from '../components/ui/Card';
import { Calendar, User, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Blog = () => {
  const posts = [
    {
      title: 'The Future of Enterprise Architecture in the AI Era',
      excerpt: 'How modern businesses are restructuring their technical foundations to seamlessly integrate machine learning models at scale.',
      category: 'Artificial Intelligence',
      author: 'Sarah Chen',
      date: 'Oct 15, 2026',
      readTime: '8 min read',
    },
    {
      title: 'Scaling Microservices with Zero Downtime',
      excerpt: 'Lessons learned from migrating massive monolithic applications to distributed systems without impacting active users.',
      category: 'Engineering',
      author: 'David Rodriguez',
      date: 'Oct 12, 2026',
      readTime: '12 min read',
    },
    {
      title: 'Design Systems for B2B SaaS Platforms',
      excerpt: 'Creating a unified, accessible, and premium user experience across complex enterprise software products.',
      category: 'Design',
      author: 'Elena Rostova',
      date: 'Oct 08, 2026',
      readTime: '6 min read',
    },
  ];

  return (
    <div className="w-full pb-32">
      <section className="pt-32 pb-20 bg-surface border-b border-border">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h1" className="mb-6">
              Insights & <span className="text-secondary italic">Engineering</span>.
            </Typography>
            <Typography variant="body" className="max-w-3xl mx-auto text-xl">
              Thoughts, tutorials, and case studies from the team building the future of software.
            </Typography>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.div 
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to="#">
                  <Card className="h-full flex flex-col p-8 hover:border-secondary transition-colors group cursor-pointer">
                    <div className="mb-6">
                      <span className="px-3 py-1 bg-primary/5 text-primary text-xs font-semibold rounded-full uppercase tracking-wider">
                        {post.category}
                      </span>
                    </div>
                    <Typography variant="h4" className="mb-4 group-hover:text-secondary transition-colors line-clamp-2">
                      {post.title}
                    </Typography>
                    <Typography variant="body" className="mb-8 flex-grow line-clamp-3 text-sm">
                      {post.excerpt}
                    </Typography>
                    
                    <div className="pt-6 border-t border-border flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-xs text-text-secondary font-medium">
                        <User size={14} /> {post.author}
                      </div>
                      <div className="flex items-center gap-4 text-xs text-text-secondary">
                        <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                        <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
