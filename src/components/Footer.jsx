import React, { useState } from 'react';
import { JobBoardLogoIcon } from './BrandLogos';
import { FOOTER_LINKS } from '../data/jobData';
import { Mail, Check } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer className="w-full bg-[#080827] border-t border-white/5 pt-16 md:pt-20 pb-10 text-slate-400 text-xs sm:text-[13px] relative z-10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer 5-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/5">
          
          {/* Column 1: Brand Info (col-span-4) */}
          <div className="sm:col-span-2 lg:col-span-4 pr-0 lg:pr-6">
            <a href="#home" className="flex items-center gap-2.5 mb-4 inline-flex">
              <JobBoardLogoIcon className="w-8 h-8" />
              <span className="text-xl font-bold tracking-tight text-white flex items-center">
                Job<span className="text-white font-extrabold">Board</span>
              </span>
            </a>
            
            <p className="text-slate-400 leading-relaxed mb-6 text-xs sm:text-[13px] max-w-sm">
              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
            </p>

            <a
              href="mailto:Example@job.com"
              className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors text-xs font-medium"
            >
              <div className="w-7 h-7 rounded-full bg-[#181845] flex items-center justify-center text-indigo-400">
                <Mail className="w-3.5 h-3.5" />
              </div>
              <span>Example@job.com</span>
            </a>
          </div>

          {/* Column 2: Useful Links (col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white mb-4 tracking-tight">
              Useful Links
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.useful.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Category (col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white mb-4 tracking-tight">
              Category
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.category.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Follow Us (col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white mb-4 tracking-tight">
              Follow Us
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.followUs.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Newsletter (col-span-2) */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h4 className="text-sm font-bold text-white mb-4 tracking-tight">
              Newsletter
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed mb-4">
              Sign up to our archi, point to recent updates & office
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex items-stretch rounded-md overflow-hidden bg-[#12123D] border border-white/10 focus-within:border-[#6338F5]">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter a Email"
                  className="w-full bg-transparent px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#6338F5] hover:bg-[#7045FF] text-white px-3.5 py-2 text-xs font-semibold shrink-0 transition-colors cursor-pointer"
                >
                  {subscribed ? <Check className="w-3.5 h-3.5" /> : 'Send'}
                </button>
              </div>
              {subscribed && (
                <p className="text-[11px] text-emerald-400">
                  Thank you for subscribing!
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Copyright Bottom Bar */}
        <div className="pt-8 text-center">
          <p className="text-slate-400 text-xs">
            Copyright © 2023 <span className="text-slate-200">DesignZone</span>. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
