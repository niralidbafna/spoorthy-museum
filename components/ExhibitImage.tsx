'use client';

import { motion } from 'framer-motion';
import { Exhibit } from '@/src/data/museum';

type ExhibitImageProps = {
  exhibit: Exhibit;
  onSelect: (exhibit: Exhibit) => void;
  layoutIndex: number;
  priority?: boolean;
};

export function ExhibitImage({
  exhibit,
  onSelect,
  layoutIndex,
  priority = false,
}: ExhibitImageProps) {
  return (
    <motion.button
      type="button"
      onClick={() => onSelect(exhibit)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        ease: 'easeOut',
        delay: Math.min(layoutIndex, 8) * 0.06,
      }}
      className="group w-full overflow-hidden border border-[#252932] bg-[#11141A] text-left"
      aria-label={`Open memory ${exhibit.id}: ${exhibit.title}`}
    >
      {/* Header */}
      <div className="p-6">
        <p className="text-[10px] uppercase tracking-[0.28em] text-gray-500">
          MEMORY {exhibit.id}
        </p>

        <h3 className="mt-2 text-lg font-semibold leading-tight text-white">
          {exhibit.title}
        </h3>

        {exhibit.caption && (
          <p className="mt-2 text-xs leading-5 text-gray-400">
            {exhibit.caption}
          </p>
        )}
      </div>

      {/* Image */}
      <div className="relative h-[320px] w-full overflow-hidden bg-[#161A22]">
        {exhibit.image ? (
          <img
            src={exhibit.image}
            alt={exhibit.title}
            loading={priority ? 'eager' : 'lazy'}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-muted">
            No image
          </div>
        )}
      </div>
    </motion.button>
  );
}