import { expect, test, type Page } from "@playwright/test";

const SECTIONS = ["About", "Experience", "Projects", "Creative", "Skills", "Contact"];

const isMobile = (page: Page) => (page.viewportSize()?.width ?? 0) < 768;

async function expectNoSidewaysScroll(page: Page) {
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  expect(overflow, "page is wider than the screen").toBeLessThanOrEqual(0);
}

test.describe("Main page", () => {
  test("shows the hero name", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("BIEN", { exact: true })).toBeVisible();
    await expect(page.getByText("DELA PAZ", { exact: true })).toBeVisible();
  });

  test("first screen says the role and has both buttons", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("Web Designer & Developer", { exact: true })).toBeInViewport();
    const cv = page.getByRole("link", { name: "Download CV ↓" });
    await expect(cv).toBeInViewport();
    await expect(cv).toHaveAttribute("download", "Dela-Paz-Resume.pdf");
    const download = page.waitForEvent("download");
    await cv.click();
    expect((await download).suggestedFilename()).toBe("Dela-Paz-Resume.pdf");
    await page.getByRole("link", { name: "View my work →" }).click();
    await expect(page.locator("#experience")).toBeInViewport();
  });

  test("can be found and shared: title, preview image, no noindex", async ({ page, request }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Bien Jeric Dela Paz/);
    await expect(page.locator('meta[name="robots"][content*="noindex"]')).toHaveCount(0);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", /web designer/i);
    for (const path of ["/og-image.jpg", "/favicon.svg", "/Dela-Paz-Resume.pdf"]) {
      expect((await request.get(path)).status(), path).toBe(200);
    }
  });

  test("every nav link jumps to its section", async ({ page }) => {
    await page.goto("/");
    for (const name of SECTIONS) {
      if (isMobile(page)) await page.getByRole("button", { name: "Toggle menu" }).click();
      await page.locator("nav").getByRole("link", { name, exact: true }).click();
      await expect(page.locator(`#${name.toLowerCase()}`)).toBeInViewport();
    }
  });

  test("film strip frames open the right part of the creative page", async ({ page }) => {
    // Reduced motion stops the strip so a frame can be clicked
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/#creative");

    const frames = page.locator(".filmstrip a:not([aria-hidden])");
    await expect(frames).toHaveCount(18);
    for (const href of await frames.evaluateAll((links) => links.map((a) => a.getAttribute("href")))) {
      expect(href).toMatch(/^\/creative#(photography|video|modeling)$/);
    }

    await frames.first().click();
    await expect(page).toHaveURL(/\/creative#photography$/);
    await expect(page.locator("#photography")).toBeInViewport();
  });

  test('"View all creative work" opens the creative page', async ({ page }) => {
    await page.goto("/#creative");
    await page.getByRole("link", { name: "View all creative work" }).click();
    await expect(page).toHaveURL(/\/creative$/);
    await expect(page.getByRole("heading", { level: 1 })).toContainText("In Front of the Camera");
  });

  test("nothing sticks out sideways", async ({ page }) => {
    await page.goto("/");
    await expectNoSidewaysScroll(page);
  });

  test("dark mode has a visible toggle and stays on across pages", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: /Switch to dark mode|Toggle dark mode/ }).locator("visible=true").click();
    await expect(page.locator("html")).toHaveClass(/dark/);
    await page.goto("/creative");
    await expect(page.locator("html")).toHaveClass(/dark/);
    await page.getByRole("button", { name: /Switch to light mode|Toggle dark mode/ }).locator("visible=true").click();
    await expect(page.locator("html")).not.toHaveClass(/dark/);
  });
});

