'use client';

import { motion } from 'framer-motion';
import { Exhibit, Room } from '@/src/data/museum';
import { ExhibitImage } from './ExhibitImage';
import { ExhibitVideo } from './ExhibitVideo';

type MuseumRoomProps = {
  room: Room;
  onSelectExhibit: (exhibit: Exhibit) => void;
};

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function MuseumRoom({ room, onSelectExhibit }: MuseumRoomProps) {
  return (
    <motion.section
      id={`room-${room.id}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={reveal}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="border-t border-muted/20 py-14 px-4 sm:px-6"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.28em] text-muted mb-3">ROOM {String(room.id).padStart(2, '0')}</p>
          <h2 className="text-3xl font-semibold leading-tight text-dark sm:text-4xl">{room.title}</h2>
          <p className="mt-4 max-w-xl text-base leading-8 text-muted">{room.subtitle}</p>
          <p className="mt-6 text-sm leading-7 text-muted">{room.summary}</p>
        </div>

        <div className="grid gap-4">
          {room.exhibits.map((exhibit, index) => (
            <div key={exhibit.id} className="space-y-4">
              {exhibit.image ? (
                <ExhibitImage exhibit={exhibit} onSelect={onSelectExhibit} layoutIndex={index} />
              ) : exhibit.video ? (
                <ExhibitVideo exhibit={exhibit} />
              ) : (
                <div className="rounded-none border border-muted/20 bg-white/80 p-6 text-sm text-muted">
                  {exhibit.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
