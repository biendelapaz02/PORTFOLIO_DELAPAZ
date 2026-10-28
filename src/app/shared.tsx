import { useEffect, useState } from "react";

// WebP versions of the shoot photos: name.webp (full, for the viewer) and name-sm.webp (grid)
const PHOTO_FILES = {
  ...import.meta.glob("../assets/photography/web/*.webp", { eager: true, import: "default" }),
  ...import.meta.glob("../assets/modeling/web/*.webp", { eager: true, import: "default" }),
} as Record<string, string>;

export const photoUrl = (name: string, size: "full" | "sm") => {
  const folder = name.startsWith("photo") ? "photography" : "modeling";
  return PHOTO_FILES[`../assets/${folder}/web/${name}${size === "sm" ? "-sm" : ""}.webp`];
};

// `src` overrides the shoot-photo lookup, for images that live elsewhere (project screenshots)
export type Photo = { name: string; alt: string; w: number; h: number; src?: string };

export const PHOTOGRAPHY: Photo[] = [
  { name: "photo-03", alt: "Model in a navy Teknolohista shirt adjusting her glasses", w: 1080, h: 1350 },
  { name: "photo-09", alt: "\"ICT for the People!\" back print beside a white Teknolohista shirt", w: 1440, h: 1080 },
  { name: "photo-02", alt: "Student in a black blazer holding a sticker-covered laptop", w: 1080, h: 1440 },
  { name: "photo-08", alt: "Model in a white Teknolohista shirt against a white wall", w: 1080, h: 1350 },
  { name: "photo-05", alt: "asciiSKOLAR shirt with a Teknolohista ng Bayan tote bag", w: 1080, h: 1350 },
  { name: "photo-12", alt: "Back of a navy \"ICT for the People!\" shirt", w: 1080, h: 1350 },
  { name: "photo-10", alt: "Two students at a computer, one in a Teknolohista shirt", w: 1440, h: 1080 },
  { name: "photo-15", alt: "Back of a white \"ICT for the People!\" shirt with the motherboard print", w: 1080, h: 1350 },
  { name: "photo-04", alt: "Student at a desk with a clipboard and an ASCII-stickered laptop", w: 1080, h: 1440 },
  { name: "photo-06", alt: "Model in a Teknolohista shirt pointing to an ASCII sketchbook", w: 1080, h: 1350 },
  { name: "photo-14", alt: "Model stretching the collar of an asciiSKOLAR shirt", w: 1080, h: 1350 },
  { name: "photo-11", alt: "Three students posing in sunglasses with a Teknolohista tote bag", w: 1350, h: 1080 },
  { name: "photo-01", alt: "Student in a grey blazer typing at a keyboard", w: 960, h: 1440 },
  { name: "photo-13", alt: "Close crop of a white Teknolohista shirt and ASCII lanyard", w: 1080, h: 1350 },
  { name: "photo-07", alt: "Student in a black suit leaning back in an office chair", w: 960, h: 1440 },
];

export const PHOTOGRAPHY_LINKS = [
  { label: "ASCII merch post", url: "https://www.facebook.com/share/p/1E9K26jZBu/" },
  { label: "Published photos, part 1", url: "https://www.facebook.com/share/p/1FXjx4g85J/" },
  { label: "Published photos, part 2", url: "https://www.facebook.com/share/p/1C1q9Meo93/" },
];

export type Video = {
  id: string;
  index: string;
  title: string;
  description: string;
  role: string;
  gear: string;
  // maxresdefault doesn't exist for every upload; fall back to hqdefault
  thumb: "maxresdefault" | "hqdefault";
  // Shape of the footage; 4:3 videos are pillarboxed inside YouTube's 16:9 thumbnails
  ratio: number;
  links?: { label: string; url: string }[];
};

