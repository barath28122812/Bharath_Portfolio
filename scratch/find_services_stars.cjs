const fs = require('fs');

const html = fs.readFileSync('aboutdean.html', 'utf8');

const sIdx = html.indexOf('data-framer-name="Title"');
// Let's find around "SERVICES" or "Title" in Services
const idx = html.indexOf('SERVICES');
if (idx !== -1) {
  const snippet = html.substring(idx - 1500, idx + 1500);
  console.log('Snippet around SERVICES:');
  const r1e4h = snippet.match(/<div[^>]*class="[^"]*framer-r1e4h[^"]*"[\s\S]*?<\/div>\s*<\/div>/g);
  console.log('r1e4h matches:', r1e4h);
  
  // Also check parent container of r1e4h
  const containers = snippet.match(/class="[^"]*framer-[a-zA-Z0-9]+-container[^"]*"/g);
  console.log('Containers near SERVICES:', containers);
}
