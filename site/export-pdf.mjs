import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { join, extname, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, 'dist');
const PORT = 4321;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.json': 'application/json',
};

const server = createServer(async (req, res) => {
  try {
    let urlPath = decodeURIComponent(req.url.split('?')[0]);
    if (urlPath.endsWith('/')) urlPath += 'index.html';
    let filePath = join(DIST, urlPath);
    try {
      const s = await stat(filePath);
      if (s.isDirectory()) filePath = join(filePath, 'index.html');
    } catch {
      if (!extname(filePath)) filePath += '/index.html';
    }
    const buf = await readFile(filePath);
    res.writeHead(200, { 'Content-Type': MIME[extname(filePath)] || 'application/octet-stream' });
    res.end(buf);
  } catch (e) {
    res.writeHead(404);
    res.end('404');
  }
});

await new Promise((r) => server.listen(PORT, r));
console.log(`Serving ${DIST} on http://localhost:${PORT}`);

const browser = await puppeteer.launch({ headless: 'new' });
const pages = [
  { url: `http://localhost:${PORT}/`, out: 'mouvement-espoir-accueil.pdf' },
  { url: `http://localhost:${PORT}/histoire/`, out: 'mouvement-espoir-histoire.pdf' },
];

for (const { url, out } of pages) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 1800, deviceScaleFactor: 2 });
  await page.emulateMediaType('screen');
  await page.goto(url, { waitUntil: 'networkidle0' });

  // Force animations to "in view": disable transitions/animations and reveal hidden-on-scroll content
  // Also hide fixed/sticky overlays (header) so they don't cover printed content.
  await page.addStyleTag({
    content: `
      *, *::before, *::after {
        animation: none !important;
        transition: none !important;
      }
      [class*="opacity-0"], [data-aos], [class*="translate"], [class*="reveal"] {
        opacity: 1 !important;
        transform: none !important;
      }
      header.header, #header, .header {
        position: static !important;
      }
    `,
  });

  // Scroll the page to trigger any IntersectionObservers / lazy loads
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let y = 0;
      const step = 200;
      const timer = setInterval(() => {
        window.scrollTo(0, y);
        y += step;
        if (y >= document.body.scrollHeight) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          resolve();
        }
      }, 80);
    });
  });

  // Force everything visible (catch-all for IntersectionObserver-driven reveals)
  await page.evaluate(() => {
    document.querySelectorAll('*').forEach((el) => {
      const cs = getComputedStyle(el);
      if (cs.opacity === '0' || cs.visibility === 'hidden') {
        el.style.opacity = '1';
        el.style.visibility = 'visible';
        el.style.transform = 'none';
      }
    });
    window.scrollTo(0, 0);
  });

  await new Promise((r) => setTimeout(r, 800));

  const outPath = join(__dirname, out);
  await page.pdf({
    path: outPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '0mm', right: '0mm', bottom: '0mm', left: '0mm' },
    preferCSSPageSize: false,
  });
  console.log(`✓ ${outPath}`);
  await page.close();
}

await browser.close();
server.close();
console.log('Done.');
