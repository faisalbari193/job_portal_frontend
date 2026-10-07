import React, { useState, useEffect } from 'react';
import { Headphones, ShoppingCart, ArrowUp } from 'lucide-react';

export default function FloatingWidgets({ onSupportClick }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Left side circular buttons matching the screenshot */}
      <div className="fixed left-3 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col gap-2.5">
        <button
          type="button"
          onClick={onSupportClick}
          aria-label="Customer Support"
          title="Customer Support"
          className="w-9 h-9 rounded-full bg-[#00bcd4] hover:bg-[#00acc1] text-white flex items-center justify-center shadow-lg shadow-[#00bcd4]/30 hover:scale-110 transition-all cursor-pointer"
        >
          <Headphones className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => window.open('https://designzone.co.in', '_blank')}
          aria-label="Theme Details"
          title="Theme Details"
          className="w-9 h-9 rounded-full bg-[#8bc34a] hover:bg-[#7cb342] text-white flex items-center justify-center shadow-lg shadow-[#8bc34a]/30 hover:scale-110 transition-all cursor-pointer"
        >
          <ShoppingCart className="w-4 h-4" />
        </button>
      </div>

      {/* Bottom right scroll to top */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-40 w-10 h-10 rounded-md bg-[#161642] hover:bg-[#6338F5] border border-white/10 text-slate-300 hover:text-white flex items-center justify-center shadow-xl transition-all cursor-pointer"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </>
  );
}