export const VIDEOS: Video[] = [
  {
    id: "BOWUpSQEzxQ",
    index: "01",
    title: "Alfie @ 21",
    description: "21st birthday shoot in a vintage VHS style.",
    role: "Shot",
    gear: "Sony Handycam",
    thumb: "maxresdefault",
    ratio: 4 / 3,
  },
  {
    id: "R5vNwzwlkvI",
    index: "02",
    title: "ASCII — Balik Sinta (Teaser)",
    description: "Teaser for ASCII, a PUP student organization.",
    role: "Shot",
    gear: "Sony Handycam · Fisheye lens",
    thumb: "maxresdefault",
    ratio: 16 / 9,
    links: [{ label: "Facebook reel by ASCII", url: "https://www.facebook.com/reel/25862433400065628" }],
  },
  {
    id: "V0Xyr9BykLk",
    index: "03",
    title: "Gallardo & BMW",
    description: "Car edit featuring a Lamborghini Gallardo and a BMW.",
    role: "Shot & Edited",
    gear: "Sony Handycam · Adobe Premiere Pro",
    thumb: "hqdefault",
    ratio: 4 / 3,
  },
  {
    id: "Bxt_4MRqYbM",
    index: "04",
    title: "Our De$tiny",
    description: "Lifestyle vlog with a VHS look.",
    role: "Shot & Edited",
    gear: "Samsung digicam · Adobe Premiere Pro · CapCut",
    thumb: "maxresdefault",
    ratio: 4 / 3,
  },
  {
    id: "Z8rJT9ooEYg",
    index: "05",
    title: "Ye feat. Everyone",
    description: "Lifestyle video with a VHS look.",
    role: "Shot & Edited",
    gear: "Samsung digicam · Adobe Premiere Pro · CapCut",
    thumb: "maxresdefault",
    ratio: 4 / 3,
  },
];

export const LOOKBOOK: Photo[] = [
  { name: "lookbook-04", alt: "Portrait in a maroon and white 00 jersey under a cloudy sky", w: 1800, h: 1192 },
  { name: "lookbook-01", alt: "Back view in a Fighting Maroons 00 jersey and bandana", w: 1192, h: 1800 },
  { name: "lookbook-07", alt: "Two models in white and red 00 jerseys", w: 1800, h: 1192 },
  { name: "lookbook-02", alt: "White 00 jersey with an Iskolar ng Bayan cap in hand", w: 1192, h: 1800 },
  { name: "lookbook-03", alt: "Two models in 00 jerseys by a fence", w: 1800, h: 1192 },
  { name: "lookbook-10", alt: "Iskolar ng Bayan tote bag carried over a 00 jersey", w: 1192, h: 1800 },
  { name: "lookbook-06", alt: "Standing in a green and white 00 jersey beside parked motorbikes", w: 1800, h: 1192 },
  { name: "lookbook-05", alt: "Two models in jerseys, one crouching, one standing", w: 1192, h: 1800 },
  { name: "lookbook-08", alt: "Two models in white and red jerseys, adjusting their collars", w: 1800, h: 1192 },
  { name: "lookbook-09", alt: "Two models in caps and jerseys seen from above", w: 1800, h: 1192 },
];

