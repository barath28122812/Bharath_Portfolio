const fs = require('fs');

const html = fs.readFileSync('aboutdean.html', 'utf8');

const regex = /<div[^>]*class="[^"]*framer-r1e4h[^"]*"[^>]*data-framer-name="Full"[\s\S]*?<\/div>\s*<\/div>/g;
let m;
let i = 0;
while ((m = regex.exec(html)) !== null) {
  i++;
  const start = m.index;
  const before = html.substring(Math.max(0, start - 500), start);
  const after = html.substring(start + m[0].length, Math.min(html.length, start + m[0].length + 500));
  
  console.log(`\n=== "Full" Star Container #${i} ===`);
  const names = before.match(/data-framer-name="([^"]+)"/g);
  console.log('Preceding names:', names ? names.slice(-5) : null);
  console.log('Star count:', (m[0].match(/framer-Gf2HJ/g) || []).length);
  // print surrounding parent tag
  const parent = before.split('<').slice(-2).join('<');
  console.log('Parent container:', parent);
}
