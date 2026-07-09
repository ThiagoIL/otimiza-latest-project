import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, CheckCircle2, ArrowRight, Building2, Target, BarChart, TrendingUp, Zap, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SUCCESS_CASES } from '../data';
import { SEO } from '../components/SEO';

export const Cases = () => {
  const [activeTestimonialId, setActiveTestimonialId] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (activeTestimonialId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeTestimonialId]);

  const activeCase = SUCCESS_CASES.find(caseItem => caseItem.id === activeTestimonialId);

  return (
    <div className="pt-24 min-h-screen bg-neutral-bg">
      <SEO 
        title="Cases | Otimiza+" 
        description="Confira como ajudamos empresas reais a alcançarem resultados extraordinários através de BI, automação e inteligência de dados." 
      />
      
      {/* Hero Header */}
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
              <h4 className="text-secondary font-bold uppercase tracking-[0.2em] text-xs mb-4">Impacto Real</h4>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 font-display leading-[1.1]">
                Nossos dados contam <span className="text-accent italic">histórias</span> de sucesso.
              </h1>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed font-sans font-normal">
                Explorar como a Otimiza+ ajudou empresas de diversos setores a 
                digitalizarem seus processos e multiplicarem seus resultados.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section (Quick Social Proof) */}
      <section className="bg-white border-b border-slate-100 py-12">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Lucro Médio Extra', value: '35%', icon: TrendingUp },
              { label: 'Tempo Economizado', value: '40h/mês', icon: Zap },
              { label: 'ROI Mínimo', value: '250%', icon: BarChart },
              { label: 'Projetos Entregues', value: '50+', icon: Target },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center md:items-start">
                <div className="flex flex-center gap-3 mb-2">
                  <stat.icon className="w-5 h-5 text-accent" />
                  <span className="text-2xl md:text-3xl font-bold text-primary font-display">{stat.value}</span>
                </div>
                <span className="text-xs uppercase tracking-widest text-slate-500 font-bold">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Cases Grid */}
      <section className="py-24 relative bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SUCCESS_CASES.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#F5F5F5] p-8 rounded-2xl border-l-[4px] border-primary shadow-sm flex flex-col h-full hover:shadow-md transition-shadow font-sans"
              >
                <div className="mb-6 flex justify-between items-start">
                  <div>
                    <span className="text-accent text-xs font-extrabold uppercase tracking-widest block mb-1">{item.company}</span>
                    <h3 className="text-xl font-bold text-slate-900 leading-tight mb-2">"{item.title}"</h3>
                    <div className="flex flex-wrap gap-x-2 gap-y-1 text-slate-500 text-[13px] font-normal italic">
                      <span className="flex items-center gap-1"><Building2 className="w-3.5 h-3.5" /> Setor: {item.sector}</span>
                    </div>
                  </div>
                  <Quote className="w-8 h-8 text-primary/20 shrink-0" strokeWidth={1.5} />
                </div>

                {/* Cliente Testimonial Bubble */}
                <div className="bg-white p-5 rounded-xl border-l-[3px] border-accent mb-6 shadow-sm min-h-[175px] flex flex-col justify-between">
                  <div>
                    <p className="text-slate-700 text-sm italic leading-relaxed font-normal">
                      {item.testimonial.length > 200 ? (
                        <>
                          "{item.testimonial.slice(0, 195)}..."
                          <button
                            type="button"
                            onClick={() => setActiveTestimonialId(item.id)}
                            className="text-accent hover:text-emerald-700 text-xs font-bold font-sans ml-1 hover:underline transition-all inline-block active:scale-95 cursor-pointer font-medium"
                          >
                            Ler mais
                          </button>
                        </>
                      ) : (
                        <>
                          "{item.testimonial}"
                        </>
                      )}
                    </p>
                  </div>
                  <p className="text-xs font-bold text-slate-900 flex items-center gap-1.5 mt-3 pt-3 border-t border-slate-50">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full inline-block"></span>
                    {item.clientName}
                  </p>
                </div>

                <div className="space-y-6 flex-grow py-2">
                  <div className="bg-white/60 p-5 rounded-xl border border-white/80">
                    <h4 className="text-[14px] font-bold text-slate-900 uppercase tracking-wider mb-3">O Resultado</h4>
                    <ul className="space-y-2">
                      {item.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-700 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200">
                  <Link
                    to="/contato"
                    className="inline-flex items-center text-primary font-bold hover:underline gap-2"
                  >
                    <span>Quero resultados assim</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial Hero-style */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-[3rem] p-8 md:p-20 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 -mr-32" />
             
             <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                   <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-display">"Eles não entregam apenas dashboards, entregam clareza para o negócio."</h2>
                   <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center text-accent font-bold text-2xl">
                        LB
                      </div>
                      <div>
                        <p className="text-white font-bold text-lg">Diretor de Operações</p>
                      </div>
                   </div>
                </div>
                <div className="lg:pl-12">
                   <p className="text-white/80 text-lg leading-relaxed mb-8 italic">
                     "Antes da Otimiza+, perdíamos cerca de 2 dias por semana apenas organizando dados para a reunião de diretoria. Hoje, os dados estão prontos 24/7. O impacto na nossa agilidade de resposta ao mercado foi brutal."
                   </p>
                   <Link to="/contato" className="text-secondary font-bold hover:text-accent transition-colors flex items-center gap-2">
                      Conheça nossa assessoria mensal <ArrowRight className="w-4 h-4" />
                   </Link>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 font-display">Sua empresa será o <span className="text-accent underline decoration-4 underline-offset-8">próximo</span> resultado?</h2>
          <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto font-sans leading-relaxed">
            Estamos prontos para aplicar o mesmo rigor analítico e automação inteligente no seu negócio. 
            Agende uma conversa técnica sem compromisso.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/contato" 
              className="w-full sm:w-auto bg-accent text-white px-12 py-5 rounded-2xl font-bold text-lg hover:shadow-[0_20px_40px_-10px_rgba(39,174,96,0.3)] hover:-translate-y-1 transition-all duration-300"
            >
              Falar com um Especialista
            </Link>
            <Link 
              to="/servicos" 
              className="w-full sm:w-auto text-primary px-12 py-5 rounded-2xl font-bold text-lg border-2 border-slate-200 hover:border-primary transition-all duration-300"
            >
              Explorar Soluções
            </Link>
          </div>
        </div>
      </section>

      {/* Modal Testimonial */}
      <AnimatePresence>
        {activeCase && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveTestimonialId(null)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="relative bg-white w-full max-w-xl rounded-2xl shadow-2xl p-6 md:p-8 z-10 border border-slate-100 flex flex-col font-sans"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveTestimonialId(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header Info */}
              <div className="mb-6">
                <span className="text-accent text-[11px] font-extrabold uppercase tracking-widest block mb-1">
                  {activeCase.company}
                </span>
                <span className="text-slate-500 text-xs flex items-center gap-1 font-normal italic">
                  <Building2 className="w-3 h-3" /> Setor: {activeCase.sector}
                </span>
              </div>

              {/* Testimonial Core */}
              <div className="relative mb-6 flex-grow">
                <Quote className="absolute -top-4 -left-2 w-10 h-10 text-accent/10 shrink-0 select-none pointer-events-none" strokeWidth={1} />
                <p className="text-slate-700 text-base md:text-lg italic leading-relaxed font-normal relative z-10 pl-6 pr-2">
                  "{activeCase.testimonial}"
                </p>
              </div>

              {/* Client Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100 mt-auto">
                <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-bold text-xs shrink-0 select-none">
                  {activeCase.clientName.substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 leading-none">
                    {activeCase.clientName}
                  </p>
                  <p className="text-xs text-slate-500 mt-1 font-normal">
                    Representando {activeCase.company}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
