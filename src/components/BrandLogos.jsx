import React from 'react';

// Google 'G' Multi-color SVG
export function GoogleIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

// Microsoft 4-square SVG
export function MicrosoftIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <rect x="2" y="2" width="9.5" height="9.5" fill="#F25022" />
      <rect x="12.5" y="2" width="9.5" height="9.5" fill="#7FBA00" />
      <rect x="2" y="12.5" width="9.5" height="9.5" fill="#00A4EF" />
      <rect x="12.5" y="12.5" width="9.5" height="9.5" fill="#FFB900" />
    </svg>
  );
}

// Amazon 'a' with orange smile arrow
export function AmazonIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path
        fill="#111827"
        d="M13.8 15.3c-.8.8-1.7 1.2-2.8 1.2-1.9 0-3.1-1.3-3.1-3.3 0-2.2 1.4-3.5 3.5-3.5 1 0 1.8.3 2.4.7v4.9zm2.4-7.9c-.3-.2-.8-.4-1.4-.5-1-.2-2.1-.3-3.2-.3-3.6 0-6 2-6 5.8 0 3.4 2 5.5 5 5.5 1.5 0 2.8-.6 3.6-1.7v1.4h2.2V7.7l-.2-.3z"
      />
      <path
        fill="#FF9900"
        d="M20.2 18.5c-2.4 1.8-6.1 2.8-9.8 2.3-3.5-.5-6.7-2.3-9-5.1-.3-.4 0-.8.4-.6 4 2.2 8.7 2.7 13.5 1.3 1.6-.5 3.3-1.3 4.6-2.4.4-.3.7.2.3.5zm.9-2.3c.4-.7.9-1.5 1.1-2.4.1-.3-.1-.5-.4-.4-.8.3-1.6.5-2.5.6-.4 0-.5.4-.1.7.6.5 1.3 1 1.9 1.5z"
      />
    </svg>
  );
}

// GitHub Octocat silhouette
export function GithubIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

// Dropbox isometric box
export function DropboxIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path
        fill="#0061FF"
        d="M6 3.5L12 7.5L6 11.5L0 7.5L6 3.5ZM18 3.5L24 7.5L18 11.5L12 7.5L18 3.5ZM0 15.5L6 19.5L12 15.5L6 11.5L0 15.5ZM18 11.5L12 15.5L18 19.5L24 15.5L18 11.5ZM6 20.8L12 16.8L18 20.8L12 24.8L6 20.8Z"
      />
    </svg>
  );
}

// Adobe stylized 'A'
export function AdobeIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path fill="#EB1000" d="M14.5 3H24V21L14.5 3Z" />
      <path fill="#EB1000" d="M9.5 3H0V21L9.5 3Z" />
      <path fill="#EB1000" d="M12 9.5L16.2 18H12.8L11.5 15.2H8.8L12 9.5Z" />
    </svg>
  );
}

// Main JobBoard Logo Icon
export function JobBoardLogoIcon({ className = "w-7 h-7" }) {
  return (
    <div className={`relative flex items-center justify-center rounded-full bg-gradient-to-tr from-[#6338F5] to-[#8C52FF] shadow-lg shadow-[#6338F5]/30 ${className}`}>
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white" stroke="currentColor" strokeWidth="2.5">
        <circle cx="9" cy="9" r="4" fill="white" />
        <circle cx="15" cy="15" r="4" fill="white" fillOpacity="0.8" />
        <path d="M9 13L15 11" stroke="white" strokeLinecap="round" />
      </svg>
    </div>
  );
}

// Trusted Company Logos rendering
export function TrustedLogoItem({ company }) {
  switch (company.type) {
    case 'circle-mesh':
      return (
        <div className="flex items-center gap-2 text-cyan-400 font-semibold tracking-wide text-lg opacity-85 hover:opacity-100 transition-opacity">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="8" cy="12" r="5" stroke="#38bdf8" />
            <circle cx="16" cy="12" r="5" stroke="#818cf8" />
          </svg>
          <span className="text-slate-300 font-bold">Logoipsum</span>
        </div>
      );
    case 'infinity':
      return (
        <div className="flex items-center gap-2 text-violet-400 font-semibold tracking-wide text-lg opacity-85 hover:opacity-100 transition-opacity">
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-400"></span>
          </div>
          <span className="text-slate-300 font-bold">Logoipsum</span>
        </div>
      );
    case 'crest':
      return (
        <div className="flex flex-col items-center justify-center text-slate-400 opacity-80 hover:opacity-100 transition-opacity">
          <div className="flex items-center gap-0.5 text-xs text-amber-400/80">
            ★ ★ ★ ★ ★
          </div>
          <span className="text-xs tracking-widest font-black uppercase text-slate-300 border-t border-b border-slate-700 px-2 py-0.5 mt-0.5">
            ULTRA
          </span>
        </div>
      );
    case 'badge':
      return (
        <div className="flex items-center gap-2 text-slate-300 opacity-85 hover:opacity-100 transition-opacity">
          <div className="w-7 h-7 rounded border border-slate-600 bg-slate-800/80 flex items-center justify-center text-[11px] font-bold text-slate-200">
            QC
          </div>
          <div className="flex flex-col text-left leading-tight">
            <span className="text-xs font-black tracking-wider text-slate-200">POWER</span>
            <span className="text-[10px] tracking-widest text-slate-400 font-mono">XR2 MODULE</span>
          </div>
        </div>
      );
    case 'rhombus':
      return (
        <div className="flex items-center gap-2 text-purple-400 font-semibold tracking-wide text-lg opacity-85 hover:opacity-100 transition-opacity">
          <svg className="w-6 h-6 text-[#7045FF]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 12l10 10 10-10L12 2zm0 4.5l6.5 5.5-6.5 5.5-6.5-5.5L12 6.5z" />
          </svg>
          <span className="text-slate-300 font-bold">Logoipsum</span>
        </div>
      );
    case 'prism':
      return (
        <div className="flex items-center gap-1.5 font-bold tracking-wider text-lg opacity-85 hover:opacity-100 transition-opacity text-slate-300">
          <svg className="w-5 h-5 text-indigo-400" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="12 2 22 20 2 20" fill="#6338F5" />
          </svg>
          <span className="font-extrabold tracking-tight text-white">LOGOIPSUM</span>
        </div>
      );
    default:
      return (
        <div className="text-slate-300 font-bold text-base opacity-80">
          {company.name}
        </div>
      );
  }
}
