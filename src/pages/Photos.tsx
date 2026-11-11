
import React, { useEffect, useMemo, useState } from 'react';
import PhotoLightbox from '../components/PhotoLightbox';
import {
  photos, themes, thumbnailPath, seriesNotes, selectedPhotos,
} from '../data/photos';
import type { Photo } from '../data/photos';

type BrowseMode = 'selected' | 'place' | 'theme';
interface Group { name: string; images: Photo[] }

const Photography: React.FC = () => {
  const [mode, setMode] = useState<BrowseMode>('selected');
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    const oldTitle = document.title;
    document.title = 'Photography — Krishna Narayanan';
    return () => { document.title = oldTitle; };
  }, []);

  const groups = useMemo<Group[]>(() => {
    if (mode === 'selected') {
      return [{ name: 'Selected photographs', images: selectedPhotos() }];
    }
    if (mode === 'theme') {
      return themes.map((name) => ({
        name, images: photos.filter((photo) => photo.theme === name),
      })).filter((group) => group.images.length > 0);
    }
    const places = Array.from(new Set(
      photos.map((photo) => photo.region).filter((region): region is string => Boolean(region))
    ));
    const regionOrder = [
      'British Columbia, Canada', 'Newfoundland & Labrador, Canada',
      'Ontario, Canada', 'France', 'South Africa', 'Sweden',
      'Denmark', 'Meghalaya, India',
    ];
    places.sort((a, b) => {
      const ai = regionOrder.indexOf(a), bi = regionOrder.indexOf(b);
      if (ai !== -1 && bi !== -1) return ai - bi;
      if (ai !== -1) return -1;
      if (bi !== -1) return 1;
      return a.localeCompare(b);
    });
    return [
      ...places.map((name) => ({
        name, images: photos.filter((photo) => photo.region === name),
      })),
      ...(photos.some((photo) => !photo.region)
        ? [{ name: 'Location not yet recorded', images: photos.filter((photo) => !photo.region) }]
        : []),
    ];
  }, [mode]);

  const visiblePhotos = useMemo(() => groups.flatMap((group) => group.images), [groups]);
  const heroPhoto = photos.find((photo) => photo.id === 'IMG_0979') ?? photos[0];
  const selectedIndex = selectedId
    ? visiblePhotos.findIndex((photo) => photo.id === selectedId)
    : -1;

  const notesInView = Object.entries(seriesNotes).filter(([key]) =>
    visiblePhotos.some((photo) => photo.series === key)
  );

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="relative min-h-[390px] overflow-hidden bg-[#142c36] sm:min-h-[490px] lg:min-h-[570px]">
        {heroPhoto && (
          <img
            src={heroPhoto.src}
            alt={heroPhoto.place ?? ''}
            loading="eager"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/20 to-transparent" />
        <div className="relative mx-auto flex min-h-[390px] max-w-6xl flex-col justify-end px-6 pb-16 pt-28 sm:min-h-[490px] sm:pb-20 lg:min-h-[570px] lg:pb-24">
          <h1 className="text-[clamp(3rem,7vw,5.5rem)] font-extralight leading-tight tracking-[-0.05em] text-white">
            Photography
          </h1>
        </div>
        {heroPhoto?.place && (
          <p className="absolute bottom-4 right-6 text-right text-xs text-white/85">
            {heroPhoto.place}
          </p>
        )}
      </header>

      <main className="mx-auto max-w-6xl px-5 pb-24 pt-12 sm:px-6 sm:pt-16">
        <div className="mb-12 flex flex-wrap items-center justify-between gap-5 border-b border-neutral-200 pb-8">
          <p className="text-sm text-neutral-600">
            {photos.length} photographs
          </p>
          <div className="inline-flex w-fit flex-wrap gap-1 rounded-full border border-neutral-200 bg-white p-1 shadow-sm" role="group" aria-label="Browse photographs">
            {([
              ['selected', 'Selected'],
              ['place', 'By place'],
              ['theme', 'By theme'],
            ] as const).map(([value, label]) => (
              <button
                type="button"
                key={value}
                onClick={() => { setMode(value); setSelectedId(null); }}
                aria-pressed={mode === value}
                className={`rounded-full px-4 py-2 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700 ${
                  mode === value ? 'bg-neutral-900 text-white shadow-sm' : 'text-neutral-500 hover:text-neutral-900'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {photos.length === 0 && (
          <p className="rounded-xl border border-neutral-200 bg-white p-8 text-neutral-600">
            Add your photographs to <code>src/assets/photos/</code> to populate the page.
          </p>
        )}

        <div className="space-y-16 sm:space-y-20">
          {groups.filter((group) => group.images.length).map((group, groupIndex) => (
            <section key={`${mode}-${group.name}`} aria-labelledby={`photo-group-${groupIndex}`}>
              <div className="mb-7 flex items-baseline justify-between gap-4">
                <h2 id={`photo-group-${groupIndex}`} className="text-2xl font-light tracking-tight sm:text-3xl">
                  {group.name}
                </h2>
                <p className="text-xs tabular-nums text-neutral-400">
                  {group.images.length}
                </p>
              </div>

              <div className="columns-1 gap-5 space-y-7 sm:columns-2 lg:columns-3 lg:gap-6">
                {group.images.map((photo) => (
                  <figure key={photo.id} className="mb-7 break-inside-avoid">
                    <button
                      type="button"
                      className="group relative block w-full cursor-zoom-in overflow-hidden rounded-sm bg-neutral-200 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-700"
                      onClick={() => setSelectedId(photo.id)}
                      aria-label={`Open photograph${photo.place ? ` from ${photo.place}` : ''}`}
                    >
                      <img
                        src={thumbnailPath(photo)}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className="h-auto w-full transform transition-transform duration-500 ease-out group-hover:scale-[1.025] motion-reduce:transform-none"
                      />
                      <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/[0.07]" />
                    </button>
                    {(photo.place || photo.caption) && (
                      <figcaption className="mt-3 space-y-2">
                        {photo.place && <p className="text-xs text-neutral-500">{photo.place}</p>}
                        {photo.caption && <p className="text-sm leading-relaxed text-neutral-700">{photo.caption}</p>}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </section>
          ))}
        </div>

        {notesInView.length > 0 && (
          <section aria-labelledby="photo-personal-notes" className="mt-20 border-t border-neutral-200 pt-12">
            <h2 id="photo-personal-notes" className="text-2xl font-light tracking-tight sm:text-3xl">
              Notes
            </h2>
            <div className="mt-8 grid gap-x-14 gap-y-10 md:grid-cols-2">
              {notesInView.map(([key, note]) => (
                <article key={key}>
                  <h3 className="text-base font-medium text-neutral-800">{note.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-neutral-600">{note.text}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        <footer className="mt-20 border-t border-neutral-200 pt-7 text-xs text-neutral-500">
          <p>Photographs © Krishna Narayanan.</p>
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
