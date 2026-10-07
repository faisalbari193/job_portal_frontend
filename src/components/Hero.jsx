import React, { useState } from 'react';
import { Search, MapPin, ArrowRight } from 'lucide-react';
import { GoogleIcon, MicrosoftIcon, AmazonIcon, DropboxIcon } from './BrandLogos';
import { ASSETS } from '../data/jobData';

export default function Hero({ onSearchSubmit }) {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = (e) => {
    e?.preventDefault();
    onSearchSubmit?.({ keyword, location });
  };

  const handlePopularClick = (tag) => {
    setKeyword(tag);
    onSearchSubmit?.({ keyword: tag, location });
  };

  return (
    <section id="home" className="relative pt-6 pb-20 md:pt-12 md:pb-28 overflow-hidden hero-grid-bg">
      {/* Background ambient glow shapes */}
      <div className="ambient-glow-left pointer-events-none" />
      <div className="ambient-glow-right pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Eyebrow badge text */}
            <div className="mb-4">
              <span className="text-[#8C52FF] text-sm md:text-[15px] font-semibold tracking-wide inline-block">
                We Have 208,000+ Live Jobs
              </span>
            </div>

            {/* Giant Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight text-white leading-[1.12] mb-4">
              Your <span className="text-[#6338F5]">Dream</span> Job Is<br className="hidden sm:inline" />
              {' '}Waiting For You
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300/80 text-sm md:text-base font-normal max-w-xl mb-8 leading-relaxed">
              Type your keyword, then click search to find your perfect job.
            </p>

            {/* White Search Bar Container */}
            <form
              onSubmit={handleSearch}
              className="bg-white rounded-lg p-2 sm:p-2.5 shadow-2xl shadow-black/40 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 max-w-2xl border border-white/20"
            >
              {/* Job Title / Keywords Input */}
              <div className="flex-1 flex items-center px-3 py-2 text-slate-800">
                <Search className="w-4 h-4 text-slate-400 mr-2.5 shrink-0" />
                <input
                  type="text"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  placeholder="Job Title, Keywords"
                  className="w-full text-xs sm:text-sm text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none font-medium"
                />
              </div>

              {/* Vertical divider */}
              <div className="hidden sm:block w-px h-8 bg-slate-200 shrink-0" />

              {/* City or Postcode Input */}
              <div className="flex-1 flex items-center px-3 py-2 text-slate-800">
                <MapPin className="w-4 h-4 text-slate-400 mr-2.5 shrink-0" />
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="City Or Postcode"
                  className="w-full text-xs sm:text-sm text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none font-medium"
                />
              </div>

              {/* Find Job Button */}
              <button
                type="submit"
                className="bg-[#6338F5] hover:bg-[#7045FF] text-white px-7 py-3 rounded-md text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap shadow-md shadow-[#6338F5]/30 transition-all hover:shadow-[#6338F5]/50 active:scale-95 cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>Find Job</span>
              </button>
            </form>

            {/* Popular Searches */}
            <div className="mt-4 flex flex-wrap items-center gap-1.5 text-xs">
              <span className="text-white font-semibold">Popular Searches :</span>
              {['Designer', 'Senor', 'Architecture', 'IOS', 'Etc.'].map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => handlePopularClick(tag)}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  {tag}{tag !== 'Etc.' ? ',' : ''}
                </button>
              ))}
            </div>

          </div>

          {/* Right Hero Visuals */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Outer Orbit Dotted Ring */}
            <div className="absolute w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] rounded-full border border-dashed border-indigo-400/20 pointer-events-none" />
            <div className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] rounded-full border border-white/5 pointer-events-none" />

            {/* Glowing Backdrop Circle behind Businessman */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-[#6338F5]/50 to-[#9d4edd]/30 blur-3xl pointer-events-none -z-0" />

            {/* Main Businessman Photo */}
            <div className="relative z-10 w-[280px] sm:w-[360px] lg:w-[390px] aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl shadow-black/80">
              <img
                src={ASSETS.heroBusinessman}
                alt="Professional Businessman"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-700"
              />
              {/* Subtle inner bottom gradient fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080827] via-transparent to-transparent opacity-40 pointer-events-none" />
            </div>

            {/* Floating Brand Icons */}
            {/* Google Icon Badge (Top Left) */}
            <div className="absolute top-6 left-0 sm:left-4 z-20 w-11 h-11 sm:w-13 sm:h-13 bg-white/95 rounded-full shadow-lg shadow-black/40 flex items-center justify-center animate-float-1 border border-white/80">
              <GoogleIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>

            {/* Microsoft Icon Badge (Top Right) */}
            <div className="absolute top-12 right-0 sm:right-6 z-20 w-11 h-11 sm:w-13 sm:h-13 bg-white/95 rounded-xl shadow-lg shadow-black/40 flex items-center justify-center animate-float-2 border border-white/80">
              <MicrosoftIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>

            {/* Dropbox Icon Badge (Middle Right) */}
            <div className="absolute top-1/2 -right-2 sm:right-0 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-[#0061FF]/10 backdrop-blur-md rounded-xl shadow-lg shadow-black/40 flex items-center justify-center animate-float-3 border border-[#0061FF]/30">
              <DropboxIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>

            {/* Amazon Icon Badge (Bottom Left) */}
            <div className="absolute bottom-10 left-2 sm:left-10 z-20 w-11 h-11 sm:w-13 sm:h-13 bg-white/95 rounded-full shadow-lg shadow-black/40 flex items-center justify-center animate-float-2 border border-white/80">
              <AmazonIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
