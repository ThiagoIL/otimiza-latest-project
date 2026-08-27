import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface Project {
  id: string;
  label: string;
  title: string;
  tags: string;
  desktopSrc: string;
  desktopAlt: string;
  mobileSrc: string;
  mobileAlt: string;
}

// Real client work — same screenshots used in the hero carousel — so the
// gallery shows what we actually deliver instead of generic placeholders.
const PROJECTS: Project[] = [
  {
    id: 'educart',
    label: 'EDUCART · Reforço Escolar',
    title: 'Site institucional pensado pra converter matrícula',
    tags: 'SITE INSTITUCIONAL · EDUCAÇÃO',
    desktopSrc: '/image/cases/case-educart-desktop.png',
    desktopAlt: 'Site institucional do EDUCART, reforço escolar, desenvolvido pela Otimiza+',
    mobileSrc: '/image/cases/case-educart-mobile.jpg',
    mobileAlt: 'Versão mobile do site do EDUCART',
  },
  {
    id: 'ti-demandas',
    label: 'TI Demandas · Painel Executivo',
    title: 'Sistema web de chamados e indicadores para times de TI',
    tags: 'SISTEMA WEB · GESTÃO DE TI',
    desktopSrc: '/image/cases/case-ti-demandas-desktop.png',
    desktopAlt: 'Painel executivo do sistema TI Demandas desenvolvido pela Otimiza+',
    mobileSrc: '/image/cases/case-ti-demandas-mobile.jpg',
    mobileAlt: 'Versão mobile do sistema TI Demandas',
  },
  {
    id: 'bnb-flex',
    label: 'BNB Flex · SGQ',
    title: 'Sistema de gestão da qualidade sob medida',
    tags: 'SISTEMA WEB · GESTÃO DA QUALIDADE',
    desktopSrc: '/image/cases/case-bnb-flex-sgq.jpg',
    desktopAlt: 'Sistema de gestão da qualidade (SGQ) desenvolvido pela Otimiza+ para a BNB Flex',
    mobileSrc: '',
    mobileAlt: '',
  },
];

const ProjectCard = ({ project, ctaLink, index }: { project: Project; ctaLink: string; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
    >
      <div className="relative p-4 pb-8 bg-neutral-bg">
        {/* Browser frame */}
        <div className="rounded-lg overflow-hidden shadow-lg border border-slate-200/70 bg-white">
          <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-2 border-b border-slate-200">
            <span className="w-2 h-2 rounded-full bg-red-300" />
            <span className="w-2 h-2 rounded-full bg-yellow-300" />
            <span className="w-2 h-2 rounded-full bg-green-300" />
            <div className="ml-2 flex-1 bg-white rounded text-[9px] font-semibold text-slate-500 px-2 py-0.5 border border-slate-200 truncate">
              {project.label}
            </div>
          </div>
          <div className="aspect-[16/10] overflow-hidden">
            <img
              src={project.desktopSrc}
              alt={project.desktopAlt}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Phone frame, overlapping bottom-right — only when a mobile shot exists */}
        {project.mobileSrc && (
          <div className="absolute -bottom-2 right-4 w-14 rounded-[0.7rem] border-[3px] border-slate-900 bg-slate-900 shadow-xl overflow-hidden">
            <div className="aspect-[720/1600] overflow-hidden">
              <img
                src={project.mobileSrc}
                alt={project.mobileAlt}
                className="w-full h-full object-cover object-top"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        )}
      </div>

      <div className="p-6 pt-5 flex flex-col flex-1">
        <p className="text-[11px] font-bold text-secondary tracking-widest mb-2">{project.tags}</p>
        <h3 className="text-base font-bold text-primary mb-5 leading-snug flex-1">{project.title}</h3>
        <Link
          to={ctaLink}
          aria-label={`Quero um projeto como: ${project.title}`}
          className="inline-flex items-center justify-center space-x-2 bg-primary text-white px-5 py-3 rounded-xl font-bold text-sm hover:bg-[#071D42] transition-all active:scale-95 group/btn w-full"
        >
          <span>Quero um projeto assim</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};

export const TemplateGallery = ({ ctaLink }: { ctaLink: string }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {PROJECTS.map((project, i) => (
        <ProjectCard key={project.id} project={project} ctaLink={ctaLink} index={i} />
      ))}
    </div>
  );
};
