const fs = require('fs');

const html = fs.readFileSync('aboutdean.html', 'utf8');

const sIdx = html.indexOf('data-framer-name="Services"');
const nextIdx = html.indexOf('data-framer-name="Process"', sIdx);
const servicesChunk = html.substring(sIdx, nextIdx);

console.log('Services chunk length:', servicesChunk.length);
const starMatches = [...servicesChunk.matchAll(/framer-r1e4h[\s\S]*?<\/div>\s*<\/div>/g)];
console.log('Star containers in Services:', starMatches.length);
starMatches.forEach((m, idx) => {
  console.log(`Match ${idx + 1}:`, m[0]);
});
