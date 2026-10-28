// Projects and the components that show them, shared by the main page and /projects
import { useRef, useState } from "react";
import { Lightbox } from "./shared";

// — LumenID screenshots
import lumenAdminIssuer from "@/assets/ADMIN_ISSUER.webp";
import lumenHome        from "@/assets/lumenhome.webp";
import lumenUserDash    from "@/assets/USER_DASH.webp";
import lumenUserVault   from "@/assets/USER_VAULT.webp";
import lumenUser        from "@/assets/USER.webp";
import lumenVerify      from "@/assets/verify.webp";

// — SentiNet screenshots
import sentiAdminDashboard from "@/assets/Sentinet/admin/SENTINET ADMIN DASHBOARD.webp";
import sentiAdminAnalytics from "@/assets/Sentinet/admin/SENTINET ADMIN ANALYTICS.webp";
import sentiAdminReports   from "@/assets/Sentinet/admin/SENTINET ADMIN REPORTS.webp";
import sentiAdminSop       from "@/assets/Sentinet/admin/SENTINET ADMIN SOP.webp";
import sentiAgentDashboard from "@/assets/Sentinet/agent/SENTINET AGENT DASHBOARD.webp";
import sentiTrayApp        from "@/assets/Sentinet/agent/SENTINET TRAY APP.webp";
import sentiUserGuide      from "@/assets/Sentinet/agent/SENTINET USER GUIDE.webp";

// — CarPayLater screenshots
import bpiHome from "@/assets/homebpi.webp";

// — Camarines Norte screenshots
import camLanding  from "@/assets/Camnorte/LANDING PAGE.webp";
import camAbout    from "@/assets/Camnorte/ABOUT.webp";
import camBeaches  from "@/assets/Camnorte/EXPLORE BEACHES.webp";
import camFestival from "@/assets/Camnorte/EXPLORE FESTIVAL.webp";
import camFood     from "@/assets/Camnorte/EXPLORE FOOD.webp";
import camPlanTrip from "@/assets/Camnorte/PLAN TRIP.webp";
import camBookNow  from "@/assets/Camnorte/BOOK NOW.webp";
import camMyTrips  from "@/assets/Camnorte/MY TRIPS.webp";

// — Chef MAI screenshots
import chefKitchen  from "@/assets/KITCHEN_MAIN_BUTTOM.webp";
import chefHome     from "@/assets/CHEFMAIMAI.webp";
import chefCook     from "@/assets/COOKN.webp";
import chefDiscover from "@/assets/homeche.webp";
import chefPopup    from "@/assets/POPUP.webp";

// — Cash Catalyst screenshots
import cashCatalyst1 from "@/assets/CASH_CATALYST_2.webp";
import cashCatalyst2 from "@/assets/CASH_CATALYST_SS_1.webp";
import cashCatalyst3 from "@/assets/MONEYCASH.webp";

type Project = {
  id: string;
  index: string;
  name: string;
  subtitle: string;
  note: string | null;
  github: string | null;
  points: string[];
  tags: string[];
  images: { url: string; caption: string }[];
  // optional tabbed galleries; replaces `images` in the carousel when set
  galleries?: Gallery[];
  flip: boolean;
};

export type Gallery = { label: string; images: Project["images"] };

