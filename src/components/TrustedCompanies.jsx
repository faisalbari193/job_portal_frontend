import React from 'react';
import { TRUSTED_COMPANIES } from '../data/jobData';
import { TrustedLogoItem } from './BrandLogos';

export default function TrustedCompanies() {
  return (
    <section className="w-full bg-[#080827] border-y border-white/5 py-8 md:py-10 relative z-10 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-8 lg:gap-12 opacity-85 hover:opacity-100 transition-opacity">
          {TRUSTED_COMPANIES.map((company, index) => (
            <div key={`${company.name}-${index}`} className="flex items-center justify-center scale-90 sm:scale-95 lg:scale-100">
              <TrustedLogoItem company={company} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
