/**
 * Photo catalogue. No manual imports or registration needed:
 * put your .webp files in src/assets/photos/ and Vite finds them at build time.
 *
 * Converted batch filenames have been visually verified and mapped back to
 * their original stems where a match exists. Locations and dates below were
 * supplied by the photographer. Approximate places and dates remain qualified.
 */
export const themes = [
  'Weather & light',
  'Water & mountains',
  'Paths & seasons',
  'Cities & evenings',
  'Unsorted moments',
] as const;
export type PhotoTheme = (typeof themes)[number];

/** Shared recollections: one passage for each photographic series. */
export const seriesNotes = {
  lighthouse: {
    title: 'Lighthouse Park · West Vancouver',
    text: `If you can wade through the largest uncut rainforest in the Lower Mainland, you will be treated to some breathtaking stuff. These were just some of many more that I could spam the internet with.`,
  },
  burnaby: {
    title: 'Burnaby Mountain · Behind SFU',
    text: `As the years rolled by during my time at SFU, it became a habit for me to just walk around endlessly in the trails and forests behind their Burnaby campus, overlooking the Burrard Inlet. Some of my most useful ideas were born there, and I have been at peace with myself, walking through those trails in absolute silence. Take nothing away from its unmatched beauty regardless of the season. It will be one of the many things I will dearly miss about Vancouver, a city gifted with both the ocean and the mountains.`,
  },
  odense: {
    title: 'The view from home · Odense',
    text: `It is truly fortuitous that I live in a beautiful place, but even more so that I have a view like this that I can access with no effort. Of course, it also means I can almost see my office from my room.`,
  },
  malmo: {
    title: 'Passing through Malmö',
    text: `One of my few observations about what little I've seen of Sweden is that they've all got canals, and that they seem like a sight to behold. But then, I've not seen beyond Malmö, Helsingborg and Goteborg (and the former two, I barely saw much of), so what do I know anyway?`,
  },
} as const;

export type PhotoSeries = keyof typeof seriesNotes;

export interface Photo {
  id: string;
  title: string;
  alt: string;
  theme: PhotoTheme;
  region: string | null;
  place: string | null;
  taken: string | null;
  /** A short, image-specific recollection (may be absent). */
  caption: string | null;
  /** Shared reflection for a group of related photos. */
  series: PhotoSeries | null;
  /** Show only the location, rather than a descriptive title, when requested. */
  locationOnly: boolean;
  src: string;
  thumbSrc: string;
}

type Notes = {
  title: string;
  theme: PhotoTheme;
  alt: string;
  region?: string;
  place?: string;
  taken?: string;
  caption?: string;
  series?: PhotoSeries;
  locationOnly?: boolean;
};

