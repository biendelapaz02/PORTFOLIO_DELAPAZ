import { useEffect, useRef, useState } from "react";
import portrait from "../imports/2BY2PIC.JPG";
import resume from "../imports/DELA_PAZ_RESUME-1.pdf";
import lumenAdminIssuer from "../imports/ADMIN_ISSUER.PNG";
import lumenHome from "../imports/lumenhome.PNG";
import lumenUserDash from "../imports/USER_DASH.PNG";
import lumenUserVault from "../imports/USER_VAULT.PNG";
import lumenUser from "../imports/USER.PNG";
import lumenVerify from "../imports/verify.PNG";
import sentiAdminDashboard from "../imports/admindashboard.PNG";
import sentiAgentDashboard from "../imports/AGENT_DASHBOARD.PNG";
import sentiAgentRegister from "../imports/AGENTregister.PNG";
import sentiAnalytics from "../imports/analytics.PNG";
import sentiAdmin from "../imports/admin.PNG";
import bpiHome from "../imports/homebpi.PNG";
import bpiProfile from "../imports/YES.PNG";
import bpiAdmin from "../imports/WELCOMEBACK.PNG";
import bpiForm from "../imports/anodaw.PNG";
import camHome from "../imports/HOMEE.PNG";
import camTop from "../imports/top.PNG";
import camFesti from "../imports/festi.PNG";
import camPlanTrip from "../imports/plantrip.PNG";
import camContact from "../imports/contactkaya.PNG";
import chefKitchen from "../imports/KITCHEN_MAIN_BUTTOM.PNG";
import chefHome from "../imports/CHEFMAIMAI.PNG";
import chefCook from "../imports/COOKN.PNG";
import chefDiscover from "../imports/homeche.PNG";
import chefPopup from "../imports/POPUP.PNG";
import cashCatalyst1 from "../imports/CASH_CATALYST_2.png";
import cashCatalyst2 from "../imports/CASH_CATALYST_SS_1.png";
import cashCatalyst3 from "../imports/MONEYCASH.png";

const MARGIELA_NUMBERS = [
  "0","1","2","3","4","5","6","7","8","9",
  "10","11","12","13","14","15","16","17",
  "18","19","20","21","22","23",
];

const TICKER_ITEMS = [
  "JBECP PUP MANILA — MEDIA HEAD",
  "ASCII — DOCUMENTATION & SECRETARIAT",
  "GOOGLE DEVELOPER GROUPS ON CAMPUS PUP — OPERATIONS COMMITTEE / DATA CAMP SCHOLAR",
  "AWS CLOUD CLUB PUP — CYBER SECURITY MEMBER",
];

const SKILLS = [
  { category: "PROGRAMMING & SCRIPTING", items: ["Java","JavaFX","C","Python","JavaScript","TypeScript","PHP","HTML/CSS","SQL","JSON"] },
  { category: "TOOLS & PLATFORMS", items: ["Git","GitHub","Figma","React","Tailwind CSS","Canva","Adobe Photoshop"] },
  { category: "DATABASE & BACKEND", items: ["MySQL","SQLite","Data Modeling","ERD","Normalization","Python Flask"] },
  { category: "CYBERSECURITY & NETWORKING", items: ["Intrusion Detection & Prevention Systems (IDPS)","Scapy Packet Analysis","Network Simulation (Cisco Packet Tracer)","Security Protocol Implementation","Data Privacy Compliance"] },
  { category: "AI & MACHINE LEARNING", items: ["Bayesian Learning","Naive Bayes Classification","Random Forest Classifier","Feature Engineering","Image Recognition Integration"] },
  { category: "WEB3 & BLOCKCHAIN", items: ["Decentralized Identity (DID)","Verifiable Credentials (VC)","IPFS","MultiChain","Smart Contract Integration"] },
  { category: "SOFT SKILLS", items: ["UI/UX Design","Team Collaboration","Public Speaking","Problem-Solving"] },
];