export const PROJECTS: Project[] = [
  {
    id: "camarinasnorte",
    index: "01",
    name: "Camarines Norte Tourism Portal",
    github: "https://github.com/ethanidk04/CamarinesNorteWebsite",
    subtitle: "Comprehensive UI Layouts & Custom Trip Planning",
    note: null,
    points: [
      "Designed comprehensive user interface layouts, wireframes, and responsive screen mockups in Figma for a provincial tourism guide and booking portal.",
      "Designed structured, visual component cards highlighting regional food heritage, annual festivals, and tourist spots.",
      "Designed clear user navigational flows for registration, custom trip planning, and mock booking forms.",
      "Kept one consistent visual system of type, color, and photography across the Home, Destinations, Festivals, Plan Your Trip, and Contact pages.",
    ],
    tags: ["UI Layouts","Visual Component Cards","Trip Planning Flows","Tourism UX"],
    images: [
      { url: camLanding,  caption: "Landing Page — 01/08" },
      { url: camAbout,    caption: "About — 02/08" },
      { url: camBeaches,  caption: "Explore Beaches — 03/08" },
      { url: camFestival, caption: "Explore Festivals — 04/08" },
      { url: camFood,     caption: "Explore Food — 05/08" },
      { url: camPlanTrip, caption: "Plan Your Trip — 06/08" },
      { url: camBookNow,  caption: "Book Now — 07/08" },
      { url: camMyTrips,  caption: "My Trips — 08/08" },
    ],
    flip: false,
  },
  {
    id: "sentinet",
    index: "02",
    name: "SentiNet",
    github: "https://github.com/andreistvn/senti",
    subtitle: "Decentralized Intrusion Detection & Prevention System",
    note: null,
    points: [
      "Designed a decentralized, endpoint-based IDPS architecture to actively defend against public Wi-Fi security threats.",
      "Built a multi-tiered defense pipeline incorporating behavioral machine learning and a permissioned blockchain layer.",
      "Designed and implemented responsive administrative and agent web dashboards using React and Tailwind CSS.",
      "Built a payload-blind packet monitoring framework strictly complying with the Data Privacy Act of 2012.",
    ],
    tags: ["IDPS Architecture","Behavioral ML","Permissioned Blockchain","React","Tailwind","Scapy"],
    images: [],
    galleries: [
      {
        label: "Admin",
        images: [
          { url: sentiAdminDashboard, caption: "Admin Dashboard — 01/04" },
          { url: sentiAdminAnalytics, caption: "Analytics — 02/04" },
          { url: sentiAdminReports,   caption: "Reports — 03/04" },
          { url: sentiAdminSop,       caption: "SOP — 04/04" },
        ],
      },
      {
        label: "Agent",
        images: [
          { url: sentiAgentDashboard, caption: "Agent Dashboard — 01/03" },
          { url: sentiUserGuide,      caption: "User Guide — 02/03" },
          { url: sentiTrayApp,        caption: "Tray App — 03/03" },
        ],
      },
    ],
    flip: true,
  },
  {
    id: "chefmai",
    index: "03",
    name: "Chef MAI",
    github: "https://github.com/aesrch/chefMAI",
    subtitle: "AI-Driven Recipe Matching Web Application",
    note: null,
    points: [
      "Designed and built the user interface for an AI-driven recipe matching web application using Figma and VS Code.",
      "Built interactive user flows tracking ingredient cataloging via text inputs and camera-based image capture.",
      "Designed clean interface layouts displaying recipe outputs, constraints, difficulties, and dynamic substitutes.",
      "Mapped the full journey from discovering recipes to a step-by-step cooking mode, with recipe detail pop-ups in between.",
    ],
    tags: ["Figma","Interactive User Flows","AI Recommendation","VS Code","Web UI"],
    images: [
      { url: chefHome,    caption: "Landing — 01/05" },
      { url: chefDiscover,caption: "Discover — 02/05" },
      { url: chefKitchen, caption: "Kitchen — 03/05" },
      { url: chefPopup,   caption: "Recipe Detail — 04/05" },
      { url: chefCook,    caption: "Cooking Mode — 05/05" },
    ],
    flip: false,
  },
  {
    id: "cashcatalyst",
    index: "04",
    name: "Cash Catalyst",
    github: "https://github.com/Sky1sBloo/cash-catalysts",
    subtitle: "Gamified Finance Tracker",
    note: "2nd Place — Mini Hackathon",
    points: [
      "Designed UI screen layouts, prototypes, and structured graphical assets inside Figma for an intuitive user experience.",
      "Built the native graphic interface using JavaFX Scene Builder to guarantee smooth runtime deployment.",
      "Turned expense tracking into a game loop, with a game world, a transaction log, and trade chests that reward users for logging their spending.",
      "Won 2nd place at a mini hackathon with a working JavaFX prototype.",
    ],
    tags: ["UI Screen Layouts","JavaFX Scene Builder","Gamification","Finance UX"],
    images: [
      { url: cashCatalyst1, caption: "Game World — 01/03" },
      { url: cashCatalyst2, caption: "Transactions — 02/03" },
      { url: cashCatalyst3, caption: "Trade Chests — 03/03" },
    ],
    flip: true,
  },
  {
    id: "lumenid",
    index: "05",
    name: "LumenID",
    github: "https://github.com/Oumazshin/LumenID",
    subtitle: "Decentralized Identity & Verifiable Credential Platform",
    note: "Polkadot Solidity Hackathon",
    points: [
      "Designed the UI/UX architecture, wallet interfaces, and dashboard layouts for a decentralized identity network.",
      "Built accessible frontend disclosure interaction loops utilizing secure, time-bounded QR codes and links.",
      "Designed separate experiences for holders and issuers: a user dashboard and credential vault, and an admin panel for issuing credentials.",
      "Designed the verification and profile setup screens so a credential can be checked and shared in a few clear steps, built for the Polkadot Solidity Hackathon.",
    ],
    tags: ["UI/UX Architecture","Wallet Interfaces","Accessible Frontend","Polkadot","Solidity"],
    images: [
      { url: lumenHome,        caption: "Landing — 01/06" },
      { url: lumenUserDash,    caption: "User Dashboard — 02/06" },
      { url: lumenUserVault,   caption: "User Vault — 03/06" },
      { url: lumenVerify,      caption: "Verified Credentials — 04/06" },
      { url: lumenAdminIssuer, caption: "Admin Issuer — 05/06" },
      { url: lumenUser,        caption: "Profile Setup — 06/06" },
    ],
    flip: false,
  },
  {
    id: "carpaylater",
    index: "06",
    name: "CarPayLater",
    github: "https://github.com/controlbackspace/Auto-Loan-Team-5",
    subtitle: "BPI Auto Loan-Inspired UI & MySQL Database Integration",
    note: null,
    points: [
      "Designed a BPI Auto Loan-inspired interface for a vehicle financing platform.",
      "Mapped complex amortization logic onto clean screens: loan calculator flows, repayment dashboards, and approval status trackers.",
      "Modeled the MySQL relational schema behind loan applications and repayments, applying ERD and normalization.",
      "Connected the interface to the MySQL database so every screen reflects live loan and payment records.",
    ],
    tags: ["BPI Auto Loan UI","MySQL Integration","Loan Calculator","Database Design","Finance"],
    images: [
      { url: bpiHome, caption: "Landing Page — 01/01" },
    ],
    flip: true,
  },
];

