import React from 'react';
import { CATEGORIES_DATA } from '../data/jobData';

export default function CategorySection({ onSelectCategory }) {
  return (
    <section id="category" className="py-20 md:py-28 relative z-10 bg-[#080827]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <span className="text-[#8C52FF] text-xs sm:text-sm font-semibold tracking-wider uppercase inline-block mb-2.5">
            Jobs Category
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Choose Your Desire Category
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
            There are many variations of passages of available, but the majority have suffered some form, by injected humour, or look even slightly believable.
          </p>
        </div>

        {/* Categories Grid (4 columns x 2 rows) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CATEGORIES_DATA.map((item, idx) => {
            if (item.isSpecial) {
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => onSelectCategory?.('all')}
                  className="bg-[#6338F5] hover:bg-[#7045FF] rounded-xl p-7 text-center transition-all duration-300 hover:shadow-xl hover:shadow-[#6338F5]/30 hover:-translate-y-1 flex flex-col items-center justify-center cursor-pointer min-h-[105px]"
                >
                  <span className="text-sm sm:text-base font-bold text-white tracking-tight">
                    {item.title}
                  </span>
                </button>
              );
            }

            return (
              <div
                key={idx}
                onClick={() => onSelectCategory?.(item.title)}
                className="group bg-[#0E0E38] hover:bg-[#121245] border border-white/5 hover:border-[#6338F5]/50 rounded-xl p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/40 flex flex-col items-center justify-center cursor-pointer min-h-[105px]"
              >
                <h3 className="text-sm sm:text-base font-bold text-white mb-1.5 tracking-tight group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>
                <span className="text-slate-400 text-xs font-normal">
                  {item.count}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
