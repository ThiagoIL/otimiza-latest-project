import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight,
  CheckCircle2,
  TrendingDown,
  FileSpreadsheet,
  HelpCircle,
  BarChart3,
  Gauge,
  ShieldCheck,
  Quote,
} from 'lucide-react';
import { PARTNERS, SUCCESS_CASES } from '../data';
import { SEO } from '../components/SEO';

const WHATSAPP_MSG = encodeURIComponent(
  'Olá, vim do anúncio e quero saber mais sobre o BI da Otimiza+'
);
const CTA_LINK = `/obrigado-whatsapp?text=${WHATSAPP_MSG}`;

const PAIN_POINTS = [
  {
    icon: TrendingDown,
    title: 'Não sei meu lucro real do mês',
    description:
      'A receita entra, as contas saem, mas na hora de dizer quanto sobrou de verdade, ninguém tem certeza.',
  },
  {
    icon: FileSpreadsheet,
    title: 'Dados espalhados em planilhas',
    description:
      'Cada informação mora numa planilha diferente, atualizada na mão, sem ninguém confiar 100% nos números.',
  },
  {
    icon: HelpCircle,
    title: 'Decisão baseada em achismo',
    description:
      'Sem indicadores em tempo real, cada decisão importante vira uma aposta em vez de uma escolha embasada.',
  },
];

const BI_BENEFITS = [
  'Visualização clara de indicadores (KPIs) em um único painel',
  'Identificação rápida de gargalos e oportunidades de lucro',
  'Dashboards interativos, automatizados e sempre atualizados',
  'Previsibilidade de faturamento, custos e fluxo de caixa',
];

// BI-relevant real success cases from the project data
const BI_TESTIMONIALS = SUCCESS_CASES.filter((c) =>
  ['1', '2'].includes(c.id)
);

const TRUST_STATS = [
  { value: '+30', label: 'Clientes Atendidos' },
  { value: '+1000', label: 'Pessoas Impactadas' },
  { value: '+8', label: 'Anos de Experiência' },
  { value: 'R$ 3M+', label: 'Em Custos Reduzidos' },
];

