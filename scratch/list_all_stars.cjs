const fs = require('fs');
const html = fs.readFileSync('aboutdean.html', 'utf8');

const regex = /<div[^>]*class="[^"]*framer-r1e4h[^"]*"[^>]*>([\s\S]*?)<\/div>/g;
let match;
let i = 0;
while ((match = regex.exec(html)) !== null) {
  i++;
  const fullMatch = match[0];
  const inner = match[1];
  const start = match.index;
  const context = html.slice(Math.max(0, start - 400), start);
  const parentTag = context.split('<').pop();
  
  // Extract aria-label or section names or ids from context
  const idMatch = context.match(/id="([^"]+)"/g);
  const nameMatch = context.match(/data-framer-name="([^"]+)"/g);
  const tagMatch = context.match(/<(section|header|footer|div|main)[^>]*$/);
  
  console.log(`\n=== Star Container #${i} ===`);
  console.log('Class:', fullMatch.match(/class="([^"]+)"/)?.[1]);
  console.log('Contains stars:', (inner.match(/framer-Gf2HJ/g) || []).length);
  console.log('Star positions:', inner.match(/framer-(?:m9mvp8|2328nn|vvrf56|1sivco4)/g));
  console.log('Preceding names:', nameMatch ? nameMatch.slice(-3) : null);
  console.log('Preceding IDs:', idMatch ? idMatch.slice(-2) : null);
}