export function Lightbox({
  photos,
  index,
  onClose,
  onChange,
}: {
  photos: Photo[];
  index: number;
  onClose: () => void;
  onChange: (i: number) => void;
}) {
  const total = photos.length;
  const prev = () => onChange((index - 1 + total) % total);
  const next = () => onChange((index + 1) % total);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  });

  const photo = photos[index];

  return (
    <div
      data-keep-dark=""
      role="dialog"
      aria-modal="true"
      aria-label={photo.alt}
      className="fixed inset-0 z-[100] bg-black text-white flex flex-col"
      onClick={onClose}
    >
      <div
        className="flex items-center justify-between px-6 md:px-8 py-4 text-[12px] tracking-[0.3em] uppercase"
        style={{ fontFamily: "'Courier Prime', monospace" }}
      >
        <span className="text-white/60">
          {index + 1}/{total}
        </span>
        <button onClick={onClose} className="hover:line-through" aria-label="Close">
          Close ✕
        </button>
      </div>

      <div className="relative flex-1 min-h-0 px-4 md:px-20">
        <img
          key={photo.name}
          src={photo.src ?? photoUrl(photo.name, "full")}
          alt={photo.alt}
          className="w-full h-full object-contain"
          style={{ animation: "fadeSlide 0.3s ease forwards" }}
          onClick={(e) => e.stopPropagation()}
        />
        <button
          onClick={(e) => { e.stopPropagation(); prev(); }}
          className="absolute left-0 top-0 bottom-0 w-1/4 md:w-20 flex items-center justify-start md:justify-center pl-4 md:pl-0 text-2xl md:text-3xl text-white/60 hover:text-white"
          style={{ fontFamily: "'Courier Prime', monospace" }}
          aria-label="Previous photo"
        >
          ←
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); next(); }}
          className="absolute right-0 top-0 bottom-0 w-1/4 md:w-20 flex items-center justify-end md:justify-center pr-4 md:pr-0 text-2xl md:text-3xl text-white/60 hover:text-white"
          style={{ fontFamily: "'Courier Prime', monospace" }}
          aria-label="Next photo"
        >
          →
        </button>
      </div>

      <p
        className="px-6 md:px-8 py-4 text-sm md:text-base text-white/70 text-center"
        style={{ fontFamily: "'EB Garamond', Georgia, serif", fontStyle: "italic" }}
      >
        {photo.alt}
      </p>
      <style>{`@keyframes fadeSlide { from { opacity: 0; transform: translateX(10px); } to { opacity: 1; transform: translateX(0); } }`}</style>
    </div>
  );
}

export const LOOKBOOK_LINKS = [
  { label: "SIPAT lookbook, part 1", url: "https://www.facebook.com/share/p/1Caryrf6J3/" },
  { label: "SIPAT lookbook, part 2", url: "https://www.facebook.com/share/p/19Y42KeuaQ/" },
];

// Outline link button: full width and thumb-sized on phones, compact from sm up
export const LINK_BUTTON =
  "flex sm:inline-flex w-full sm:w-auto items-center justify-center gap-2 min-h-[44px] sm:min-h-0 border px-4 py-1.5 text-[12px] tracking-[0.2em] lg:tracking-[0.3em] uppercase text-center whitespace-nowrap hover:bg-black hover:text-white transition-all";

export function SourceLinks({ links }: { links: { label: string; url: string }[] }) {
  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-6 md:mb-8">
      {links.map((link) => (
        <a
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noreferrer"
          className={`${LINK_BUTTON} border-black`}
          style={{ fontFamily: "'Courier Prime', monospace" }}
        >
          {link.label} ↗
        </a>
      ))}
    </div>
  );
}

export function NoiseOverlay() {
  return (
    <svg
      className="pointer-events-none fixed inset-0 z-0 opacity-[0.032] w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <filter id="noise">
        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise)" />
    </svg>
  );
}

// Dark mode, remembered between pages and visits (storage can be blocked, so it is optional)
export function useDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    try {
      return localStorage.getItem("theme") === "dark";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {
      // Not saved; the toggle still works for this page
    }
  }, [isDark]);

  return [isDark, setIsDark] as const;
}

// Small square toggle for phones, where the word button doesn't fit
export function DarkToggleIcon({ isDark, onToggle, className = "" }: { isDark: boolean; onToggle: () => void; className?: string }) {
  return (
    <button
      onClick={onToggle}
      className={`w-9 h-9 shrink-0 flex items-center justify-center border border-current text-[15px] leading-none active:opacity-50 transition-opacity ${className}`}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? "☀" : "☾"}
    </button>
  );
}