// Keyed by the original photo stem where one exists.
// The additional converted-7.webp image has no verified JPEG match.
const details: Record<string, Notes> = {
  IMG_0979: { title: 'Umiam Lake', theme: 'Water & mountains', alt: 'Wide blue lake surrounded by wooded hills', region: 'Meghalaya, India', place: 'Umiam Lake, Meghalaya', taken: 'March 2026', caption: 'A jewel of the Seven Sisters, perhaps a crown jewel, though I have much more to explore in the northeast.' },
  'converted-7': { title: 'Mist in the valley', theme: 'Weather & light', alt: 'Low mist drifting between wooded hills under a dark layered sky', region: 'Metro Vancouver, Canada', place: 'Burnaby Mountain Park, Burnaby', taken: 'Autumn 2025', series: 'burnaby' },
  IMG_2172: { title: 'Mist over the treetops', theme: 'Weather & light', alt: 'Mist drifting over autumn treetops in the sunshine', region: 'Odense, Denmark', place: 'Odense', taken: 'Autumn 2026', series: 'odense' },
  IMG_0614: { title: 'Sunset through the grass', theme: 'Weather & light', alt: 'Sunset viewed close to grass and stone, with a grass tip against the sun', region: 'Metro Vancouver, Canada', place: 'West Vancouver (likely Lighthouse Park)', taken: 'Around March 2025', series: 'lighthouse' },
  IMG_0608: { title: 'The rocky shoreline', theme: 'Water & mountains', alt: 'Rocky wooded coastline with islands and mountains in the distance', region: 'Metro Vancouver, Canada', place: 'West Vancouver (likely Lighthouse Park)', taken: 'Around March 2025', series: 'lighthouse' },
  IMG_1477: { title: 'After the rain', theme: 'Weather & light', alt: 'Pastel rainbow above sunlit treetops', region: 'Odense, Denmark', place: 'Odense', taken: 'Autumn 2026', series: 'odense' },
  IMG_1475: { title: 'Last sliver of sunlight', theme: 'Weather & light', alt: 'A narrow band of warm light along the horizon over wooded land', region: 'Odense, Denmark', place: 'Odense', taken: 'Autumn 2026', series: 'odense' },
  IMG_1783: { title: 'Sunset above the canopy', theme: 'Weather & light', alt: 'Sunset above the treeline beneath a cloud-streaked sky', region: 'Odense, Denmark', place: 'Odense', taken: 'Autumn 2026', series: 'odense' },
  IMG_1964: { title: 'A pink evening', theme: 'Weather & light', alt: 'Pink and lavender dusk clouds above trees', region: 'Odense, Denmark', place: 'Odense', taken: 'Autumn 2026', series: 'odense' },
  IMG_2169: { title: 'Above the clouds', theme: 'Weather & light', alt: 'Sun shining over a thick layer of low-lying cloud', region: 'Odense, Denmark', place: 'Odense', taken: 'Autumn 2026', series: 'odense' },
  IMG_0154: { title: 'Golden shoreline', theme: 'Water & mountains', alt: 'Bright sunset over a beach and water', region: 'Metro Vancouver, Canada', place: 'Barnet Marine Park, Burnaby', taken: 'Late March / early April', caption: 'One of Vancouver’s many jewels.' },
  IMG_0606: { title: 'At the water’s edge', theme: 'Water & mountains', alt: 'Low sun reflected across water between trees and hills', region: 'Metro Vancouver, Canada', place: 'West Vancouver (likely Lighthouse Park)', taken: 'Around March 2025', series: 'lighthouse' },
  IMG_0617: { title: 'Sun behind the pines', theme: 'Water & mountains', alt: 'Golden sunset across water framed by pines', region: 'Metro Vancouver, Canada', place: 'West Vancouver (likely Lighthouse Park)', taken: 'Around March 2025', series: 'lighthouse' },
  IMG_0720: { title: 'Autumn by the water', theme: 'Water & mountains', alt: 'Autumn leaves frame water and distant mountains', region: 'Metro Vancouver, Canada', place: 'Burnaby Mountain Park, Burnaby', taken: 'Autumn 2025', series: 'burnaby' },
  IMG_0722: { title: 'Mountain view', theme: 'Water & mountains', alt: 'Mountains and a wooded lake glimpsed between autumn leaves', region: 'Metro Vancouver, Canada', place: 'Burnaby Mountain Park, Burnaby', taken: 'Autumn 2025', series: 'burnaby' },
  IMG_0571: { title: 'Clouds over the city', theme: 'Water & mountains', alt: 'Layered blue clouds over city rooftops with mountains beyond', region: 'Metro Vancouver, Canada', place: 'Queen Elizabeth Park, Vancouver' },
  IMG_0669: { title: 'Garden and horizon', theme: 'Paths & seasons', alt: 'Formal flower gardens with water and mountain views', region: 'Metro Vancouver, Canada', place: 'UBC, near Grey Point, Vancouver', taken: 'Around June', caption: 'One of many sights to behold at the University of British Columbia’s Grey Point campus.' },
  IMG_0648: { title: 'Spring blossoms', theme: 'Paths & seasons', alt: 'Pink and white flowering trees in a garden', region: 'Metro Vancouver, Canada', place: 'Stanley Park, Vancouver' },
  IMG_0718: { title: 'Into the trees', theme: 'Paths & seasons', alt: 'A quiet wooded path bordered by dense ferns', region: 'Metro Vancouver, Canada', place: 'Burnaby Mountain Park, Burnaby', taken: 'Autumn 2025', series: 'burnaby' },
  IMG_0724: { title: 'At the end of the path', theme: 'Paths & seasons', alt: 'A dark woodland trail leading towards the evening light', region: 'Metro Vancouver, Canada', place: 'Burnaby Mountain Park, Burnaby', taken: 'Autumn 2025', series: 'burnaby' },
  IMG_0766: { title: 'Between the trees', theme: 'Paths & seasons', alt: 'Leafless trees and ferns on a hillside overlooking water', region: 'Metro Vancouver, Canada', place: 'Burnaby Mountain Park, Burnaby', taken: 'Autumn 2025', series: 'burnaby' },
  IMG_2112: { title: 'The winding path', theme: 'Paths & seasons', alt: 'Curving path through woodland in autumn', region: 'Gothenburg, Sweden', place: 'Keillers Park, Gothenburg', taken: 'Autumn 2026', locationOnly: true },
  '20261101_125120': { title: 'Among the trees', theme: 'Paths & seasons', alt: 'Forest path beneath tall pine trees and autumn foliage', region: 'Gothenburg, Sweden', place: 'Keillers Park, Gothenburg', taken: 'Autumn 2026', caption: 'Keillers Park was an excellent vantage point on Hisingen Island.' },
  '20261101_130044': { title: 'Autumn walk', theme: 'Paths & seasons', alt: 'Paved woodland path scattered with fallen leaves', region: 'Gothenburg, Sweden', place: 'Keillers Park, Gothenburg', taken: 'Autumn 2026', locationOnly: true },
  '20261031_214011': { title: 'Evening reflections', theme: 'Cities & evenings', alt: 'Illuminated canal buildings and reflections at night', region: 'Gothenburg, Sweden', place: 'Stora Hamnkanalen, Gothenburg', taken: 'Autumn 2026', caption: 'Goteborg was just a delight to walk around.' },
  IMG_0005: { title: 'Across the harbour', theme: 'Cities & evenings', alt: 'Elevated view over waterfront buildings and harbour waters', region: 'Metro Vancouver, Canada', place: 'Vancouver, view from a tower on Hastings Street', taken: 'February 2024', caption: 'I was just starting to see around the city, despite having been there many months by then.' },
  IMG_0014: { title: 'Across the inlet', theme: 'Cities & evenings', alt: 'Waterfront path looking over water to a city skyline', region: 'Metro Vancouver, Canada', place: 'Stanley Park, Vancouver', taken: 'February', caption: 'Spring gave us its best, thankfully.' },
  IMG_0202: { title: 'Afternoon at the harbour', theme: 'Cities & evenings', alt: 'Sailboats at a marina with a domed building beyond', region: 'Victoria, Canada', place: 'Inner Harbour, Victoria, BC', caption: 'Again, a city that I could never be tired of walking in.' },
  IMG_2045: { title: 'By the canal', theme: 'Cities & evenings', alt: 'Urban canal and historic buildings beneath a cloudy sky', region: 'Malmö, Sweden', place: 'Malmö city', taken: 'October 2026', series: 'malmo' },
  IMG_2046: { title: 'The riverside', theme: 'Cities & evenings', alt: 'Quiet urban waterway lined with buildings and trees', region: 'Malmö, Sweden', place: 'Malmö city', taken: 'October 2026', series: 'malmo' },
};

