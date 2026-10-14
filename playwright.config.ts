import { defineConfig, devices } from "@playwright/test";

const LOCAL_URL = "http://localhost:4173";
const LIVE_URL = "https://portfolio-delapaz.vercel.app";

// Uses the Chrome already installed on this PC, so no browser download is needed
const desktop = { ...devices["Desktop Chrome"], channel: "chrome", viewport: { width: 1440, height: 900 } };
const mobile = { ...devices["Pixel 7"], channel: "chrome" };

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  retries: 1,
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
  },
  projects: [
    // pnpm test: the local build
    { name: "desktop", use: { ...desktop, baseURL: LOCAL_URL } },
    { name: "mobile", use: { ...mobile, baseURL: LOCAL_URL } },
    // pnpm test:live: the deployed site
    { name: "live-desktop", use: { ...desktop, baseURL: LIVE_URL } },
    { name: "live-mobile", use: { ...mobile, baseURL: LIVE_URL } },
  ],
  // Builds and serves the site for the local projects (reuses a server that is already running)
  webServer: {
    command: "npx vite build && npx vite preview --port 4173 --strictPort",
    url: LOCAL_URL,
    reuseExistingServer: true,
    timeout: 120_000,
  },
});