const CERTS = [
  "Fortinet Certified Associate — Cybersecurity",
  "Machine Learning, AI, and Cybersecurity Badge",
  "Science and Technology Track Certificate — US ASEAN & ASU",
  "Networking Basics — Cisco",
  "Introduction to Cybersecurity — Cisco",
  "Introduction to Machine Learning — AWS",
  "Introduction to Technical Support — IBM",
  "Introduction to Microsoft Azure Cloud Services — Microsoft",
];

type Project = {
  id: string;
  index: string;
  name: string;
  subtitle: string;
  note: string | null;
  github: string | null;
  description: string;
  tags: string[];
  images: { url: string; caption: string }[];
  flip: boolean;
};

const PROJECTS: Project[] = [
  {
    id: "chefmai",
    index: "00",
    name: "Chef MAI",
    github: "https://github.com/aesrch/chefMAI",
    subtitle: "AI-Driven Recipe Matching Web Application",
    note: null,
    description:
      "Designed and built the user interface for an AI-driven recipe matching web application using Figma and VS Code, establishing interactive user flows that track ingredient cataloging via text inputs and camera-based image capture. Furthermore, designed clean interface layouts displaying recipe outputs, constraints, difficulties, and dynamic substitutes.",
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
    id: "camarinasnorte",
    index: "01",
    name: "Camarines Norte Tourism Portal",
    github: "https://github.com/ethanidk04/CamarinesNorteWebsite",
    subtitle: "Comprehensive UI Layouts & Custom Trip Planning",
    note: null,
    description:
      "Designed comprehensive user interface layouts, wireframes, and responsive screen mockups in Figma, including structured, visual component cards highlighting regional food heritage, annual festivals, and tourist spots. Also designed clear user navigational flows for registration, custom trip planning, and mock booking forms.",
    tags: ["UI Layouts","Visual Component Cards","Trip Planning Flows","Tourism UX"],
    images: [
      { url: camHome,     caption: "Home — 01/05" },
      { url: camTop,      caption: "Top Destinations — 02/05" },
      { url: camFesti,    caption: "Festivals — 03/05" },
      { url: camPlanTrip, caption: "Plan Your Trip — 04/05" },
      { url: camContact,  caption: "Contact — 05/05" },
    ],
    flip: true,
  },
  {
    id: "sentinet",
    index: "02",
    name: "SentiNet",
    github: "https://github.com/andreistvn/senti",
    subtitle: "Decentralized Intrusion Detection & Prevention System",
    note: null,
    description:
      "Designed a decentralized, endpoint-based IDPS architecture to actively defend against public Wi-Fi security threats, building a multi-tiered defense pipeline incorporating behavioral machine learning and a permissioned blockchain layer. Additionally, designed and implemented responsive administrative and agent web dashboards using React and Tailwind CSS, and built a payload-blind packet monitoring framework strictly complying with the Data Privacy Act of 2012.",
    tags: ["IDPS Architecture","Behavioral ML","Permissioned Blockchain","React","Tailwind","Scapy"],
    images: [
      { url: sentiAdminDashboard, caption: "Admin Dashboard — 01/05" },
      { url: sentiAnalytics,      caption: "Analytics — 02/05" },
      { url: sentiAgentDashboard, caption: "Agent Dashboard — 03/05" },
      { url: sentiAgentRegister,  caption: "Agent Registration — 04/05" },
      { url: sentiAdmin,          caption: "Admin Login — 05/05" },
    ],
    flip: false,
  },
  {
    id: "cashcatalyst",
    index: "03",
    name: "Cash Catalyst",
    github: "https://github.com/Sky1sBloo/cash-catalysts",
    subtitle: "Gamified Finance Tracker",
    note: "2nd Place — Mini Hackathon",
    description:
      "Designed UI screen layouts, prototypes, and structured graphical assets inside Figma for an intuitive user experience, and built the native graphic interface using JavaFX Scene Builder to guarantee smooth runtime deployment.",
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
    index: "04",
    name: "LumenID",
    github: "https://github.com/Oumazshin/LumenID",
    subtitle: "Decentralized Identity & Verifiable Credential Platform",
    note: "Polkadot Solidity Hackathon",
    description:
      "Designed the UI/UX architecture, wallet interfaces, and dashboard layouts for a decentralized identity network, and built accessible frontend disclosure interaction loops utilizing secure, time-bounded QR codes and links.",
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
    index: "05",
    name: "CarPayLater",
    github: "https://github.com/controlbackspace/Auto-Loan-Team-5",
    subtitle: "BPI Auto Loan-Inspired UI & MySQL Database Integration",
    note: null,
    description:
      "BPI Auto Loan-inspired interface design for a vehicle financing platform. Mapped complex amortization logic and MySQL relational schemas onto clean application screens — loan calculator flows, repayment dashboards, and approval status trackers built for clarity under financial complexity.",
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
  description: string;
  tags: string[];
  image: string;
  flip: boolean;
};

const STATIC_PROJECTS: StaticProject[] = [
  {
    index: "06",
    name: "WattWise",
    subtitle: "Household Energy Optimization",
    note: null,
    github: "https://github.com/Shwarmanism/Appliances-Scheduler",
    description:
      "Designed the UI/UX architecture in Figma for a web-based application built to help users monitor appliance usage, estimate monthly bills, and receive tailored energy-saving tips. The system integrates Dijkstra's Algorithm to generate efficient appliance usage schedules under Peak/Off-Peak conditions, the 0/1 Knapsack Algorithm to select optimal appliance combinations within a daily energy limit, and Insertion Sort to rank appliances by electricity consumption. Structured the visual user flows for the optimization dashboard, consumption calculator, and smart scheduling modules powered by a Python and Flask backend.",
    tags: ["Figma","UI/UX Architecture","Dijkstra's Algorithm","0/1 Knapsack","Python Flask","Dashboard Design"],
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&h=800&fit=crop&auto=format",
    flip: false,
  },
  {
    index: "07",
    name: "MarikinAlert",
    subtitle: "Hyper-Localized Disaster Reporting & Response Application",
    note: null,
    github: "https://github.com/controlbackspace/MarikinAlert",
    description:
      "Developed a hyper-localized, internet-independent disaster reporting and response application designed exclusively for Marikina City to combat telecom infrastructure collapse during high-intensity crises. Built an offline reporting architecture that utilizes a distributed network of local Wi-Fi nodes to mirror data across admin nodes in real time, establishing a resilient \"city-wide intranet\". Features an AI-driven triage engine capable of parsing natural language and unstructured \"Taglish\" keywords to automatically categorize and prioritize critical life-threatening situations on a color-coded emergency dispatch dashboard.",
    tags: ["Offline Architecture","Distributed Wi-Fi Nodes","AI Triage Engine","NLP","Emergency UX","Marikina City"],
    image: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=1200&h=800&fit=crop&auto=format",
    flip: true,
  },
  {
    index: "08",
    name: "Lex-C",
    subtitle: "Custom Programming Language Architecture",
    note: null,
    github: "https://github.com/kenz4nity/LEX-C_Programming_Language",
    description:
      "Designed and specified a free-field programming language architecture that fuses the robust, type-safe foundations of C and Java with expressive, modern syntactic conveniences designed to lower developer cognitive load and prevent syntax errors. Authored the full lexical specification and context-free grammar parsing rules, replacing dense traditional bracing symbols with descriptive keywords like \"what if\", \"then do\", and \"continue until\", alongside a custom double-percent compiler comment tokenization standard.",
    tags: ["Language Design","Lexical Specification","Context-Free Grammar","Compiler Tokenization","C","Java"],
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&h=800&fit=crop&auto=format",
    flip: false,
  },
];

function StaticProjectModule({ project }: { project: StaticProject }) {
  return (
    <div className="border-b border-black/30 px-6 md:px-16 py-8 md:py-10 grid grid-cols-1 md:grid-cols-[80px_1fr] gap-3 md:gap-6">
      {/* Index */}
      <div
        className="text-[11px] tracking-[0.4em] uppercase text-black/30 pt-1"
        style={{ fontFamily: "'Courier Prime', monospace" }}
      >
        {project.index}
      </div>

      {/* Content */}
      <div>
        <div className="flex flex-wrap items-baseline gap-3 mb-2">
          <h3
            className="text-2xl md:text-3xl font-black uppercase leading-tight tracking-tight"
            style={{ fontFamily: "'Archivo', Arial, sans-serif" }}
          >
            {project.name}
          </h3>
          <p
            className="text-base text-black/50"
            style={{ fontFamily: "'EB Garamond', Georgia, serif", fontStyle: "italic" }}
          >
            {project.subtitle}
          </p>
        </div>

        <p
          className="text-base leading-relaxed text-black/80 max-w-3xl mb-5"
          style={{ fontFamily: "'EB Garamond', Georgia, serif" }}
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] tracking-[0.15em] uppercase px-3 py-1 border border-black/25 text-black/50"
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
            className="inline-flex items-center gap-2 border border-black px-4 py-1.5 text-[10px] tracking-[0.3em] uppercase hover:bg-black hover:text-white transition-all"
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
  );
}