// The hero photograph and a few favourites lead their respective groups.
const preferredOrder = ['IMG_0979', 'IMG_2172', 'IMG_0614', 'IMG_0608', 'IMG_1477'];

// Vite 4+ resolves image URLs when GitHub Actions runs the existing build.
const originals = import.meta.glob([
  '../assets/photos/*.{webp,WebP}',
  '!../assets/photos/converted-12.webp',
  '!../assets/photos/IMG_1478.webp',
], {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;
const thumbnails = import.meta.glob('../assets/photos/thumbs/*.{webp,WebP}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

// Verified mappings for filenames assigned by the HEIC-to-WebP conversion tool.
// These are *not* the conversion-order guesses from the previous draft.
// converted-7.webp is a separate image without a verified JPEG original;
// it is deliberately absent from this map and is catalogued under its own name.
// converted-12.webp is intentionally excluded from the gallery.
const convertedNameToOriginal: Record<string, string> = {
  'converted': 'IMG_0648',
  'converted-2': 'IMG_0669',
  'converted-3': 'IMG_0718',
  'converted-4': 'IMG_0720',
  'converted-5': 'IMG_0722',
  'converted-6': 'IMG_0724',
  'converted-8': 'IMG_0766',
  'converted-9': 'IMG_0979',
  'converted-10': 'IMG_1475',
  'converted-11': 'IMG_1477',
  'converted-13': 'IMG_1783',
  'converted-14': 'IMG_1964',
  'converted-15': 'IMG_2045',
  'converted-16': 'IMG_2046',
  'converted-17': 'IMG_2112',
  'converted-18': 'IMG_2169',
  'converted-19': 'IMG_2172',
};

function stem(path: string): string {
  const name = path.split('/').pop() || path;
  const fileStem = name.replace(/\.webp$/i, '');
  return convertedNameToOriginal[fileStem] ?? fileStem;
}

export const photos: Photo[] = Object.entries(originals)
  .map(([path, src]) => {
    const id = stem(path);
    const note = details[id];
    const readable = id.replace(/[_-]+/g, ' ');
    const thumbnail = Object.entries(thumbnails).find(([thumbPath]) => stem(thumbPath) === id)?.[1];
    return {
      id,
      src,
      thumbSrc: thumbnail || src,
      title: note?.title || readable,
      alt: note?.alt || `Photograph: ${readable}`,
      theme: note?.theme || 'Unsorted moments',
      region: note?.region || null,
      place: note?.place || null,
      taken: note?.taken || null,
      caption: note?.caption || null,
      series: note?.series || null,
      locationOnly: note?.locationOnly || false,
    };
  })
  .sort((a, b) => {
    const aOrder = preferredOrder.indexOf(a.id);
    const bOrder = preferredOrder.indexOf(b.id);
    if (aOrder >= 0 || bOrder >= 0) {
      if (aOrder < 0) return 1;
      if (bOrder < 0) return -1;
      return aOrder - bOrder;
    }
    return a.id.localeCompare(b.id);
  });

export const imagePath = (photo: Photo) => photo.src;
export const thumbnailPath = (photo: Photo) => photo.thumbSrc;

export const themeDescriptions: Record<PhotoTheme, string> = {
  'Weather & light': 'Mist, rainbows, changing skies, and the last of the sun.',
  'Water & mountains': 'Lakes, coastlines, and wide horizons.',
  'Paths & seasons': 'Woods, walks, and the turning of the year.',
  'Cities & evenings': 'Streets, harbours, and reflections after dark.',
  'Unsorted moments': 'More photographs awaiting their own category.',
};

/** Returns the personal caption for a photo without duplicating shared passages in the catalogue. */
export const captionForPhoto = (photo: Photo): string | null =>
  photo.caption ?? (photo.series ? seriesNotes[photo.series].text : null);
