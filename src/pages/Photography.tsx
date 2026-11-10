import React, { useEffect, useMemo, useState } from 'react';
import PhotoLightbox from '../components/PhotoLightbox';
import {
  photos, themes, thumbnailPath, themeDescriptions, seriesNotes,
} from '../data/photos';
import type { Photo } from '../data/photos';

type BrowseMode = 'theme' | 'place';
interface Group { title: string; description: string; images: Photo[] }

/**
 * A photo-led gallery, keeping the site's existing Inter / neutral / blue palette.
 * Browse the same collection by theme or by verified location.
 */
const Photography: React.FC = () => {
  const [mode, setMode] = useState<BrowseMode>('theme');
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    const oldTitle = document.title;
    document.title = 'Photography — Krishna Narayanan';
    return () => { document.title = oldTitle; };
  }, []);

  const groups = useMemo<Group[]>(() => {
    if (mode === 'theme') {
      return themes.map((theme) => ({
        title: theme,
        description: themeDescriptions[theme],
        images: photos.filter((photo) => photo.theme === theme),
      }));
    }

    const named = Array.from(new Set(
      photos.map((photo) => photo.region).filter((region): region is string => Boolean(region))
    ));
    const known: Group[] = named.map((region) => ({
      title: region,
      description: 'Photographs from this place.',
      images: photos.filter((photo) => photo.region === region),
    }));
    const unspecified = photos.filter((photo) => !photo.region);
    return unspecified.length ? [
      ...known,
      {
        title: 'Locations to add',
        description: 'Places I’ve been, with location details still to be filled in.',
        images: unspecified,
      },
    ] : known;
  }, [mode]);

  const visiblePhotos = useMemo(() => groups.flatMap((group) => group.images), [groups]);
  const heroPhoto = photos.find((photo) => photo.id === 'IMG_0979') ?? photos[0];
  const selectedIndex = selectedId
    ? visiblePhotos.findIndex((photo) => photo.id === selectedId)
    : -1;

  const changeMode = (newMode: BrowseMode) => {
    setMode(newMode);
    setSelectedId(null);
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Hero — the photograph is the opening, not a decorative backdrop. */}
      <header className="relative min-h-[420px] overflow-hidden bg-[#142c36] sm:min-h-[510px] lg:min-h-[600px]">
        {heroPhoto && (
          <img
            src={heroPhoto.src}
            alt={heroPhoto.alt}
            loading="eager"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
        <div className="relative mx-auto flex min-h-[420px] max-w-6xl flex-col justify-end px-6 pb-16 pt-28 sm:min-h-[510px] sm:pb-20 lg:min-h-[600px] lg:pb-24">
          <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.28em] text-white/80 sm:text-xs">
            Photography / a personal collection
          </p>
          <h1 className="max-w-3xl text-[clamp(2.9rem,7vw,5.5rem)] font-extralight leading-[1.05] tracking-[-0.05em] text-white">
            Through my lens<span className="text-[#e6cda3]">.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base font-light leading-relaxed text-white/90 sm:text-lg">
            Moments when I stood still, took a deep breath, and soaked in the view.
          </p>
        </div>
        {heroPhoto?.place && (
          <p className="absolute bottom-4 right-6 hidden text-right text-[11px] text-white/80 sm:block">
            {heroPhoto.place}
          </p>
        )}
      </header>

      <main className="mx-auto max-w-6xl px-5 pb-24 pt-14 sm:px-6 sm:pt-20">
        <section aria-label="Browse photographs" className="mb-14 flex flex-col justify-between gap-7 border-b border-neutral-200 pb-8 sm:flex-row sm:items-end sm:gap-8">
          <div>
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.23em] text-primary-700">
              A collection in progress
            </p>
            <h2 className="text-2xl font-light tracking-[-0.025em] text-neutral-900 sm:text-3xl">
              Places, seasons, moments.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-500">
              A photographic journal. Browse by what caught my eye, or by where I was.
            </p>
          </div>
          <div className="inline-flex w-fit flex-none gap-1 rounded-full border border-neutral-200 bg-white p-1 shadow-sm" role="group" aria-label="Group photographs by">
            <button
              type="button"
              onClick={() => changeMode('theme')}
              aria-pressed={mode === 'theme'}
              className={`rounded-full px-5 py-2 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700 ${
                mode === 'theme' ? 'bg-neutral-900 text-white shadow-sm' : 'text-neutral-500 hover:text-neutral-900'
              }`}
            >
              By theme
            </button>
            <button
              type="button"
              onClick={() => changeMode('place')}
              aria-pressed={mode === 'place'}
              className={`rounded-full px-5 py-2 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700 ${
                mode === 'place' ? 'bg-neutral-900 text-white shadow-sm' : 'text-neutral-500 hover:text-neutral-900'
              }`}
            >
              By place
            </button>
          </div>
        </section>

        {photos.length === 0 && (
          <p className="rounded-xl border border-neutral-200 bg-white p-8 text-neutral-600">
            Add your WebP photographs to <code>src/assets/photos/</code> to populate the gallery.
          </p>
        )}
        <div className="space-y-20 sm:space-y-24">
          {groups.filter((group) => group.images.length).map((group, groupIndex) => (
            <section key={`${mode}-${group.title}`} aria-labelledby={`photo-group-${groupIndex}`}>
              <div className="mb-7 flex flex-wrap items-start justify-between gap-4 sm:mb-9">
                <div>
                  <p className="mb-2 text-[11px] font-medium tabular-nums tracking-[0.17em] text-primary-700">
                    {String(groupIndex + 1).padStart(2, '0')}
                  </p>
                  <h3 id={`photo-group-${groupIndex}`} className="text-2xl font-light tracking-tight text-neutral-900 sm:text-[1.9rem]">
                    {group.title}
                  </h3>
                  <p className="mt-2 max-w-lg text-sm text-neutral-500">{group.description}</p>
                </div>
                <p className="pt-2 text-xs tabular-nums tracking-wider text-neutral-400">
                  {group.images.length} {group.images.length === 1 ? 'photograph' : 'photographs'}
                </p>
              </div>

              <div className="columns-1 gap-5 space-y-7 sm:columns-2 lg:columns-3 lg:gap-6">
                {group.images.map((photo) => (
                  <figure key={photo.id} className="mb-7 break-inside-avoid">
                    <button
                      type="button"
                      className="group relative block w-full cursor-zoom-in overflow-hidden rounded-sm bg-neutral-200 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-700"
                      onClick={() => setSelectedId(photo.id)}
                      aria-label={`View photograph: ${photo.title}`}
                    >
                      <img
                        src={thumbnailPath(photo)}
                        alt={photo.alt}
                        loading="lazy"
                        decoding="async"
                        className="h-auto w-full transform transition-transform duration-500 ease-out group-hover:scale-[1.025] motion-reduce:transform-none"
                      />
                      <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/[0.07]" />
                    </button>
                    <figcaption className="mt-3">
                      <div className="flex items-start justify-between gap-3">
                        {!photo.locationOnly && <span className="text-[13px] font-medium text-neutral-700">{photo.title}</span>}
                        {photo.place && (
                          <span className={`${photo.locationOnly ? 'text-left' : 'text-right'} text-xs leading-snug text-neutral-500`}>
                            {photo.place}
                          </span>
                        )}
                      </div>
                      {/* Individual recollections belong with the image. Shared ones appear once below. */}
                      {photo.caption && (
                        <p className="mt-2 text-xs leading-relaxed text-neutral-600">{photo.caption}</p>
                      )}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>
          ))}
        </div>
        <section aria-labelledby="photo-field-notes" className="mt-24 border-t border-neutral-200 pt-14 sm:mt-28 sm:pt-16">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.23em] text-primary-700">Recollections</p>
          <h2 id="photo-field-notes" className="text-2xl font-light tracking-tight text-neutral-900 sm:text-3xl">
            Beyond the photographs.
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-500">
            A few places have stories best told together, rather than repeated beneath each photograph.
          </p>
          <div className="mt-10 grid gap-x-14 gap-y-12 md:grid-cols-2">
            {Object.entries(seriesNotes).map(([key, note]) => (
              <article key={key}>
                <h3 className="text-lg font-medium tracking-tight text-neutral-800">{note.title}</h3>
                <p className="mt-3 text-sm leading-7 text-neutral-600">{note.text}</p>
              </article>
            ))}
          </div>
        </section>
        <footer className="mt-20 border-t border-neutral-200 pt-7 text-xs text-neutral-500">
          <p>All photographs © Krishna Narayanan.</p>
        </footer>
      </main>

      {selectedIndex >= 0 && (
        <PhotoLightbox
          images={visiblePhotos}
          index={selectedIndex}
          onIndexChange={(nextIndex) => setSelectedId(visiblePhotos[nextIndex]?.id ?? null)}
          onClose={() => setSelectedId(null)}
        />
      )}
    </div>
  );
};

export default Photography;
