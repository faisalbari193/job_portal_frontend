import React from 'react';
import { STEPS_DATA } from '../data/jobData';
import { Search, FileText, User, CheckCircle2 } from 'lucide-react';

const iconMap = {
  Search,
  FileText,
  User,
  CheckCircle2
};

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-28 relative z-10 bg-[#080827]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <span className="text-[#8C52FF] text-xs sm:text-sm font-semibold tracking-wider uppercase inline-block mb-2.5">
            How It Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Follow Easy 4 Steps
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS_DATA.map((step) => {
            const IconComponent = iconMap[step.iconName] || Search;
            return (
              <div
                key={step.id}
                className="group relative bg-[#0E0E38] hover:bg-[#121245] border border-white/5 hover:border-[#6338F5]/40 rounded-xl p-8 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#6338F5]/10 flex flex-col items-center"
              >
                {/* Purple Icon Container */}
                <div className="w-13 h-13 rounded-lg bg-[#6338F5] text-white flex items-center justify-center mb-6 shadow-lg shadow-[#6338F5]/30 group-hover:scale-105 group-hover:bg-[#7045FF] transition-all">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>

                {/* Card Title */}
                <h3 className="text-base sm:text-lg font-bold text-white mb-2.5 tracking-tight">
                  {step.title}
                </h3>

                {/* Card Description */}
                <p className="text-slate-400 text-xs sm:text-[13px] leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
