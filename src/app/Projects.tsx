import { useEffect } from "react";
import { DARK_CSS, DarkToggleIcon, NoiseOverlay, useDarkMode } from "./shared";
import { ProjectModule, PROJECTS, STATIC_PROJECTS, StaticProjectCard } from "./projectData";

export default function Projects() {
  const [isDark, setIsDark] = useDarkMode();

  useEffect(() => {
    document.title = "Projects — Bien Jeric Dela Paz";
    if (window.location.hash) document.querySelector(window.location.hash)?.scrollIntoView();
  }, []);

  return (
    <div className="bg-white text-black min-h-screen overflow-x-clip" style={{ fontFamily: "'Archivo', Arial, sans-serif" }}>
      <style>{DARK_CSS}</style>
      <NoiseOverlay />

      {/* NAV */}
      {/* The ::before backing fills any gap above the bar so screenshots never show through while scrolling */}
      <nav className="nav-unzoom sticky top-0 z-50 bg-white border-b border-black before:content-[''] before:absolute before:inset-x-0 before:bottom-full before:h-screen before:bg-inherit">
        <div className="flex items-center justify-between gap-4 px-6 md:px-8 py-3 md:py-4 wide:px-[max(calc(4rem*var(--zoom)),calc((100%_-_1600px*var(--zoom))/2))]">
          <a href="/#projects" className="py-2 -my-2 text-[12px] tracking-[0.3em] uppercase whitespace-nowrap" style={{ fontFamily: "'Courier Prime', monospace" }}>
            ← BJDP
          </a>
          <button
            onClick={() => setIsDark((d) => !d)}
            className="hidden md:block text-[12px] tracking-[0.25em] uppercase border border-current px-3 py-1 hover:bg-black hover:text-white transition-all"
            style={{ fontFamily: "'Courier Prime', monospace" }}
            aria-label="Toggle dark mode"
          >
            {isDark ? "LIGHT" : "DARK"}
          </button>
          <DarkToggleIcon isDark={isDark} onToggle={() => setIsDark((d) => !d)} className="md:hidden" />
        </div>
      </nav>

      {/* HEADER */}
      <header className="gutter pt-16 md:pt-24 pb-16 md:pb-24 border-b border-black">
        <div className="mb-10 md:mb-12 flex items-center gap-4" style={{ fontFamily: "'Courier Prime', monospace" }}>
          <span className="text-[12px] tracking-[0.4em] uppercase text-black/40">03</span>
          <div className="flex-1 h-px bg-black/20" />
          <span className="text-[12px] tracking-[0.4em] uppercase">Projects</span>
        </div>
        <h1
          className="text-[11vw] md:text-[min(8vw,138px)] font-black leading-[0.9] tracking-[-0.04em] uppercase"
          style={{ fontFamily: "'Archivo', Arial, sans-serif" }}
        >
          All Projects
        </h1>
        <p
          className="mt-8 md:mt-10 text-base md:text-lg leading-relaxed max-w-xl text-black/60"
          style={{ fontFamily: "'EB Garamond', Georgia, serif", fontStyle: "italic" }}
        >
          {PROJECTS.length + STATIC_PROJECTS.length} projects · {PROJECTS[0].index}–{STATIC_PROJECTS[STATIC_PROJECTS.length - 1].index}
        </p>
      </header>

      {/* PROJECTS */}
      <section className="border-b border-black">
        {PROJECTS.map((project) => (
          <div key={project.id} id={project.id} className="scroll-mt-16">
            <ProjectModule project={project} />
          </div>
        ))}

        {/* More projects: compact cards in the same two columns as the spreads above */}
        <div
          className="gutter py-3 flex items-center gap-4"
          style={{ fontFamily: "'Courier Prime', monospace" }}
        >
          <span className="text-[11px] tracking-[0.4em] uppercase text-black/40">
            {STATIC_PROJECTS[0].index}–{STATIC_PROJECTS[STATIC_PROJECTS.length - 1].index}
          </span>
          <span className="text-[11px] tracking-[0.4em] uppercase">More Projects</span>
        </div>
        <div className="gutter-wide grid grid-cols-1 md:grid-cols-2">
          {STATIC_PROJECTS.map((project) => (
            <StaticProjectCard key={project.index} project={project} />
          ))}
        </div>
      </section>

      {/* BACK */}
      <div className="gutter py-12 md:py-16">
        <a
          href="/#projects"
          className="inline-flex items-center gap-3 border border-black px-6 py-3 text-[12px] tracking-[0.35em] uppercase hover:bg-black hover:text-white transition-colors"
          style={{ fontFamily: "'Courier Prime', monospace" }}
        >
          ← Back to portfolio
        </a>
      </div>
    </div>
  );
}
