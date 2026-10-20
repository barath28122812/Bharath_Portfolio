const fs = require('fs');

const html = fs.readFileSync('aboutdean.html', 'utf8');

// Let's find sections or contexts where framer-r1e4h or framer-Gf2HJ appears
const regex = /<([^>]+class="[^"]*(?:framer-r1e4h|framer-Gf2HJ)[^"]*"[^>]*)>/g;
let match;
let count = 0;

// Also look at the structure around each framer-r1e4h
const r1e4hRegex = /<div[^>]*class="[^"]*framer-r1e4h[^"]*"[^>]*>([\s\S]*?)<\/div>/g;
const containers = [];

while ((match = r1e4hRegex.exec(html)) !== null && count < 10) {
  const index = match.index;
  const before = html.substring(Math.max(0, index - 300), index);
  console.log(`\n--- Instance ${count + 1} ---`);
  // Get nearest parent or section name
  const parentNameMatch = before.match(/data-framer-name="([^"]+)"/g);
  console.log('Nearby names:', parentNameMatch);
  console.log('Matched snippet:', match[0].substring(0, 150));
  count++;
}
