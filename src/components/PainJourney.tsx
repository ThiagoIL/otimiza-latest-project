import React from 'react';
import { motion } from 'motion/react';
import { SearchX, MousePointerClick, Hourglass, TrendingUp, X, Check, LucideIcon } from 'lucide-react';

interface JourneyStep {
  icon: LucideIcon;
  title: string;
  description: string;
  positive?: boolean;
}

const STEPS: JourneyStep[] = [
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
      'Carregamento lento e layout que não funciona no celular afastam o visitante antes de ele ler a primeira frase.',
  },
  {
    icon: TrendingUp,
    title: 'Site Bem Construído',
    description:
      'Rápido, encontrado no Google e pensado pra transformar cada visita em cliente novo.',
    positive: true,
  },
];

// x/y in a normalized 1000x200 space — nodes sit at the center of 4 equal
// columns (12.5/37.5/62.5/87.5%) so the text grid below lines up under them,
// with alternating y to read as a gentle wave.
const NODE_X = [125, 375, 625, 875];
const NODE_Y = [50, 150, 50, 150];

function segmentPath(i: number) {
  const x1 = NODE_X[i];
  const y1 = NODE_Y[i];
  const x2 = NODE_X[i + 1];
  const y2 = NODE_Y[i + 1];
  const dx = (x2 - x1) / 2;
  return `M${x1},${y1} C${x1 + dx},${y1} ${x2 - dx},${y2} ${x2},${y2}`;
}

const SEGMENT_DELAYS = [0.15, 0.95, 1.75];
const NODE_DELAYS = [0, 0.95, 1.75, 2.55];

const Node = ({ step, index }: { step: JourneyStep; index: number }) => {
  const Icon = step.icon;
  return (
    <motion.div
      className="absolute flex flex-col items-center"
      style={{
        left: `${NODE_X[index] / 10}%`,
        top: `${NODE_Y[index] / 2}%`,
        transform: 'translate(-50%, -50%)',
      }}
      initial={{ opacity: 0, scale: 0.4, y: 12 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 260, damping: 16, delay: NODE_DELAYS[index] }}
    >
      <div className="relative">
        <span
          className={`absolute inset-0 rounded-full blur-xl ${
            step.positive ? 'bg-accent/40' : 'bg-red-400/35'
          } animate-pulse`}
        />
        <div
          className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-white shadow-xl border-4 flex items-center justify-center ${
            step.positive ? 'border-accent/20' : 'border-red-100'
          }`}
        >
          <Icon className={`w-7 h-7 md:w-8 md:h-8 ${step.positive ? 'text-accent' : 'text-red-500'}`} />
        </div>
        <span
          className={`absolute -bottom-1 -right-1 w-6 h-6 md:w-7 md:h-7 rounded-full border-[3px] border-neutral-bg flex items-center justify-center ${
            step.positive ? 'bg-accent' : 'bg-red-500'
          }`}
        >
          {step.positive ? (
            <Check className="w-3 h-3 md:w-3.5 md:h-3.5 text-white" />
          ) : (
            <X className="w-3 h-3 md:w-3.5 md:h-3.5 text-white" />
          )}
        </span>
      </div>
    </motion.div>
  );
};

export const PainJourney = () => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Desktop / tablet: flowing wave path with nodes anchored to it */}
      <div className="hidden md:block">
        <div className="relative h-56">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1000 200"
            preserveAspectRatio="none"
            fill="none"
          >
            <defs>
              <linearGradient id="painPathFinal" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="100%" stopColor="#1e8449" />
              </linearGradient>
            </defs>
            {[0, 1, 2].map((i) => (
              <motion.path
                key={i}
                d={segmentPath(i)}
                stroke={i === 2 ? 'url(#painPathFinal)' : '#ef4444'}
                strokeWidth={3}
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeInOut', delay: SEGMENT_DELAYS[i] }}
              />
            ))}
          </svg>

          {STEPS.map((step, i) => (
            <Node key={step.title} step={step} index={i} />
          ))}
        </div>

        <div className="grid grid-cols-4 gap-4 mt-4">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: NODE_DELAYS[i] + 0.15 }}
              className="text-center px-1"
            >
              <h3 className={`text-base font-bold mb-2 ${step.positive ? 'text-accent' : 'text-[#0B2A5C]'}`}>
                {step.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile: vertical timeline */}
      <div className="md:hidden relative pl-12">
        <div className="absolute left-[27px] top-2 bottom-2 w-[3px] rounded-full overflow-hidden bg-slate-200">
          <motion.div
            className="w-full bg-gradient-to-b from-red-500 via-red-500 to-accent"
            style={{ height: '100%' }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
          />
        </div>

        <div className="space-y-10">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 220, damping: 18, delay: i * 0.25 }}
                className="relative flex flex-col"
              >
                <div className="absolute -left-12 top-0">
                  <div className="relative">
                    <span
                      className={`absolute inset-0 rounded-full blur-lg ${
                        step.positive ? 'bg-accent/40' : 'bg-red-400/35'
                      } animate-pulse`}
                    />
                    <div
                      className={`relative w-12 h-12 rounded-full bg-white shadow-lg border-4 flex items-center justify-center ${
                        step.positive ? 'border-accent/20' : 'border-red-100'
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${step.positive ? 'text-accent' : 'text-red-500'}`} />
                    </div>
                  </div>
                </div>
                <h3 className={`text-lg font-bold mb-2 ${step.positive ? 'text-accent' : 'text-[#0B2A5C]'}`}>
                  {step.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
