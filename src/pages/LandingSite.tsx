import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight,
  CheckCircle2,
  SearchX,
  MousePointerClick,
  Hourglass,
  Smartphone,
  Gauge,
  Search,
  Target,
  Quote,
} from 'lucide-react';
import { PARTNERS, SUCCESS_CASES } from '../data';
import { SEO } from '../components/SEO';
import { SiteMockup } from '../components/SiteMockup';

const WHATSAPP_MSG = encodeURIComponent(
  'Olá, vim do anúncio e quero saber mais sobre criação de site com a Otimiza+'
);
const CTA_LINK = `/obrigado-whatsapp?text=${WHATSAPP_MSG}`;

const PAIN_POINTS = [
  {
    icon: SearchX,
    title: 'Seu site não aparece no Google',
    description:
      'Sem otimização para buscadores, quem procura pelo que você vende simplesmente não te encontra.',
  },
  {
    icon: MousePointerClick,
    title: 'Visitante entra e sai sem virar cliente',
    description:
      'Um site bonito não basta: sem foco em conversão, cada visita vira uma oportunidade perdida.',
  },
  {
    icon: Hourglass,
    title: 'Site lento, quebrado ou desatualizado',
    description:
      'Carregamento lento e layout que não funciona no celular afastam o visitante antes mesmo de ele ler a primeira frase.',
  },
];

const SITE_BENEFITS = [
  'Design moderno e 100% responsivo (celular, tablet e desktop)',
  'Otimização para mecanismos de busca (SEO) desde o primeiro dia',
  'Estrutura pensada para conversão de leads, não só estética',
  'Alta performance e velocidade de carregamento',
];

// General (non service-specific) success cases from the project data —
// there isn't a dedicated "site" case yet, so we lean on real client
// feedback about working with the Otimiza+ team.
const SITE_TESTIMONIALS = SUCCESS_CASES.filter((c) => ['3', '4'].includes(c.id));

const TRUST_STATS = [
  { value: '+30', label: 'Clientes Atendidos' },
  { value: '+1000', label: 'Pessoas Impactadas' },
  { value: '+8', label: 'Anos de Experiência' },
  { value: '+500', label: 'Leads Gerados' },
];

