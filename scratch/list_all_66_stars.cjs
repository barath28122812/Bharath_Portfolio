const fs = require('fs');
const html = fs.readFileSync('aboutdean.html', 'utf8');

// Find every framer-Gf2HJ
const regex = /class="[^"]*framer-Gf2HJ[^"]*"/g;
let m;
let i = 0;
const results = [];

while ((m = regex.exec(html)) !== null) {
  i++;
  const idx = m.index;
  // Look backwards for parent with data-framer-name
  const before = html.substring(Math.max(0, idx - 800), idx);
  const names = [...before.matchAll(/data-framer-name="([^"]+)"/g)].map(x => x[1]);
  const classes = [...before.matchAll(/class="([^"]+)"/g)].map(x => x[1]);
  const parentContainer = before.match(/framer-[a-zA-Z0-9]+-container/g)?.slice(-1)[0];
  const starClass = m[0];
  
  results.push({
    starIndex: i,
    starClass: starClass,
    parentContainer: parentContainer,
    names: names.slice(-4),
    // get immediate enclosing tag
    lastTag: before.slice(before.lastIndexOf('<'))
  });
}

console.log(`Found ${results.length} stars.`);
// Group by nearby section / names
results.forEach(r => {
  console.log(`#${r.starIndex} [${r.parentContainer}]: ${r.names.join(' > ')} -> ${r.starClass}`);
});
