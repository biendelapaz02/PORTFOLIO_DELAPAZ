import { useEffect, useRef, useState } from "react";

// — Portrait
import portrait from "@/assets/2BY2PIC.JPG";

// — LumenID screenshots
import lumenAdminIssuer from "@/assets/ADMIN_ISSUER.PNG";
import lumenHome        from "@/assets/lumenhome.PNG";
import lumenUserDash    from "@/assets/USER_DASH.PNG";
import lumenUserVault   from "@/assets/USER_VAULT.PNG";
import lumenUser        from "@/assets/USER.PNG";
import lumenVerify      from "@/assets/verify.PNG";

// — SentiNet screenshots
import sentiAdminDashboard from "@/assets/admindashboard.PNG";
import sentiAgentDashboard from "@/assets/AGENT_DASHBOARD.PNG";
import sentiAgentRegister  from "@/assets/AGENTregister.PNG";
import sentiAnalytics      from "@/assets/analytics.PNG";
import sentiAdmin          from "@/assets/admin.PNG";

// — CarPayLater screenshots
import bpiHome from "@/assets/homebpi.PNG";

// — Camarines Norte screenshots
import camHome    from "@/assets/HOMEE.PNG";
import camTop     from "@/assets/top.PNG";
import camFesti   from "@/assets/festi.PNG";
import camPlanTrip from "@/assets/plantrip.PNG";
import camContact  from "@/assets/contactkaya.PNG";

// — Chef MAI screenshots
import chefKitchen  from "@/assets/KITCHEN_MAIN_BUTTOM.PNG";
import chefHome     from "@/assets/CHEFMAIMAI.PNG";
import chefCook     from "@/assets/COOKN.PNG";
import chefDiscover from "@/assets/homeche.PNG";
import chefPopup    from "@/assets/POPUP.PNG";

// — Cash Catalyst screenshots
import cashCatalyst1 from "@/assets/CASH_CATALYST_2.png";
import cashCatalyst2 from "@/assets/CASH_CATALYST_SS_1.png";
import cashCatalyst3 from "@/assets/MONEYCASH.png";

const MARGIELA_NUMBERS = [
  "0","1","2","3","4","5","6","7","8","9",
  "10","11","12","13","14","15","16","17",
  "18","19","20","21","22","23",
];

const HERO_ROLES = ["UI/UX", "Database", "Cybersecurity", "Web3"];

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
    index: "01",
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
    index: "02",
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
    index: "03",
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
    index: "04",
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
    index: "05",
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
    index: "06",
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
  links?: { label: string; url: string }[];
  description: string;
  tags: string[];
  image: string | null;
  flip: boolean;
};

