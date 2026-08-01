import React from 'react';

// Real product dashboard screenshots, arranged in a cascading stack
// (used in the Home hero and the /lp/bi landing page hero).
const CASCADE_IMAGES = [
  {
    src: '/image/dashboards/dash-otif.webp',
    alt: 'Dashboard de Análise de OTIF - logística e entregas',
    className: 'top-0 left-0 w-[68%] rotate-[-9deg] z-10',
  },
  {
    src: '/image/dashboards/dash-rh.webp',
    alt: 'Dashboard de People Analytics - RH e colaboradores',
    className: 'top-[10%] left-[9%] w-[70%] rotate-[-4deg] z-20',
  },
  {
    src: '/image/dashboards/dash-comercial.webp',
    alt: 'Dashboard de Ranking de Vendedores - comercial',
    className: 'top-[19%] left-[18%] w-[72%] rotate-[2deg] z-30',
  },
  {
    src: '/image/dashboards/dash-financeiro.webp',
    alt: 'Dashboard Financeiro - visão geral de receita e lucro',
    className: 'top-[29%] left-[27%] w-[73%] rotate-[6deg] z-40',
  },
];

export const DashboardCascade = () => {
  return (
    <div className="relative w-full aspect-[11/10] max-w-2xl mx-auto">
      {CASCADE_IMAGES.map((img) => (
        <div
          key={img.src}
          className={`absolute rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-white/20 ${img.className}`}
        >
          <img
            src={img.src}
            alt={img.alt}
            width="900"
            height="500"
            className="w-full h-auto block"
            loading="eager"
            referrerPolicy="no-referrer"
          />
        </div>
      ))}
    </div>
  );
};
