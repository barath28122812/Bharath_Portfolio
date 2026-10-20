const fs = require('fs');

const html = fs.readFileSync('aboutdean.html', 'utf8');

// Find all elements with data-framer-name
const sectionRegex = /<(section|header|footer|div)[^>]*data-framer-name="([^"]+)"[^>]*>/g;
let m;
const list = [];
while ((m = sectionRegex.exec(html)) !== null) {
  if (['Hero', 'Projects', 'About', 'Services', 'Process', 'Testimonial', 'FAQ', 'Contact', 'Footer', 'Header'].includes(m[2])) {
    list.push({ tag: m[1], name: m[2], index: m.index });
  }
}

for (let i = 0; i < list.length; i++) {
  const current = list[i];
  const next = list[i + 1] ? list[i + 1].index : html.length;
  const chunk = html.substring(current.index, next);
  
  // Stars in chunk
  const starCount = (chunk.match(/framer-Gf2HJ/g) || []).length;
  const r1e4hCount = (chunk.match(/framer-r1e4h/g) || []).length;
  
  // Star variants
  const variants = [...chunk.matchAll(/data-framer-name="(Full|Up|Down|None)"/g)].map(x => x[1]);
  
  console.log(`\n========================================`);
  console.log(`Section: <${current.tag}> data-framer-name="${current.name}"`);
  console.log(`Length: ${chunk.length} chars`);
  console.log(`Total stars (framer-Gf2HJ): ${starCount}`);
  console.log(`Total containers (framer-r1e4h): ${r1e4hCount}`);
  console.log(`Variants:`, variants);
}