export const LandingSite = () => {
  return (
    <>
      <SEO
        title="Criação de Site Profissional | Feito Para Converter"
        description="Criamos sites modernos, rápidos e otimizados para buscadores, com foco total em transformar visitantes em clientes. Proposta gratuita em 15 minutos."
        canonical="https://otimizamaisgestao.com/lp/site"
      />

      <div className="font-sans text-text-main">
        {/* Minimal header — logo only, no navigation, single conversion path */}
        <header className="sticky top-0 z-50 bg-[#0B2A5C]/95 backdrop-blur-sm py-4 border-b border-white/10">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center sm:justify-start">
            <Link to="/" aria-label="Ir para a página inicial da Otimiza+" className="flex items-center space-x-3">
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
            </Link>
          </div>
        </header>

        {/* HERO */}
        <section className="relative bg-gradient-to-br from-[#0B2A5C] via-[#0D3A85] to-[#0F5FDC] overflow-hidden pt-16 pb-20 md:pt-20 md:pb-28">
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 -left-20 w-96 h-96 bg-white/5 rounded-full blur-[100px]" />

          <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-14">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="w-full lg:w-[38%] text-center lg:text-left"
              >
                <span className="inline-block bg-accent/15 text-accent border border-accent/30 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-5">
                  Criação de Sites
                </span>
                <h1 className="text-5xl md:text-6xl lg:text-[58px] font-bold text-white leading-[1.05] mb-5 tracking-tight font-display">
                  Um Site Que Vende <br className="hidden lg:block" />
                  Por Você, Todos os Dias
                </h1>
                <p className="text-base md:text-lg text-white/80 mb-7 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  Criamos sites modernos, rápidos e otimizados para buscadores, com foco
                  total em transformar cada visita em oportunidade de negócio.
                </p>

                <div className="space-y-3">
                  <Link
                    to={CTA_LINK}
                    aria-label="Falar com Especialista em Sites no WhatsApp"
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-accent text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-emerald-600 transition-all shadow-[0_20px_40px_-10px_rgba(39,174,96,0.5)] active:scale-95 group"
                  >
                    <span>Falar com Especialista em Sites</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <p className="text-[13px] text-white/70">
                    ✓ +30 empresas atendidas &nbsp;|&nbsp; ✓ Proposta gratuita em 15 min
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="w-full lg:w-[62%] flex justify-center lg:justify-end pb-8 sm:pb-0"
              >
                <SiteMockup />
              </motion.div>
            </div>
          </div>
        </section>

        {/* PARTNERS */}
        <section className="py-10 bg-white border-b border-slate-100 overflow-hidden">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
            Empresas que confiam na Otimiza+
          </p>
          <div className="flex animate-marquee-fast whitespace-nowrap">
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

        {/* PAIN POINTS */}
        <section className="py-20 md:py-24 bg-neutral-bg">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B2A5C] mb-4">
                Sinais de que seu site está afastando clientes
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                Se você se identificou com algum desses pontos, um site bem construído
                resolve na raiz.
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
                  <h3 className="text-xl font-bold text-[#0B2A5C] mb-3">{pain.title}</h3>
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
                <span className="inline-block bg-[#0F5FDC]/10 text-[#0F5FDC] rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-5">
                  Como funciona
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0B2A5C] mb-6">
                  Um site que trabalha pelo seu negócio
                </h2>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  Desenvolvemos sites modernos e de alta performance, prontos para
                  receber tráfego pago e transformar cada clique em lead qualificado
                  para o seu negócio.
                </p>
                <ul className="space-y-4 mb-10">
                  {SITE_BENEFITS.map((benefit) => (
                    <li key={benefit} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={CTA_LINK}
                  aria-label="Quero uma proposta gratuita"
                  className="inline-flex items-center justify-center space-x-3 bg-[#0B2A5C] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#071D42] transition-all active:scale-95 group"
                >
                  <span>Quero uma proposta gratuita</span>
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
                  <Smartphone className="w-8 h-8 text-[#0F5FDC] mb-4" />
                  <p className="font-bold text-[#0B2A5C] mb-1">100% Responsivo</p>
                  <p className="text-sm text-slate-500">
                    Perfeito em qualquer tela, do celular ao desktop.
                  </p>
                </div>
                <div className="bg-neutral-bg rounded-2xl p-6 border border-slate-100 mt-8">
                  <Search className="w-8 h-8 text-accent mb-4" />
                  <p className="font-bold text-[#0B2A5C] mb-1">SEO desde o Início</p>
                  <p className="text-sm text-slate-500">
                    Estruturado para ser encontrado no Google.
                  </p>
                </div>
                <div className="bg-neutral-bg rounded-2xl p-6 border border-slate-100">
                  <Gauge className="w-8 h-8 text-[#0B2A5C] mb-4" />
                  <p className="font-bold text-[#0B2A5C] mb-1">Alta Performance</p>
                  <p className="text-sm text-slate-500">
                    Carregamento rápido, sem enrolação.
                  </p>
                </div>
                <div className="bg-neutral-bg rounded-2xl p-6 border border-slate-100 mt-8">
                  <Target className="w-8 h-8 text-red-500 mb-4" />
                  <p className="font-bold text-[#0B2A5C] mb-1">Foco em Conversão</p>
                  <p className="text-sm text-slate-500">
                    Cada seção pensada para gerar contato.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-20 md:py-24 bg-neutral-bg">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B2A5C] mb-4">
                Quem já trabalhou com a gente
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {SITE_TESTIMONIALS.map((testimonial, i) => (
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
                    <p className="font-bold text-[#0B2A5C]">{testimonial.clientName}</p>
                    <p className="text-sm text-slate-500">
                      {testimonial.company} · {testimonial.sector}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TRUST BAR */}
        <section className="bg-white py-16 border-t border-slate-100">
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

        {/* FINAL CTA */}
        <section className="bg-gradient-to-br from-[#0B2A5C] via-[#0D3A85] to-[#0F5FDC] py-20 md:py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[100px]" />
          <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              Agende sua proposta gratuita esta semana
            </h2>
            <p className="text-white/90 text-lg mb-10">
              15 minutos de conversa pra entender como um site novo pode gerar mais
              clientes pro seu negócio. Sem compromisso.
            </p>
            <Link
              to={CTA_LINK}
              aria-label="Falar com Especialista em Sites no WhatsApp"
              className="inline-flex items-center justify-center space-x-3 bg-accent text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-emerald-600 transition-all shadow-[0_20px_40px_-10px_rgba(39,174,96,0.5)] active:scale-95 group"
            >
              <span>Falar com Especialista em Sites</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        {/* MINIMAL FOOTER */}
        <footer className="bg-[#0B2A5C] py-8 border-t border-white/5">
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
