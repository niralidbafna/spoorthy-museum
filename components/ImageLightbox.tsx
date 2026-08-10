'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Exhibit } from '@/src/data/museum';

type ImageLightboxProps = {
  exhibit: Exhibit | null;
  onClose: () => void;
};

export function ImageLightbox({ exhibit, onClose }: ImageLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {exhibit && exhibit.image ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="relative mx-auto max-w-4xl w-full"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 z-10 inline-flex items-center justify-center rounded-none border border-white/20 bg-black/60 px-4 py-2 text-sm text-white backdrop-blur-sm transition hover:bg-black"
              aria-label="Close image lightbox"
            >
              Close
            </button>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-none border border-white/10 bg-black">
              <Image
                src={exhibit.image}
                alt={exhibit.title}
                fill
                sizes="(max-width: 640px) 100vw, 1200px"
                className="object-contain"
              />
            </div>
            <div className="mt-6 rounded-none border border-white/10 bg-white/95 p-6 text-left text-sm text-dark">
              <p className="text-xs uppercase tracking-[0.3em] text-muted">Exhibit {exhibit.id}</p>
              <h3 className="mt-2 text-2xl font-semibold text-dark">{exhibit.title}</h3>
              <p className="mt-4 text-base leading-8 text-muted">{exhibit.caption}</p>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
