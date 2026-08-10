'use client';

import { motion } from 'framer-motion';
import { Exhibit } from '@/src/data/museum';

type FinalLetterProps = {
  exhibit: Exhibit;
};

export function FinalLetter({ exhibit }: FinalLetterProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="border-t border-muted/20 bg-[#F3E8D5] px-4 py-14 sm:px-6"
    >
      <div className="mx-auto max-w-3xl">
        <p className="text-sm uppercase tracking-[0.32em] text-muted mb-4">A Letter to Spoorthy</p>
        <h2 className="text-4xl font-semibold leading-tight text-dark sm:text-5xl">A Letter to Spoorthy</h2>
        <div className="mt-8 rounded-none border border-muted/20 bg-white/90 p-8 text-base leading-8 text-dark shadow-soft">
          {exhibit.description?.split('\n').map((line, index) => (
            <p key={index} className="mb-4 last:mb-0">
              {line}
            </p>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