function NoiseOverlay() {
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

function MargieleNumbers() {
  return (
    <div
      style={{ fontFamily: "'Courier Prime', monospace" }}
      className="text-[10px] tracking-widest text-black leading-[1.6] select-none"
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

function ProjectCarousel({ images }: { images: Project["images"] }) {
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
  };

  return (
    <div className="flex flex-col gap-0 select-none">
      {/* Image box */}
      <div
        className="relative overflow-hidden bg-neutral-200 aspect-[4/3] cursor-grab active:cursor-grabbing border border-black"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
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
              className="text-[8px] tracking-[0.3em] uppercase text-white/60 bg-black/30 px-2 py-0.5"
              style={{ fontFamily: "'Courier Prime', monospace" }}
            >
              ← DRAG →
            </span>
          </div>
        )}
        {/* Caption */}
        <div className="absolute top-3 right-3">
          <span
            className="text-[8px] tracking-[0.3em] uppercase text-white bg-black/70 px-2 py-0.5"
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
          className="text-[9px] tracking-[0.3em] uppercase hover:line-through transition-all"
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
              className={`w-1.5 h-1.5 transition-all ${i === current ? "bg-black scale-125" : "bg-black/25"}`}
            />
          ))}
        </div>

        <div
          className="text-[9px] tracking-[0.3em] text-black/40"
          style={{ fontFamily: "'Courier Prime', monospace" }}
        >
          {String(current + 1)}/{total}
        </div>

        <button
          onClick={next}
          className="text-[9px] tracking-[0.3em] uppercase hover:line-through transition-all"
          style={{ fontFamily: "'Courier Prime', monospace" }}
        >
          NEXT →
        </button>
      </div>

      <style>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateX(10px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}

