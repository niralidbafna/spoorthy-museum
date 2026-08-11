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
          <div className="mx-auto max-w-6xl px-4 pb-24 pt-6 sm:px-6">

            {/* Return to universe */}
            <div className="mb-10">
                <button
                type="button"
                onClick={() => {
                    setSelectedExhibit(null);
                    setEntered(false);
                }}
                className="group inline-flex items-center gap-3 rounded-md border border-dark/25 bg-background/70 px-4 py-2.5 text-[10px] uppercase tracking-[0.28em] text-dark shadow-sm transition-all duration-200 hover:border-dark/40 hover:bg-background hover:text-dark focus:outline-none focus:ring-1 focus:ring-dark/20"                >
                <span className="text-sm transition-transform duration-200 group-hover:-translate-x-1">
                    ←
                </span>
                <span>Return to our universe ✨</span>
                </button>
            </div>

            {/* Header */}
            <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                
                <div className="hidden sm:block">
                <MuseumProgress current={currentRoom} total={totalRooms} />
                </div>

                <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-[0.32em] text-muted">
                    OUR LITTLE UNIVERSE 🌍
                </p>

                <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">
                    SPOORTHY × NIRALI 💫
                </h1>

                <p className="mt-4 max-w-xl text-base leading-8 text-muted">
                    A private memory universe of three years of memories, laughter, and friendship.
                </p>
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
                <div className="mx-auto max-w-6xl px-4 sm:px-6">

                    {/* Main closing statement */}
                    <p className="text-4xl font-semibold leading-[1.05] tracking-tight text-dark sm:text-6xl">
                    THERE'S STILL
                    <br />
                    SO MUCH MORE TO US. 🌚
                    </p>

                    {/* Small universe line */}
                    <h2 className="mt-5 text-[10px] uppercase tracking-[0.32em] text-muted">
                    OUR LITTLE UNIVERSE CONTINUES 🌝
                    </h2>

                    {/* Signature */}
                    <div className="mt-8 text-xs uppercase tracking-[0.28em] text-muted">
                    <p>🪐</p>
                    <p className="mt-3">SPOORTHY × NIRALI 🌠</p>
                    <p className="mt-1">2023 — ∞ ✨</p>
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
