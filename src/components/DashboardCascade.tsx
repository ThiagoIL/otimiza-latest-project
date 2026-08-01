import React from 'react';

// Real product dashboard screenshots, arranged in a cascading stack that
// matches the reference design: a flat 2D skewY (not a 3D perspective tilt).
// Measured from the reference image — vertical card edges stay perfectly
// vertical while the top/bottom edges tilt ~-15deg, which is exactly what
// `transform: skewY(-15deg)` produces (unlike rotateX/rotateY, which would
// also converge the vertical edges).
const SKEW_DEG = -15;

const CASCADE_IMAGES = [
  {
    src: '/image/dashboards/dash-otif.webp',
    alt: 'Dashboard de Análise de OTIF - logística e entregas',
    top: '24%',
    left: '2%',
    scale: 0.82,
    z: 10,
  },
  {
    src: '/image/dashboards/dash-rh.webp',
    alt: 'Dashboard de People Analytics - RH e colaboradores',
    top: '31%',
    left: '10%',
    scale: 0.88,
    z: 20,
  },
  {
    src: '/image/dashboards/dash-comercial.webp',
    alt: 'Dashboard de Ranking de Vendedores - comercial',
    top: '38%',
    left: '18%',
    scale: 0.94,
    z: 30,
  },
  {
    src: '/image/dashboards/dash-financeiro.webp',
    alt: 'Dashboard Financeiro - visão geral de receita e lucro',
    top: '45%',
    left: '26%',
    scale: 1,
    z: 40,
  },
];

export const DashboardCascade = () => {
  return (
    <div className="relative w-full max-w-6xl mx-auto aspect-[10/7]">
      {CASCADE_IMAGES.map((img) => (
        <div
          key={img.src}
          className="absolute w-[66%] rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-white/40"
          style={{
            top: img.top,
            left: img.left,
            zIndex: img.z,
            transform: `skewY(${SKEW_DEG}deg) scale(${img.scale})`,
            transformOrigin: 'top left',
          }}
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
