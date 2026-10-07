import React, { useState } from 'react';
import { INITIAL_JOBS, MORE_JOBS } from '../data/jobData';
import JobCard from './JobCard';

export default function JobSection({ onPostJobClick, onApplyJobClick, filterKeyword = '' }) {
  const [jobs, setJobs] = useState(INITIAL_JOBS);
  const [hasLoadedMore, setHasLoadedMore] = useState(false);

  const handleLoadMore = () => {
    if (!hasLoadedMore) {
      setJobs((prev) => [...prev, ...MORE_JOBS]);
      setHasLoadedMore(true);
    }
  };

  const handleLoadLess = () => {
    setJobs(INITIAL_JOBS);
    setHasLoadedMore(false);
  };

  const filteredJobs = jobs.filter((job) => {
    if (!filterKeyword) return true;
    const query = filterKeyword.toLowerCase();
    return (
      job.role.toLowerCase().includes(query) ||
      job.company.toLowerCase().includes(query) ||
      job.location.toLowerCase().includes(query)
    );
  });

  return (
    <section id="jobs" className="py-20 md:py-28 relative z-10 bg-[#080827]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Top Header & Post a Job Action */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[#8C52FF] text-xs sm:text-sm font-semibold tracking-wider uppercase inline-block mb-1.5">
              Latest Job
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
              New Job Offer
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              More Than +500 Job Offer Everyday
            </p>
          </div>

          <button
            type="button"
            onClick={onPostJobClick}
            className="self-start sm:self-auto bg-[#6338F5] hover:bg-[#7045FF] text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-md shadow-lg shadow-[#6338F5]/30 hover:shadow-[#6338F5]/50 transition-all active:scale-95 cursor-pointer whitespace-nowrap"
          >
            Post a Job
          </button>
        </div>

        {/* 3-Column Job Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                onApply={onApplyJobClick}
              />
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-slate-400">
              <p>No jobs found matching your search. Try resetting filters.</p>
              <button
                type="button"
                onClick={() => setJobs(INITIAL_JOBS)}
                className="mt-4 px-4 py-2 bg-[#6338F5] text-white text-xs font-semibold rounded-md"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

        {/* Load More Button */}
        {(hasLoadedMore || filteredJobs.length >= 6) && (
          <div className="mt-12 text-center">
            {hasLoadedMore ? (
              <button
                type="button"
                onClick={handleLoadLess}
                className="inline-flex cursor-pointer items-center gap-2 rounded-md bg-[#6338F5] px-8 py-3 text-xs font-semibold text-white shadow-md shadow-[#6338F5]/30 transition-all hover:bg-[#7045FF] hover:shadow-[#6338F5]/50 active:scale-95 sm:text-sm"
              >
                Load Less
              </button>
            ) : (
              <button
                type="button"
                onClick={handleLoadMore}
                className="inline-flex cursor-pointer items-center gap-2 rounded-md bg-[#6338F5] px-8 py-3 text-xs font-semibold text-white shadow-md shadow-[#6338F5]/30 transition-all hover:bg-[#7045FF] hover:shadow-[#6338F5]/50 active:scale-95 sm:text-sm"
              >
                Load More
              </button>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
