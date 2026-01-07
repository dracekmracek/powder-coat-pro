/**
 * Post-build skript pro opravu cest k favicon
 * Spouští se automaticky po npm run build
 */
const fs = require('fs');
const path = require('path');

const distPath = path.resolve(__dirname, '..', 'dist');
const indexPath = path.join(distPath, 'index.html');

if (fs.existsSync(indexPath)) {
  let html = fs.readFileSync(indexPath, 'utf8');
  
  // Nahraď hashované favicon cesty za statické
  html = html.replace(/href="\/assets\/favicon-[^"]+\.ico"/g, 'href="/favicon.ico"');
  html = html.replace(/href="\/assets\/apple-touch-icon[^"]+\.png"/g, 'href="/images/favicon/apple-touch-icon.png"');
  html = html.replace(/href="\/assets\/favicon-32x32[^"]+\.png"/g, 'href="/images/favicon/favicon-32x32.png"');
  html = html.replace(/href="\/assets\/favicon-16x16[^"]+\.png"/g, 'href="/images/favicon/favicon-16x16.png"');
  html = html.replace(/href="\/assets\/site[^"]+\.webmanifest"/g, 'href="/images/favicon/site.webmanifest"');
  
  fs.writeFileSync(indexPath, html);
  console.log('✓ Favicon paths fixed in index.html');
} else {
  console.error('✗ dist/index.html not found');
  process.exit(1);
}