const STATIC_PROJECTS: StaticProject[] = [
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
    description:
      "Designed the UI/UX architecture and interactive prototypes in Figma for a decision-support mobile application assisting students with managing fixed daily allowances. The interface employs a \"Transport First\" design logic and background optimization algorithms to reduce cognitive load and decision fatigue during budget allocation. Authored the comprehensive HCI report and developed low-fidelity to high-fidelity wireframes featuring real-time feedforward mechanisms, satisfaction slider interactions, and strict error prevention controls.",
    tags: ["Figma","UI/UX Architecture","HCI Report","Wireframing","Prototyping","Feedforward Mechanisms","Mobile UX"],
    image: null,
    flip: false,
  },
  {
    index: "08",
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
    index: "09",
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
    index: "10",
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

type Video = {
  id: string;
  index: string;
  title: string;
  description: string;
  role: string;
  gear: string;
  // maxresdefault doesn't exist for every upload; fall back to hqdefault
  thumb: "maxresdefault" | "hqdefault";
  links?: { label: string; url: string }[];
};

const VIDEOS: Video[] = [
  {
    id: "Bxt_4MRqYbM",
    index: "01",
    title: "Our De$tiny",
    description: "Lifestyle vlog with a VHS look.",
    role: "Shot & Edited",
    gear: "Adobe Premiere Pro",
    thumb: "maxresdefault",
  },
  {
    id: "R5vNwzwlkvI",
    index: "02",
    title: "ASCII — Balik Sinta (Teaser)",
    description: "Teaser for ASCII, a PUP student organization.",
    role: "Shot",
    gear: "Sony Handycam · Fisheye lens",
    thumb: "maxresdefault",
    links: [{ label: "Published by ASCII on Facebook", url: "https://www.facebook.com/reel/25862433400065628" }],
  },
  {
    id: "BOWUpSQEzxQ",
    index: "03",
    title: "Alfie @ 21",
    description: "21st birthday shoot in a vintage VHS style.",
    role: "Shot",
    gear: "Sony Handycam",
    thumb: "maxresdefault",
  },
  {
    id: "V0Xyr9BykLk",
    index: "04",
    title: "Gallardo & BMW",
    description: "Car edit featuring a Lamborghini Gallardo and a BMW.",
    role: "Shot & Edited",
    gear: "Sony Handycam · Adobe Premiere Pro",
    thumb: "hqdefault",
  },
  {
    id: "Z8rJT9ooEYg",
    index: "05",
    title: "Ye feat. Everyone",
    description: "Lifestyle video with a VHS look.",
    role: "Shot & Edited",
    gear: "Adobe Premiere Pro",
    thumb: "maxresdefault",
  },
];

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

// WebP versions of the shoot photos: name.webp (full, for the viewer) and name-sm.webp (grid)
const PHOTO_FILES = {
  ...import.meta.glob("../assets/photography/web/*.webp", { eager: true, import: "default" }),
  ...import.meta.glob("../assets/modeling/web/*.webp", { eager: true, import: "default" }),
} as Record<string, string>;

const photoUrl = (name: string, size: "full" | "sm") => {
  const folder = name.startsWith("photo") ? "photography" : "modeling";
  return PHOTO_FILES[`../assets/${folder}/web/${name}${size === "sm" ? "-sm" : ""}.webp`];
};

type Photo = { name: string; alt: string; w: number; h: number };

const PHOTOGRAPHY: Photo[] = [
  { name: "photo-03", alt: "Model in a navy Teknolohista shirt adjusting her glasses", w: 1080, h: 1350 },
  { name: "photo-09", alt: "\"ICT for the People!\" back print beside a white Teknolohista shirt", w: 1440, h: 1080 },
  { name: "photo-02", alt: "Student in a black blazer holding a sticker-covered laptop", w: 1080, h: 1440 },
  { name: "photo-08", alt: "Model in a white Teknolohista shirt against a white wall", w: 1080, h: 1350 },
  { name: "photo-05", alt: "asciiSKOLAR shirt with a Teknolohista ng Bayan tote bag", w: 1080, h: 1350 },
  { name: "photo-12", alt: "Back of a navy \"ICT for the People!\" shirt", w: 1080, h: 1350 },
  { name: "photo-10", alt: "Two students at a computer, one in a Teknolohista shirt", w: 1440, h: 1080 },
  { name: "photo-04", alt: "Student at a desk with a clipboard and an ASCII-stickered laptop", w: 1080, h: 1440 },
  { name: "photo-06", alt: "Model in a Teknolohista shirt pointing to an ASCII sketchbook", w: 1080, h: 1350 },
  { name: "photo-14", alt: "Model stretching the collar of an asciiSKOLAR shirt", w: 1080, h: 1350 },
  { name: "photo-11", alt: "Three students posing in sunglasses with a Teknolohista tote bag", w: 1350, h: 1080 },
  { name: "photo-01", alt: "Student in a grey blazer typing at a keyboard", w: 960, h: 1440 },
  { name: "photo-13", alt: "Close crop of a white Teknolohista shirt and ASCII lanyard", w: 1080, h: 1350 },
  { name: "photo-07", alt: "Student in a black suit leaning back in an office chair", w: 960, h: 1440 },
];

const LOOKBOOK: Photo[] = [
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

function Lightbox({
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
        className="flex items-center justify-between px-6 md:px-8 py-4 text-[10px] tracking-[0.3em] uppercase"
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
          src={photoUrl(photo.name, "full")}
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
    </div>
  );
}

const PHOTOGRAPHY_LINKS = [
  { label: "ASCII merch post", url: "https://www.facebook.com/share/p/1E9K26jZBu/" },
  { label: "Published photos, part 1", url: "https://www.facebook.com/share/p/1FXjx4g85J/" },
  { label: "Published photos, part 2", url: "https://www.facebook.com/share/p/1C1q9Meo93/" },
];

const LOOKBOOK_LINKS = [
  { label: "SIPAT lookbook, part 1", url: "https://www.facebook.com/share/p/1Caryrf6J3/" },
  { label: "SIPAT lookbook, part 2", url: "https://www.facebook.com/share/p/19Y42KeuaQ/" },
];

function SourceLinks({ links }: { links: { label: string; url: string }[] }) {
  return (
    <div className="flex flex-wrap gap-3 mb-6 md:mb-8">
      {links.map((link) => (
        <a
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 border border-black px-4 py-1.5 text-[10px] tracking-[0.3em] uppercase hover:bg-black hover:text-white transition-all"
          style={{ fontFamily: "'Courier Prime', monospace" }}
        >
          {link.label} ↗
        </a>
      ))}
    </div>
  );
}

// Grid or strip of photos that open in the full-screen viewer
function PhotoSet({ photos, layout }: { photos: Photo[]; layout: "wall" | "strip" }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      {layout === "wall" ? (
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
      ) : (
        <div className="-mx-6 md:-mx-16 px-6 md:px-16 flex gap-3 md:gap-4 overflow-x-auto snap-x snap-mandatory scroll-px-6 md:scroll-px-16 pb-4">
          {photos.map((photo, i) => (
            <button
              key={photo.name}
              onClick={() => setOpen(i)}
              className="group shrink-0 snap-start h-[300px] md:h-[440px] overflow-hidden bg-neutral-200"
              style={{ aspectRatio: `${photo.w} / ${photo.h}` }}
              aria-label={`Open photo: ${photo.alt}`}
            >
              <img
                src={photoUrl(photo.name, "sm")}
                srcSet={`${photoUrl(photo.name, "sm")} 720w, ${photoUrl(photo.name, "full")} 1800w`}
                sizes={photo.w > photo.h ? "(min-width: 768px) 664px, 453px" : "(min-width: 768px) 291px, 199px"}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
              />
            </button>
          ))}
        </div>
      )}

      {open !== null && (
        <Lightbox photos={photos} index={open} onClose={() => setOpen(null)} onChange={setOpen} />
      )}
    </>
  );
}

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

        <div className="flex flex-wrap gap-3">
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
          {project.links?.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-black px-4 py-1.5 text-[10px] tracking-[0.3em] uppercase hover:bg-black hover:text-white transition-all"
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
        className="relative overflow-hidden bg-neutral-200 aspect-[4/3] cursor-grab active:cursor-grabbing border border-black touch-pan-y"
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
              aria-label={`Go to image ${i + 1}`}
              className="p-1.5 -m-1"
            >
              <span className={`block w-1.5 h-1.5 transition-all ${i === current ? "bg-black scale-125" : "bg-black/25"}`} />
            </button>
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
        className="border-b border-black/20 px-6 md:px-16 py-3 flex flex-wrap items-center gap-x-4 gap-y-2"
        style={{ fontFamily: "'Courier Prime', monospace" }}
      >
        <span className="text-[9px] tracking-[0.4em] uppercase text-black/40">{project.index}</span>
        <span className="text-[9px] tracking-[0.4em] uppercase">{project.name.toUpperCase()}</span>
        {project.note && (
          <>
            <div className="hidden sm:block flex-1 h-px bg-black/10" />
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
        <div className={`min-w-0 p-6 md:p-8 lg:p-10 ${project.flip ? "md:border-l border-black" : "md:border-r border-black"} border-b md:border-b-0`}>
          <ProjectCarousel images={project.images} />
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

const DARK_CSS = `
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


export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <div
      className="bg-white text-black min-h-screen overflow-x-hidden"
      style={{ fontFamily: "'Archivo', Arial, sans-serif" }}
    >
      <style>{DARK_CSS}</style>
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
          <div className="hidden md:flex items-center gap-8">
            {["About","Projects","Camera","Skills","Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[10px] tracking-[0.25em] uppercase hover:line-through transition-all"
                style={{ fontFamily: "'Courier Prime', monospace" }}
              >
                {item}
              </a>
            ))}
            <button
              onClick={() => setIsDark((d) => !d)}
              className="text-[10px] tracking-[0.25em] uppercase border border-current px-3 py-1 hover:bg-black hover:text-white transition-all"
              style={{ fontFamily: "'Courier Prime', monospace" }}
              aria-label="Toggle dark mode"
            >
              {isDark ? "LIGHT" : "DARK"}
            </button>
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
            {["About","Projects","Camera","Skills","Contact"].map((item) => (
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
            <button
              onClick={() => { setIsDark((d) => !d); setMenuOpen(false); }}
              className="text-left text-[11px] tracking-[0.3em] uppercase"
              style={{ fontFamily: "'Courier Prime', monospace" }}
            >
              {isDark ? "☀ LIGHT MODE" : "☾ DARK MODE"}
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen supports-[min-height:100svh]:min-h-[100svh] flex flex-col justify-end px-6 md:px-16 pb-12 md:pb-16 pt-32 overflow-hidden">
        <div className="absolute top-24 right-6 md:right-16">
          <MargieleNumbers />
        </div>
        <div className="relative z-10">
          <span
            className="block text-[14vw] md:text-[12vw] font-black leading-[0.88] tracking-[-0.04em] uppercase"
            style={{ fontFamily: "'Archivo', Arial, sans-serif" }}
          >
            BIEN
          </span>
          <div className="flex items-end gap-6">
            <span
              className="block text-[14vw] md:text-[12vw] font-black leading-[0.88] tracking-[-0.04em] uppercase"
              style={{ fontFamily: "'Archivo', Arial, sans-serif" }}
            >
              JERIC
            </span>
            {/* Desktop roles — beside the name */}
            <div
              className="hidden md:flex mb-2 lg:mb-4 flex-col gap-[2px] text-[10px] tracking-[0.25em] uppercase"
              style={{ fontFamily: "'Courier Prime', monospace" }}
            >
              {HERO_ROLES.map((role) => (
                <span key={role}>{role}</span>
              ))}
            </div>
          </div>
          <span
            className="block text-[14vw] md:text-[12vw] font-black leading-[0.88] tracking-[-0.04em] uppercase whitespace-nowrap"
            style={{ fontFamily: "'Archivo', Arial, sans-serif" }}
          >
            DELA PAZ
          </span>
          {/* Mobile roles — below the name so they don't push the lines apart */}
          <div
            className="md:hidden mt-5 flex flex-wrap gap-x-4 gap-y-1 text-[10px] tracking-[0.25em] uppercase"
            style={{ fontFamily: "'Courier Prime', monospace" }}
          >
            {HERO_ROLES.map((role) => (
              <span key={role}>{role}</span>
            ))}
          </div>
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

        <div className="grid grid-cols-1 md:grid-cols-[1fr_220px] lg:grid-cols-[1fr_280px] gap-12 md:gap-16 items-start">
          <div className="min-w-0">
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
                <span className="text-black/40 shrink-0 w-20">Location</span>
                <span>Marikina City</span>
              </div>
              <div className="flex gap-4 text-[11px] tracking-widest uppercase">
                <span className="text-black/40 shrink-0 w-20">Status</span>
                <span>BSCS 4-1N — Class President</span>
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
              className="absolute -bottom-6 left-0 md:-left-2 text-[9px] tracking-[0.3em] uppercase"
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
          className="px-6 md:px-16 py-8 flex items-center gap-4"
          style={{ fontFamily: "'Courier Prime', monospace" }}
        >
          <span className="text-[10px] tracking-[0.4em] uppercase text-black/40">02</span>
          <div className="flex-1 min-w-4 h-px bg-black/20" />
          <span className="text-[10px] tracking-[0.2em] sm:tracking-[0.4em] uppercase text-right">Lookbook — Selected Works</span>
        </div>

        {/* Editorial label strip */}
        <div className="border-t border-b border-black px-6 md:px-16 py-2 bg-black">
          <p
            className="text-[9px] tracking-[0.3em] sm:tracking-[0.5em] leading-relaxed uppercase text-white"
            style={{ fontFamily: "'Courier Prime', monospace" }}
          >
            {MARGIELA_NUMBERS.join("  ")} — Ten Projects, Ten Modules
          </p>
        </div>

        {PROJECTS.map((project) => (
          <ProjectModule key={project.id} project={project} />
        ))}

        {STATIC_PROJECTS.map((project) => (
          <StaticProjectModule key={project.index} project={project} />
        ))}
      </section>

      {/* BEHIND THE CAMERA */}
      <section id="camera" className="relative px-6 md:px-16 py-16 md:py-24 border-b border-black">
        <div className="mb-12 flex items-center gap-4" style={{ fontFamily: "'Courier Prime', monospace" }}>
          <span className="text-[10px] tracking-[0.4em] uppercase text-black/40">03</span>
          <div className="flex-1 h-px bg-black/20" />
          <span className="text-[10px] tracking-[0.4em] uppercase">Behind the Camera</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-6 md:gap-16 mb-16 md:mb-24 items-end">
          <h2
            className="text-4xl md:text-5xl font-black uppercase leading-tight tracking-tight"
            style={{ fontFamily: "'Archivo', Arial, sans-serif" }}
          >
            Photo, Film & Lookbook
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed max-w-xl"
            style={{ fontFamily: "'EB Garamond', Georgia, serif" }}
          >
            Photography taught me composition and light, video taught me pacing, and modeling taught me how a
            brand presents itself. I bring that same eye to every interface I design.
          </p>
        </div>

        {/* Photography */}
        <div className="mb-20 md:mb-28">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-4">
            <h3
              className="text-2xl md:text-3xl font-black uppercase leading-tight tracking-tight"
              style={{ fontFamily: "'Archivo', Arial, sans-serif" }}
            >
              Photography
            </h3>
            <p
              className="text-base md:text-lg text-black/60"
              style={{ fontFamily: "'EB Garamond', Georgia, serif", fontStyle: "italic" }}
            >
              Shot by me · Teknolohista ng Bayan merch campaign for ASCII, PUP Manila
            </p>
          </div>
          <SourceLinks links={PHOTOGRAPHY_LINKS} />
          <PhotoSet photos={PHOTOGRAPHY} layout="wall" />
        </div>

        {/* Video */}
        <div className="mb-20 md:mb-28">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-6 md:mb-8">
            <h3
              className="text-2xl md:text-3xl font-black uppercase leading-tight tracking-tight"
              style={{ fontFamily: "'Archivo', Arial, sans-serif" }}
            >
              Video & Film
            </h3>
            <p
              className="text-base md:text-lg text-black/60"
              style={{ fontFamily: "'EB Garamond', Georgia, serif", fontStyle: "italic" }}
            >
              Fisheye and VHS camcorder work, shot and edited in Premiere Pro
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-14">
            {VIDEOS.map((video, i) => (
              <VideoCard key={video.id} video={video} featured={i === 0} />
            ))}
          </div>
        </div>

        {/* Modeling */}
        <div>
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-4">
            <h3
              className="text-2xl md:text-3xl font-black uppercase leading-tight tracking-tight"
              style={{ fontFamily: "'Archivo', Arial, sans-serif" }}
            >
              Modeling
            </h3>
            <p
              className="text-base md:text-lg text-black/60"
              style={{ fontFamily: "'EB Garamond', Georgia, serif", fontStyle: "italic" }}
            >
              Modeled for SIPAT Merchandise by UP GEOP
            </p>
          </div>
          <SourceLinks links={LOOKBOOK_LINKS} />
          <PhotoSet photos={LOOKBOOK} layout="strip" />
          <p
            className="mt-2 text-[9px] tracking-[0.3em] uppercase text-black/40"
            style={{ fontFamily: "'Courier Prime', monospace" }}
          >
            Scroll →
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="relative px-6 md:px-16 py-16 md:py-24 border-b border-black">
        <div className="mb-12 flex items-center gap-4" style={{ fontFamily: "'Courier Prime', monospace" }}>
          <span className="text-[10px] tracking-[0.4em] uppercase text-black/40">04</span>
          <div className="flex-1 h-px bg-black/20" />
          <span className="text-[10px] tracking-[0.4em] uppercase">Competencies</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="min-w-0 border border-black p-6 md:p-8 lg:p-12" style={{ fontFamily: "'Courier Prime', monospace" }}>
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
                  <div key={item} className="flex justify-between gap-3 text-[13px] py-0.5">
                    <span className="min-w-0 break-words">· {item}</span>
                    <span className="text-black/30 shrink-0">✓</span>
                  </div>
                ))}
              </div>
            ))}
            <div className="border-t border-dashed border-black pt-4 text-center text-[9px] tracking-widest uppercase text-black/40">
              COMPETENCY TOTAL: {SKILLS.reduce((acc, s) => acc + s.items.length, 0)} ITEMS
            </div>
          </div>

          <div className="min-w-0 border border-black md:border-l-0 border-t-0 md:border-t p-6 md:p-8 lg:p-12 flex flex-col" style={{ fontFamily: "'Courier Prime', monospace" }}>
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
          <span className="text-[10px] tracking-[0.4em] uppercase text-black/40">05</span>
          <div className="flex-1 h-px bg-black/20" />
          <span className="text-[10px] tracking-[0.4em] uppercase">Education & Credentials</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 [&>*]:min-w-0">
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
        data-keep-dark=""
        className="relative px-6 md:px-16 pt-16 md:pt-24 pb-12 md:pb-16 bg-black text-white overflow-hidden"
      >
        <div
          className="absolute top-8 right-6 md:right-8 text-white/5 text-[72px] md:text-[120px] font-black leading-none select-none pointer-events-none"
          style={{ fontFamily: "'Archivo', Arial, sans-serif" }}
        >
          06
        </div>

        <div className="mb-16 flex items-center gap-4" style={{ fontFamily: "'Courier Prime', monospace" }}>
          <span className="text-[10px] tracking-[0.4em] uppercase text-white/30">06</span>
          <div className="flex-1 h-px bg-white/20" />
          <span className="text-[10px] tracking-[0.4em] uppercase text-white">Contact</span>
        </div>

        {/* Primary emails */}
        <div className="mb-12 overflow-hidden flex flex-col gap-2">
          <a
            href="mailto:bienjericdelapaz9@gmail.com"
            className="block text-[4.4vw] sm:text-[3vw] md:text-[2.2vw] font-black uppercase leading-tight tracking-tight hover:text-white/60 transition-colors break-all"
            style={{ fontFamily: "'Archivo', Arial, sans-serif" }}
          >
            bienjericdelapaz9@gmail.com
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 border-t border-white/20 pt-8 md:pt-12 [&>*]:min-w-0 [&_a]:break-all">
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
          <div className="flex items-center justify-between gap-4">
            <div className="min-w-0">
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
