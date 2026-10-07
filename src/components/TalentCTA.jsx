import React from 'react';
import { ASSETS } from '../data/jobData';

export default function TalentCTA({ onJoinClick }) {
  return (
    <section aria-labelledby="recent-job-title" className="relative z-10 bg-[#080827]">
      <h2 id="recent-job-title" className="sr-only">Over all 10,00+ Talented People Registered in Our Website</h2>
      {/* The supplied artwork preserves the reference's exact desktop composition. */}
      <div className="relative hidden w-full md:block">
        <img
          src="/images/recent-job-reference.png"
          alt=""
          className="block h-auto w-full"
        />
        <button
          type="button"
          aria-label="Join JobBoard now"
          onClick={onJoinClick}
          className="absolute rounded-md bg-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          style={{ left: '19.9%', top: '65.9%', width: '6.95%', height: '6.1%' }}
        />
      </div>

      {/* Reflow the same content for phones, where the desktop artwork would be too small to read. */}
      <div className="relative overflow-hidden px-5 py-14 md:hidden">
        <div className="absolute -right-20 top-28 h-60 w-[85%] rotate-[-6deg] rounded-[32px] bg-[#6338f5]" />
        <div className="relative mx-auto grid max-w-lg grid-cols-1 items-center gap-8">
          <div className="relative z-10">
            <span className="mb-3 inline-block text-sm font-medium text-[#7045ff]">Recent Job</span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white">Over all 10,00+ Talented People Registered in Our Website</h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-slate-300">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <button type="button" onClick={onJoinClick} className="mt-7 rounded-md bg-[#6338f5] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#7045ff]">Join Now</button>
          </div>
          <div className="relative mx-auto h-72 w-64 overflow-hidden rounded-2xl">
            <img src={ASSETS.talentProfessional} alt="Professional pointing toward the job opportunities" className="h-full w-full object-cover object-top" />
          </div>
        </div>
      </div>
    </section>
  );
}