export const DARK_CSS = `
  html.dark body { background:#000; color:#fff; }
  html.dark .bg-white { background-color:#000 !important; }
  html.dark .bg-neutral-100, html.dark .bg-neutral-200 { background-color:#1a1a1a !important; }
  html.dark .bg-black\\/5 { background-color:rgba(255,255,255,0.05) !important; }
  html.dark .bg-black\\/30 { background-color:rgba(255,255,255,0.15) !important; }
  html.dark .bg-black\\/40 { background-color:rgba(255,255,255,0.2) !important; }
  html.dark .bg-black\\/60 { background-color:rgba(255,255,255,0.35) !important; }
  html.dark .bg-black\\/70 { background-color:rgba(255,255,255,0.4) !important; }
  html.dark .text-black { color:#fff !important; }
  html.dark .text-black\\/30 { color:rgba(255,255,255,0.3) !important; }
  html.dark .text-black\\/40 { color:rgba(255,255,255,0.4) !important; }
  html.dark .text-black\\/50 { color:rgba(255,255,255,0.5) !important; }
  html.dark .text-black\\/60 { color:rgba(255,255,255,0.6) !important; }
  html.dark .text-black\\/80 { color:rgba(255,255,255,0.8) !important; }
  html.dark .border-black { border-color:rgba(255,255,255,0.75) !important; }
  html.dark .border-black\\/10 { border-color:rgba(255,255,255,0.1) !important; }
  html.dark .border-black\\/20 { border-color:rgba(255,255,255,0.2) !important; }
  html.dark .border-black\\/25 { border-color:rgba(255,255,255,0.25) !important; }
  html.dark .border-black\\/30 { border-color:rgba(255,255,255,0.3) !important; }
  html.dark .border-dashed { border-color:rgba(255,255,255,0.25) !important; }
  html.dark .bg-black:not([data-keep-dark]) { background-color:#fff !important; }
  html.dark .text-white { color:#000 !important; }
  html.dark .text-white\\/20 { color:rgba(0,0,0,0.2) !important; }
  html.dark .text-white\\/30 { color:rgba(0,0,0,0.3) !important; }
  html.dark .text-white\\/40 { color:rgba(0,0,0,0.4) !important; }
  html.dark .text-white\\/50 { color:rgba(0,0,0,0.5) !important; }
  html.dark .text-white\\/60 { color:rgba(0,0,0,0.6) !important; }
  html.dark .text-white\\/70 { color:rgba(0,0,0,0.7) !important; }
  html.dark .border-white\\/10 { border-color:rgba(0,0,0,0.1) !important; }
  html.dark .border-white\\/20 { border-color:rgba(0,0,0,0.2) !important; }
  html.dark .border-white\\/40 { border-color:rgba(0,0,0,0.4) !important; }
  html.dark .bg-white\\/5 { background-color:rgba(0,0,0,0.05) !important; }
  html.dark .bg-white\\/20 { background-color:rgba(0,0,0,0.15) !important; }
  html.dark .hover\\:bg-black:hover { background-color:#fff !important; color:#000 !important; }
  html.dark .hover\\:text-white:hover { color:#000 !important; }
  html.dark .hover\\:text-white\\/60:hover { color:rgba(0,0,0,0.6) !important; }
  html.dark [data-keep-dark] { background-color:#000 !important; color:#fff !important; }
  html.dark [data-keep-dark] .text-white { color:#fff !important; }
  html.dark [data-keep-dark] .text-white\\/20 { color:rgba(255,255,255,0.2) !important; }
  html.dark [data-keep-dark] .text-white\\/30 { color:rgba(255,255,255,0.3) !important; }
  html.dark [data-keep-dark] .text-white\\/40 { color:rgba(255,255,255,0.4) !important; }
  html.dark [data-keep-dark] .text-white\\/50 { color:rgba(255,255,255,0.5) !important; }
  html.dark [data-keep-dark] .text-white\\/60 { color:rgba(255,255,255,0.6) !important; }
  html.dark [data-keep-dark] .text-white\\/70 { color:rgba(255,255,255,0.7) !important; }
  html.dark [data-keep-dark] .border-white\\/20 { border-color:rgba(255,255,255,0.2) !important; }
  html.dark [data-keep-dark] .hover\\:text-white\\/60:hover { color:rgba(255,255,255,0.6) !important; }
`;
