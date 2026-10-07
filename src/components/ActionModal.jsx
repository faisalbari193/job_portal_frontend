import React, { useState } from 'react';
import { X, CheckCircle, Briefcase, User, Mail, Lock, Building, DollarSign, MapPin } from 'lucide-react';
import { JobBoardLogoIcon } from './BrandLogos';

export default function ActionModal({ type, data, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [authTab, setAuthTab] = useState(type === 'login' ? 'login' : 'signup');

  if (!type) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-md bg-[#0E0E38] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black/80 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-md text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal content by type */}
        {submitted ? (
          <div className="text-center py-8">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
              <CheckCircle className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-2">Success!</h3>
            <p className="text-xs text-slate-300">
              {type === 'apply' && 'Your application has been submitted to ' + (data?.company || 'the employer') + '.'}
              {type === 'post-job' && 'Your job listing has been published successfully.'}
              {(type === 'signup' || type === 'login' || type === 'quick') && 'Welcome to JobBoard! Session initialized.'}
              {type === 'support' && 'Support message received. We will respond shortly.'}
            </p>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="flex items-center gap-2 mb-6">
              <JobBoardLogoIcon className="w-7 h-7" />
              <span className="font-bold text-lg text-white">JobBoard</span>
            </div>

            {/* Apply Form */}
            {type === 'apply' && (
              <div>
                <h3 className="text-lg font-bold mb-1">Apply for {data?.role}</h3>
                <p className="text-xs text-slate-400 mb-5">{data?.company} • {data?.location}</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Full Name</label>
                    <input required type="text" placeholder="John Doe" className="w-full bg-[#16164A] border border-white/10 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-[#6338F5]" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Email Address</label>
                    <input required type="email" placeholder="john@example.com" className="w-full bg-[#16164A] border border-white/10 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-[#6338F5]" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Resume / Portfolio Link</label>
                    <input required type="url" placeholder="https://linkedin.com/in/johndoe" className="w-full bg-[#16164A] border border-white/10 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-[#6338F5]" />
                  </div>
                  <button type="submit" className="w-full py-2.5 bg-[#6338F5] hover:bg-[#7045FF] text-white font-semibold rounded-md text-xs transition-colors">
                    Submit Application
                  </button>
                </form>
              </div>
            )}

            {/* Post a Job Form */}
            {type === 'post-job' && (
              <div>
                <h3 className="text-lg font-bold mb-1">Post a New Job Offer</h3>
                <p className="text-xs text-slate-400 mb-5">Reach 10,000+ top candidates worldwide</p>
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Company Name</label>
                    <input required type="text" placeholder="e.g. Acme Corp" className="w-full bg-[#16164A] border border-white/10 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-[#6338F5]" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Job Role</label>
                    <input required type="text" placeholder="e.g. Lead UX Designer" className="w-full bg-[#16164A] border border-white/10 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-[#6338F5]" />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Location</label>
                      <input required type="text" placeholder="New York, NY" className="w-full bg-[#16164A] border border-white/10 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-[#6338F5]" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Rate ($/hr)</label>
                      <input required type="text" placeholder="$560 / Hour" className="w-full bg-[#16164A] border border-white/10 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-[#6338F5]" />
                    </div>
                  </div>
                  <button type="submit" className="w-full py-2.5 bg-[#6338F5] hover:bg-[#7045FF] text-white font-semibold rounded-md text-xs transition-colors mt-2">
                    Publish Job Now
                  </button>
                </form>
              </div>
            )}

            {/* Sign Up / Login Form */}
            {(type === 'signup' || type === 'login' || type === 'quick') && (
              <div>
                <div className="flex border-b border-white/10 mb-5">
                  <button
                    type="button"
                    onClick={() => setAuthTab('login')}
                    className={`pb-2 px-3 text-xs font-semibold ${authTab === 'login' ? 'text-white border-b-2 border-[#6338F5]' : 'text-slate-400'}`}
                  >
                    Login
                  </button>
                  <button
                    type="button"
                    onClick={() => setAuthTab('signup')}
                    className={`pb-2 px-3 text-xs font-semibold ${authTab === 'signup' ? 'text-white border-b-2 border-[#6338F5]' : 'text-slate-400'}`}
                  >
                    Sign Up
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3.5">
                  {authTab === 'signup' && (
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Full Name</label>
                      <input required type="text" placeholder="Alex Morgan" className="w-full bg-[#16164A] border border-white/10 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-[#6338F5]" />
                    </div>
                  )}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Email</label>
                    <input required type="email" placeholder="user@domain.com" className="w-full bg-[#16164A] border border-white/10 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-[#6338F5]" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Password</label>
                    <input required type="password" placeholder="••••••••" className="w-full bg-[#16164A] border border-white/10 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-[#6338F5]" />
                  </div>
                  <button type="submit" className="w-full py-2.5 bg-[#6338F5] hover:bg-[#7045FF] text-white font-semibold rounded-md text-xs transition-colors mt-2">
                    {authTab === 'login' ? 'Sign In to Account' : 'Create Free Account'}
                  </button>
                </form>
              </div>
            )}

            {/* Support modal */}
            {type === 'support' && (
              <div>
                <h3 className="text-lg font-bold mb-1">JobBoard Support</h3>
                <p className="text-xs text-slate-400 mb-4">How can we help your recruitment today?</p>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Your Email</label>
                    <input required type="email" placeholder="you@example.com" className="w-full bg-[#16164A] border border-white/10 rounded-md px-3 py-2 text-xs text-white focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Message</label>
                    <textarea required rows={3} placeholder="Tell us how we can help..." className="w-full bg-[#16164A] border border-white/10 rounded-md px-3 py-2 text-xs text-white focus:outline-none resize-none"></textarea>
                  </div>
                  <button type="submit" className="w-full py-2.5 bg-[#6338F5] hover:bg-[#7045FF] text-white font-semibold rounded-md text-xs transition-colors">
                    Send Message
                  </button>
                </form>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
