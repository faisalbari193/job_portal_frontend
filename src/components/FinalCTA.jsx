import React from 'react';

export default function FinalCTA({ onClick }) {
  return (
    <section className="py-12 md:py-16 relative z-10 bg-[#080827]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#6338F5] rounded-xl sm:rounded-2xl p-8 sm:p-12 lg:p-14 shadow-2xl shadow-[#6338F5]/30 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 relative overflow-hidden">
          
          {/* Subtle light sheen effect in background */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-black/10 rounded-full blur-2xl pointer-events-none" />

          {/* Left Text */}
          <div className="text-center md:text-left z-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
              Let's Get Connected And Start<br className="hidden sm:inline" />
              {' '}Finding Your Dream Job
            </h2>
          </div>

          {/* Right Button */}
          <div className="shrink-0 z-10">
            <button
              type="button"
              onClick={onClick}
              className="bg-white hover:bg-slate-100 text-[#6338F5] font-bold text-xs sm:text-sm px-8 py-3.5 rounded-md shadow-lg shadow-black/20 hover:shadow-xl transition-all active:scale-95 cursor-pointer whitespace-nowrap"
            >
              Click Here
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
