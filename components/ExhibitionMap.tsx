'use client';

import { rooms } from '@/src/data/museum';

export function ExhibitionMap() {
  return (
    <section className="border-t border-muted/20 pt-10 pb-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <p className="text-xs uppercase tracking-[0.32em] text-muted mb-6">Universe Map</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {rooms.map((room) => (
            <a
              key={room.id}
              href={`#room-${room.id}`}
              className="group block rounded-none border border-muted/15 bg-surface/80 p-5 transition hover:border-accent/40"
            >
              <span className="text-sm text-muted">{String(room.id).padStart(2, '0')}</span>
              <h3 className="mt-2 text-lg font-semibold text-dark">{room.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{room.subtitle}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
