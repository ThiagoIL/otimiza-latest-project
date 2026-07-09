import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Settings, Database, Zap, CheckCircle2, MessageCircle, ShieldCheck, LayoutGrid, Globe, Download } from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICES, BLOG_POSTS, PARTNERS, SUCCESS_CASES } from '../data';
import { CONTACT_INFO } from '../constants';
import { Partner } from '../types';
import { SEO } from '../components/SEO';

const iconMap: Record<string, React.ElementType> = {
  Settings,
  BarChart3,
  Database,
  Zap,
  Globe,
  LayoutGrid,
};

const IconComponent = ({ name, className }: { name: string; className?: string }) => {
  const Icon = iconMap[name];
  return Icon ? <Icon className={className} /> : null;
};

export const Home = () => {
  const partners = PARTNERS;

  return (
    <div className="overflow-hidden">
      <SEO 
        title="Início" 
        description="Transforme dados em decisões lucrativas. Aumente receita, reduza custos e domine seu mercado com inteligência de dados em tempo real." 
        preloadHero={true}
      />
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-primary to-secondary pt-32 pb-20 lg:py-12">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Text Content (48%) */}
            <div className="w-full lg:w-[48%] text-center lg:text-left space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.1] mb-8 tracking-tight font-display">
                  Transforme Dados em <br />
                  Decisões Lucrativas
                </h1>
                <p className="text-xl md:text-[20px] text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-sans">
                  Aumente receita, reduza custos e domine seu mercado com inteligência de dados em tempo real.
                </p>
                
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                    <Link
                      to="/obrigado-whatsapp"
                      aria-label="Falar com um especialista"
                      className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-accent text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-emerald-600 transition-all shadow-[0_20px_40px_-10px_rgba(39,174,96,0.5)] active:scale-95 group"
                    >
                      <span>Falar com um Especialista</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  <p className="text-[13px] text-white/80 font-sans lg:pl-2">
                    ✓ Conversa estratégica | Sem compromisso
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Image Content (52%) */}
            <div className="w-full lg:w-[52%] flex justify-center lg:justify-end">
              <div className="relative w-full max-w-2xl lg:max-w-none">
                {/* Background Glows */}
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/20 rounded-full blur-[80px] animate-pulse"></div>
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-white/10 rounded-full blur-[80px] animate-pulse delay-700"></div>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="relative z-10 bg-white/10 backdrop-blur-md p-2 rounded-3xl shadow-2xl overflow-hidden border border-white/30"
                >
                  <img 
                    src="/image/banner/hero.webp" 
                    alt="Dashboard mostrando gráficos da Otimiza+" 
                    width="800"
                    height="500"
                    fetchPriority="high"
                    className="rounded-2xl w-full h-auto opacity-100 shadow-inner"
                    referrerPolicy="no-referrer"
                  />
                  {/* Decorative Internal Overlay */}
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-accent/10 to-transparent pointer-events-none"></div>
                </motion.div>
                
                {/* Floating elements to simulate a dashboard feel */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute -top-6 -right-6 z-20 bg-white p-4 rounded-2xl shadow-2xl animate-float hidden sm:block"
                >
                  <BarChart3 className="w-8 h-8 text-secondary mb-1" />
                  <div className="h-1.5 w-12 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full w-[70%] bg-accent"></div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Pillars Section */}
      <section className="py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-display uppercase tracking-widest">Nossos 3 Pilares</h2>
            <div className="h-1.5 w-24 bg-accent mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Pillar 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-neutral-bg p-12 rounded-3xl border-t-4 border-primary shadow-sm flex flex-col items-center text-center group hover:shadow-2xl transition-all duration-500"
            >
              <div className="w-20 h-20 bg-white shadow-inner rounded-3xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                <LayoutGrid className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-4 uppercase tracking-wider font-display">Centralização Total</h3>
              <p className="text-sm font-normal text-text-main leading-relaxed">
                Diga adeus a planilhas e ferramentas desconectadas. Um único painel com todos os seus dados críticos.
              </p>
            </motion.div>

            {/* Pillar 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-neutral-bg p-12 rounded-3xl border-t-4 border-secondary shadow-sm flex flex-col items-center text-center group hover:shadow-2xl transition-all duration-500"
            >
              <div className="w-20 h-20 bg-white shadow-inner rounded-3xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                <Zap className="w-12 h-12 text-secondary" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-4 uppercase tracking-wider font-display">Decisões em Minutos</h3>
              <p className="text-sm font-normal text-text-main leading-relaxed">
                Relatórios em tempo real eliminam atrasos. Sua equipe reage à oportunidades, não a crises.
              </p>
            </motion.div>

            {/* Pillar 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-neutral-bg p-12 rounded-3xl border-t-4 border-accent shadow-sm flex flex-col items-center text-center group hover:shadow-2xl transition-all duration-500"
            >
              <div className="w-20 h-20 bg-white shadow-inner rounded-3xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                <ShieldCheck className="w-12 h-12 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-4 uppercase tracking-wider font-display">Segurança Garantida</h3>
              <p className="text-sm font-normal text-text-main leading-relaxed">
                Dados sensíveis protegidos com padrões enterprise. Conformidade LGPD/ISO certificada.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-display uppercase tracking-widest">Nossas Soluções</h2>
            <p className="text-text-main max-w-2xl mx-auto">
              Oferecemos um ecossistema completo para a gestão da sua empresa, do operacional ao estratégico.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-neutral-bg p-8 rounded-3xl border border-slate-100 card-hover"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6">
                  <IconComponent name={service.icon} className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6 line-clamp-3">
                  {service.description}
                </p>
                <Link
                  to={`/servicos/${service.slug}`}
                  className="inline-flex items-center text-primary font-bold hover:underline group"
                >
                  <span>Ver Como Funciona em 5 min</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 font-display text-white">Por que escolher a Otimiza+?</h2>
              <div className="space-y-6">
                {[
                  'Especialização em dados e gestão empresarial',
                  'Implementação orientada a resultados reais',
                  'Automação inteligente de processos',
                  'Integração total entre seus sistemas',
                  'Foco em redução de custos operacionais',
                  'Mais de 1.000 pessoas impactadas'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="mt-1 bg-accent p-1.5 rounded-full shadow-lg shadow-accent/20">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg text-white/90">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-white/20 to-accent/20 p-1 rounded-3xl shadow-2xl">
                <div className="bg-primary-dark/40 backdrop-blur-sm rounded-[calc(1.5rem-1px)] p-8">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-accent mb-2 tracking-tighter">+30</div>
                      <div className="text-[11px] text-white/80 uppercase tracking-widest font-bold">Clientes atendidos</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-accent mb-2 tracking-tighter">+1000</div>
                      <div className="text-[11px] text-white/80 uppercase tracking-widest font-bold">Pessoas impactadas</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-accent mb-2 tracking-tighter">+8</div>
                      <div className="text-[11px] text-white/80 uppercase tracking-widest font-bold">Anos Exp.</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-accent mb-2 tracking-tighter">R$ 3M+</div>
                      <div className="text-[11px] text-white/80 uppercase tracking-widest font-bold">Custos reduzidos</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof (Infinite Marquee) */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-display uppercase tracking-widest">Nossos Parceiros Estratégicos</h2>
          <div className="h-1.5 w-16 bg-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="flex overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee-slow" role="marquee" aria-label="Nossos parceiros estratégicos">
            {/* Seamless loop set */}
            {partners.map((partner, index) => (
              <div key={`${partner.id}-${index}`} className="flex items-center justify-center mx-10 md:mx-16 w-40 md:w-56 h-24 md:h-32">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  width="200"
                  height="80"
                  loading="lazy"
                  className="h-12 md:h-20 w-auto object-contain transition-transform duration-300 hover:scale-110" 
                  referrerPolicy="no-referrer" 
                />
              </div>
            ))}
            {/* Duplicated for smooth transition */}
            {partners.map((partner, index) => (
              <div key={`dup-${partner.id}-${index}`} className="flex items-center justify-center mx-10 md:mx-16 w-40 md:w-56 h-24 md:h-32" aria-hidden="true">
                <img 
                  src={partner.logo} 
                  alt="" 
                  width="200"
                  height="80"
                  loading="lazy"
                  className="h-12 md:h-20 w-auto object-contain" 
                  referrerPolicy="no-referrer" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-display uppercase tracking-widest">Blog & Insights</h2>
              <p className="text-text-main">Acompanhe as últimas tendências e dicas para otimizar seu negócio.</p>
            </div>
            <Link
              to="/blog"
              className="bg-white text-primary border border-primary/20 px-8 py-3 rounded-xl font-bold hover:bg-neutral-bg transition-all shadow-sm"
            >
              Ver todos os artigos
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-neutral-bg rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 card-hover"
              >
                <Link to={`/blog/${post.slug}`} className="block aspect-video overflow-hidden" aria-label={`Ler artigo: ${post.title}`}>
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    width="400"
                    height="225"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                    referrerPolicy="no-referrer" 
                  />
                </Link>
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-xs font-bold text-primary uppercase tracking-wider mb-3">
                    <span>{post.category}</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-400">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
                    <Link to={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-slate-600 text-sm mb-6 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary font-bold text-sm hover:underline group"
                  >
                    <span>Ler artigo</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-neutral-bg">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary to-secondary rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full -ml-48 -mb-48 blur-3xl"></div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-8 relative z-10 font-display text-white">Pronto para otimizar sua gestão?</h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto relative z-10 font-sans">
              Agende uma conversa com nossos especialistas e descubra como podemos ajudar sua empresa a crescer com dados.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
              <Link
                to="/obrigado-whatsapp"
                className="bg-white text-primary px-10 py-5 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all shadow-xl text-center flex items-center justify-center"
              >
                Falar no WhatsApp
              </Link>
              <Link
                to="/obrigado-whatsapp"
                className="bg-accent text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-emerald-600 transition-all shadow-xl shadow-accent/20 text-center flex items-center justify-center"
              >
                Falar com um Especialista
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
