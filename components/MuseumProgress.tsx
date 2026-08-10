'use client';

type MuseumProgressProps = {
  current: number;
  total: number;
};

export function MuseumProgress({ current, total }: MuseumProgressProps) {
  return (
    <div className="sticky top-4 z-20 rounded-none border border-muted/25 bg-white/85 px-4 py-3 text-xs uppercase tracking-[0.32em] text-muted backdrop-blur-sm sm:hidden">
      ROOM {String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}
    </div>
  );
}
