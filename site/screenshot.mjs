import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { join, extname, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, 'dist');
const PORT = 4322;
const OUT = process.argv[2] || '/tmp';

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
};

const server = createServer(async (req, res) => {
  try {
    let urlPath = decodeURIComponent(req.url.split('?')[0]);
    if (urlPath.endsWith('/')) urlPath += 'index.html';
    let filePath = join(DIST, urlPath);
    if (!extname(filePath)) filePath = join(DIST, urlPath, 'index.html');
    const data = await readFile(filePath);
    res.writeHead(200, { 'content-type': MIME[extname(filePath)] || 'application/octet-stream' });
    res.end(data);
  } catch {
    res.writeHead(404);
    res.end('not found');
  }
});

await new Promise((r) => server.listen(PORT, r));

const browser = await puppeteer.launch();
const pages = [
  ['/don', 'don'], ['/contact', 'contact'], ['/nouvelles', 'nouvelles'],
  
  
];

for (const [path, name] of pages) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 1000, deviceScaleFactor: 1 });
  await page.goto(`http://localhost:${PORT}${path}`, { waitUntil: 'networkidle0' });
  // rendre visibles tous les blocs animés pour la capture
  await page.evaluate(() => {
    document.querySelectorAll('[data-animate]').forEach((el) => el.classList.add('visible'));
    window.scrollTo(0, document.body.scrollHeight);
  });
  await new Promise((r) => setTimeout(r, 800));
  await page.screenshot({ path: join(OUT, `${name}.png`), fullPage: true });
  console.log(`${name}.png`);
  await page.close();
}

await browser.close();
server.close();
