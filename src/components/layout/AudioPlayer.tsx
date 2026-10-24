import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorIntervalRef = useRef<number | null>(null);

  // Synthesize heroic ambient chords via Web Audio API if no audio file is mounted
  const startSynth = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioContextRef.current = ctx;

      // Pentatonic harmonic chord notes in Hz (C Major / GOH Anime Ambience: C3, G3, A3, E4, G4)
      const notes = [130.81, 196.0, 220.0, 329.63, 392.0];
      let noteIndex = 0;

      const playChordNote = () => {
        if (!audioContextRef.current || audioContextRef.current.state === 'closed') return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(notes[noteIndex % notes.length], ctx.currentTime);
        noteIndex++;

        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 1.2);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 3.8);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 4.0);
      };

      playChordNote();
      const interval = window.setInterval(playChordNote, 1800);
      oscillatorIntervalRef.current = interval;
    } catch {
      // AudioContext unavailable or restricted
    }
  };

  const stopSynth = () => {
    if (oscillatorIntervalRef.current) {
      clearInterval(oscillatorIntervalRef.current);
      oscillatorIntervalRef.current = null;
    }
    if (audioContextRef.current) {
      audioContextRef.current.close().catch(() => {});
      audioContextRef.current = null;
    }
  };

  const toggleAudio = () => {
    if (isPlaying) {
      stopSynth();
      setIsPlaying(false);
    } else {
      startSynth();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    return () => {
      stopSynth();
    };
  }, []);

  return (
    <button
      onClick={toggleAudio}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full border-2 border-[#f1f1f1] hover:border-[#ffe75e] text-[#f8ecd5] hover:text-white transition-all duration-300 drop-shadow-[0_2px_5px_rgba(0,0,0,0.9)] cursor-pointer group"
      title={isPlaying ? 'Mute Theme Sound' : 'Play Theme Sound'}
      aria-label="Toggle Theme Sound"
    >
      {isPlaying ? (
        <>
          <Volume2 className="w-4 h-4 text-[#ffe75e] animate-pulse" />
          <div className="flex items-end gap-0.5 h-3.5">
            <span className="w-1 bg-[#ffe75e] rounded-full animate-[bounce_0.8s_infinite]" style={{ height: '70%' }} />
            <span className="w-1 bg-[#ffe75e] rounded-full animate-[bounce_1.1s_infinite]" style={{ height: '100%' }} />
            <span className="w-1 bg-[#ffe75e] rounded-full animate-[bounce_0.7s_infinite]" style={{ height: '40%' }} />
            <span className="w-1 bg-[#ffe75e] rounded-full animate-[bounce_0.9s_infinite]" style={{ height: '85%' }} />
          </div>
        </>
      ) : (
        <>
          <VolumeX className="w-4 h-4 text-stone-400 group-hover:text-white" />
          <span className="text-xs font-semibold tracking-wider text-stone-300 group-hover:text-white">BGM</span>
        </>
      )}
    </button>
  );
};
