import React from 'react';

interface LaptopMockupProps {
  src: string;
  alt: string;
  /** Small badge shown floating over the laptop, e.g. "Case Real" */
  badge?: string;
  /** Client/company name shown under the badge label */
  clientName?: string;
}

// Realistic laptop frame (front-facing, MacBook-style) that wraps a real
// product screenshot, used to showcase an actual case/client project in a
// hero — as opposed to `SiteMockup`, which is a generic illustrative shape.
export const LaptopMockup = ({ src, alt, badge, clientName }: LaptopMockupProps) => {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Screen */}
      <div className="relative rounded-t-2xl rounded-b-[6px] bg-slate-900 pt-3 px-3 pb-3.5 md:pt-3.5 md:px-3.5 md:pb-4 shadow-2xl">
        {/* Camera notch */}
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-slate-700" />

        {/* Screenshot */}
        <div className="relative rounded-md overflow-hidden bg-white aspect-[1902/939]">
          <img
            src={src}
            alt={alt}
            width="1902"
            height="939"
            className="w-full h-full object-cover object-top"
            loading="eager"
            referrerPolicy="no-referrer"
          />
          {/* Subtle glass reflection for realism */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
        </div>
      </div>

      {/* Hinge */}
      <div className="h-[3px] bg-slate-700/80" />

      {/* Base / keyboard deck */}
      <div
        className="relative h-4 md:h-5 bg-gradient-to-b from-slate-200 via-slate-300 to-slate-400 shadow-[0_8px_20px_-4px_rgba(0,0,0,0.4)]"
        style={{ clipPath: 'polygon(3% 0%, 97% 0%, 100% 100%, 0% 100%)' }}
      >
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-16 md:w-24 h-[5px] md:h-1.5 bg-slate-400/90 rounded-b-md" />
      </div>

      {/* Floor shadow */}
      <div className="mx-auto mt-3 w-[80%] h-5 bg-black/25 blur-2xl rounded-full" />

      {/* Real case badge */}
      {badge && (
        <div className="absolute -top-4 -left-4 md:-top-5 md:-left-6 bg-white rounded-xl shadow-xl px-4 py-2.5 flex items-center gap-2 border border-slate-100 z-10">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse shrink-0" />
          <div className="leading-tight">
            <p className="text-[11px] font-bold text-primary uppercase tracking-wider">{badge}</p>
            {clientName && <p className="text-[10px] text-slate-500">{clientName}</p>}
          </div>
        </div>
      )}
    </div>
  );
};
