import { useEffect, useState } from "react";
import { DARK_CSS, DarkToggleIcon, LOOKBOOK, NoiseOverlay, PHOTOGRAPHY, photoUrl, useDarkMode, VIDEOS } from "./shared";
import { GalleryTabs, ProjectCarousel, ProjectModule, PROJECTS, STATIC_PROJECTS, type Gallery } from "./projectData";

// Spreads shown on the main page (Camarines Norte through Cash Catalyst)
const HOME_PROJECTS = 4;

// — Portrait
import portrait from "@/assets/2BY2PIC.webp";

// — NSJBI internship screenshots
import nsjbiHome          from "@/assets/nsjbi/user/home.webp";
import nsjbiPopup         from "@/assets/nsjbi/user/40th-popup.webp";
import nsjbiAbout         from "@/assets/nsjbi/user/about.webp";
import nsjbiVideo         from "@/assets/nsjbi/user/video.webp";
import nsjbiProperties    from "@/assets/nsjbi/user/properties.webp";
import nsjbi4ph           from "@/assets/nsjbi/user/4ph.webp";
import nsjbiAdminVideo    from "@/assets/nsjbi/admin/admin-add-video.webp";
import nsjbiAdminOverview from "@/assets/nsjbi/admin/admin-overview.webp";
import nsjbiAdminDash     from "@/assets/nsjbi/admin/admin-dashboard.webp";
import nsjbiAdminProps    from "@/assets/nsjbi/admin/admin-property-list.webp";

const MARGIELA_NUMBERS = [
  "0","1","2","3","4","5","6","7","8","9",
  "10","11","12","13","14","15","16","17",
  "18","19","20","21","22","23",
];


// Served from public/; the download attribute saves it instead of opening a new tab
const CV_FILE = "/Dela-Paz-Resume.pdf";

const TICKER_ITEMS = [
  "JBECP PUP MANILA — MEDIA HEAD",
  "ASCII — DOCUMENTATION & SECRETARIAT",
  "GOOGLE DEVELOPER GROUPS ON CAMPUS PUP — OPERATIONS COMMITTEE / DATA CAMP SCHOLAR",
  "AWS CLOUD CLUB PUP — CYBER SECURITY MEMBER",
];

const SKILLS = [
  { category: "DESIGN & FRONT-END", items: ["Figma","UI/UX Design","React","Vue","Tailwind CSS","HTML/CSS","JavaScript","TypeScript","Adobe Photoshop","Canva"] },
  { category: "PROGRAMMING & TOOLS", items: ["Java","JavaFX","C","Python","PHP","SQL","JSON","Git","GitHub"] },
  { category: "DATABASE & BACKEND", items: ["MySQL","SQLite","Data Modeling","ERD","Normalization","Python Flask"] },
  { category: "CYBERSECURITY & NETWORKING", items: ["Intrusion Detection & Prevention Systems (IDPS)","Scapy Packet Analysis","Network Simulation (Cisco Packet Tracer)","Security Protocol Implementation","Data Privacy Compliance"] },
  { category: "AI & MACHINE LEARNING", items: ["Bayesian Learning","Naive Bayes Classification","Random Forest Classifier","Feature Engineering","Image Recognition Integration"] },
  { category: "WEB3 & BLOCKCHAIN", items: ["Decentralized Identity (DID)","Verifiable Credentials (VC)","IPFS","MultiChain","Smart Contract Integration"] },
];

// Strongest skills, set in bold
const TOP_SKILLS = new Set(["Figma", "UI/UX Design", "React", "Vue", "Tailwind CSS"]);

const CERTS = [
  { name: "Fortinet Certified Associate — Cybersecurity", issuer: "Fortinet" },
  { name: "Machine Learning, AI, and Cybersecurity Badge", issuer: "US ASEAN & ASU" },
  { name: "Science and Technology Track Certificate", issuer: "US ASEAN & ASU" },
  { name: "Networking Basics", issuer: "Cisco" },
  { name: "Introduction to Cybersecurity", issuer: "Cisco" },
  { name: "Introduction to Machine Learning", issuer: "AWS" },
  { name: "Introduction to Technical Support", issuer: "IBM" },
  { name: "Introduction to Microsoft Azure Cloud Services", issuer: "Microsoft" },
];

