
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import Creative from "./app/Creative.tsx";
  import Projects from "./app/Projects.tsx";
  import "./styles/index.css";

  // Three pages: the portfolio, all projects, and the creative work (Vercel rewrites every path to index.html)
  const path = window.location.pathname.replace(/\/+$/, "");
  const Page = path === "/creative" ? Creative : path === "/projects" ? Projects : App;

  createRoot(document.getElementById("root")!).render(<Page />);