function ProjectModule({ project }: { project: Project }) {
  return (
    <div className="border-b border-black">
      {/* Project index label */}
      <div
        className="border-b border-black/20 px-8 md:px-16 py-3 flex items-center gap-4"
        style={{ fontFamily: "'Courier Prime', monospace" }}
      >
        <span className="text-[9px] tracking-[0.4em] uppercase text-black/40">{project.index}</span>
        <span className="text-[9px] tracking-[0.4em] uppercase">{project.name.toUpperCase()}</span>
        {project.note && (
          <>
            <div className="flex-1 h-px bg-black/10" />
            <span className="text-[8px] tracking-widest uppercase border border-black/30 px-2 py-0.5 text-black/50">
              {project.note}
            </span>
          </>
        )}
      </div>

      {/* Editorial spread */}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 ${project.flip ? "md:[&>*:first-child]:order-last" : ""}`}
      >
        {/* Carousel side */}
        <div className={`p-6 md:p-10 ${project.flip ? "md:border-l border-black" : "md:border-r border-black"} border-b md:border-b-0`}>
          <ProjectCarousel images={project.images} />
        </div>

        {/* Text side */}
        <div className="p-6 md:p-12 flex flex-col justify-between">
          <div>
            <h3
              className="text-3xl md:text-5xl font-black uppercase leading-tight tracking-tight mb-3"
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
            <p
              className="text-base leading-relaxed"
              style={{ fontFamily: "'EB Garamond', Georgia, serif" }}
            >
              {project.description}
            </p>
          </div>

          <div className="mt-8">
            <div
              className="text-[8px] tracking-[0.4em] uppercase text-black/40 mb-2"
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
                className="inline-flex items-center gap-2 border border-black px-4 py-2 text-[10px] tracking-[0.3em] uppercase hover:bg-black hover:text-white transition-all"
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

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="bg-white text-black min-h-screen overflow-x-hidden"
      style={{ fontFamily: "'Archivo', Arial, sans-serif" }}
    >
      <NoiseOverlay />

      {/* NAV */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen ? "bg-white border-b border-black" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-8 py-4">
          <div style={{ fontFamily: "'Courier Prime', monospace" }} className="text-[10px] tracking-[0.3em] uppercase">
            BJDP —{" "}
            <span style={{ textDecoration: "line-through", textDecorationThickness: "2px" }}>
              Portfolio
            </span>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex gap-8">
            {["About","Projects","Skills","Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[10px] tracking-[0.25em] uppercase hover:line-through transition-all"
                style={{ fontFamily: "'Courier Prime', monospace" }}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-px bg-black transition-all ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-5 h-px bg-black transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-black transition-all ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>

        {/* Mobile drawer */}
        {menuOpen && (
          <div className="md:hidden border-t border-black bg-white px-6 py-4 flex flex-col gap-4">
            {["About","Projects","Skills","Contact"].map((item) => (
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
      <section className="relative min-h-screen flex flex-col justify-end px-8 md:px-16 pb-16 pt-32 overflow-hidden">
        <div className="absolute top-24 right-8 md:right-16">
          <MargieleNumbers />
        </div>
        <div
          className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 -rotate-90 text-[9px] tracking-[0.4em] uppercase text-black/40"
          style={{ fontFamily: "'Courier Prime', monospace" }}
        >
          00 — INTRODUCTION
        </div>

        <div className="relative z-10">
          <span
            className="block text-[14vw] md:text-[12vw] font-black leading-[0.88] tracking-[-0.04em] uppercase"
            style={{ fontFamily: "'Archivo', Arial, sans-serif" }}
          >
            BIEN
          </span>
          <div className="flex items-end gap-6 flex-wrap">
            <span
              className="block text-[14vw] md:text-[12vw] font-black leading-[0.88] tracking-[-0.04em] uppercase"
              style={{ fontFamily: "'Archivo', Arial, sans-serif" }}
            >
              JERIC
            </span>
            <div
              className="mb-4 flex flex-col gap-[2px] text-[10px] tracking-[0.25em] uppercase"
              style={{ fontFamily: "'Courier Prime', monospace" }}
            >
              <span>UI/UX</span>
              <span>Database</span>
              <span>Cybersecurity</span>
              <span>Web3</span>
            </div>
          </div>
          <span
            className="block text-[14vw] md:text-[12vw] font-black leading-[0.88] tracking-[-0.04em] uppercase"
            style={{ fontFamily: "'Archivo', Arial, sans-serif" }}
          >
            DELA PAZ
          </span>
        </div>

        <div className="relative z-10 mt-8 md:mt-12 md:ml-auto max-w-md md:text-right">
          <p
            className="text-sm md:text-lg leading-tight"
            style={{ fontFamily: "'EB Garamond', Georgia, serif", fontStyle: "italic" }}
          >
            "Digging through the static of the system to find the soul of the interface."
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-black" />
      </section>

      {/* ABOUT */}
      <section id="about" className="relative px-6 md:px-16 py-16 md:py-24 border-b border-black">
        <div className="mb-12 flex items-center gap-4" style={{ fontFamily: "'Courier Prime', monospace" }}>
          <span className="text-[10px] tracking-[0.4em] uppercase text-black/40">01</span>
          <div className="flex-1 h-px bg-black/20" />
          <span className="text-[10px] tracking-[0.4em] uppercase">About</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-16 items-start">
          <div>
            <h2
              className="text-4xl md:text-5xl font-black uppercase leading-tight tracking-tight mb-8"
              style={{ fontFamily: "'Archivo', Arial, sans-serif" }}
            >
              Computer<br />
              <span style={{ fontFamily: "'EB Garamond', Georgia, serif", fontWeight: 400, fontStyle: "italic" }}>
                Scientist.
              </span>
            </h2>
            <p
              className="text-base md:text-lg leading-relaxed max-w-xl"
              style={{ fontFamily: "'EB Garamond', Georgia, serif" }}
            >
              Innovative Computer Science student with a strong foundation in UI/UX design, database development, and cybersecurity. Experienced in building decentralized applications, AI-driven recommendation systems, and secure network architectures. Passionate about creating functional, user-centric systems.
            </p>
            <div className="mt-12 flex flex-col gap-1" style={{ fontFamily: "'Courier Prime', monospace" }}>
              <div className="flex gap-4 text-[11px] tracking-widest uppercase">
                <span className="text-black/40">Location</span>
                <span>Marikina City</span>
              </div>
              <div className="flex gap-4 text-[11px] tracking-widest uppercase">
                <span className="text-black/40">Status</span>
                <span>BSCS 3-1N — Class President</span>
              </div>
            </div>

            <div className="mt-10">
              <a
                href="https://drive.google.com/file/d/1OeK4X57PS-5mnKD6tcEifWfNucasMUvw/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 border border-black px-6 py-3 text-[10px] tracking-[0.35em] uppercase hover:bg-black hover:text-white transition-all"
                style={{ fontFamily: "'Courier Prime', monospace" }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                See CV
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="border border-black overflow-hidden aspect-[3/4] bg-neutral-200">
              <img
                src={portrait}
                alt="Bien Jeric Dela Paz"
                className="w-full h-full object-cover"
                style={{ filter: "grayscale(100%) contrast(1.15)" }}
              />
            </div>
            <div
              className="absolute -bottom-6 -left-2 text-[9px] tracking-[0.3em] uppercase"
              style={{ fontFamily: "'Courier Prime', monospace" }}
            >
              Fig. 01 — Subject
            </div>
            <div
              className="absolute top-3 right-3 text-[8px] tracking-widest text-white mix-blend-difference"
              style={{ fontFamily: "'Courier Prime', monospace" }}
            >
              {MARGIELA_NUMBERS.slice(0, 6).join(" ")}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="border-b border-black">
        <div
          className="px-8 md:px-16 py-8 flex items-center gap-4"
          style={{ fontFamily: "'Courier Prime', monospace" }}
        >
          <span className="text-[10px] tracking-[0.4em] uppercase text-black/40">02</span>
          <div className="flex-1 h-px bg-black/20" />
          <span className="text-[10px] tracking-[0.4em] uppercase">Lookbook — Selected Works</span>
        </div>

        {/* Editorial label strip */}
        <div className="border-t border-b border-black px-8 md:px-16 py-2 bg-black">
          <p
            className="text-[9px] tracking-[0.5em] uppercase text-white"
            style={{ fontFamily: "'Courier Prime', monospace" }}
          >
            {MARGIELA_NUMBERS.join("  ")} — Six Projects, Six Modules
          </p>
        </div>

        {PROJECTS.map((project) => (
          <ProjectModule key={project.id} project={project} />
        ))}

        {STATIC_PROJECTS.map((project) => (
          <StaticProjectModule key={project.index} project={project} />
        ))}
      </section>

      {/* SKILLS */}
      <section id="skills" className="relative px-6 md:px-16 py-16 md:py-24 border-b border-black">
        <div className="mb-12 flex items-center gap-4" style={{ fontFamily: "'Courier Prime', monospace" }}>
          <span className="text-[10px] tracking-[0.4em] uppercase text-black/40">03</span>
          <div className="flex-1 h-px bg-black/20" />
          <span className="text-[10px] tracking-[0.4em] uppercase">Competencies</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="border border-black p-8 md:p-12" style={{ fontFamily: "'Courier Prime', monospace" }}>
            <div className="text-[10px] tracking-[0.4em] uppercase mb-6 text-center border-b border-dashed border-black pb-4">
              *** SKILL MANIFEST ***
            </div>
            <div className="text-[10px] tracking-widest text-center mb-8 text-black/40">
              {new Date().toISOString().split("T")[0]}
            </div>
            {SKILLS.map((skill, i) => (
              <div key={skill.category} className="mb-6">
                <div className="text-[12px] tracking-[0.3em] uppercase mb-2 border-b border-black/20 pb-1">
                  {String(i).padStart(2, "0")} — {skill.category}
                </div>
                {skill.items.map((item) => (
                  <div key={item} className="flex justify-between text-[13px] py-0.5">
                    <span>· {item}</span>
                    <span className="text-black/30">✓</span>
                  </div>
                ))}
              </div>
            ))}
            <div className="border-t border-dashed border-black pt-4 text-center text-[9px] tracking-widest uppercase text-black/40">
              COMPETENCY TOTAL: {SKILLS.reduce((acc, s) => acc + s.items.length, 0)} ITEMS
            </div>
          </div>

          <div className="border border-black md:border-l-0 border-t-0 md:border-t p-6 md:p-12 flex flex-col" style={{ fontFamily: "'Courier Prime', monospace" }}>
            <div className="text-[10px] tracking-[0.4em] uppercase mb-6 text-center border-b border-dashed border-black pb-4">
              *** CERTIFICATIONS ***
            </div>
            <div className="text-[10px] tracking-widest text-center mb-6 text-black/40">
              {new Date().toISOString().split("T")[0]}
            </div>
            {CERTS.map((cert, i) => (
              <div key={cert} className="flex items-start gap-3 border-b border-black/20 py-3">
                <span className="text-[9px] tracking-widest text-black/40 shrink-0 mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[13px] tracking-[0.1em] uppercase">{cert}</p>
              </div>
            ))}
            <div className="border-t border-dashed border-black mt-4 pt-4 text-center text-[9px] tracking-widest uppercase text-black/40">
              TOTAL: {CERTS.length} CREDENTIALS
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION & CERTIFICATIONS */}
      <section id="education" className="relative px-6 md:px-16 py-16 md:py-24 border-b border-black">
        <div className="mb-12 flex items-center gap-4" style={{ fontFamily: "'Courier Prime', monospace" }}>
          <span className="text-[10px] tracking-[0.4em] uppercase text-black/40">04</span>
          <div className="flex-1 h-px bg-black/20" />
          <span className="text-[10px] tracking-[0.4em] uppercase">Education & Credentials</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <div
              className="text-[9px] tracking-[0.4em] uppercase text-black/40 mb-6 border-b border-black pb-3"
              style={{ fontFamily: "'Courier Prime', monospace" }}
            >
              Academic Record
            </div>
            <p
              className="text-2xl font-black uppercase tracking-tight leading-tight"
              style={{ fontFamily: "'Archivo', Arial, sans-serif" }}
            >
              Bachelor of Science in Computer Science
            </p>
            <p
              className="text-lg mt-2"
              style={{ fontFamily: "'EB Garamond', Georgia, serif", fontStyle: "italic" }}
            >
              Polytechnic University of the Philippines, Manila
            </p>
            <div className="mt-6 border border-black p-4" style={{ fontFamily: "'Courier Prime', monospace" }}>
              <div className="text-[9px] tracking-widest uppercase text-black/40 mb-1">GPA</div>
              <div className="text-3xl font-black">1.29</div>
              <div className="text-[9px] tracking-widest uppercase text-black/40 mt-1">Graduation Honors Track</div>
            </div>
          </div>

          <div>
            <div
              className="text-[9px] tracking-[0.4em] uppercase text-black/40 mb-6 border-b border-black pb-3"
              style={{ fontFamily: "'Courier Prime', monospace" }}
            >
              Organizations
            </div>
            {[
              { role: "Media Head", org: "JBECP PUP Manila" },
              { role: "Documentation & Secretariat", org: "ASCII" },
              { role: "Operations Committee / Data Camp Scholar", org: "Google Developer Groups On Campus PUP" },
              { role: "Cyber Security Member", org: "AWS Cloud Club PUP" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 border-b border-black/20 py-4">
                <span
                  className="text-[9px] tracking-widest text-black/40 mt-1 shrink-0"
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
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative px-6 md:px-16 pt-16 md:pt-24 pb-12 md:pb-16 bg-black text-white overflow-hidden"
      >
        <div
          className="absolute top-8 right-8 text-white/5 text-[120px] font-black leading-none select-none pointer-events-none"
          style={{ fontFamily: "'Archivo', Arial, sans-serif" }}
        >
          05
        </div>

        <div className="mb-16 flex items-center gap-4" style={{ fontFamily: "'Courier Prime', monospace" }}>
          <span className="text-[10px] tracking-[0.4em] uppercase text-white/30">05</span>
          <div className="flex-1 h-px bg-white/20" />
          <span className="text-[10px] tracking-[0.4em] uppercase text-white">Contact</span>
        </div>

        {/* Primary emails */}
        <div className="mb-12 overflow-hidden flex flex-col gap-2">
          <a
            href="mailto:bienjericdelapaz9@gmail.com"
            className="block text-[4vw] sm:text-[3vw] md:text-[2.2vw] font-black uppercase leading-tight tracking-tight hover:text-white/60 transition-colors break-all"
            style={{ fontFamily: "'Archivo', Arial, sans-serif" }}
          >
            bienjericdelapaz9@gmail.com
          </a>
          <a
            href="mailto:bienjericdelapaz@iskolarngbayan.pup.edu.ph"
            className="block text-[4vw] sm:text-[3vw] md:text-[2.2vw] font-black uppercase leading-tight tracking-tight hover:text-white/60 transition-colors break-all"
            style={{ fontFamily: "'Archivo', Arial, sans-serif" }}
          >
            bienjericdelapaz@iskolarngbayan.pup.edu.ph
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 border-t border-white/20 pt-8 md:pt-12">
          <div>
            <div
              className="text-[9px] tracking-[0.4em] uppercase text-white/30 mb-2"
              style={{ fontFamily: "'Courier Prime', monospace" }}
            >
              Phone
            </div>
            <a
              href="tel:+639663553982"
              className="text-lg hover:text-white/60 transition-colors"
              style={{ fontFamily: "'Courier Prime', monospace" }}
            >
              +63 966 355 3982
            </a>
          </div>
          <div>
            <div
              className="text-[9px] tracking-[0.4em] uppercase text-white/30 mb-2"
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
              className="text-[9px] tracking-[0.4em] uppercase text-white/30 mb-2"
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
          <div>
            <div
              className="text-[9px] tracking-[0.4em] uppercase text-white/30 mb-2"
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
        </div>

        <div className="mt-12 md:mt-24 flex items-end justify-between">
          <div
            className="hidden md:block text-[9px] tracking-[0.4em] uppercase text-white/20"
            style={{ fontFamily: "'Courier Prime', monospace" }}
          >
            {MARGIELA_NUMBERS.join("  ")}
          </div>
          <div
            className="text-[9px] tracking-[0.3em] text-white/20"
            style={{ fontFamily: "'Courier Prime', monospace" }}
          >
            © 2026 Bien Jeric Dela Paz. All rights reserved.
          </div>
        </div>
      </section>
    </div>
  );
}
