import React, { useState, useEffect, useRef } from 'react';
import { Pause, Play, RotateCcw } from 'lucide-react';

export const StoryView: React.FC = () => {
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll loop
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let lastTime = performance.now();

    const step = (now: number) => {
      const delta = now - lastTime;
      lastTime = now;

      if (!isPaused && container) {
        container.scrollTop += (delta * 0.035);
        if (container.scrollTop + container.clientHeight >= container.scrollHeight - 5) {
          container.scrollTop = 0;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const resetScroll = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  };

  const storySections = [
    {
      title: null,
      content:
        'Jin Mori is the main protagonist in "The God of High School," a South Korean webtoon series created by Yongje Park. His character has a rich and complex background.',
    },
    {
      title: 'Background:',
      content:
        'Jin Mori is initially introduced as a high school student living a seemingly ordinary life. However, his true identity is anything but ordinary. Unbeknownst to him, he is the descendant of the legendary martial artist Jin Tae-Jin, who defeated the world’s greatest fighters.',
    },
    {
      title: 'The God of High School Tournament:',
      content:
        'Jin Mori’s journey truly begins when he enters "The God of High School" tournament, a competition that seeks to determine the strongest high school student in South Korea. As he participates in the tournament, he quickly gains attention for his exceptional martial arts skills, particularly in Renewal Taekwondo.',
    },
    {
      title: "Revelations and Monkey King's Power:",
      content:
        'As the series progresses, it is revealed that Jin Mori is the host and true reincarnation of the powerful mythical being known as the Monkey King — Jecheondaeseong. The Monkey King lends him extraordinary abilities, including the power to summon the Ruyi Jingu Bang (Yeoui), a magical staff associated with mythological lore.',
    },
    {
      title: 'Charyeok and Borrowed Power:',
      content:
        "Jin Mori's connection with the Monkey King allows him to tap into divine realms beyond normal Charyeok, which involves borrowing strength from divine beings. While others rely entirely on gods, Mori's martial arts mastery combined with his divine heritage makes him a formidable force unmatched in the universe.",
    },
    {
      title: 'Personal Growth and Challenges:',
      content:
        'Throughout the series, Jin Mori faces numerous challenges, both in the tournament and in his personal life. He encounters powerful opponents, uncovers the mysteries of his family’s past, and experiences significant character development. His journey is not just about physical strength but also about self-discovery, brotherhood, and protecting the universe.',
    },
  ];

  return (
    <div className="relative w-full h-full p-4 md:p-8 pr-12 md:pr-32 flex flex-col items-center">
      
      {/* Top Header with GOH Logo & Controls (No background box) */}
      <div className="w-full max-w-2xl flex items-center justify-between border-b-2 border-white/20 pb-3 mb-4 shrink-0">
        <img
          src="/assets/GOH.png"
          alt="The God of High School"
          className="h-10 sm:h-12 object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]"
        />

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full border-2 border-[#f1f1f1] hover:border-[#ffe75e] text-xs font-manga text-[#f8ecd5] hover:text-white transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] cursor-pointer"
          >
            {isPaused ? <Play className="w-3.5 h-3.5 text-[#ffe75e]" /> : <Pause className="w-3.5 h-3.5 text-white" />}
            <span className="drop-shadow-[1px_1px_2px_rgba(0,0,0,0.9)]">{isPaused ? 'RESUME SCROLL' : 'PAUSE'}</span>
          </button>

          <button
            onClick={resetScroll}
            className="p-1.5 rounded-full border-2 border-[#f1f1f1] hover:border-[#ffe75e] text-white transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] cursor-pointer"
            title="Reset to Top"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Narrative Auto-Scroll Box — No artificial dark card background, pure depth with shadows */}
      <div
        ref={scrollContainerRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="w-full max-w-2xl flex-1 overflow-y-auto pr-4 scrollbar-thin space-y-6"
      >
        {storySections.map((sec, idx) => (
          <div key={idx} className="space-y-1.5 text-sm sm:text-base leading-relaxed text-white drop-shadow-[1px_2px_3px_rgba(0,0,0,0.95)]">
            {sec.title && (
              <h3 className="font-manga text-[#ffe75e] text-base sm:text-lg tracking-wide drop-shadow-[1px_2px_4px_rgba(0,0,0,0.95)]">
                {sec.title}
              </h3>
            )}
            <p className="font-normal text-[#f1f1f1] leading-relaxed">{sec.content}</p>
          </div>
        ))}
      </div>

      <div className="text-xs text-white/90 drop-shadow-[1px_1px_2px_rgba(0,0,0,0.95)] mt-3 italic text-center shrink-0">
        Hover to pause reading • Scroll freely with wheel or touch
      </div>

    </div>
  );
};
