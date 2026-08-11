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

        {/* Universe label */}
        <p className="text-sm uppercase tracking-[0.3em] text-muted mb-6">
          🌌 OUR LITTLE UNIVERSE ✦
        </p>

        {/* Main message */}
        <h1 className="text-[2.65rem] sm:text-[3.5rem] font-semibold leading-[0.98] text-dark mb-6">
          A memory universe of three years,
          <br /> countless memories,
          <br /> and one very special friendship. 💫
        </h1>

        {/* Names */}
        <p className="text-sm uppercase tracking-[0.28em] text-muted mb-8">
          SPOORTHY × NIRALI 👩‍🚀
        </p>

        {/* Universe number
        <p className="text-xs uppercase tracking-[0.32em] text-muted mb-12">
          ✦ UNIVERSE NO. 001 ✦
        </p> */}

        {/* Enter button */}
        <button
          type="button"
          onClick={onEnter}
          className="group inline-flex items-center justify-center gap-3 rounded-md border border-[#F3EDE1]/50 bg-[#161A22] px-8 py-4 text-sm uppercase tracking-[0.28em] text-[#F3EDE1] shadow-sm transition-all duration-300 hover:border-[#F3EDE1]/80 hover:bg-[#1C212B] hover:shadow-[0_0_20px_rgba(243,237,225,0.08)] focus:outline-offset-4 focus:outline-2 focus:outline-[#F3EDE1]"
        >
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            ✦
          </span>
          ENTER OUR UNIVERSE
          <span className="transition-transform duration-300 group-hover:-translate-x-1">
            ✦
          </span>
        </button>

      </div>
    </motion.section>
  );
}