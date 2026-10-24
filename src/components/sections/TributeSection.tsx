import React, { useState } from 'react';
import { GlassCard } from '../ui/GlassCard';
import { MangaBadge } from '../ui/MangaBadge';
import { Heart, Sparkles, Mail, Share2, Check } from 'lucide-react';

export const TributeSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section
      id="tribute"
      className="relative min-h-screen w-full snap-start flex items-center justify-center p-4 md:p-10 pt-20"
    >
      <div className="w-full max-w-7xl mx-auto space-y-6 z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b-2 border-[#ffe75e]/40 pb-3">
          <div>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-[#ffe75e]" />
              <MangaBadge variant="gold">TRIBUTE & EXTRA</MangaBadge>
            </div>
            <h2 className="font-manga text-3xl md:text-5xl text-[#ffe75e] text-shadow-manga tracking-wide mt-1">
              HONORING THE CREATOR & MASTER JIN
            </h2>
          </div>
          <p className="text-xs md:text-sm text-[#f8ecd5] max-w-sm italic">
            "A celebration of 11+ years of pure adrenaline, brotherhood, and martial arts mastery."
          </p>
        </div>

        {/* Main Grid: Master Jin Tribute + Creator Note */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Master Jin Taejin Memorial */}
          <div className="lg:col-span-6 flex flex-col">
            <GlassCard variant="intense" className="flex-1 flex flex-col justify-between text-black">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-black/20 pb-2">
                  <div className="font-manga text-xl md:text-2xl text-black">
                    MASTER JIN TAEJIN MEMORIAL
                  </div>
                  <img src="/assets/logo.png" alt="GOH Crest" className="h-8 object-contain" />
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="w-32 sm:w-40 aspect-square rounded-[7px] overflow-hidden border-2 border-black bg-black shrink-0 shadow-lg">
                    <img
                      src="/assets/jin.png"
                      alt="Grandpa Jin Taejin"
                      className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="space-y-2 text-xs md:text-sm">
                    <p className="font-brush text-lg text-[#e2620d] font-bold">
                      "This is a tribute to the best mentor and grandpa: Master JIN"
                    </p>
                    <p className="text-stone-900 font-medium leading-relaxed bg-white/40 p-2.5 rounded">
                      The undisputed God of Martial Arts who invented Renewal Taekwondo. He protected Mori with his life,
                      facing down whole divine pantheons and proving the indomitable power of the human spirit.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded bg-black/90 border border-[#ffe75e] text-[#ffe75e] text-xs md:text-sm italic">
                  "Grandpa always said: Do what you want! Win, lose, or draw — as long as you fight true to yourself, you are Renewal Taekwondo."
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Right Column: Original Creator Appreciation & Squad Artwork */}
          <div className="lg:col-span-6 flex flex-col">
            <GlassCard variant="base" className="flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-white/20 pb-2">
                  <h3 className="font-manga text-xl md:text-2xl text-[#ffe75e]">
                    THANK YOU, YONGJE PARK!
                  </h3>
                  <Sparkles className="w-5 h-5 text-[#ffe75e]" />
                </div>

                <p className="font-brush text-sm md:text-base text-[#f8ecd5] leading-relaxed">
                  "Thanks for the amazing rides, the thrills, the suspense and best of all the iconic characters and action-packed creation!"
                </p>

                {/* Squad Banner */}
                <div className="rounded-[7px] overflow-hidden border-2 border-[#ffe75e]/70 bg-black/60 p-2 shadow-xl">
                  <img
                    src="/assets/team2.png"
                    alt="The God of High School Squad"
                    className="w-full h-40 object-cover object-center rounded hover:scale-[1.02] transition-transform duration-300"
                  />
                  <p className="text-[11px] text-center text-[#ffe75e] mt-1.5 font-manga uppercase tracking-wider">
                    The Champions of Seoul & Protectors of Earth
                  </p>
                </div>
              </div>

              {/* Fan Contact Card */}
              <div className="p-3 rounded bg-black/60 border border-white/20 text-xs space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 text-[#ffe75e] font-semibold">
                    <Mail className="w-4 h-4 text-[#ffe75e]" />
                    <span>Fanmade Tribute Project</span>
                  </div>
                  <span className="text-stone-300">qaasimkids6@gmail.com</span>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-white/10">
                  <a
                    href="https://github.com/Alqaasimee-jr2/GOH-fanpage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#f8ecd5] hover:text-[#ffe75e] transition-colors"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    <span>GitHub: Alqaasimee-jr2/GOH-fanpage</span>
                  </a>

                  <button
                    onClick={handleShare}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#ffe75e] text-black font-manga text-xs hover:bg-yellow-300 transition-colors"
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
            </GlassCard>
          </div>

        </div>

        {/* Global Footer Banner */}
        <div className="text-center text-xs text-stone-300 py-2">
          <p>© The God of High School is authored by Yongje Park / WEBTOON / Naver. This is a non-commercial tribute fan page.</p>
        </div>

      </div>
    </section>
  );
};
