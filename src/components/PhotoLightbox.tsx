import React, { useEffect, useRef } from 'react';
import type { Photo } from '../data/photos';
import { imagePath, captionForPhoto, seriesNotes } from '../data/photos';

interface PhotoLightboxProps {
  images: Photo[];
  index: number;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}

/** Full-size viewer: Escape, arrows, click controls, and touch swipes. */
const PhotoLightbox: React.FC<PhotoLightboxProps> = ({
  images, index, onIndexChange, onClose,
}) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);
  const current = images[index];
  const caption = current ? captionForPhoto(current) : null;
  const seriesTitle = current?.series ? seriesNotes[current.series].title : null;

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement instanceof HTMLElement
      ? document.activeElement : null;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        onIndexChange((index + 1) % images.length);
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        onIndexChange((index - 1 + images.length) % images.length);
      } else if (event.key === 'Tab') {
        // Keep keyboard focus within the three gallery controls.
        const controls = Array.from(document.querySelectorAll<HTMLButtonElement>(
          '[data-photo-dialog-control]'
        ));
        if (!controls.length) return;
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [images.length, index, onClose, onIndexChange]);

  if (!current) return null;

  const next = () => onIndexChange((index + 1) % images.length);
  const previous = () => onIndexChange((index - 1 + images.length) % images.length);

  return (
    <div
      className="fixed inset-0 z-[80] flex flex-col bg-[#0d1114]/[0.97] text-white"
      role="dialog"
      aria-modal="true"
      aria-label={`Photo ${index + 1} of ${images.length}: ${current.title}`}
      onTouchStart={(event) => { touchStartX.current = event.touches[0]?.clientX ?? null; }}
      onTouchEnd={(event) => {
        if (touchStartX.current === null) return;
        const change = event.changedTouches[0]?.clientX - touchStartX.current;
        touchStartX.current = null;
        if (Math.abs(change) > 65) (change < 0 ? next : previous)();
      }}
    >
      <div className="flex flex-none items-center justify-between px-5 py-4 sm:px-8">
        <span className="text-xs tracking-[0.14em] text-white/60 uppercase">
          Through my lens
        </span>
        <button
          ref={closeButtonRef}
          data-photo-dialog-control
          type="button"
          onClick={onClose}
          className="flex items-center gap-2 rounded-full px-3 py-2 text-sm text-white/85 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          aria-label="Close photograph (Escape)"
        >
          Close <span aria-hidden="true" className="text-xl leading-none">×</span>
        </button>
      </div>
      <div className="flex min-h-0 flex-1 items-center justify-center gap-2 px-3 sm:gap-6 sm:px-8">
        <button
          data-photo-dialog-control
          type="button"
          aria-label="Previous photo (left arrow)"
          onClick={previous}
          className="flex h-10 w-10 flex-none items-center justify-center rounded-full border border-white/25 text-2xl hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:h-12 sm:w-12"
        >
          <span aria-hidden="true">‹</span>
        </button>
        <img
          key={current.id}
          src={imagePath(current)}
          alt={current.alt}
          className="min-h-0 min-w-0 max-h-full max-w-full flex-1 object-contain"
          style={{ maxHeight: 'calc(100dvh - 180px)' }}
        />
        <button
          data-photo-dialog-control
          type="button"
          aria-label="Next photo (right arrow)"
          onClick={next}
          className="flex h-10 w-10 flex-none items-center justify-center rounded-full border border-white/25 text-2xl hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:h-12 sm:w-12"
        >
          <span aria-hidden="true">›</span>
        </button>
      </div>
      <div className="flex flex-none items-start justify-between gap-4 border-t border-white/10 px-5 pb-5 pt-4 sm:px-8">
        <div className="min-w-0 max-w-3xl flex-1">
          <p className="text-base font-medium sm:text-lg">
            {current.locationOnly ? (current.place || current.title) : current.title}
          </p>
          {!current.locationOnly && (current.place || current.taken) && (
            <p className="mt-1 text-xs text-white/60 sm:text-sm">
              {[current.place, current.taken].filter(Boolean).join(' · ')}
            </p>
          )}
          {seriesTitle && (
            <p className="mt-3 text-[11px] font-medium uppercase tracking-wider text-white/50">{seriesTitle}</p>
          )}
          {caption && (
            <div className="mt-2 max-h-[22dvh] overflow-y-auto pr-3 text-sm leading-relaxed text-white/80">
              {caption}
            </div>
          )}
        </div>
        <span className="flex-none pt-1 text-xs tabular-nums tracking-wider text-white/55">
          {String(index + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
        </span>
      </div>
    </div>
  );
};

export default PhotoLightbox;
