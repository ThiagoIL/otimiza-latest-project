import React from 'react';
import { CheckCircle2, Target, Eye, Rocket } from 'lucide-react';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';

export const About = () => {
  return (
    <div className="pt-24">
      <SEO title="Sobre Nós" description="Conheça a Otimiza+ Gestão e nossa missão de transformar dados em clareza estratégica para empresas que buscam eficiência e crescimento." />
      {/* Hero */}
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
              <h4 className="text-secondary font-bold uppercase tracking-[0.2em] text-xs mb-4">Institucional</h4>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 font-display leading-[1.1]">
                <span className="text-accent italic">Quem</span> Somos
              </h1>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed font-sans font-normal">
                A Otimiza+ Gestão nasceu da necessidade de transformar a complexidade dos dados empresariais em clareza estratégica.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Nossa História</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Fundada por especialistas em gestão e tecnologia, a Otimiza+ surgiu para preencher a lacuna entre os sistemas de gestão tradicionais e a inteligência de dados moderna.
                </p>
                <p>
                  Percebemos que muitas empresas possuíam sistemas caros, mas continuavam tomando decisões baseadas no "feeling" ou em planilhas manuais propensas a erros.
                </p>
                <p>
                  Hoje, somos referência em implantação de sistemas e Business Intelligence, ajudando centenas de empresas a estruturarem seus processos e dados para um crescimento sustentável.
                </p>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/image/quem-somos/nossa-equipe.jpg" 
                alt="Equipe Otimiza+ Gestão" 
                width="600"
                height="400"
                loading="lazy"
                className="w-full h-auto" 
                referrerPolicy="no-referrer" 
              />
            </div>
          </div>

          {/* Mission, Vision, Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Nossa Missão</h3>
              <p className="text-slate-600">
                Ajudar empresas a tomar decisões melhores através de dados, tecnologia e processos estruturados, gerando eficiência e lucratividade.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Nossa Visão</h3>
              <p className="text-slate-600">
                Ser a principal parceira estratégica de dados e gestão para empresas que buscam excelência operacional e inovação tecnológica.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Rocket className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Nossos Valores</h3>
              <ul className="text-slate-600 space-y-2">
                <li>• Transparência radical</li>
                <li>• Foco em resultados</li>
                <li>• Inovação constante</li>
                <li>• Ética e segurança de dados</li>
              </ul>
            </div>
          </div>

          {/* Methodology */}
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossa Metodologia</h2>
              <p className="text-slate-200 max-w-2xl mx-auto">Um processo estruturado para garantir o sucesso da sua transformação digital.</p>
            </div>
            
            <div className="grid md:grid-cols-5 gap-8">
              {[
                { step: '01', title: 'Diagnóstico', desc: 'Análise profunda dos processos e dados atuais.' },
                { step: '02', title: 'Estruturação', desc: 'Modelagem da base de dados e fluxos.' },
                { step: '03', title: 'Implantação', desc: 'Configuração de sistemas e ferramentas.' },
                { step: '04', title: 'Automação', desc: 'Integração e eliminação de tarefas manuais.' },
                { step: '05', title: 'Monitoramento', desc: 'Acompanhamento de KPIs e melhoria contínua.' }
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="text-5xl font-bold text-white/10 mb-4">{item.step}</div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-200">{item.desc}</p>
                  {index < 4 && (
                    <div className="hidden lg:block absolute top-8 -right-4 w-8 h-px bg-white/10"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
