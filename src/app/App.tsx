import { useEffect, useRef, useState } from "react";
import { DARK_CSS, DarkToggleIcon, LOOKBOOK, NoiseOverlay, PHOTOGRAPHY, photoUrl, useDarkMode, VIDEOS } from "./shared";

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

// — LumenID screenshots
import lumenAdminIssuer from "@/assets/ADMIN_ISSUER.webp";
import lumenHome        from "@/assets/lumenhome.webp";
import lumenUserDash    from "@/assets/USER_DASH.webp";
import lumenUserVault   from "@/assets/USER_VAULT.webp";
import lumenUser        from "@/assets/USER.webp";
import lumenVerify      from "@/assets/verify.webp";

// — SentiNet screenshots
import sentiAdminDashboard from "@/assets/admindashboard.webp";
import sentiAgentDashboard from "@/assets/AGENT_DASHBOARD.webp";
import sentiAgentRegister  from "@/assets/AGENTregister.webp";
import sentiAnalytics      from "@/assets/analytics.webp";
import sentiAdmin          from "@/assets/admin.webp";

// — CarPayLater screenshots
import bpiHome from "@/assets/homebpi.webp";

// — Camarines Norte screenshots
import camHome    from "@/assets/HOMEE.webp";
import camTop     from "@/assets/top.webp";
import camFesti   from "@/assets/festi.webp";
import camPlanTrip from "@/assets/plantrip.webp";
import camContact  from "@/assets/contactkaya.webp";

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
  flip: boolean;
};

const PROJECTS: Project[] = [
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
      { url: camHome,     caption: "Home — 01/05" },
      { url: camTop,      caption: "Top Destinations — 02/05" },
      { url: camFesti,    caption: "Festivals — 03/05" },
      { url: camPlanTrip, caption: "Plan Your Trip — 04/05" },
      { url: camContact,  caption: "Contact — 05/05" },
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
    images: [
      { url: sentiAdminDashboard, caption: "Admin Dashboard — 01/05" },
      { url: sentiAnalytics,      caption: "Analytics — 02/05" },
      { url: sentiAgentDashboard, caption: "Agent Dashboard — 03/05" },
      { url: sentiAgentRegister,  caption: "Agent Registration — 04/05" },
      { url: sentiAdmin,          caption: "Admin Login — 05/05" },
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

// Compact card for the projects without screenshots: the bullets stay one tap away
function StaticProjectCard({ project }: { project: StaticProject }) {
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

function ProjectCarousel({ images, aspect = "aspect-[4/3]" }: { images: Project["images"]; aspect?: string }) {
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
        className={`relative overflow-hidden bg-neutral-200 ${aspect} cursor-grab active:cursor-grabbing border border-black touch-pan-y`}
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

      <style>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateX(10px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}

type ExperienceGalleryProps = {
  galleries: { label: string; images: Project["images"] }[];
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
        <div className="flex border border-black" role="tablist">
          {galleries.map((gallery, i) => (
            <button
              key={gallery.label}
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={`px-4 py-1.5 text-[12px] tracking-[0.3em] uppercase transition-colors ${i > 0 ? "border-l border-black" : ""} ${i === active ? "bg-black text-white" : "hover:bg-black/5"}`}
            >
              {gallery.label}
            </button>
          ))}
        </div>
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

function ProjectModule({ project }: { project: Project }) {
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

        {PROJECTS.map((project) => (
          <ProjectModule key={project.id} project={project} />
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
