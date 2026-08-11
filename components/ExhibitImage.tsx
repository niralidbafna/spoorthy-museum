'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Exhibit } from '@/src/data/museum';

type ExhibitImageProps = {
  exhibit: Exhibit;
  onSelect: (exhibit: Exhibit) => void;
  layoutIndex: number;
  priority?: boolean;
};

const variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function ExhibitImage({ exhibit, onSelect, layoutIndex, priority = false }: ExhibitImageProps) {
  const imageSize = layoutIndex % 3 === 0 ? 'lg' : 'sm';
  return (
    <motion.button
      type="button"
      onClick={() => onSelect(exhibit)}
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.6, ease: 'easeOut', delay: Math.min(layoutIndex, 8) * 0.06 }}
      className="group w-full text-left"
      aria-label={`Open exhibit ${exhibit.id}: ${exhibit.title}`}
    >
      <div className="relative overflow-hidden rounded-none border border-muted/15 bg-white shadow-soft">
        <div className="relative aspect-[4/3] bg-[#f3efe8]">
          {exhibit.image ? (
            <Image
              src={exhibit.image}
              alt={exhibit.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition duration-500 group-hover:scale-105"
              priority={priority}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-muted">No image</div>
          )}
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted">Exhibit {exhibit.id}</p>
          <p className="mt-2 text-lg font-semibold text-dark">{exhibit.title}</p>
        </div>
        <p className="text-sm text-muted max-w-[240px]">{exhibit.caption}</p>
      </div>
    </motion.button>
  );
}
