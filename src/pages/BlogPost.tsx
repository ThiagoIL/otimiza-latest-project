import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Share2, Linkedin, Twitter, Facebook } from 'lucide-react';
import { motion } from 'motion/react';
import { BLOG_POSTS } from '../data';
import { SEO } from '../components/SEO';

export const BlogPost = () => {
  const { slug } = useParams();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) return <Navigate to="/blog" />;

  const relatedPosts = BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 2);

  return (
    <div className="pt-24 bg-white">
      <SEO 
        title={post.title} 
        description={post.excerpt} 
        ogType="article" 
        ogImage={post.image.startsWith('http') ? post.image : `https://otimizamaisgestao.com${post.image}`}
      />
      {/* Post Header */}
      <header className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center text-slate-500 hover:text-primary font-medium mb-8 transition-colors group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Voltar para o blog
          </Link>
          
          <div className="flex items-center space-x-2 text-sm font-bold text-primary uppercase tracking-wider mb-4">
            <span>{post.category}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-slate-500 text-sm font-medium">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center mr-3">
                <User className="w-5 h-5 text-slate-400" />
              </div>
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{post.date}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Post Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden shadow-xl mb-12 aspect-video">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          
          <div className="prose prose-lg prose-slate max-w-none mb-16">
            <p className="lead text-xl text-slate-600 font-medium mb-8">
              {post.excerpt}
            </p>
            <div className="text-slate-700 leading-relaxed space-y-6">
              <p>{post.content}</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Por que isso é importante?</h2>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <blockquote className="border-l-4 border-primary pl-6 py-2 italic text-slate-900 font-medium bg-slate-50 rounded-r-xl">
                "A inteligência de dados não é mais um diferencial competitivo, é uma questão de sobrevivência no mercado atual."
              </blockquote>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </div>

          {/* Share */}
          <div className="py-8 border-t border-b border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-6 mb-16">
            <span className="font-bold text-slate-900">Gostou do artigo? Compartilhe:</span>
            <div className="flex space-x-4">
              <button className="p-2 rounded-full bg-slate-50 text-slate-600 hover:text-primary hover:bg-primary/5 transition-all"><Linkedin className="w-5 h-5" /></button>
              <button className="p-2 rounded-full bg-slate-50 text-slate-600 hover:text-primary hover:bg-primary/5 transition-all"><Twitter className="w-5 h-5" /></button>
              <button className="p-2 rounded-full bg-slate-50 text-slate-600 hover:text-primary hover:bg-primary/5 transition-all"><Facebook className="w-5 h-5" /></button>
              <button className="p-2 rounded-full bg-slate-50 text-slate-600 hover:text-primary hover:bg-primary/5 transition-all"><Share2 className="w-5 h-5" /></button>
            </div>
          </div>

          {/* Related Posts */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Artigos Relacionados</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map(p => (
                <Link key={p.id} to={`/blog/${p.slug}`} className="group">
                  <div className="aspect-video rounded-2xl overflow-hidden mb-4 shadow-sm">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  </div>
                  <h4 className="font-bold text-slate-900 group-hover:text-primary transition-colors leading-tight">
                    {p.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Precisa de ajuda com sua estratégia de dados?</h2>
          <p className="text-slate-600 mb-10">Nossos especialistas estão prontos para diagnosticar sua empresa e propor as melhores soluções.</p>
          <Link to="/contato" className="inline-block bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
            Agendar Reunião com Especialista
          </Link>
        </div>
      </section>
    </div>
  );
};
