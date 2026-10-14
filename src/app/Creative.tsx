import { useEffect, useState } from "react";
import {
  DARK_CSS,
  LOOKBOOK,
  LOOKBOOK_LINKS,
  Lightbox,
  NoiseOverlay,
  PHOTOGRAPHY,
  PHOTOGRAPHY_LINKS,
  photoUrl,
  SourceLinks,
  VIDEOS,
  type Photo,
  type Video,
} from "./shared";

// Lookbook rows: a landscape shot (2 parts) beside a portrait (1 part), alternating sides
const LOOKBOOK_ROWS: { cols: string; aspect: string; names: string[] }[] = [
  { cols: "md:grid-cols-[2fr_1fr]", aspect: "md:aspect-[15/7]", names: ["lookbook-04", "lookbook-01"] },
  { cols: "md:grid-cols-[1fr_2fr]", aspect: "md:aspect-[15/7]", names: ["lookbook-02", "lookbook-07"] },
  { cols: "md:grid-cols-[2fr_1fr]", aspect: "md:aspect-[15/7]", names: ["lookbook-03", "lookbook-10"] },
  { cols: "md:grid-cols-[1fr_2fr]", aspect: "md:aspect-[15/7]", names: ["lookbook-05", "lookbook-06"] },
  { cols: "md:grid-cols-2", aspect: "md:aspect-[3/1]", names: ["lookbook-08", "lookbook-09"] },
];

// Viewer order follows the page order
const LOOKBOOK_ORDERED = LOOKBOOK_ROWS.flatMap((row) => row.names).map(
  (name) => LOOKBOOK.find((photo) => photo.name === name)!,
);

