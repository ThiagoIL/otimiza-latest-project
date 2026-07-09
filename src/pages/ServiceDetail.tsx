import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { CheckCircle2, ArrowRight, MessageCircle, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICES } from '../data';
import { CONTACT_INFO } from '../constants';
import * as Icons from 'lucide-react';
import { SEO } from '../components/SEO';

const IconComponent = ({ name, className }: { name: string; className?: string }) => {
  const Icon = (Icons as any)[name];
  return Icon ? <Icon className={className} /> : null;
};

export const ServiceDetail = () => {
  const { slug } = useParams();
  const service = SERVICES.find(s => s.slug === slug);

  const [activeImg, setActiveImg] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (service) {
      setActiveImg(service.image);
    }
  }, [service]);

  if (!service) return <Navigate to="/" />;

  return (
    <div className="pt-24">
      <SEO 
        title={service.title} 
        description={service.description} 
        ogImage={`https://otimizamaisgestao.com${service.image}`}
      />
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-slate-500">
            <Link to="/" className="hover:text-primary transition-colors"><span>Início</span></Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-900 font-medium">{service.title}</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="py-20 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
                <IconComponent name={service.icon} className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                {service.title}
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                {service.fullDescription}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to={`/obrigado-whatsapp?text=Olá! Gostaria de solicitar um orçamento para o serviço: ${service.title}`}
                  className="flex items-center space-x-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Solicitar Orçamento</span>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl bg-white border border-slate-100 p-2">
                <img 
                  src={activeImg || service.image} 
                  alt={service.title} 
                  className="w-full h-auto rounded-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>

              {service.additionalImages && service.additionalImages.length > 0 && (
                <div className="mt-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 text-center">
                    Visualizar Telas do Sistema (Clique para alternar)
                  </p>
                  <div className="flex gap-4 justify-center">
                    <button
                      type="button"
                      onClick={() => setActiveImg(service.image)}
                      className={`relative w-28 h-18 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                        (!activeImg || activeImg === service.image)
                          ? 'border-primary ring-2 ring-primary/20 scale-105 shadow-md'
                          : 'border-slate-200 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={service.image}
                        alt="Painel Geral"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute bottom-0 inset-x-0 bg-slate-900/60 text-[9px] text-white py-0.5 text-center font-medium font-sans">
                        Painel Geral
                      </span>
                    </button>
                    {service.additionalImages.map((img, idx) => {
                      const label = img.includes('planejamentos')
                        ? 'Planejamentos'
                        : img.includes('giro_home')
                          ? 'Giro Estoque'
                          : img.includes('giro_catalogo')
                            ? 'Estoque Itens'
                            : img.includes('auditoria')
                              ? 'Auditoria'
                              : `Tela ${idx + 2}`;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setActiveImg(img)}
                          className={`relative w-28 h-18 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                            activeImg === img
                              ? 'border-primary ring-2 ring-primary/20 scale-105 shadow-md'
                              : 'border-slate-200 opacity-60 hover:opacity-100'
                          }`}
                        >
                          <img
                            src={img}
                            alt={`Tela ${label}`}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                          <span className="absolute bottom-0 inset-x-0 bg-slate-900/60 text-[9px] text-white py-0.5 text-center font-medium font-sans">
                            {label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits & Examples */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-10">Principais Benefícios</h2>
              <div className="space-y-6">
                {service.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-6 bg-slate-50 rounded-2xl border border-slate-100"
                  >
                    <div className="mt-1 bg-primary/10 p-1 rounded-full">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-lg text-slate-700 font-medium">{benefit}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Examples */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-10">Exemplos de Aplicação</h2>
              <div className="space-y-8">
                {service.examples.map((example, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-8 border-l-2 border-slate-100"
                  >
                    <div className="absolute top-0 -left-[9px] w-4 h-4 bg-primary rounded-full border-4 border-white"></div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{example}</h3>
                    <p className="text-slate-600">
                      Implementação focada em resultados específicos para este cenário, garantindo máxima eficiência e retorno sobre o investimento.
                    </p>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-12 p-8 bg-slate-900 rounded-3xl text-white">
                <h3 className="text-xl font-bold mb-4">Dúvidas sobre este serviço?</h3>
                <p className="text-slate-400 mb-6">Nossa equipe técnica está disponível para explicar como esta solução se aplica ao seu modelo de negócio.</p>
                <Link to="/contato" className="inline-flex items-center font-bold text-primary hover:text-accent transition-colors">
                  Falar com consultor <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      {service.videoUrl && (
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Veja na Prática</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Confira como nossa assessoria em dados ajuda empresas a alcançarem novos patamares de eficiência.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-[400px] aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl bg-slate-100">
                <iframe
                  src={`${service.videoUrl}${service.videoUrl.endsWith('/') ? '' : '/'}embed`}
                  className="w-full h-full border-0"
                  allowTransparency
                  allow="encrypted-media"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Other Services */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Outras Soluções</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.filter(s => s.id !== service.id).slice(0, 3).map(s => (
              <Link
                key={s.id}
                to={`/servicos/${s.slug}`}
                className="bg-white p-8 rounded-3xl border border-slate-100 card-hover flex flex-col"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6">
                  <IconComponent name={s.icon} className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{s.title}</h3>
                <p className="text-slate-600 text-sm mb-6 flex-1">{s.description}</p>
                <span className="text-primary font-bold text-sm flex items-center">
                  Ver detalhes <ArrowRight className="w-4 h-4 ml-2" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
