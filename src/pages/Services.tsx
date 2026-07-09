import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICES } from '../data';
import * as Icons from 'lucide-react';
import { SEO } from '../components/SEO';

const IconComponent = ({ name, className }: { name: string; className?: string }) => {
  const Icon = (Icons as any)[name];
  return Icon ? <Icon className={className} /> : null;
};

export const Services = () => {
  return (
    <div className="pt-24 pb-16">
      <SEO 
        title="Nossos Serviços" 
        description="Conheça nossas soluções em implantação de sistemas, BI, assessoria em dados e automação de processos." 
      />
      
      {/* Header Section */}
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
              <h4 className="text-secondary font-bold uppercase tracking-[0.2em] text-xs mb-4">Soluções</h4>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 font-display leading-[1.1]">
                Nossas <span className="text-accent italic">Soluções</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed font-sans font-normal">
                Oferecemos um ecossistema completo para a gestão da sua empresa, do operacional ao estratégico, focado em resultados reais através de dados.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 card-hover flex flex-col h-full"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8">
                  <IconComponent name={service.icon} className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h2>
                <p className="text-slate-600 mb-8 text-lg leading-relaxed flex-grow">
                  {service.fullDescription || service.description}
                </p>
                
                <div className="space-y-4 mb-8">
                  <p className="font-bold text-slate-900 uppercase tracking-wider text-sm">Principais Benefícios:</p>
                  <ul className="space-y-2">
                    {service.benefits.slice(0, 3).map((benefit, i) => (
                      <li key={i} className="flex items-start space-x-3 text-slate-600">
                        <div className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full shrink-0"></div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={`/servicos/${service.slug}`}
                  className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-all group w-full sm:w-max"
                >
                  <span>Detalhes do Serviço</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-[3rem] p-12 md:p-16 text-center text-white relative overflow-hidden">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Precisa de uma solução personalizada?</h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto relative z-10">
              Nossa equipe está pronta para entender os desafios do seu negócio e propor a melhor estratégia de dados.
            </p>
            <Link
              to="/contato"
              className="inline-block bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-all shadow-xl relative z-10"
            >
              Falar com Especialista
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
