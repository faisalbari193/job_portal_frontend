'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, BriefcaseBusiness, CheckCircle2, Eye, EyeOff, LockKeyhole, Mail, UserRound } from 'lucide-react';

export default function AuthPage({ mode }) {
  const isSignup = mode === 'signup';
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#080827] px-4 py-10 text-white">
      <div className="ambient-glow-left" />
      <div className="ambient-glow-right" />
      <div className="relative z-10 grid w-full max-w-[1000px] overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d32] shadow-2xl shadow-black/40 lg:min-h-[620px] lg:grid-cols-[0.95fr_1.05fr]">
        <aside className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-[#6338f5] via-[#4325b9] to-[#171344] p-10 lg:flex">
          <div className="absolute -right-20 top-36 h-72 w-72 rounded-full border border-white/10" />
          <div className="absolute -right-5 top-52 h-44 w-44 rounded-full border border-white/10" />
          <Link href="/" className="relative flex items-center gap-2 text-2xl font-semibold tracking-tight">
            <BriefcaseBusiness className="h-8 w-8" /> JobBoard
          </Link>
          <div className="relative max-w-sm">
            <span className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-violet-100">Your next chapter starts here</span>
            <h1 className="text-4xl font-bold leading-tight tracking-tight">Find work that moves you forward.</h1>
            <p className="mt-4 text-sm leading-6 text-violet-100/80">Connect with great teams, explore new opportunities, and build a career you love.</p>
          </div>
          <p className="relative text-xs text-violet-100/70">A better way to find your next opportunity.</p>
        </aside>

        <section className="flex items-center justify-center px-6 py-10 sm:px-12 lg:px-14">
          <div className="w-full max-w-[400px]">
            <Link href="/" className="mb-8 inline-flex items-center gap-2 text-xs font-medium text-slate-400 transition-colors hover:text-white">
              <ArrowLeft className="h-4 w-4" /> Back to home
            </Link>
            {submitted ? (
              <div className="py-12 text-center">
                <CheckCircle2 className="mx-auto h-14 w-14 text-emerald-400" />
                <h1 className="mt-5 text-2xl font-bold">{isSignup ? 'Account created!' : 'Welcome back!'}</h1>
                <p className="mt-2 text-sm text-slate-400">{isSignup ? 'Your JobBoard profile is ready to get started.' : 'You are signed in to your JobBoard account.'}</p>
                <Link href="/" className="mt-7 inline-flex rounded-lg bg-[#6338f5] px-5 py-3 text-sm font-semibold transition-colors hover:bg-[#7045ff]">Explore jobs</Link>
              </div>
            ) : (
              <>
                <p className="text-sm font-semibold text-[#9a7cff]">{isSignup ? 'CREATE YOUR ACCOUNT' : 'WELCOME BACK'}</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight">{isSignup ? 'Join JobBoard' : 'Sign in to JobBoard'}</h1>
                <p className="mt-2 text-sm text-slate-400">{isSignup ? 'Create an account and take the next step in your career.' : 'Enter your details to access your account.'}</p>

                <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }} className="mt-8 space-y-5">
                  {isSignup && (
                    <label className="block">
                      <span className="mb-2 block text-sm font-medium text-slate-200">Full name</span>
                      <span className="flex items-center gap-3 rounded-lg border border-white/10 bg-[#161642] px-3.5 focus-within:border-[#7552fa]">
                        <UserRound className="h-4 w-4 shrink-0 text-slate-500" />
                        <input required autoComplete="name" type="text" placeholder="Alex Morgan" className="h-12 min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-500" />
                      </span>
                    </label>
                  )}
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-slate-200">Email address</span>
                    <span className="flex items-center gap-3 rounded-lg border border-white/10 bg-[#161642] px-3.5 focus-within:border-[#7552fa]">
                      <Mail className="h-4 w-4 shrink-0 text-slate-500" />
                      <input required autoComplete="email" type="email" placeholder="you@example.com" className="h-12 min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-500" />
                    </span>
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-slate-200">Password</span>
                    <span className="flex items-center gap-3 rounded-lg border border-white/10 bg-[#161642] px-3.5 focus-within:border-[#7552fa]">
                      <LockKeyhole className="h-4 w-4 shrink-0 text-slate-500" />
                      <input required autoComplete={isSignup ? 'new-password' : 'current-password'} minLength={8} type={showPassword ? 'text' : 'password'} placeholder="At least 8 characters" className="h-12 min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-500" />
                      <button type="button" aria-label={showPassword ? 'Hide password' : 'Show password'} onClick={() => setShowPassword(!showPassword)} className="text-slate-500 hover:text-white">
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </span>
                  </label>
                  {!isSignup && <div className="text-right"><button type="button" className="text-xs font-medium text-[#a78bfa] hover:text-white">Forgot password?</button></div>}
                  <button type="submit" className="h-12 w-full rounded-lg bg-[#6338f5] text-sm font-semibold text-white shadow-lg shadow-[#6338f5]/20 transition-colors hover:bg-[#7045ff]">{isSignup ? 'Create account' : 'Sign in'}</button>
                </form>

                <p className="mt-7 text-center text-sm text-slate-400">
                  {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
                  <Link href={isSignup ? '/login' : '/signup'} className="font-semibold text-[#a78bfa] hover:text-white">{isSignup ? 'Sign in' : 'Sign up'}</Link>
                </p>
              </>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
