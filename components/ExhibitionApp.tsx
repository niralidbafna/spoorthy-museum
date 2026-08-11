'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ExhibitionMap } from '@/components/ExhibitionMap';
import { FinalLetter } from '@/components/FinalLetter';
import { ImageLightbox } from '@/components/ImageLightbox';
import { MusicPlayer } from '@/components/MusicPlayer';
import { MuseumEntrance } from '@/components/MuseumEntrance';
import { MuseumProgress } from '@/components/MuseumProgress';
import { MuseumRoom } from '@/components/MuseumRoom';
import { rooms, Exhibit } from '@/src/data/museum';

export default function ExhibitionApp() {
  const [entered, setEntered] = useState(false);
  const [selectedExhibit, setSelectedExhibit] = useState<Exhibit | null>(null);

  const totalRooms = rooms.length;
  const [currentRoom, setCurrentRoom] = useState(1);

  useEffect(() => {
    if (!entered) {
      setCurrentRoom(1);
      return;
    }

    const updateCurrentRoom = () => {
      const intersection = [...rooms].reverse().find((room) => {
        const element = document.getElementById(`room-${room.id}`);
        return (element?.getBoundingClientRect().top ?? 0) < window.innerHeight * 0.4;
      });
      setCurrentRoom(intersection?.id ?? rooms[0].id);
    };

    updateCurrentRoom();
    window.addEventListener('scroll', updateCurrentRoom, { passive: true });
    window.addEventListener('resize', updateCurrentRoom);

    return () => {
      window.removeEventListener('scroll', updateCurrentRoom);
      window.removeEventListener('resize', updateCurrentRoom);
    };
  }, [entered]);

  return (
    <main className="min-h-screen bg-background text-dark">
      <AnimatePresence>{!entered && <MuseumEntrance onEnter={() => setEntered(true)} />}</AnimatePresence>
      {entered ? (
        <div className="relative">
          <MusicPlayer />
          <div className="mx-auto max-w-6xl px-4 pb-24 pt-10 sm:px-6">
            <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-[0.32em] text-muted">THE MUSEUM OF US</p>
                <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">SPOORTHY × NIRALI</h1>
                <p className="mt-4 max-w-xl text-base leading-8 text-muted">A private exhibition of three years of memories, laughter, and friendship.</p>
              </div>
              <div className="flex flex-col items-start gap-4 sm:items-end">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedExhibit(null);
                    setEntered(false);
                  }}
                  className="inline-flex items-center justify-center rounded-none border border-dark px-5 py-3 text-sm uppercase tracking-[0.24em] text-dark transition duration-200 hover:bg-dark hover:text-background focus:outline-offset-4 focus:outline-2 focus:outline-dark"
                >
                  RETURN TO ENTRANCE
                </button>
                <div className="hidden sm:block">
                  <MuseumProgress current={currentRoom} total={totalRooms} />
                </div>
              </div>
            </div>
            <ExhibitionMap />
            <MuseumProgress current={currentRoom} total={totalRooms} />
            <section className="mt-12 space-y-24">
              {rooms.map((room) => (
                <MuseumRoom key={room.id} room={room} onSelectExhibit={setSelectedExhibit} />
              ))}
            </section>
            <section className="border-t border-muted/20 py-14 px-4 sm:px-0">
              <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.32em] text-muted">THE EXHIBITION IS OVER</p>
                  <h2 className="mt-4 text-3xl font-semibold leading-tight text-dark sm:text-4xl">BUT THE STORY ISN'T.</h2>
                </div>
                <div className="text-right text-sm uppercase tracking-[0.28em] text-muted">
                  <p>♡</p>
                  <p className="mt-3">SPOORTHY × NIRALI</p>
                  <p className="mt-1">2023 — ∞</p>
                </div>
              </div>
            </section>
          </div>
          <ImageLightbox exhibit={selectedExhibit} onClose={() => setSelectedExhibit(null)} />
        </div>
      ) : null}
    </main>
  );
}
