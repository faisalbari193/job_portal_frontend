'use client';

import React, { useLayoutEffect, useRef, useState } from 'react';
import { TESTIMONIALS_DATA } from '../data/jobData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const trackRef = useRef(null);
  const animationLocked = useRef(false);
  const [currentIndex, setCurrentIndex] = useState(TESTIMONIALS_DATA.length);
  const [slideStride, setSlideStride] = useState(0);
  const [animateTrack, setAnimateTrack] = useState(true);
  const repeatedTestimonials = [...TESTIMONIALS_DATA, ...TESTIMONIALS_DATA, ...TESTIMONIALS_DATA];

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    const measureStride = () => {
      const first = track.children[0];
      const second = track.children[1];
      if (first && second) {
        setSlideStride(second.getBoundingClientRect().left - first.getBoundingClientRect().left);
      }
    };

    measureStride();
    const observer = new ResizeObserver(measureStride);
    observer.observe(track);
    return () => observer.disconnect();
  }, []);

  const move = (direction) => {
    if (animationLocked.current || !slideStride) return;
    animationLocked.current = true;
    setCurrentIndex((index) => index + direction);
  };

  const handleSlideEnd = (event) => {
    if (event.target !== event.currentTarget || event.propertyName !== 'transform') return;

    const count = TESTIMONIALS_DATA.length;
    if (currentIndex < count || currentIndex >= count * 2) {
      const wrappedIndex = currentIndex < count ? currentIndex + count : currentIndex - count;
      setAnimateTrack(false);
      setCurrentIndex(wrappedIndex);
      requestAnimationFrame(() => requestAnimationFrame(() => setAnimateTrack(true)));
    }
    animationLocked.current = false;
  };

  const previous = () => move(-1);
  const next = () => move(1);

  return (
    <section id="testimonials" className="relative z-10 overflow-hidden bg-[#0b0a27] px-4 pb-[96px] pt-[78px] text-white sm:px-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_48%,rgba(99,56,245,0.035),transparent_58%)]" />
      <div className="relative z-10 mx-auto max-w-[1246px]">
        <header className="mx-auto mb-[29px] max-w-[780px] text-center">
          <span className="mb-1 block text-[15px] font-medium leading-5 text-[#7045ff]">Clients Testimonials</span>
          <h2 className="text-[32px] font-bold leading-[1.2] tracking-[-0.7px] text-white sm:text-[44px]">What A Job Holder Says About Us</h2>
          <p className="mx-auto mt-3 max-w-[710px] text-[15px] leading-[23px] text-[#e0dfeb] sm:text-[16px]">
            There are many variations of passages of available, but the majority have suffered some<br className="hidden sm:block" /> form, by injected humour, or look even slightly believable.
          </p>
        </header>

        <div className="relative mx-auto max-w-[1346px]">
          <button
            type="button"
            onClick={previous}
            aria-label="Previous testimonials"
            className="absolute -left-1 top-[164px] z-20 hidden h-[43px] w-[43px] -translate-y-1/2 items-center justify-center rounded-[5px] bg-[#23233d] text-[#7045ff] transition-colors hover:bg-[#6338f5] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#9b82ff] lg:flex"
          >
            <ChevronLeft className="h-[19px] w-[19px]" strokeWidth={1.5} />
          </button>

          <div className="mx-auto max-w-[1146px] overflow-hidden pt-[58px]">
            <div
              ref={trackRef}
              onTransitionEnd={handleSlideEnd}
              className={`flex w-[calc(900%_+_160px)] gap-5 sm:w-[calc(450%_+_70px)] lg:w-[calc(300%_+_40px)] ${animateTrack ? 'transition-transform duration-[550ms] ease-[cubic-bezier(0.22,1,0.36,1)]' : ''}`}
              style={{ transform: `translate3d(-${currentIndex * slideStride}px, 0, 0)` }}
            >
            {repeatedTestimonials.map((item, index) => (
              <article
                key={`${item.id}-${index}`}
                className="relative flex min-h-[212px] shrink-0 flex-col items-center rounded-[6px] bg-[#222236] px-5 pb-5 pt-[69px] text-center"
                style={{ flexBasis: 'calc((100% - 160px) / 9)' }}
              >
                <div className="absolute -top-[58px] left-1/2 flex h-[90px] w-[90px] -translate-x-1/2 items-center justify-center rounded-full bg-[#292940]">
                  <img src={item.avatar.src || item.avatar} alt={item.name} className="h-[74px] w-[74px] rounded-full object-cover" />
                  <span aria-hidden="true" className="absolute -right-[1px] bottom-[17px] h-[31px] w-[5px] rounded-r-full border-r-2 border-[#7045ff]" />
                </div>

                <svg aria-hidden="true" className="absolute left-[29px] top-[28px] h-[47px] w-[66px] text-[#7045ff]" viewBox="0 0 66 47" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <path d="M25 3C15 8 8 18 8 29c0 8 4 13 11 13 7 0 12-5 12-12 0-6-4-10-10-11 1-5 4-9 8-12L25 3Zm35 0C50 8 43 18 43 29c0 8 4 13 11 13 7 0 12-5 12-12 0-6-4-10-10-11 1-5 4-9 8-12l-4-4Z" transform="translate(-5 -1)" />
                </svg>

                <h3 className="text-[17px] font-semibold leading-5 text-white">{item.name}</h3>
                <span className="mt-1 text-[13px] leading-[18px] text-[#7045ff]">{item.role}</span>
                <p className="mt-[14px] max-w-[340px] text-[14px] leading-[23px] text-[#f0eff6]">{item.text}</p>
              </article>
            ))}
            </div>
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next testimonials"
            className="absolute -right-1 top-[164px] z-20 hidden h-[43px] w-[43px] -translate-y-1/2 items-center justify-center rounded-[5px] bg-[#23233d] text-[#7045ff] transition-colors hover:bg-[#6338f5] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#9b82ff] lg:flex"
          >
            <ChevronRight className="h-[19px] w-[19px]" strokeWidth={1.5} />
          </button>
        </div>

        <div className="mt-7 flex items-center justify-center gap-5 lg:hidden">
          <button type="button" onClick={previous} aria-label="Previous testimonials" className="flex h-10 w-10 items-center justify-center rounded-[5px] bg-[#23233d] text-[#7045ff] transition-colors hover:bg-[#6338f5] hover:text-white"><ChevronLeft className="h-5 w-5" /></button>
          <span className="min-w-[42px] text-center text-xs tabular-nums text-slate-400">{((currentIndex - TESTIMONIALS_DATA.length + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length) + 1} / {TESTIMONIALS_DATA.length}</span>
          <button type="button" onClick={next} aria-label="Next testimonials" className="flex h-10 w-10 items-center justify-center rounded-[5px] bg-[#23233d] text-[#7045ff] transition-colors hover:bg-[#6338f5] hover:text-white"><ChevronRight className="h-5 w-5" /></button>
        </div>
      </div>
    </section>
  );
}
