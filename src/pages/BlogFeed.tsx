import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Calendar, User } from 'lucide-react';
import { motion } from 'motion/react';
import { BLOG_POSTS } from '../data';
import { SEO } from '../components/SEO';

export const BlogFeed = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <SEO title="Blog & Insights" description="Conteúdo especializado sobre dados, gestão e tecnologia para impulsionar seu negócio." />
      {/* Header */}
      <section className="relative py-24 bg-primary overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/4 w-full h-px bg-white/20 -rotate-12" />
          <div className="absolute top-1/2 left-1/4 w-full h-px bg-white/20 rotate-12" />
        </div>

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-secondary font-bold uppercase tracking-[0.2em] text-xs mb-4">Conteúdo</h4>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 font-display leading-[1.1]">
                Blog & <span className="text-accent italic">Insights</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed font-sans font-normal">
                Conteúdo especializado sobre dados, gestão e tecnologia para impulsionar seu negócio.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="py-8 bg-white sticky top-[72px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Buscar artigos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 card-hover flex flex-col"
                >
                  <Link to={`/blog/${post.slug}`} className="block aspect-video overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" referrerPolicy="no-referrer" />
                  </Link>
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex items-center space-x-2 text-xs font-bold text-primary uppercase tracking-wider mb-4">
                      <span>{post.category}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight">
                      <Link to={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-slate-600 mb-8 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between text-xs text-slate-400 font-medium">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center"><Calendar className="w-3.5 h-3.5 mr-1.5" /> {post.date}</span>
                      </div>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="text-primary font-bold flex items-center group"
                      >
                        Ler mais <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-slate-500">Nenhum artigo encontrado para sua busca.</p>
              <button 
                onClick={() => {setSearchTerm('');}}
                className="mt-4 text-primary font-bold hover:underline"
              >
                Limpar busca
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
