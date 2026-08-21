import React from 'react';

// Generic illustrative mockup of "a modern website" — not a real screenshot,
// just an abstract representation (browser chrome + layout blocks) to convey
// "responsive, modern site" until real portfolio screenshots are available.
export const SiteMockup = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Desktop browser frame */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/40 bg-white">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 bg-slate-100 px-4 py-3 border-b border-slate-200">
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-400" />
          <div className="ml-3 flex-1 bg-white rounded-md h-6 max-w-xs border border-slate-200" />
        </div>

        {/* Page content (abstract) */}
        <div className="p-6 bg-white">
          {/* Nav */}
          <div className="flex items-center justify-between mb-8">
            <div className="w-8 h-8 rounded-lg bg-[#0B2A5C]" />
            <div className="flex gap-4">
              <div className="w-10 h-2 rounded-full bg-slate-200" />
              <div className="w-10 h-2 rounded-full bg-slate-200" />
              <div className="w-10 h-2 rounded-full bg-slate-200" />
            </div>
            <div className="w-20 h-7 rounded-lg bg-accent" />
          </div>

          {/* Hero */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="flex flex-col justify-center gap-3">
              <div className="w-full h-4 rounded-full bg-[#0B2A5C]" />
              <div className="w-4/5 h-4 rounded-full bg-[#0B2A5C]" />
              <div className="w-2/3 h-3 rounded-full bg-slate-200 mt-2" />
              <div className="w-24 h-9 rounded-lg bg-accent mt-3" />
            </div>
            <div className="rounded-xl bg-gradient-to-br from-[#0B2A5C] to-[#0F5FDC] h-36" />
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-3 gap-4">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-xl bg-neutral-bg p-4 border border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-[#0F5FDC]/15 mb-3" />
                <div className="w-full h-2 rounded-full bg-slate-200 mb-2" />
                <div className="w-2/3 h-2 rounded-full bg-slate-200" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Phone frame overlapping bottom-right, conveying "responsive" */}
      <div className="hidden sm:block absolute -bottom-8 -right-8 w-32 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
        <div className="bg-slate-100 h-4 flex items-center justify-center">
          <div className="w-8 h-1 rounded-full bg-slate-300" />
        </div>
        <div className="p-2.5">
          <div className="w-full h-3 rounded-full bg-[#0B2A5C] mb-2" />
          <div className="w-2/3 h-3 rounded-full bg-[#0B2A5C] mb-3" />
          <div className="w-full h-14 rounded-lg bg-gradient-to-br from-[#0B2A5C] to-[#0F5FDC] mb-2" />
          <div className="w-full h-2 rounded-full bg-slate-200 mb-1.5" />
          <div className="w-4/5 h-2 rounded-full bg-slate-200" />
        </div>
      </div>
    </div>
  );
};
