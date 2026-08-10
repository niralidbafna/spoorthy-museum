'use client';

import { motion } from 'framer-motion';

type MuseumEntranceProps = {
  onEnter: () => void;
};

export function MuseumEntrance({ onEnter }: MuseumEntranceProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background flex flex-col items-center justify-center px-6 text-center"
    >
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-muted mb-6">THE MUSEUM OF US</p>
        <h1 className="text-[2.65rem] sm:text-[3.5rem] font-semibold leading-[0.98] text-dark mb-6">
          An exhibition of three years,
          <br /> countless memories,
          <br /> and one very special friendship.
        </h1>
        <p className="text-sm uppercase tracking-[0.28em] text-muted mb-8">SPOORTHY × NIRALI</p>
        <p className="text-xs uppercase tracking-[0.32em] text-muted mb-12">EXHIBITION NO. 001</p>
        <button
          type="button"
          onClick={onEnter}
          className="inline-flex items-center justify-center rounded-none border border-dark px-8 py-4 text-sm uppercase tracking-[0.28em] text-dark transition duration-300 hover:bg-dark hover:text-background focus:outline-offset-4 focus:outline-2 focus:outline-dark"
        >
          ENTER EXHIBITION
        </button>
      </div>
    </motion.section>
  );
}