type StaticProject = {
  index: string;
  name: string;
  subtitle: string;
  note: string | null;
  github: string | null;
  links?: { label: string; url: string }[];
  points: string[];
  tags: string[];
};

export const STATIC_PROJECTS: StaticProject[] = [
  {
    index: "07",
    name: "Salapeace",
    subtitle: "Decision-Support Mobile Application for Student Budget Management",
    note: null,
    github: null,
    links: [
      { label: "View on Figma", url: "https://www.figma.com/design/OQX6tLKkxcBdmbQRte5aCR/HCI-PROJECT?node-id=0-1&p=f&t=vMkUUFMmeOaraqPY-0" },
      { label: "View Wireframe", url: "https://www.figma.com/design/I0s83eIU29rztBdFRgV8zx/WIREFRAME?node-id=0-1&p=f&t=D11yGi84yP6RHaLB-0" },
    ],
    points: [
      "Designed the UI/UX architecture and interactive prototypes in Figma for a mobile app that helps students manage fixed daily allowances.",
      "Applied a \"Transport First\" design logic with background optimization to reduce cognitive load and decision fatigue during budget allocation.",
      "Developed low-fidelity to high-fidelity wireframes with real-time feedforward, satisfaction slider interactions, and strict error prevention controls.",
      "Authored the comprehensive HCI report documenting the research, design decisions, and usability evaluation.",
    ],
    tags: ["Figma","UI/UX Architecture","HCI Report","Wireframing","Prototyping","Feedforward Mechanisms","Mobile UX"],
  },
  {
    index: "08",
    name: "WattWise",
    subtitle: "Household Energy Optimization",
    note: null,
    github: "https://github.com/Shwarmanism/Appliances-Scheduler",
    points: [
      "Designed the UI/UX architecture in Figma for a web app that helps households monitor appliance usage, estimate monthly bills, and get energy-saving tips.",
      "Structured the visual user flows for the optimization dashboard, consumption calculator, and smart scheduling modules.",
      "Presented algorithm results in plain screens: Dijkstra's Algorithm for Peak/Off-Peak schedules, 0/1 Knapsack for appliance combinations within a daily limit, and Insertion Sort for ranking by consumption.",
      "Worked against a Python and Flask backend so each screen matches the data the optimizer returns.",
    ],
    tags: ["Figma","UI/UX Architecture","Dijkstra's Algorithm","0/1 Knapsack","Python Flask","Dashboard Design"],
  },
  {
    index: "09",
    name: "MarikinAlert",
    subtitle: "Hyper-Localized Disaster Reporting & Response Application",
    note: null,
    github: "https://github.com/controlbackspace/MarikinAlert",
    points: [
      "Developed an internet-independent disaster reporting and response app for Marikina City, built for when telecom infrastructure collapses during a crisis.",
      "Built an offline reporting architecture on a distributed network of local Wi-Fi nodes that mirrors data across admin nodes in real time, forming a city-wide intranet.",
      "Built an AI-driven triage engine that parses natural language and unstructured \"Taglish\" keywords to categorize and prioritize life-threatening reports.",
      "Designed a color-coded emergency dispatch dashboard so responders can see the most critical situations first.",
    ],
    tags: ["Offline Architecture","Distributed Wi-Fi Nodes","AI Triage Engine","NLP","Emergency UX","Marikina City"],
  },
  {
    index: "10",
    name: "Lex-C",
    subtitle: "Custom Programming Language Architecture",
    note: null,
    github: "https://github.com/kenz4nity/LEX-C_Programming_Language",
    points: [
      "Designed and specified a free-field programming language that fuses the type-safe foundations of C and Java with modern syntactic conveniences.",
      "Authored the full lexical specification and context-free grammar parsing rules.",
      "Replaced dense bracing symbols with descriptive keywords like \"what if\", \"then do\", and \"continue until\" to lower cognitive load and prevent syntax errors.",
      "Defined a custom double-percent (%%) comment tokenization standard for the compiler.",
    ],
    tags: ["Language Design","Lexical Specification","Context-Free Grammar","Compiler Tokenization","C","Java"],
  },
];

