'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Exhibit } from '@/src/data/museum';

type ExhibitVideoProps = {
  exhibit: Exhibit;
};

export function ExhibitVideo({ exhibit }: ExhibitVideoProps) {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="rounded-none border border-muted/15 bg-white shadow-soft"
    >
      <div className="p-5">
        <p className="text-xs uppercase tracking-[0.32em] text-muted">Memory {exhibit.id}</p>
        <h3 className="mt-3 text-2xl font-semibold text-dark">{exhibit.title}</h3>
        <p className="mt-3 text-sm text-muted">{exhibit.caption}</p>
      </div>

      <div className="relative overflow-hidden border-t border-muted/10 bg-black/95">
        {!showPlayer ? (
          <button
            type="button"
            onClick={() => setShowPlayer(true)}
            className="relative block w-full h-[320px] sm:h-[420px] text-left"
            aria-label={`Play memory ${exhibit.title}`}
          >
            {exhibit.poster ? (
              <div className="relative h-full w-full">
                <Image
                  src={exhibit.poster}
                  alt={exhibit.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 1200px"
                  className="object-cover"
                  priority={false}
                />
              </div>
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-black text-white">Video</div>
            )}

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="rounded-full bg-white/90 p-3 shadow-soft">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5v14l11-7L8 5z" fill="#151515" />
                </svg>
              </div>
            </div>
          </button>
        ) : (
          <div className="block w-full h-[320px] sm:h-[420px] bg-black">
            <video
              key={exhibit.id}
              src={exhibit.video}
              controls
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    </motion.div>
  );
}