const EXPERIENCE = [
  {
    company: "NSJ Technologies Inc.",
    companyNote: "New San Jose Builders, Inc.",
    role: "Web Designer Intern",
    year: "2026",
    points: [
      "Conducted a UX/QA audit of the existing NSJBI website, identifying navigation, branding, and usability gaps that directly shaped the requirements for the site redesign.",
      "Redesigned the NSJBI corporate website in Figma, benchmarking against competitor sites to modernize the UI and improve overall user experience.",
      "Collaborated with developers to implement approved designs, incorporating 40th Anniversary branding and new CMS features (Super Admin, Audit Logs).",
      "Presented design progress and QA findings to the Marketing Department, VP for Operations, VP for IT, and company executives, securing approval to proceed at each project milestone.",
    ],
    tags: ["Figma", "UX/QA Audit", "Website Redesign", "Competitor Benchmarking", "CMS Features", "Stakeholder Presentations"],
    links: [
      { label: "View Full Figma", url: "https://www.figma.com/design/2W0XN3lrCmaYYlHZw5PwN1/New-San-Jose-Redesign?node-id=0-1&t=iiDL1wpJuxxxff1C-1" },
    ],
    galleries: [
      {
        label: "Website",
        images: [
          { url: nsjbiHome,       caption: "Home — 01/06" },
          { url: nsjbiPopup,      caption: "40th Anniversary Pop-up — 02/06" },
          { url: nsjbiAbout,      caption: "About — 03/06" },
          { url: nsjbiVideo,      caption: "Video Showcase — 04/06" },
          { url: nsjbiProperties, caption: "Properties — 05/06" },
          { url: nsjbi4ph,        caption: "Property Detail — 06/06" },
        ],
      },
      {
        label: "Admin CMS",
        images: [
          { url: nsjbiAdminOverview, caption: "Admin Overview — 01/04" },
          { url: nsjbiAdminDash,     caption: "Admin Dashboard — 02/04" },
          { url: nsjbiAdminProps,    caption: "Property List — 03/04" },
          { url: nsjbiAdminVideo,    caption: "Add Video — 04/04" },
        ],
      },
    ],
  },
];

// Frames for the main-page film strip, mixed from all three shoots ("v:" = a video still)
const FILMSTRIP = [
  "photo-03", "lookbook-04", "v:BOWUpSQEzxQ", "photo-09", "lookbook-01", "photo-08",
  "v:R5vNwzwlkvI", "lookbook-07", "photo-12", "photo-10", "v:V0Xyr9BykLk", "lookbook-02",
  "photo-06", "lookbook-03", "v:Bxt_4MRqYbM", "photo-14", "lookbook-10", "v:Z8rJT9ooEYg",
];