// Compact card for the projects without screenshots: the bullets stay one tap away
export function StaticProjectCard({ project }: { project: StaticProject }) {
  return (
    <article className="min-w-0 border-t border-black/20 md:odd:border-r md:odd:border-r-black p-6 md:p-8 lg:p-12">
      <span
        className="block text-[11px] tracking-[0.4em] uppercase text-black/40 mb-3"
        style={{ fontFamily: "'Courier Prime', monospace" }}
      >
        {project.index}
      </span>
      <h3
        className="text-2xl md:text-3xl font-black uppercase leading-tight tracking-tight break-words"
        style={{ fontFamily: "'Archivo', Arial, sans-serif" }}
      >
        {project.name}
      </h3>
      <p
        className="mt-1 text-lg leading-snug text-black/60"
        style={{ fontFamily: "'EB Garamond', Georgia, serif", fontStyle: "italic" }}
      >
        {project.subtitle}
      </p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] tracking-[0.15em] uppercase px-3 py-1 border border-black/30 text-black/60"
            style={{ fontFamily: "'Courier Prime', monospace" }}
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6">
        <div className="flex flex-wrap gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-black px-4 py-1.5 text-[12px] tracking-[0.3em] uppercase hover:bg-black hover:text-white transition-all"
              style={{ fontFamily: "'Courier Prime', monospace" }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              View on GitHub
            </a>
          )}
          {project.links?.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-black px-4 py-1.5 text-[12px] tracking-[0.3em] uppercase hover:bg-black hover:text-white transition-all"
              style={{ fontFamily: "'Courier Prime', monospace" }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <details className="group mt-5">
        <summary
          className="w-fit cursor-pointer list-none [&::-webkit-details-marker]:hidden py-1 text-[11px] tracking-[0.3em] uppercase hover:line-through"
          style={{ fontFamily: "'Courier Prime', monospace" }}
        >
          <span className="group-open:hidden">Details +</span>
          <span className="hidden group-open:inline">Hide details −</span>
        </summary>
        <ul
          className="mt-3 flex flex-col gap-2 text-base leading-relaxed list-disc pl-5 marker:text-[#888]"
          style={{ fontFamily: "'EB Garamond', Georgia, serif" }}
        >
          {project.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </details>
    </article>
  );
}

export function ProjectCarousel({ images, aspect = "aspect-[4/3]" }: { images: Project["images"]; aspect?: string }) {
  const [current, setCurrent] = useState(0);
  const total = images.length;
  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const [dragging, setDragging] = useState(false);
  const dragStart = useRef(0);

  const onPointerDown = (e: React.PointerEvent) => {
    setDragging(true);
    dragStart.current = e.clientX;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (!dragging) return;
    setDragging(false);
    const delta = e.clientX - dragStart.current;
    if (delta < -40) next();
    else if (delta > 40) prev();
    // A tap (no real drag) opens the full-screen viewer
    else if (Math.abs(delta) < 5) setViewing(true);
  };

  // Full-screen viewer; paging there moves the carousel too
  const [viewing, setViewing] = useState(false);
  const photos = images.map((img) => ({
    name: img.url,
    src: img.url,
    alt: img.caption.replace(/\s*—\s*\d+\/\d+$/, ""),
    w: 0,
    h: 0,
  }));

  return (
    <div className="flex flex-col gap-0 select-none">
      {/* Image box */}
      <div
        className={`relative overflow-hidden bg-neutral-200 ${aspect} cursor-zoom-in active:cursor-grabbing border border-black touch-pan-y`}
        role="button"
        tabIndex={0}
        aria-label={`Open screenshot: ${images[current].caption}`}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setViewing(true);
          }
        }}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => setDragging(false)}
      >
        <img
          key={current}
          src={images[current].url}
          alt={images[current].caption}
          className="w-full h-full object-contain"
          style={{
            animation: "fadeSlide 0.3s ease forwards",
          }}
          draggable={false}
        />
        {/* Swipe hint — hidden when single image */}
        {total > 1 && (
          <div className="absolute bottom-3 left-3 pointer-events-none">
            <span
              className="text-[11px] tracking-[0.3em] uppercase text-white/60 bg-black/30 px-2 py-0.5"
              style={{ fontFamily: "'Courier Prime', monospace" }}
            >
              ← DRAG →
            </span>
          </div>
        )}
        {/* Caption */}
        <div className="absolute top-3 right-3">
          <span
            className="text-[11px] tracking-[0.3em] uppercase text-white bg-black/70 px-2 py-0.5"
            style={{ fontFamily: "'Courier Prime', monospace" }}
          >
            {images[current].caption}
          </span>
        </div>
      </div>

      {/* Brutalist nav bar — hidden when single image */}
      <div className={`border border-t-0 border-black flex items-center justify-between px-3 py-2 bg-white ${total === 1 ? "hidden" : ""}`}>
        <button
          onClick={prev}
          className="text-[11px] tracking-[0.3em] uppercase hover:line-through transition-all"
          style={{ fontFamily: "'Courier Prime', monospace" }}
        >
          ← PREV
        </button>

        {/* Dot indicators */}
        <div className="flex gap-1.5 items-center">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to image ${i + 1}`}
              className="p-1.5 -m-1"
            >
              <span className={`block w-1.5 h-1.5 transition-all ${i === current ? "bg-black scale-125" : "bg-black/25"}`} />
            </button>
          ))}
        </div>

        <div
          className="text-[11px] tracking-[0.3em] text-black/40"
          style={{ fontFamily: "'Courier Prime', monospace" }}
        >
          {String(current + 1)}/{total}
        </div>

        <button
          onClick={next}
          className="text-[11px] tracking-[0.3em] uppercase hover:line-through transition-all"
          style={{ fontFamily: "'Courier Prime', monospace" }}
        >
          NEXT →
        </button>
      </div>

      {viewing && (
        <Lightbox photos={photos} index={current} onClose={() => setViewing(false)} onChange={setCurrent} />
      )}

      <style>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateX(10px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}

type GalleryTabsProps = {
  galleries: Gallery[];
  active: number;
  onSelect: (i: number) => void;
};

export function GalleryTabs({ galleries, active, onSelect }: GalleryTabsProps) {
  return (
    <div className="flex border border-black" role="tablist" style={{ fontFamily: "'Courier Prime', monospace" }}>
      {galleries.map((gallery, i) => (
        <button
          key={gallery.label}
          role="tab"
          aria-selected={i === active}
          onClick={() => onSelect(i)}
          className={`px-4 py-1.5 text-[12px] tracking-[0.3em] uppercase transition-colors ${i > 0 ? "border-l border-black" : ""} ${i === active ? "bg-black text-white" : "hover:bg-black/5"}`}
        >
          {gallery.label}
        </button>
      ))}
    </div>
  );
}

function ProjectGallery({ galleries }: { galleries: Gallery[] }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="mb-3">
        <GalleryTabs galleries={galleries} active={active} onSelect={setActive} />
      </div>
      {/* key resets the slide index when switching tabs */}
      <ProjectCarousel key={active} images={galleries[active].images} />
    </div>
  );
}

export function ProjectModule({ project }: { project: Project }) {
  return (
    <div className="border-b border-black">
      {/* Project index label */}
      <div
        className="border-b border-black/20 gutter py-3 flex flex-wrap items-center gap-x-4 gap-y-2"
        style={{ fontFamily: "'Courier Prime', monospace" }}
      >
        <span className="text-[11px] tracking-[0.4em] uppercase text-black/40">{project.index}</span>
        <span className="text-[11px] tracking-[0.4em] uppercase">{project.name.toUpperCase()}</span>
        {project.note && (
          <>
            <div className="hidden sm:block flex-1 h-px bg-black/10" />
            <span className="text-[11px] tracking-widest uppercase border border-black/30 px-2 py-0.5 text-black/50">
              {project.note}
            </span>
          </>
        )}
      </div>

      {/* Editorial spread */}
      <div
        className={`gutter-wide grid grid-cols-1 md:grid-cols-2 ${project.flip ? "md:[&>*:first-child]:order-last" : ""}`}
      >
        {/* Carousel side */}
        <div className={`min-w-0 p-6 md:p-8 lg:p-10 ${project.flip ? "md:border-l border-black" : "md:border-r border-black"} border-b md:border-b-0`}>
          {project.galleries
            ? <ProjectGallery galleries={project.galleries} />
            : <ProjectCarousel images={project.images} />}
        </div>

        {/* Text side */}
        <div className="min-w-0 p-6 md:p-8 lg:p-12 flex flex-col justify-between">
          <div>
            <h3
              className="text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-tight tracking-tight mb-3 break-words"
              style={{ fontFamily: "'Archivo', Arial, sans-serif" }}
            >
              {project.name}
            </h3>
            <p
              className="text-lg leading-snug text-black/60 mb-6"
              style={{ fontFamily: "'EB Garamond', Georgia, serif", fontStyle: "italic" }}
            >
              {project.subtitle}
            </p>
            <ul
              className="flex flex-col gap-2 text-base leading-relaxed list-disc pl-5 marker:text-[#888]"
              style={{ fontFamily: "'EB Garamond', Georgia, serif" }}
            >
              {project.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <div
              className="text-[11px] tracking-[0.4em] uppercase text-black/40 mb-2"
              style={{ fontFamily: "'Courier Prime', monospace" }}
            >
              Competencies
            </div>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] tracking-[0.15em] uppercase px-3 py-1 border border-black/30 text-black/60"
                  style={{ fontFamily: "'Courier Prime', monospace" }}
                >
                  {tag}
                </span>
              ))}
            </div>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-black px-4 py-2 text-[12px] tracking-[0.3em] uppercase hover:bg-black hover:text-white transition-all"
                style={{ fontFamily: "'Courier Prime', monospace" }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                View on GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
