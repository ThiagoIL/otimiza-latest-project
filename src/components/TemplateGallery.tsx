import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface Project {
  id: string;
  label: string;
  desktopSrc: string;
  desktopAlt: string;
  bg: string;
  tiltY: number;
  tiltX: number;
}

// Real client work — same screenshots used in the hero carousel — so the
// marquee shows what we actually deliver instead of generic placeholders.
const PROJECTS: Project[] = [
  {
    id: 'educart',
    label: 'EDUCART · Reforço Escolar',
    desktopSrc: '/image/cases/case-educart-desktop.png',
    desktopAlt: 'Site institucional do EDUCART, reforço escolar, desenvolvido pela Otimiza+',
    bg: 'linear-gradient(135deg, #f472b6 0%, #fb923c 100%)',
    tiltY: -8,
    tiltX: 3,
  },
  {
    id: 'ti-demandas',
    label: 'TI Demandas · Painel Executivo',
    desktopSrc: '/image/cases/case-ti-demandas-desktop.png',
    desktopAlt: 'Painel executivo do sistema TI Demandas desenvolvido pela Otimiza+',
    bg: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
    tiltY: 9,
    tiltX: -3,
  },
  {
    id: 'bnb-flex',
    label: 'BNB Flex · SGQ',
    desktopSrc: '/image/cases/case-bnb-flex-sgq.jpg',
    desktopAlt: 'Sistema de gestão da qualidade (SGQ) desenvolvido pela Otimiza+ para a BNB Flex',
    bg: 'linear-gradient(135deg, #0B2A5C 0%, #0F5FDC 100%)',
    tiltY: -7,
    tiltX: -3,
  },
  {
    id: 'tl-solucoes',
    label: 'TL Soluções · Redes',
    desktopSrc: '/image/cases/case-tl-solucoes-desktop.png',
    desktopAlt: 'Site institucional da TL Soluções em Redes de Computadores, desenvolvido pela Otimiza+',
    bg: 'linear-gradient(135deg, #0f172a 0%, #164e63 100%)',
    tiltY: 8,
    tiltX: 3,
  },
  {
    id: 'giro-estoque',
    label: 'Giro Estoque · Sindimóveis',
    desktopSrc: '/image/cases/case-giro-estoque-desktop.jpg',
    desktopAlt: 'Sistema Giro Estoque, consulta de estoques entre empresas do setor moveleiro, desenvolvido pela Otimiza+',
    bg: 'linear-gradient(135deg, #fb923c 0%, #ea580c 100%)',
    tiltY: -9,
    tiltX: 2,
  },
];

// Exactly 2 copies per row — the marquee-half keyframe translates by half
// the track's width, which only lines up seamlessly with 2 copies (see
// index.css). More copies wouldn't add variety (the visible sequence still
// repeats every 1 copy-width either way), just a longer loop before repeat.
const ROW_1 = [...PROJECTS, ...PROJECTS];
const ROW_2_BASE = [...PROJECTS].reverse();
const ROW_2 = [...ROW_2_BASE, ...ROW_2_BASE];

const ProjectCard = ({ project, ctaLink }: { project: Project; ctaLink: string }) => (
  <Link
    to={ctaLink}
    aria-label={`Quero um site como o da ${project.label}`}
    className="group relative shrink-0 w-[260px] md:w-[320px] mx-3 rounded-2xl overflow-hidden shadow-xl"
    style={{ background: project.bg }}
  >
    <div className="flex items-center justify-center h-[190px] md:h-[230px] px-8">
      <div
        className="w-full rounded-lg overflow-hidden shadow-2xl border border-white/10 bg-white transition-transform duration-500 ease-out group-hover:!rotate-0 group-hover:scale-105"
        style={{ transform: `perspective(900px) rotateY(${project.tiltY}deg) rotateX(${project.tiltX}deg)` }}
      >
        <div className="flex items-center gap-1.5 bg-slate-100 px-2.5 py-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-red-300" />
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-300" />
          <span className="w-1.5 h-1.5 rounded-full bg-green-300" />
        </div>
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={project.desktopSrc}
            alt={project.desktopAlt}
            className="w-full h-full object-cover object-top"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>

    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent pt-8 pb-4 px-5">
      <p className="text-white text-sm font-bold drop-shadow">{project.label}</p>
    </div>
  </Link>
);

const MarqueeRow = ({
  projects,
  ctaLink,
  animationClass,
}: {
  projects: Project[];
  ctaLink: string;
  animationClass: string;
}) => (
  <div className="overflow-hidden">
    <div className={`flex w-max ${animationClass} pause-on-hover`}>
      {projects.map((project, i) => (
        <ProjectCard key={`${project.id}-${i}`} project={project} ctaLink={ctaLink} />
      ))}
    </div>
  </div>
);

export const TemplateGallery = ({ ctaLink }: { ctaLink: string }) => {
  return (
    <div>
      <div className="space-y-6">
        <MarqueeRow projects={ROW_1} ctaLink={ctaLink} animationClass="animate-marquee-row" />
        <MarqueeRow projects={ROW_2} ctaLink={ctaLink} animationClass="animate-marquee-row-reverse" />
      </div>

      <div className="text-center mt-12">
        <Link
          to={ctaLink}
          aria-label="Quero um projeto assim"
          className="inline-flex items-center justify-center space-x-3 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-[#071D42] transition-all active:scale-95 group"
        >
          <span>Quero um projeto assim</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};
