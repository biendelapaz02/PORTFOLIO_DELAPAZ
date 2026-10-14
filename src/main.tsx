
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import Creative from "./app/Creative.tsx";
  import "./styles/index.css";

  // Two pages: the portfolio and the creative work (Vercel rewrites every path to index.html)
  const isCreative = window.location.pathname.replace(/\/+$/, "") === "/creative";

  createRoot(document.getElementById("root")!).render(isCreative ? <Creative /> : <App />);
