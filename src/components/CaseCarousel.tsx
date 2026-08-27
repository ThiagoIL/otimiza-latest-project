import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { LaptopMockup } from './LaptopMockup';

interface CaseItem {
  desktopSrc: string;
  desktopAlt: string;
  desktopAspect?: string;
  mobileSrc?: string;
  mobileAlt?: string;
  mobileAspect?: string;
  clientName: string;
}

// Educart first, per request.
const CASES: CaseItem[] = [
  {
    desktopSrc: '/image/cases/case-educart-desktop.png',
    desktopAlt: 'Site institucional do EDUCART — reforço escolar — desenvolvido pela Otimiza+',
    desktopAspect: '1915/913',
    mobileSrc: '/image/cases/case-educart-mobile.jpg',
    mobileAlt: 'Versão mobile do site do EDUCART',
    clientName: 'Site desenvolvido para EDUCART',
  },
  {
    desktopSrc: '/image/cases/case-bnb-flex-sgq.jpg',
    desktopAlt: 'Sistema de gestão da qualidade (SGQ) desenvolvido pela Otimiza+ para a BNB Flex',
    desktopAspect: '1902/939',
    clientName: 'Sistema desenvolvido para BNB Flex',
  },
  {
    desktopSrc: '/image/cases/case-ti-demandas-desktop.png',
    desktopAlt: 'Painel executivo do sistema TI Demandas desenvolvido pela Otimiza+',
    desktopAspect: '1839/912',
    mobileSrc: '/image/cases/case-ti-demandas-mobile.jpg',
    mobileAlt: 'Versão mobile do sistema TI Demandas',
    clientName: 'Sistema desenvolvido para um setor de TI',
  },
  {
    desktopSrc: '/image/cases/case-tl-solucoes-desktop.png',
    desktopAlt: 'Site institucional da TL Soluções em Redes de Computadores, desenvolvido pela Otimiza+',
    desktopAspect: '1347/769',
    mobileSrc: '/image/cases/case-tl-solucoes-mobile.png',
    mobileAlt: 'Versão mobile do site da TL Soluções em Redes de Computadores',
    mobileAspect: '352/651',
    clientName: 'Site desenvolvido para TL Soluções em Redes',
  },
  {
    desktopSrc: '/image/cases/case-giro-estoque-desktop.jpg',
    desktopAlt: 'Sistema Giro Estoque, consulta de estoques entre empresas do setor moveleiro, desenvolvido pela Otimiza+',
    desktopAspect: '1729/943',
    clientName: 'Sistema desenvolvido para Giro Estoque',
  },
];

const N = CASES.length;
const ROTATE_INTERVAL_MS = 4800;
const SPRING = { type: 'spring' as const, stiffness: 210, damping: 26, mass: 1 };

// Coverflow-style slot for each card relative to the active one: 0 = front
// and center, 1 = "up next" peeking on the right, N-1 = "just shown"
// peeking on the left. Any other slot (only reachable when there are more
// than 3 cases) waits invisibly centered behind the front card until its
// turn comes. All cards stay mounted the whole time and simply animate
// (spring physics + 3D tilt) between slots, which reads as one continuous
// carousel instead of a slideshow that fades in/out.
const FRONT = { x: '-50%', y: '-50%', scale: 1, rotateY: 0, opacity: 1, zIndex: 30 };
const RIGHT_PEEK = { x: 'calc(-50% + 24%)', y: 'calc(-50% + 4%)', scale: 0.7, rotateY: -26, opacity: 0.45, zIndex: 10 };
const LEFT_PEEK = { x: 'calc(-50% - 24%)', y: 'calc(-50% + 4%)', scale: 0.7, rotateY: 26, opacity: 0.45, zIndex: 10 };
const HIDDEN_BEHIND = { x: '-50%', y: '-50%', scale: 0.5, rotateY: 0, opacity: 0, zIndex: 0 };

function slotStyle(slot: number, n: number) {
  if (slot === 0) return FRONT;
  if (slot === 1) return RIGHT_PEEK;
  if (slot === n - 1) return LEFT_PEEK;
  return HIDDEN_BEHIND;
}

export const CaseCarousel = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % N);
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <div
      className="w-full max-w-2xl mx-auto"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative aspect-[3/2]" style={{ perspective: 1400 }}>
        {CASES.map((item, i) => {
          const slot = (i - active + N) % N;
          const style = slotStyle(slot, N);
          const isFront = slot === 0;

          return (
            <motion.div
              key={item.clientName}
              className="absolute left-1/2 top-1/2 w-full"
              animate={{ x: style.x, y: style.y, scale: style.scale, rotateY: style.rotateY, opacity: style.opacity }}
              transition={{ x: SPRING, y: SPRING, scale: SPRING, rotateY: SPRING, opacity: { duration: 0.4 } }}
              style={{ zIndex: style.zIndex, cursor: isFront ? 'default' : 'pointer', pointerEvents: style.opacity === 0 ? 'none' : 'auto' }}
              onClick={() => !isFront && setActive(i)}
            >
              <LaptopMockup
                src={item.desktopSrc}
                alt={item.desktopAlt}
                aspect={item.desktopAspect}
                badge={isFront ? 'Case Real' : undefined}
                clientName={isFront ? item.clientName : undefined}
              />

              {isFront && item.mobileSrc && (
                <motion.div
                  initial={{ opacity: 0, x: 12, y: 12 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.25 }}
                  className="hidden sm:block absolute -bottom-10 -right-6 md:-right-10 w-24 md:w-32 z-20"
                >
                  <div
                    className="rounded-[1.1rem] border-[3px] border-slate-900 bg-slate-900 overflow-hidden shadow-2xl"
                    style={{ aspectRatio: item.mobileAspect ?? '720/1600' }}
                  >
                    <img
                      src={item.mobileSrc}
                      alt={item.mobileAlt}
                      className="w-full h-full object-cover object-top"
                      loading="eager"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Progress dots */}
      <div className="flex items-center justify-center gap-2 mt-9 sm:mt-6">
        {CASES.map((c, i) => (
          <button
            key={c.clientName}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Ver case: ${c.clientName}`}
            aria-current={i === active}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === active ? 'w-8 bg-accent' : 'w-2 bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
