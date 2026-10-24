import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Share2, Check, Mail } from 'lucide-react';

export const ExtraView: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="relative w-full h-full p-4 md:p-8 pr-12 md:pr-32 flex flex-col justify-between overflow-y-auto scrollbar-thin">
      
      {/* Main Content Area without background boxes */}
      <div className="max-w-2xl mx-auto w-full text-center space-y-5 pt-2">
        
        {/* Title & Logo */}
        <div className="space-y-3">
          <h1 className="font-manga text-3xl sm:text-4xl md:text-5xl text-[#ffe75e] tracking-wider drop-shadow-[2px_3px_5px_rgba(0,0,0,0.95)]">
            THE GOD OF HIGHSCHOOL
          </h1>
          <div className="flex justify-center">
            <img
              src="/assets/logo.png"
              alt="GOH Emblem"
              className="h-20 sm:h-24 object-contain filter drop-shadow-[0_4px_14px_rgba(0,0,0,0.9)]"
            />
          </div>
        </div>

        {/* Creator Appreciation Message */}
        <h2 className="font-brush text-base sm:text-lg md:text-xl text-[#f8ecd5] leading-relaxed max-w-xl mx-auto drop-shadow-[1px_2px_4px_rgba(0,0,0,0.95)]">
          "Thanks for the amazing rides, the thrills, the suspense and best of all the iconic characters and Action Packed Creation"
        </h2>

        {/* Squad Image: team2.png */}
        <div className="flex justify-center py-2">
          <motion.img
            src="/assets/team2.png"
            alt="God of High School Team"
            className="h-32 sm:h-40 w-auto object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.9)]"
            whileHover={{ scale: 1.05 }}
          />
        </div>

        {/* Grandpa Jin Tribute Section — Floating with Text Shadows, No Dark BG */}
        <div className="max-w-md mx-auto flex items-center justify-center gap-5 text-left py-2">
          <img
            src="/assets/jin.png"
            alt="Grandpa JIN"
            className="w-18 h-18 sm:w-22 sm:h-22 object-cover object-top rounded-[7px] border-2 border-[#f1f1f1] filter drop-shadow-[0_6px_14px_rgba(0,0,0,0.9)] shrink-0"
          />
          <div className="drop-shadow-[1px_2px_3px_rgba(0,0,0,0.95)]">
            <span className="font-manga text-sm sm:text-base text-[#ffe75e] block">
              MASTER JIN TAEJIN
            </span>
            <p className="text-xs sm:text-sm text-white font-medium leading-snug mt-1">
              This is a tribute to the best mentor and grandpa: master JIN
            </p>
          </div>
        </div>

      </div>

      {/* Bottom Footer (Original h6 credit) */}
      <div className="pt-4 mt-auto border-t-2 border-white/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-white drop-shadow-[1px_1px_3px_rgba(0,0,0,0.95)]">
        <div className="flex items-center gap-1.5 font-medium">
          <Mail className="w-4 h-4 text-[#ffe75e]" />
          <span>fanmade website. share and you can contact me via:</span>
          <a
            href="mailto:qaasimkids6@gmail.com"
            className="text-[#ffe75e] hover:underline font-bold"
          >
            qaasimkids6@gmail.com
          </a>
        </div>

        <button
          onClick={handleShare}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border-2 border-[#f1f1f1] hover:border-[#ffe75e] bg-transparent text-[#f8ecd5] hover:text-white font-manga text-xs transition-all drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-[#ffe75e]" />
              <span className="text-[#ffe75e]">LINK COPIED!</span>
            </>
          ) : (
            <>
              <Share2 className="w-3.5 h-3.5" />
              <span>SHARE FANPAGE</span>
            </>
          )}
        </button>
      </div>

    </div>
  );
};
