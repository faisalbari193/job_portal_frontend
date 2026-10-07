import React from 'react';
import { GoogleIcon, MicrosoftIcon, AmazonIcon, GithubIcon, DropboxIcon, AdobeIcon } from './BrandLogos';
import { Briefcase } from 'lucide-react';

function getCompanyLogo(brand) {
  switch (brand) {
    case 'google':
      return <GoogleIcon className="w-5 h-5" />;
    case 'microsoft':
      return <MicrosoftIcon className="w-5 h-5" />;
    case 'amazon':
      return <AmazonIcon className="w-5 h-5" />;
    case 'github':
      return <GithubIcon className="w-5 h-5 text-slate-900" />;
    case 'dropbox':
      return <DropboxIcon className="w-5 h-5" />;
    case 'adobe':
      return <AdobeIcon className="w-5 h-5" />;
    default:
      return <Briefcase className="w-5 h-5 text-[#6338F5]" />;
  }
}

export default function JobCard({ job, onApply }) {
  return (
    <div className="bg-[#0E0E38] hover:bg-[#121245] border border-white/5 hover:border-[#6338F5]/40 rounded-xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 flex flex-col justify-between">
      
      {/* Top Header Row */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-3.5">
          
          <div className="flex items-start gap-3">
            {/* White Company Icon Box */}
            <div className="w-11 h-11 rounded-lg bg-white shrink-0 flex items-center justify-center shadow-md p-1.5">
              {getCompanyLogo(job.brand)}
            </div>

            {/* Company & Role */}
            <div className="min-w-0">
              <span className="text-xs text-slate-400 block truncate">
                <span className="text-white font-medium">{job.company}</span> , {job.location}
              </span>
              <h3 className="text-sm sm:text-[15px] font-bold text-white tracking-tight mt-0.5 truncate">
                {job.role}
              </h3>
            </div>
          </div>

          {/* Time & Tag */}
          <div className="flex flex-col items-end gap-1.5 shrink-0">
            <span className="text-[11px] text-slate-400 font-normal">
              {job.postedTime}
            </span>
            <span className="text-[10px] font-medium bg-[#1B1B48] text-purple-300 px-2 py-0.5 rounded border border-purple-500/20">
              {job.type}
            </span>
          </div>

        </div>

        {/* Short Job Description */}
        <p className="text-slate-400 text-xs leading-relaxed mb-6">
          {job.description}
        </p>
      </div>

      {/* Bottom Action Row: Apply Button & Salary */}
      <div className="flex items-center justify-between pt-2 border-t border-white/5">
        <button
          type="button"
          onClick={() => onApply?.(job)}
          className="bg-[#6338F5] hover:bg-[#7045FF] text-white text-xs font-semibold px-4 py-2 rounded-md shadow-md shadow-[#6338F5]/25 transition-all hover:shadow-[#6338F5]/40 active:scale-95 cursor-pointer"
        >
          Apply Now
        </button>

        <div className="text-right">
          <span className="text-sm font-bold text-white">
            {job.salary}
          </span>
          <span className="text-slate-400 text-xs font-normal ml-1">
            {job.salaryUnit}
          </span>
        </div>
      </div>

    </div>
  );
}
