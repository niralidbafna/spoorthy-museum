'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const buttonLabel = isPlaying ? 'Pause music' : 'Play music';

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => setIsPlaying(false);
    audio.addEventListener('ended', handleEnded);
    return () => audio.removeEventListener('ended', handleEnded);
  }, []);

  const togglePlayback = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-30 flex items-center gap-3 rounded-none border border-muted/25 bg-white/90 px-4 py-3 text-sm text-dark shadow-soft backdrop-blur-sm sm:bottom-6 sm:right-6">
      <button
        type="button"
        onClick={togglePlayback}
        aria-label={buttonLabel}
        className="inline-flex h-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-none border border-muted/20 bg-background text-dark transition hover:bg-accent/10 focus:outline-offset-4 focus:outline-2 focus:outline-dark"
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <p className="text-xs uppercase tracking-[0.24em] text-muted">Music</p>
      <audio ref={audioRef} src="/audio/youre-my-sunshine.mp3" preload="none" />
    </div>
  );
}