function FilmStrip() {
  const frames = FILMSTRIP.map((key) => {
    if (key.startsWith("v:")) {
      const video = VIDEOS.find((v) => v.id === key.slice(2))!;
      return {
        key,
        src: `https://i.ytimg.com/vi/${video.id}/${video.thumb}.jpg`,
        alt: `Still from ${video.title}`,
        ratio: video.ratio,
        href: "/creative#video",
        isVideo: true,
      };
    }
    const photo = [...PHOTOGRAPHY, ...LOOKBOOK].find((p) => p.name === key)!;
    return {
      key,
      src: photoUrl(key, "sm"),
      alt: photo.alt,
      ratio: photo.w / photo.h,
      href: key.startsWith("photo") ? "/creative#photography" : "/creative#modeling",
      isVideo: false,
    };
  });

  return (
    <div className="filmstrip overflow-hidden bg-[#111]">
      {/* The frames run twice in a row so the loop is seamless; the copy is hidden from screen readers */}
      <div className="filmstrip-track flex w-max gap-2 pr-2 py-5">
        {[...frames, ...frames].map((frame, i) => {
          const copy = i >= frames.length;
          return (
            <a
              key={`${frame.key}-${i}`}
              href={frame.href}
              aria-hidden={copy || undefined}
              tabIndex={copy ? -1 : undefined}
              className="group relative block shrink-0 h-[120px] md:h-[180px] overflow-hidden bg-[#222]"
              style={{ aspectRatio: frame.ratio }}
            >
              <img
                src={frame.src}
                alt={copy ? "" : frame.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.04] transition-[opacity,transform] duration-500"
              />
              {frame.isVideo && (
                <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-[#fff] text-[#000]">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="6 4 20 12 6 20 6 4" />
                    </svg>
                  </span>
                </span>
              )}
            </a>
          );
        })}
      </div>
      <style>{`
        .filmstrip-track {
          animation: filmstrip 80s linear infinite;
          /* sprocket holes along the top and bottom edges, moving with the frames */
          background:
            repeating-linear-gradient(90deg, rgba(255,255,255,0.28) 0 12px, transparent 12px 28px) left 6px top 6px / 100% 8px repeat-x,
            repeating-linear-gradient(90deg, rgba(255,255,255,0.28) 0 12px, transparent 12px 28px) left 6px bottom 6px / 100% 8px repeat-x;
        }
        .filmstrip:hover .filmstrip-track { animation-play-state: paused; }
        @keyframes filmstrip { to { transform: translateX(-50%); } }
        @media (prefers-reduced-motion: reduce) {
          .filmstrip { overflow-x: auto; }
          .filmstrip-track { animation: none; }
        }
      `}</style>
    </div>
  );
}

function MargieleNumbers() {
  return (
    <div
      style={{ fontFamily: "'Courier Prime', monospace" }}
      className="text-[12px] tracking-widest text-black leading-[1.6] select-none"
    >
      {["0 1 2 3 4 5 6 7 8 9", "10 11 12 13 14 15 16 17", "18 19 20 21 22 23"].map((row, i) => (
        <div key={i}>{row}</div>
      ))}
    </div>
  );
}

function TickerBanner() {
  const fullText = TICKER_ITEMS.join("   ——   ") + "   ——   ";
  return (
    <div className="overflow-hidden border-t border-b border-black py-2 bg-black">
      <div
        className="flex whitespace-nowrap"
        style={{ animation: "ticker 40s linear infinite", fontFamily: "'Courier Prime', monospace" }}
      >
        {[...Array(3)].map((_, i) => (
          <span key={i} className="text-white text-[11px] tracking-[0.2em] uppercase mr-8">
            {fullText}
          </span>
        ))}
      </div>
      <style>{`@keyframes ticker { 0%{transform:translateX(0)} 100%{transform:translateX(-33.333%)} }`}</style>
    </div>
  );
}

type ExperienceGalleryProps = {
  galleries: Gallery[];
  links: { label: string; url: string }[];
};

function ExperienceGallery({ galleries, links }: ExperienceGalleryProps) {
  const [active, setActive] = useState(0);

  return (
    <div className="pt-8 border-t border-black/20">
      <div
        className="flex flex-wrap items-center justify-between gap-3 mb-3"
        style={{ fontFamily: "'Courier Prime', monospace" }}
      >
        <GalleryTabs galleries={galleries} active={active} onSelect={setActive} />
        {links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="text-[12px] tracking-[0.3em] uppercase hover:line-through"
          >
            {link.label} ↗
          </a>
        ))}
      </div>
      {/* key resets the slide index when switching tabs */}
      <ProjectCarousel key={active} images={galleries[active].images} aspect="aspect-video" />
    </div>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useDarkMode();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Coming back from the creative page (/#creative): jump to that section once it has rendered
  useEffect(() => {
    if (window.location.hash) document.querySelector(window.location.hash)?.scrollIntoView();
  }, []);

  return (
    <div
      className="bg-white text-black min-h-screen overflow-x-clip"
      style={{ fontFamily: "'Archivo', Arial, sans-serif" }}
    >
      <style>{DARK_CSS}</style>
      <NoiseOverlay />

      {/* NAV */}
      <nav
        className={`nav-unzoom fixed top-0 left-0 right-0 z-50 transition-all duration-300 before:content-[''] before:absolute before:inset-x-0 before:bottom-full before:h-screen before:bg-inherit ${
          scrolled || menuOpen ? "bg-white border-b border-black" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between gap-6 px-6 md:px-8 py-4 wide:px-[max(calc(4rem*var(--zoom)),calc((100%_-_1600px*var(--zoom))/2))]">
          <div style={{ fontFamily: "'Courier Prime', monospace" }} className="shrink-0 whitespace-nowrap text-[12px] tracking-[0.3em] uppercase">
            BJDP —{" "}
            <span style={{ textDecoration: "line-through", textDecorationThickness: "2px" }}>
              Portfolio
            </span>
          </div>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {["About","Experience","Projects","Creative","Skills","Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[12px] tracking-[0.25em] uppercase hover:line-through transition-all"
                style={{ fontFamily: "'Courier Prime', monospace" }}
              >
                {item}
              </a>
            ))}
            <button
              onClick={() => setIsDark((d) => !d)}
              className="text-[12px] tracking-[0.25em] uppercase border border-current px-3 py-1 hover:bg-black hover:text-white transition-all"
              style={{ fontFamily: "'Courier Prime', monospace" }}
              aria-label="Toggle dark mode"
            >
              {isDark ? "LIGHT" : "DARK"}
            </button>
          </div>

          {/* Phone and tablet: dark mode toggle + hamburger */}
          <div className="lg:hidden flex items-center gap-3">
            <DarkToggleIcon isDark={isDark} onToggle={() => setIsDark((d) => !d)} />
            <button
              className="flex flex-col gap-1.5 p-1"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-px bg-black transition-all ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block w-5 h-px bg-black transition-all ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-px bg-black transition-all ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {menuOpen && (
          <div className="lg:hidden border-t border-black bg-white px-6 py-4 flex flex-col gap-4">
            {["About","Experience","Projects","Creative","Skills","Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-[11px] tracking-[0.3em] uppercase hover:line-through"
                style={{ fontFamily: "'Courier Prime', monospace" }}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-[calc(100vh/var(--zoom))] supports-[min-height:100svh]:min-h-[calc(100svh/var(--zoom))] flex flex-col justify-end gutter pb-12 md:pb-16 pt-32 overflow-hidden">
        <div className="hidden md:block absolute top-24 right-16 wide:right-[max(4rem,calc((100%_-_1600px)/2))]">
          <MargieleNumbers />
        </div>
        <div className="relative z-10">
          <span
            className="block text-[14vw] md:text-[min(12vw,207px)] font-black leading-[0.88] tracking-[-0.04em] uppercase"
            style={{ fontFamily: "'Archivo', Arial, sans-serif" }}
          >
            BIEN
          </span>
          <span
            className="block text-[14vw] md:text-[min(12vw,207px)] font-black leading-[0.88] tracking-[-0.04em] uppercase"
            style={{ fontFamily: "'Archivo', Arial, sans-serif" }}
          >
            JERIC
          </span>
          <span
            className="block text-[14vw] md:text-[min(12vw,207px)] font-black leading-[0.88] tracking-[-0.04em] uppercase whitespace-nowrap"
            style={{ fontFamily: "'Archivo', Arial, sans-serif" }}
          >
            DELA PAZ
          </span>
        </div>

        <div className="relative z-10 mt-8 md:mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p
              className="text-2xl md:text-4xl font-black uppercase leading-tight tracking-tight"
              style={{ fontFamily: "'Archivo', Arial, sans-serif" }}
            >
              Web Designer & Developer
            </p>
            <p
              className="mt-2 text-base md:text-lg leading-snug max-w-xl"
              style={{ fontFamily: "'EB Garamond', Georgia, serif" }}
            >
              Computer Science student at PUP Manila, based in Marikina City. Open to web design and development roles.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row sm:flex-wrap gap-3">
              <a
                href="#experience"
                className="inline-flex items-center justify-center min-h-[44px] border border-black bg-black text-white px-6 text-[11px] tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-colors"
                style={{ fontFamily: "'Courier Prime', monospace" }}
              >
                View my work →
              </a>
              <a
                href={CV_FILE}
                download="Dela-Paz-Resume.pdf"
                className="inline-flex items-center justify-center min-h-[44px] border border-black px-6 text-[11px] tracking-[0.3em] uppercase hover:bg-black hover:text-white transition-colors"
                style={{ fontFamily: "'Courier Prime', monospace" }}
              >
                Download CV ↓
              </a>
            </div>
          </div>
          <p
            className="max-w-sm text-sm md:text-lg leading-tight md:text-right"
            style={{ fontFamily: "'EB Garamond', Georgia, serif", fontStyle: "italic" }}
          >
            "Digging through the static of the system to find the soul of the interface."
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-black" />
      </section>

      {/* ABOUT */}
      <section id="about" className="relative gutter py-16 md:py-24 border-b border-black">
        <div className="mb-12 flex items-center gap-4" style={{ fontFamily: "'Courier Prime', monospace" }}>
          <span className="text-[12px] tracking-[0.4em] uppercase text-black/40">01</span>
          <div className="flex-1 h-px bg-black/20" />
          <span className="text-[12px] tracking-[0.4em] uppercase">About</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_220px] lg:grid-cols-[1fr_280px] gap-12 md:gap-16 items-start">
          <div className="min-w-0">
            <h2
              className="text-4xl md:text-5xl font-black uppercase leading-tight tracking-tight mb-8"
              style={{ fontFamily: "'Archivo', Arial, sans-serif" }}
            >
              Designer<br />
              <span style={{ fontFamily: "'EB Garamond', Georgia, serif", fontWeight: 400, fontStyle: "italic" }}>
                who codes.
              </span>
            </h2>
            <p
              className="text-base md:text-lg leading-relaxed max-w-xl"
              style={{ fontFamily: "'EB Garamond', Georgia, serif" }}
            >
              Web designer and developer studying Computer Science, with a strong foundation in UI/UX design, front-end development with React and Tailwind, databases and cybersecurity. Experienced in building decentralized applications, AI-driven recommendation systems and secure network architectures. A background in photography and video shapes how I design: functional, user-centric systems that look as good as they work.
            </p>
            <div className="mt-12 flex flex-col gap-1" style={{ fontFamily: "'Courier Prime', monospace" }}>
              <div className="flex gap-4 text-[11px] tracking-widest uppercase">
                <span className="text-black/40 shrink-0 w-20">Location</span>
                <span>Marikina City</span>
              </div>
              <div className="flex gap-4 text-[11px] tracking-widest uppercase">
                <span className="text-black/40 shrink-0 w-20">Status</span>
                <span>BSCS 4-1N — Class President</span>
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-[260px] md:max-w-none">
            <div className="border border-black overflow-hidden aspect-[3/4] bg-neutral-200">
              <img
                src={portrait}
                alt="Bien Jeric Dela Paz"
                className="w-full h-full object-cover"
                style={{ filter: "grayscale(100%) contrast(1.15)" }}
              />
            </div>
            <div
              className="absolute -bottom-6 left-0 md:-left-2 text-[11px] tracking-[0.3em] uppercase"
              style={{ fontFamily: "'Courier Prime', monospace" }}
            >
              Fig. 01 — Subject
            </div>
            <div
              className="absolute top-3 right-3 text-[11px] tracking-widest text-[#fff] mix-blend-difference"
              style={{ fontFamily: "'Courier Prime', monospace" }}
            >
              {MARGIELA_NUMBERS.slice(0, 6).join(" ")}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="relative gutter py-16 md:py-24 border-b border-black">
        <div className="mb-12 flex items-center gap-4" style={{ fontFamily: "'Courier Prime', monospace" }}>
          <span className="text-[12px] tracking-[0.4em] uppercase text-black/40">02</span>
          <div className="flex-1 h-px bg-black/20" />
          <span className="text-[12px] tracking-[0.4em] uppercase">Experience</span>
        </div>

        {EXPERIENCE.map((job) => (
          <article key={job.company} className="grid grid-cols-1 md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] gap-6 md:gap-16">
            <div>
              <p
                className="text-5xl md:text-6xl font-black leading-none tracking-tight"
                style={{ fontFamily: "'Archivo', Arial, sans-serif" }}
              >
                {job.year}
              </p>
              <p
                className="mt-3 text-[11px] tracking-[0.3em] uppercase"
                style={{ fontFamily: "'Courier Prime', monospace" }}
              >
                Internship
              </p>
            </div>

            <div className="min-w-0">
              <h3
                className="text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-tight tracking-tight break-words"
                style={{ fontFamily: "'Archivo', Arial, sans-serif" }}
              >
                {job.role}
              </h3>
              <p
                className="mt-2 text-lg md:text-xl text-black/60"
                style={{ fontFamily: "'EB Garamond', Georgia, serif", fontStyle: "italic" }}
              >
                {job.company} ({job.companyNote})
              </p>

              <ul
                className="mt-6 max-w-3xl flex flex-col gap-3 text-base md:text-lg leading-relaxed list-disc pl-5 marker:text-[#888]"
                style={{ fontFamily: "'EB Garamond', Georgia, serif" }}
              >
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-1.5">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] tracking-[0.15em] uppercase px-3 py-1 border border-black/30 text-black/60"
                    style={{ fontFamily: "'Courier Prime', monospace" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="md:col-span-2 min-w-0">
              <ExperienceGallery galleries={job.galleries} links={job.links} />
            </div>
          </article>
        ))}
      </section>

      {/* PROJECTS */}
      <section id="projects" className="border-b border-black">
        <div
          className="gutter py-8 flex items-center gap-4"
          style={{ fontFamily: "'Courier Prime', monospace" }}
        >
          <span className="text-[12px] tracking-[0.4em] uppercase text-black/40">03</span>
          <div className="flex-1 min-w-4 h-px bg-black/20" />
          <span className="text-[12px] tracking-[0.2em] sm:tracking-[0.4em] uppercase text-right">Projects — Selected Works</span>
        </div>

        {/* Editorial label strip */}
        <div className="border-t border-b border-black gutter py-2 bg-black">
          <p
            className="text-[9px] tracking-[0.3em] sm:tracking-[0.5em] leading-relaxed uppercase text-white"
            style={{ fontFamily: "'Courier Prime', monospace" }}
          >
            {MARGIELA_NUMBERS.join("  ")} — Ten Projects, Ten Modules
          </p>
        </div>

        {/* Only the first four spreads here; the rest live on the /projects page */}
        {PROJECTS.slice(0, HOME_PROJECTS).map((project) => (
          <ProjectModule key={project.id} project={project} />
        ))}

        <div className="gutter py-10 md:py-14 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <p
            className="text-lg md:text-xl text-black/60"
            style={{ fontFamily: "'EB Garamond', Georgia, serif", fontStyle: "italic" }}
          >
            {PROJECTS.length + STATIC_PROJECTS.length - HOME_PROJECTS} more projects, from {PROJECTS[HOME_PROJECTS].name} to {STATIC_PROJECTS[STATIC_PROJECTS.length - 1].name}
          </p>
          <a
            href="/projects"
            className="shrink-0 self-start sm:self-auto inline-flex items-center gap-3 border border-black px-6 py-3 text-[12px] tracking-[0.35em] uppercase hover:bg-black hover:text-white transition-colors"
            style={{ fontFamily: "'Courier Prime', monospace" }}
          >
            View all projects →
          </a>
        </div>
      </section>

      {/* BEHIND THE CAMERA — a preview; the full work lives on the /creative page */}
      <section
        id="creative"
        data-keep-dark=""
        className="relative pt-16 md:pt-20 pb-10 md:pb-14 bg-black text-white overflow-hidden"
      >
        {/* Only the text sits in the gutter; the film strip runs edge to edge */}
        <div className="gutter">
          <div className="mb-10 md:mb-12 flex items-center gap-4" style={{ fontFamily: "'Courier Prime', monospace" }}>
            <span className="text-[12px] tracking-[0.4em] uppercase text-white/30">04</span>
            <div className="flex-1 h-px bg-white/20" />
            <span className="text-[12px] tracking-[0.4em] uppercase text-white">Creative</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-12 mb-10 md:mb-12">
            <div className="max-w-2xl">
              <h2
                className="text-4xl md:text-5xl font-black uppercase leading-tight tracking-tight"
                style={{ fontFamily: "'Archivo', Arial, sans-serif" }}
              >
                Behind &{" "}<br className="sm:hidden" />In Front <span className="sm:hidden">of<br /></span><br className="hidden sm:inline" /><span className="hidden sm:inline">of </span>the Camera
              </h2>
              <p
                className="mt-2 text-lg md:text-xl text-white/60"
                style={{ fontFamily: "'EB Garamond', Georgia, serif", fontStyle: "italic" }}
              >
                {PHOTOGRAPHY.length} photos · {VIDEOS.length} videos · {LOOKBOOK.length} modeling shots
              </p>
              <p
                className="mt-4 text-base md:text-lg leading-relaxed text-white/80"
                style={{ fontFamily: "'EB Garamond', Georgia, serif" }}
              >
                Photography taught me composition and light, video taught me pacing, and modeling taught me how a
                brand presents itself. I bring that same eye to every interface I design.
              </p>
            </div>
            <a
              href="/creative"
              className="shrink-0 self-start md:self-auto inline-flex items-center gap-3 border border-white px-6 py-3 text-[12px] tracking-[0.35em] uppercase hover:bg-[#fff] hover:text-[#000] transition-colors"
              style={{ fontFamily: "'Courier Prime', monospace" }}
            >
              View all creative work →
            </a>
          </div>
        </div>

        <FilmStrip />

        <p
          className="gutter mt-4 text-[11px] tracking-[0.3em] uppercase text-white/40"
          style={{ fontFamily: "'Courier Prime', monospace" }}
        >
          Tap a frame to open it
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="relative gutter py-16 md:py-24 border-b border-black">
        <div className="mb-12 flex items-center gap-4" style={{ fontFamily: "'Courier Prime', monospace" }}>
          <span className="text-[12px] tracking-[0.4em] uppercase text-black/40">05</span>
          <div className="flex-1 h-px bg-black/20" />
          <span className="text-[12px] tracking-[0.4em] uppercase">Competencies</span>
        </div>

        <div className="border-t border-black">
          {SKILLS.map((skill, i) => (
            <div
              key={skill.category}
              className="grid grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-[360px_1fr] gap-2 md:gap-8 py-5 md:py-6 border-b border-black/20"
            >
              <div
                className="flex items-baseline gap-4 text-[12px] tracking-[0.3em] uppercase"
                style={{ fontFamily: "'Courier Prime', monospace" }}
              >
                <span className="text-black/40">{String(i).padStart(2, "0")}</span>
                <span>{skill.category}</span>
              </div>
              <p
                className="min-w-0 text-lg md:text-xl leading-relaxed"
                style={{ fontFamily: "'EB Garamond', Georgia, serif" }}
              >
                {skill.items.map((item, j) => (
                  <span key={item}>
                    <span className={TOP_SKILLS.has(item) ? "font-bold" : undefined}>{item}</span>
                    {/* Non-breaking space keeps the dot with its item; the space after it is the wrap point */}
                    {j < skill.items.length - 1 && <>&nbsp;<span className="text-black/30 mx-1">·</span> </>}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION & CERTIFICATIONS */}
      <section id="education" className="relative gutter py-16 md:py-24 border-b border-black">
        <div className="mb-12 flex items-center gap-4" style={{ fontFamily: "'Courier Prime', monospace" }}>
          <span className="text-[12px] tracking-[0.4em] uppercase text-black/40">06</span>
          <div className="flex-1 h-px bg-black/20" />
          <span className="text-[12px] tracking-[0.4em] uppercase">Education & Credentials</span>
        </div>

        <div>
          <div
            className="text-[11px] tracking-[0.4em] uppercase text-black/40 mb-6 border-b border-black pb-3"
            style={{ fontFamily: "'Courier Prime', monospace" }}
          >
            Academic Record
          </div>
          <p
            className="text-[12px] tracking-[0.3em] uppercase mb-3"
            style={{ fontFamily: "'Courier Prime', monospace" }}
          >
            Polytechnic University of the Philippines<span className="text-black/30 mx-2">·</span>Manila
          </p>
          <p
            className="max-w-3xl text-3xl md:text-4xl font-black uppercase tracking-tight leading-[0.95]"
            style={{ fontFamily: "'Archivo', Arial, sans-serif" }}
          >
            Bachelor of Science in Computer Science
          </p>
        </div>

        <div className="mt-16">
          <div
            className="text-[11px] tracking-[0.4em] uppercase text-black/40 mb-2 border-b border-black pb-3"
            style={{ fontFamily: "'Courier Prime', monospace" }}
          >
            Organizations
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 [&>*]:min-w-0">
            {[
              { role: "Media Head", org: "JBECP PUP Manila" },
              { role: "Documentation & Secretariat", org: "ASCII" },
              { role: "Operations Committee / Data Camp Scholar", org: "Google Developer Groups On Campus PUP" },
              { role: "Cyber Security Member", org: "AWS Cloud Club PUP" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 border-b border-black/20 py-4">
                <span
                  className="text-[11px] tracking-widest text-black/40 mt-1 shrink-0"
                  style={{ fontFamily: "'Courier Prime', monospace" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-base font-bold uppercase tracking-wide leading-tight" style={{ fontFamily: "'Archivo', Arial, sans-serif" }}>
                    {item.org}
                  </p>
                  <p className="text-sm mt-0.5 text-black/50" style={{ fontFamily: "'EB Garamond', Georgia, serif", fontStyle: "italic" }}>
                    {item.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <div
            className="text-[11px] tracking-[0.4em] uppercase text-black/40 mb-2 border-b border-black pb-3"
            style={{ fontFamily: "'Courier Prime', monospace" }}
          >
            Certifications
          </div>
          {CERTS.map((cert, i) => (
            <div
              key={cert.name}
              className="grid grid-cols-[auto_1fr] sm:grid-cols-[auto_1fr_auto] items-baseline gap-x-4 gap-y-1 border-b border-black/20 py-4"
            >
              <span
                className="text-[11px] tracking-widest text-black/40"
                style={{ fontFamily: "'Courier Prime', monospace" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="min-w-0 text-base font-bold uppercase tracking-wide leading-tight" style={{ fontFamily: "'Archivo', Arial, sans-serif" }}>
                {cert.name}
              </p>
              <span
                className="col-start-2 sm:col-start-auto text-[11px] tracking-[0.3em] uppercase text-black/50"
                style={{ fontFamily: "'Courier Prime', monospace" }}
              >
                {cert.issuer}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        data-keep-dark=""
        className="relative gutter pt-16 md:pt-24 pb-12 md:pb-16 bg-black text-white overflow-hidden"
      >
        <div
          className="absolute top-8 right-6 md:right-8 text-white/5 text-[72px] md:text-[120px] font-black leading-none select-none pointer-events-none"
          style={{ fontFamily: "'Archivo', Arial, sans-serif" }}
        >
          07
        </div>

        <div className="mb-16 flex items-center gap-4" style={{ fontFamily: "'Courier Prime', monospace" }}>
          <span className="text-[12px] tracking-[0.4em] uppercase text-white/30">07</span>
          <div className="flex-1 h-px bg-white/20" />
          <span className="text-[12px] tracking-[0.4em] uppercase text-white">Contact</span>
        </div>

        {/* Primary emails */}
        <div className="mb-12 overflow-hidden flex flex-col gap-2">
          <a
            href="mailto:bienjericdelapaz9@gmail.com"
            className="block text-[4.4vw] sm:text-[3vw] md:text-[min(2.2vw,38px)] font-black uppercase leading-tight tracking-tight hover:text-white/60 transition-colors break-all"
            style={{ fontFamily: "'Archivo', Arial, sans-serif" }}
          >
            bienjericdelapaz9@gmail.com
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 border-t border-white/20 pt-8 md:pt-12 [&>*]:min-w-0 [&_a]:break-all">
          <div>
            <div
              className="text-[11px] tracking-[0.4em] uppercase text-white/30 mb-2"
              style={{ fontFamily: "'Courier Prime', monospace" }}
            >
              GitHub
            </div>
            <a
              href="https://github.com/biendelapaz02"
              target="_blank"
              rel="noreferrer"
              className="text-lg hover:text-white/60 transition-colors"
              style={{ fontFamily: "'EB Garamond', Georgia, serif" }}
            >
              github.com/biendelapaz02
            </a>
          </div>
          <div>
            <div
              className="text-[11px] tracking-[0.4em] uppercase text-white/30 mb-2"
              style={{ fontFamily: "'Courier Prime', monospace" }}
            >
              LinkedIn
            </div>
            <a
              href="https://linkedin.com/in/bien-jeric-dela-paz-267986372"
              target="_blank"
              rel="noreferrer"
              className="text-lg hover:text-white/60 transition-colors"
              style={{ fontFamily: "'EB Garamond', Georgia, serif" }}
            >
              linkedin.com/in/bien-jeric-dela-paz
            </a>
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="min-w-0">
              <div
                className="text-[11px] tracking-[0.4em] uppercase text-white/30 mb-2"
                style={{ fontFamily: "'Courier Prime', monospace" }}
              >
                Credly
              </div>
              <a
                href="https://www.credly.com/users/bien-jeric-dela-paz"
                target="_blank"
                rel="noreferrer"
                className="text-lg hover:text-white/60 transition-colors flex items-center gap-2"
                style={{ fontFamily: "'EB Garamond', Georgia, serif" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 opacity-60">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4a8 8 0 1 1 0 16A8 8 0 0 1 12 4zm0 2a6 6 0 1 0 0 12A6 6 0 0 0 12 6zm0 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"/>
                </svg>
                credly.com/bien-jeric-dela-paz
              </a>
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="shrink-0 w-10 h-10 flex items-center justify-center border border-[#fff] bg-[#fff] text-[#000] hover:bg-transparent hover:text-[#fff] transition-all"
              aria-label="Back to top"
              title="Back to top"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="19" x2="12" y2="5" />
                <polyline points="5 12 12 5 19 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-12 md:mt-24 flex items-end justify-between gap-6">
          <div
            className="hidden lg:block text-[9px] tracking-[0.4em] uppercase text-white/20"
            style={{ fontFamily: "'Courier Prime', monospace" }}
          >
            {MARGIELA_NUMBERS.join("  ")}
          </div>
          <div
            className="text-[11px] tracking-[0.3em] text-white/20"
            style={{ fontFamily: "'Courier Prime', monospace" }}
          >
            © 2026 Bien Jeric Dela Paz. All rights reserved.
          </div>
        </div>
      </section>
    </div>
  );
}
