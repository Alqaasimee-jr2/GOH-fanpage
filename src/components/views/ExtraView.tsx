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
      
      {/* Main Content Area */}
      <div className="max-w-2xl mx-auto w-full text-center space-y-4 pt-2">
        
        {/* Title & Logo */}
        <div className="space-y-2">
          <h1 className="font-manga text-2xl sm:text-3xl md:text-4xl text-[#ffe75e] tracking-wider text-shadow-manga">
            THE GOD OF HIGHSCHOOL
          </h1>
          <div className="flex justify-center">
            <img
              src="/assets/logo.png"
              alt="GOH Emblem"
              className="h-16 sm:h-20 object-contain drop-shadow-[0_0_12px_rgba(255,231,94,0.6)]"
            />
          </div>
        </div>

        {/* Creator Appreciation Message */}
        <h2 className="font-brush text-sm sm:text-base md:text-lg text-[#f8ecd5] leading-relaxed max-w-xl mx-auto">
          "Thanks for the amazing rides, the thrills, the suspense and best of all the iconic characters and Action Packed Creation"
        </h2>

        {/* Squad Image: team2.png */}
        <div className="flex justify-center py-1">
          <motion.img
            src="/assets/team2.png"
            alt="God of High School Team"
            className="h-28 sm:h-36 w-auto object-contain rounded-[7px] border-2 border-[#ffe75e]/70 shadow-lg"
            whileHover={{ scale: 1.05 }}
          />
        </div>

        {/* Grandpa Jin Tribute Section */}
        <div className="bg-black/50 backdrop-blur-sm p-3.5 rounded-[7px] border border-white/20 max-w-md mx-auto flex items-center gap-4 text-left">
          <img
            src="/assets/jin.png"
            alt="Grandpa JIN"
            className="w-16 h-16 sm:w-20 sm:h-20 object-cover object-top rounded-[7px] border-2 border-[#ffe75e] shrink-0"
          />
          <div>
            <span className="font-manga text-xs sm:text-sm text-[#ffe75e] block">
              MASTER JIN TAEJIN
            </span>
            <p className="text-xs sm:text-sm text-[#f1f1f1] font-medium leading-snug mt-0.5">
              This is a tribute to the best mentor and grandpa: master JIN
            </p>
          </div>
        </div>

      </div>

      {/* Bottom Footer (Original h6 credit) */}
      <div className="pt-4 mt-auto border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-stone-300">
        <div className="flex items-center gap-1.5 font-medium">
          <Mail className="w-3.5 h-3.5 text-[#ffe75e]" />
          <span>fanmade website. share and you can contact me via:</span>
          <a
            href="mailto:qaasimkids6@gmail.com"
            className="text-[#ffe75e] hover:underline font-semibold"
          >
            qaasimkids6@gmail.com
          </a>
        </div>

        <button
          onClick={handleShare}
          className="flex items-center gap-1 px-3 py-1 rounded bg-[#ffe75e] text-black font-manga text-xs font-bold hover:bg-yellow-300 transition-colors shadow-md cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span>LINK COPIED!</span>
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