function VideoCard({ video, featured = false }: { video: Video; featured?: boolean }) {
  // Only the thumbnail loads up front; the YouTube player loads when clicked
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className={`min-w-0 flex flex-col ${
        featured ? "md:col-span-2 md:grid md:grid-cols-[2fr_1fr] md:gap-x-8 lg:gap-x-12 md:items-end" : ""
      }`}
    >
      <div data-keep-dark="" className="relative aspect-video bg-black border border-black overflow-hidden">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
            title={video.title}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 w-full h-full"
            aria-label={`Play ${video.title}`}
          >
            <img
              src={`https://i.ytimg.com/vi/${video.id}/${video.thumb}.jpg`}
              alt=""
              loading="lazy"
              decoding="async"
              className="w-full h-full object-contain group-hover:opacity-80 transition-opacity"
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="w-14 h-14 flex items-center justify-center bg-white text-[#000] group-hover:scale-110 transition-transform">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="6 4 20 12 6 20 6 4" />
                </svg>
              </span>
            </span>
            <span
              className="absolute top-3 right-3 text-[8px] tracking-[0.3em] uppercase text-white bg-black/70 px-2 py-0.5"
              style={{ fontFamily: "'Courier Prime', monospace" }}
            >
              {video.role}
            </span>
          </button>
        )}
      </div>

      <div className="pt-4">
        <div className="flex items-baseline gap-3 mb-1">
          <span
            className="text-[9px] tracking-[0.4em] uppercase text-black/40 shrink-0"
            style={{ fontFamily: "'Courier Prime', monospace" }}
          >
            {video.index}
          </span>
          <h3
            className="text-xl md:text-2xl font-black uppercase leading-tight tracking-tight break-words"
            style={{ fontFamily: "'Archivo', Arial, sans-serif" }}
          >
            {video.title}
          </h3>
        </div>
        <p
          className="text-base text-black/80"
          style={{ fontFamily: "'EB Garamond', Georgia, serif" }}
        >
          {video.description}
        </p>
        <p
          className="text-base text-black/50 mb-4"
          style={{ fontFamily: "'EB Garamond', Georgia, serif", fontStyle: "italic" }}
        >
          {video.role} · {video.gear}
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={`https://youtu.be/${video.id}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-black px-4 py-1.5 text-[10px] tracking-[0.3em] uppercase hover:bg-black hover:text-white transition-all"
            style={{ fontFamily: "'Courier Prime', monospace" }}
          >
            Watch on YouTube
          </a>
          {video.links?.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-black/30 px-4 py-1.5 text-[10px] tracking-[0.3em] uppercase text-black/60 hover:bg-black hover:text-white transition-all"
              style={{ fontFamily: "'Courier Prime', monospace" }}
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}



// Photo wall whose photos open in the full-screen viewer
function PhotoWall({ photos }: { photos: Photo[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4">
        {photos.map((photo, i) => (
          <button
            key={photo.name}
            onClick={() => setOpen(i)}
            className="group block w-full mb-3 md:mb-4 break-inside-avoid overflow-hidden bg-neutral-200"
            aria-label={`Open photo: ${photo.alt}`}
          >
            <img
              src={photoUrl(photo.name, "sm")}
              alt={photo.alt}
              width={photo.w}
              height={photo.h}
              loading="lazy"
              decoding="async"
              className="w-full h-auto group-hover:scale-[1.03] transition-transform duration-500"
            />
          </button>
        ))}
      </div>

      {open !== null && (
        <Lightbox photos={photos} index={open} onClose={() => setOpen(null)} onChange={setOpen} />
      )}
    </>
  );
}


function LookbookSpread() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <div className="flex flex-col gap-3 md:gap-4">
        {LOOKBOOK_ROWS.map((row) => (
          <div key={row.names.join()} className={`grid grid-cols-1 md:grid-rows-1 gap-3 md:gap-4 ${row.cols} ${row.aspect}`}>
            {row.names.map((name) => {
              const i = LOOKBOOK_ORDERED.findIndex((photo) => photo.name === name);
              const photo = LOOKBOOK_ORDERED[i];
              return (
                <button
                  key={name}
                  onClick={() => setOpen(i)}
                  className="group block min-h-0 overflow-hidden bg-neutral-200"
                  aria-label={`Open photo: ${photo.alt}`}
                >
                  <img
                    src={photoUrl(name, "sm")}
                    srcSet={`${photoUrl(name, "sm")} 720w, ${photoUrl(name, "full")} 1800w`}
                    sizes={photo.w > photo.h ? "(min-width: 768px) 62vw, 100vw" : "(min-width: 768px) 31vw, 100vw"}
                    alt={photo.alt}
                    width={photo.w}
                    height={photo.h}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto md:h-full md:object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {open !== null && (
        <Lightbox photos={LOOKBOOK_ORDERED} index={open} onClose={() => setOpen(null)} onChange={setOpen} />
      )}
    </>
  );
}

function PartHeading({ title, note }: { title: string; note: string }) {
  return (
    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-4">
      <h2
        className="text-3xl md:text-5xl font-black uppercase leading-tight tracking-tight"
        style={{ fontFamily: "'Archivo', Arial, sans-serif" }}
      >
        {title}
      </h2>
      <p
        className="text-base md:text-lg text-black/60"
        style={{ fontFamily: "'EB Garamond', Georgia, serif", fontStyle: "italic" }}
      >
        {note}
      </p>
    </div>
  );
}

const PARTS = [
  { id: "photography", label: "Photography" },
  { id: "video", label: "Video" },
  { id: "modeling", label: "Modeling" },
];

export default function Creative() {
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains("dark"));

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    document.title = "Photo, Film & Lookbook — Bien Jeric Dela Paz";
    if (window.location.hash) document.querySelector(window.location.hash)?.scrollIntoView();
  }, []);

  return (
    <div className="bg-white text-black min-h-screen overflow-x-hidden" style={{ fontFamily: "'Archivo', Arial, sans-serif" }}>
      <style>{DARK_CSS}</style>
      <NoiseOverlay />

      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-white border-b border-black">
        <div className="flex items-center justify-between gap-4 px-6 md:px-8 py-4">
          <a href="/" className="text-[10px] tracking-[0.3em] uppercase" style={{ fontFamily: "'Courier Prime', monospace" }}>
            ← BJDP
          </a>
          <div className="flex items-center gap-4 md:gap-8">
            {PARTS.map((part) => (
              <a
                key={part.id}
                href={`#${part.id}`}
                className="text-[10px] tracking-[0.2em] md:tracking-[0.25em] uppercase hover:line-through"
                style={{ fontFamily: "'Courier Prime', monospace" }}
              >
                {part.label}
              </a>
            ))}
            <button
              onClick={() => setIsDark((d) => !d)}
              className="hidden sm:block text-[10px] tracking-[0.25em] uppercase border border-current px-3 py-1 hover:bg-black hover:text-white transition-all"
              style={{ fontFamily: "'Courier Prime', monospace" }}
              aria-label="Toggle dark mode"
            >
              {isDark ? "LIGHT" : "DARK"}
            </button>
          </div>
        </div>
      </nav>

      {/* HEADER */}
      <header className="px-6 md:px-16 pt-16 md:pt-24 pb-16 md:pb-24 border-b border-black">
        <div className="mb-10 md:mb-12 flex items-center gap-4" style={{ fontFamily: "'Courier Prime', monospace" }}>
          <span className="text-[10px] tracking-[0.4em] uppercase text-black/40">03</span>
          <div className="flex-1 h-px bg-black/20" />
          <span className="text-[10px] tracking-[0.4em] uppercase">Behind the Camera</span>
        </div>
        <h1
          className="text-[11vw] md:text-[8vw] font-black leading-[0.9] tracking-[-0.04em] uppercase"
          style={{ fontFamily: "'Archivo', Arial, sans-serif" }}
        >
          Photo, Film
          <br />& Lookbook
        </h1>
        <p
          className="mt-8 md:mt-10 text-base md:text-lg leading-relaxed max-w-xl"
          style={{ fontFamily: "'EB Garamond', Georgia, serif" }}
        >
          Photography taught me composition and light, video taught me pacing, and modeling taught me how a
          brand presents itself. I bring that same eye to every interface I design.
        </p>
      </header>

      {/* PHOTOGRAPHY */}
      <section id="photography" className="scroll-mt-16 px-6 md:px-16 py-16 md:py-24 border-b border-black">
        <PartHeading title="Photography" note="Shot by me · Teknolohista ng Bayan merch campaign for ASCII, PUP Manila" />
        <SourceLinks links={PHOTOGRAPHY_LINKS} />
        <PhotoWall photos={PHOTOGRAPHY} />
      </section>

      {/* VIDEO */}
      <section id="video" className="scroll-mt-16 px-6 md:px-16 py-16 md:py-24 border-b border-black">
        <div className="mb-6 md:mb-8">
          <PartHeading title="Video & Film" note="Sony Handycam and Samsung digicam work, shot and edited in Premiere Pro" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-14">
          {VIDEOS.map((video, i) => (
            <VideoCard key={video.id} video={video} featured={i === 0} />
          ))}
        </div>
      </section>

      {/* MODELING */}
      <section id="modeling" className="scroll-mt-16 px-6 md:px-16 py-16 md:py-24">
        <PartHeading title="Modeling" note="Modeled for SIPAT Merchandise by UP GEOP" />
        <SourceLinks links={LOOKBOOK_LINKS} />
        <LookbookSpread />
      </section>

      {/* FOOTER */}
      <footer
        data-keep-dark=""
        className="px-6 md:px-16 py-12 md:py-16 bg-black text-white flex flex-wrap items-end justify-between gap-6"
      >
        <a
          href="/#camera"
          className="text-4xl md:text-6xl font-black uppercase leading-tight tracking-tight hover:text-white/60 transition-colors"
          style={{ fontFamily: "'Archivo', Arial, sans-serif" }}
        >
          ← Back to portfolio
        </a>
        <div className="text-[9px] tracking-[0.3em] text-white/40" style={{ fontFamily: "'Courier Prime', monospace" }}>
          © 2026 Bien Jeric Dela Paz
        </div>
      </footer>
    </div>
  );
}
