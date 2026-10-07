import React, { useState } from 'react';
import Link from 'next/link';
import { NAV_LINKS } from '../data/jobData';
import { ChevronDown, Menu, X, UserPlus, LogIn, Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function Navbar({ onOpenAuthModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { theme, toggleTheme } = useTheme();

  const toggleDropdown = (label) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#080827] transition-all">
      <div className="mx-auto flex h-[82px] max-w-[1160px] items-center justify-between px-4 sm:px-6 lg:px-0">
        
        {/* Brand Logo */}
        <a href="#home" className="group flex shrink-0 cursor-pointer items-center gap-2">
          <svg aria-hidden="true" viewBox="0 0 40 40" className="h-9 w-9 text-[#6338F5] transition-transform group-hover:scale-105" fill="none">
            <circle cx="20" cy="20" r="13.5" stroke="currentColor" strokeWidth="2.5" />
            <path d="M20 1.5v5M20 33.5v5M1.5 20h5M33.5 20h5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="20" cy="15" r="4" fill="currentColor" />
            <path d="M12.8 27c.8-4.2 3.2-6.3 7.2-6.3s6.4 2.1 7.2 6.3" fill="currentColor" />
          </svg>
          <span className="flex items-center text-[27px] font-normal leading-none tracking-[-1.1px] text-[#7045ff]">
            Job<span className="text-white">Board</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-8 lg:flex xl:gap-9">
          {NAV_LINKS.map((item) => (
            <div key={item.label} className="relative group">
              <a
                href={item.href}
                className="flex items-center gap-1 py-2 text-[13px] font-medium tracking-[-0.2px] text-white hover:text-[#a78bfa] transition-colors"
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown className="h-3 w-3 text-white transition-transform group-hover:translate-y-0.5" />
                )}
              </a>

              {/* Minimal hover dropdown indicator */}
              {item.hasDropdown && (
                <div className="absolute left-0 top-full hidden group-hover:block w-48 bg-[#0E0E38] border border-white/10 rounded-lg shadow-xl shadow-black/50 py-2 z-50">
                  <a href={item.href} className="block px-4 py-2 text-xs text-slate-300 hover:text-white hover:bg-white/5 transition-colors">
                    Overview
                  </a>
                  <a href={item.href} className="block px-4 py-2 text-xs text-slate-300 hover:text-white hover:bg-white/5 transition-colors">
                    Browse All
                  </a>
                  <a href={item.href} className="block px-4 py-2 text-xs text-slate-300 hover:text-white hover:bg-white/5 transition-colors">
                    Featured
                  </a>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right CTA Controls */}
        <div className="hidden items-center gap-3 sm:flex">
          {/* Square Action Icon */}
          <button
            type="button"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            aria-pressed={theme === 'light'}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            className="relative flex h-[42px] w-[80px] cursor-pointer items-center rounded-[3px] bg-[#6338e8] p-1 transition-colors hover:bg-[#7045ff]"
            onClick={toggleTheme}
          >
            <span className={`absolute left-1 top-1 flex h-[34px] w-[34px] items-center justify-center rounded-[3px] bg-white text-[#6338e8] transition-transform duration-300 ease-in-out ${theme === 'light' ? 'translate-x-[38px]' : 'translate-x-0'}`}>
              {theme === 'light' ? <Moon className="h-[18px] w-[18px] fill-current" /> : <Sun className="h-[19px] w-[19px]" />}
            </span>
          </button>

          {/* Sign Up Button */}
          <Link
            href="/signup"
            className="flex h-[42px] cursor-pointer items-center gap-1 rounded-[3px] bg-[#6338e8] px-5 text-[14px] font-normal tracking-[-0.2px] text-white transition-colors hover:bg-[#7045ff] active:scale-95"
          >
            <UserPlus className="h-4 w-4 fill-white" />
            <span>Sign Up</span>
          </Link>

          {/* Login Button */}
          <Link
            href="/login"
            className="flex h-[42px] cursor-pointer items-center gap-1 rounded-[3px] bg-[#6338e8] px-5 text-[14px] font-normal tracking-[-0.2px] text-white transition-colors hover:bg-[#7045ff] active:scale-95"
          >
            <LogIn className="h-4 w-4 fill-white" />
            <span>login</span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            aria-pressed={theme === 'light'}
            className="relative h-7 w-12 rounded-full bg-[#6338e8] p-0.5 text-[#6338F5]"
          >
            <span className={`absolute left-0.5 top-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-white transition-transform duration-300 ease-in-out ${theme === 'light' ? 'translate-x-5' : 'translate-x-0'}`}>
              {theme === 'light' ? <Moon className="h-3.5 w-3.5 fill-current" /> : <Sun className="h-3.5 w-3.5" />}
            </span>
          </button>
          <Link
            href="/login"
            className="px-3 py-1.5 rounded-md bg-[#6338F5] text-white text-xs font-semibold"
          >
            Login
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md bg-[#161642] text-slate-300 hover:text-white"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0a30] border-b border-white/10 px-4 pt-3 pb-6 space-y-3">
          <div className="space-y-1">
            {NAV_LINKS.map((item) => (
              <div key={item.label} className="border-b border-white/5 pb-2">
                <button
                  type="button"
                  onClick={() => toggleDropdown(item.label)}
                  className="w-full flex items-center justify-between text-left text-sm font-semibold text-slate-200 py-1.5"
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && <ChevronDown className="w-4 h-4 text-slate-400" />}
                </button>
                {activeDropdown === item.label && (
                  <div className="pl-4 py-1 space-y-1 text-xs text-slate-400">
                    <a href={item.href} className="block py-1 hover:text-white">Overview</a>
                    <a href={item.href} className="block py-1 hover:text-white">Trending</a>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <Link
              href="/signup"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-md bg-[#6338F5] text-white text-center font-semibold text-sm flex items-center justify-center gap-2"
            >
              <UserPlus className="w-4 h-4" />
              Sign Up
            </Link>
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="light-theme-secondary w-full py-2.5 rounded-md bg-white/10 hover:bg-white/15 text-white text-center font-semibold text-sm flex items-center justify-center gap-2"
            >
              <LogIn className="w-4 h-4" />
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