export const LandingBI = () => {
  return (
    <>
      <SEO
        title="BI para Empresas | Painel Financeiro em Tempo Real"
        description="Centralize suas planilhas em um painel de BI e veja entradas, saídas e resultado em tempo real. Diagnóstico gratuito em 15 minutos."
        canonical="https://otimizamaisgestao.com/lp/bi"
      />

      <div className="font-sans text-text-main">
        {/* Minimal header — logo only, no navigation, single conversion path */}
        <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur-sm py-4 border-b border-white/10">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center sm:justify-start">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 flex items-center justify-center">
                <img
                  src="/image/brand/logo.webp"
                  alt="Otimiza+ Logo"
                  width="36"
                  height="36"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tighter">
                Otimiza+
              </span>
            </div>
          </div>
        </header>

        {/* HERO */}
        <section className="relative bg-gradient-to-br from-primary via-[#153048] to-secondary overflow-hidden pt-16 pb-20 md:pt-20 md:pb-28">
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 -left-20 w-96 h-96 bg-white/5 rounded-full blur-[100px]" />

          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-14">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="w-full lg:w-[48%] text-center lg:text-left"
              >
                <span className="inline-block bg-accent/15 text-accent border border-accent/30 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-6">
                  Business Intelligence
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-white leading-[1.1] mb-6 tracking-tight font-display">
                  Sua Empresa Fatura Bem, Mas <br className="hidden lg:block" />
                  Você Não Sabe Onde Está o Lucro?
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Centralize suas planilhas em um painel de BI e veja entradas, saídas e
                  resultado em tempo real — sem depender de terceiros pra entender seus
                  números.
                </p>

                <div className="space-y-4">
                  <Link
                    to={CTA_LINK}
                    aria-label="Falar com Especialista em BI no WhatsApp"
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-accent text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-emerald-600 transition-all shadow-[0_20px_40px_-10px_rgba(39,174,96,0.5)] active:scale-95 group"
                  >
                    <span>Falar com Especialista em BI</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <p className="text-[13px] text-white/80">
                    ✓ +30 empresas já usam nosso BI &nbsp;|&nbsp; ✓ Diagnóstico gratuito em
                    15 min
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="w-full lg:w-[52%] flex justify-center lg:justify-end"
              >
                <div className="relative w-full max-w-2xl bg-white/10 backdrop-blur-md p-2 rounded-3xl shadow-2xl overflow-hidden border border-white/30">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/image/banner/hero-poster.jpg"
                    width="800"
                    height="500"
                    className="rounded-2xl w-full h-auto shadow-inner"
                    aria-label="Dashboard da Otimiza+ em uso, mostrando gráficos financeiros em tempo real"
                  >
                    <source src="/video/hero-dashboard-loop.webm" type="video/webm" />
                    <source src="/video/hero-dashboard-loop.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-accent/10 to-transparent pointer-events-none" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* TRUST BAR — social proof right after the fold */}
        <section className="bg-white py-10 border-b border-slate-100">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {TRUST_STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl md:text-4xl font-bold text-accent font-display">
                    {stat.value}
                  </p>
                  <p className="text-xs md:text-sm text-slate-500 font-semibold uppercase tracking-wide mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PAIN POINTS */}
        <section className="py-20 md:py-24 bg-neutral-bg">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Isso soa familiar?
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                Se você se identificou com algum desses pontos, um painel de BI resolve na
                raiz.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {PAIN_POINTS.map((pain, i) => (
                <motion.div
                  key={pain.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm card-hover"
                >
                  <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mb-6">
                    <pain.icon className="w-7 h-7 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{pain.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{pain.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS / BENEFITS */}
        <section className="py-20 md:py-24 bg-white">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block bg-secondary/10 text-secondary rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-5">
                  Como funciona
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Um painel só, com tudo que você precisa ver
                </h2>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  O BI da Otimiza+ vai além de gráficos bonitos. Criamos uma cultura
                  orientada a dados, onde cada decisão é baseada em fatos e indicadores
                  precisos, em tempo real.
                </p>
                <ul className="space-y-4 mb-10">
                  {BI_BENEFITS.map((benefit) => (
                    <li key={benefit} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={CTA_LINK}
                  aria-label="Quero um diagnóstico gratuito"
                  className="inline-flex items-center justify-center space-x-3 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-[#132c40] transition-all active:scale-95 group"
                >
                  <span>Quero um diagnóstico gratuito</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-2 gap-6"
              >
                <div className="bg-neutral-bg rounded-2xl p-6 border border-slate-100">
                  <BarChart3 className="w-8 h-8 text-secondary mb-4" />
                  <p className="font-bold text-primary mb-1">KPIs em Tempo Real</p>
                  <p className="text-sm text-slate-500">
                    Entradas, saídas e resultado sempre atualizados.
                  </p>
                </div>
                <div className="bg-neutral-bg rounded-2xl p-6 border border-slate-100 mt-8">
                  <Gauge className="w-8 h-8 text-accent mb-4" />
                  <p className="font-bold text-primary mb-1">Decisão em Minutos</p>
                  <p className="text-sm text-slate-500">
                    Nada de esperar relatório manual pra agir.
                  </p>
                </div>
                <div className="bg-neutral-bg rounded-2xl p-6 border border-slate-100">
                  <ShieldCheck className="w-8 h-8 text-primary mb-4" />
                  <p className="font-bold text-primary mb-1">Segurança Garantida</p>
                  <p className="text-sm text-slate-500">
                    Dados protegidos com padrões enterprise.
                  </p>
                </div>
                <div className="bg-neutral-bg rounded-2xl p-6 border border-slate-100 mt-8">
                  <TrendingDown className="w-8 h-8 text-red-500 mb-4 rotate-180" />
                  <p className="font-bold text-primary mb-1">Custos sob Controle</p>
                  <p className="text-sm text-slate-500">
                    Enxergue exatamente onde o dinheiro está indo.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS — real BI success cases */}
        <section className="py-20 md:py-24 bg-neutral-bg">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Quem já centralizou seus dados com a gente
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {BI_TESTIMONIALS.map((testimonial, i) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm relative"
                >
                  <Quote className="w-9 h-9 text-accent/20 absolute top-6 right-6" />
                  <p className="text-slate-700 leading-relaxed mb-6 italic">
                    "{testimonial.testimonial.length > 260
                      ? `${testimonial.testimonial.slice(0, 260).trim()}...`
                      : testimonial.testimonial}"
                  </p>
                  <div className="pt-5 border-t border-slate-100">
                    <p className="font-bold text-primary">{testimonial.clientName}</p>
                    <p className="text-sm text-slate-500">
                      {testimonial.company} — {testimonial.sector}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PARTNERS */}
        <section className="py-16 bg-white border-t border-slate-100 overflow-hidden">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
            Empresas que confiam na Otimiza+
          </p>
          <div className="flex animate-marquee-slow whitespace-nowrap">
            {[...PARTNERS, ...PARTNERS].map((partner, i) => (
              <img
                key={`${partner.id}-${i}`}
                src={partner.logo}
                alt={partner.name}
                className="h-10 mx-10 inline-block object-contain opacity-60 grayscale"
                loading="lazy"
              />
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-gradient-to-br from-primary via-[#153048] to-secondary py-20 md:py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[100px]" />
          <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              Agende seu diagnóstico gratuito esta semana
            </h2>
            <p className="text-white/90 text-lg mb-10">
              15 minutos de conversa pra entender onde seu BI pode destravar mais lucro.
              Sem compromisso.
            </p>
            <Link
              to={CTA_LINK}
              aria-label="Falar com Especialista em BI no WhatsApp"
              className="inline-flex items-center justify-center space-x-3 bg-accent text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-emerald-600 transition-all shadow-[0_20px_40px_-10px_rgba(39,174,96,0.5)] active:scale-95 group"
            >
              <span>Falar com Especialista em BI</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        {/* MINIMAL FOOTER — no distracting links, just legitimacy */}
        <footer className="bg-primary py-8 border-t border-white/5">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center space-x-3">
              <img
                src="/image/brand/logo.webp"
                alt="Otimiza+ Logo"
                width="28"
                height="28"
                className="w-7 h-7 object-contain"
                referrerPolicy="no-referrer"
              />
              <span className="font-display font-bold text-white">Otimiza+</span>
            </div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-slate-300 font-bold">
              © {new Date().getFullYear()} Otimiza+ · Natal - RN
            </p>
            <Link
              to="/privacidade"
              className="text-xs text-slate-300 hover:text-accent transition-colors"
            >
              Política de Privacidade
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
};