test.describe("Creative page", () => {
  test("has all three parts", async ({ page }) => {
    await page.goto("/creative");
    for (const title of ["Photography", "Video & Film", "Modeling"]) {
      await expect(page.getByRole("heading", { level: 2, name: title })).toBeVisible();
    }
    await expect(page.getByRole("button", { name: /^Open photo:/ })).toHaveCount(14 + 10);
    await expect(page.getByRole("button", { name: /^Play / })).toHaveCount(5);
  });

  test("top bar links jump to each part", async ({ page }) => {
    await page.goto("/creative");
    for (const [label, id] of [["Photography", "photography"], ["Video", "video"], ["Modeling", "modeling"]]) {
      await page.locator("nav").getByRole("link", { name: label, exact: true }).click();
      await expect(page.locator(`#${id}`)).toBeInViewport();
    }
  });

  test("photo viewer opens, moves with the arrow keys and closes with Esc", async ({ page }) => {
    await page.goto("/creative#photography");
    await page.getByRole("button", { name: /^Open photo:/ }).first().click();

    const viewer = page.getByRole("dialog");
    await expect(viewer).toBeVisible();
    await expect(viewer).toContainText("1/14");

    await page.keyboard.press("ArrowRight");
    await expect(viewer).toContainText("2/14");
    await page.keyboard.press("ArrowLeft");
    await page.keyboard.press("ArrowLeft");
    await expect(viewer).toContainText("14/14");

    await page.keyboard.press("Escape");
    await expect(viewer).toBeHidden();
  });

  test("photo viewer closes with its Close button", async ({ page }) => {
    await page.goto("/creative#modeling");
    await page.locator("#modeling").getByRole("button", { name: /^Open photo:/ }).first().click();
    await expect(page.getByRole("dialog")).toContainText("1/10");
    await page.getByRole("dialog").getByRole("button", { name: "Close", exact: true }).click();
    await expect(page.getByRole("dialog")).toBeHidden();
  });

  test("a video's play button loads the YouTube player", async ({ page }) => {
    // Don't actually stream from YouTube during tests
    await page.route(/youtube-nocookie\.com/, (route) => route.fulfill({ body: "<html></html>", contentType: "text/html" }));
    await page.goto("/creative#video");
    await page.getByRole("button", { name: /^Play / }).first().click();
    await expect(page.locator('iframe[src*="youtube-nocookie.com/embed/"]')).toHaveCount(1);
  });

  test("play buttons stay white in dark mode", async ({ page }) => {
    await page.goto("/creative#video");
    await page.evaluate(() => document.documentElement.classList.add("dark"));
    const playSquare = page.getByRole("button", { name: /^Play / }).first().locator("span span");
    await expect(playSquare).toHaveCSS("background-color", "rgb(255, 255, 255)");
    await expect(playSquare).toHaveCSS("color", "rgb(0, 0, 0)");
  });

  test('"Back to portfolio" returns to the creative section', async ({ page }) => {
    await page.goto("/creative");
    await page.getByRole("link", { name: "← Back to portfolio" }).click();
    await expect(page).toHaveURL(/\/#creative$/);
    await expect(page.locator("#creative")).toBeInViewport();
  });

  test("every photo file loads", async ({ page, request }) => {
    await page.goto("/creative");
    const sources = await page.locator("main, section").locator("img").evaluateAll((imgs) =>
      imgs.map((img) => (img as HTMLImageElement).getAttribute("src")!).filter((src) => src.startsWith("/")),
    );
    expect(sources.length).toBeGreaterThanOrEqual(24);
    for (const src of new Set(sources)) {
      const response = await request.get(src);
      expect(response.status(), src).toBe(200);
    }
  });

  test("outside links open in a new tab", async ({ page }) => {
    await page.goto("/creative");
    const external = page.locator('a[href^="http"]');
    expect(await external.count()).toBeGreaterThan(0);
    for (const link of await external.all()) {
      await expect(link).toHaveAttribute("target", "_blank");
    }
  });

  test("nothing sticks out sideways", async ({ page }) => {
    await page.goto("/creative");
    await expectNoSidewaysScroll(page);
  });
});
