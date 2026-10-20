const fs = require('fs');

const html = fs.readFileSync('aboutdean.html', 'utf8');

// Search for all elements that have border
// Framer uses data-border="true"
const borderMatches = [...html.matchAll(/<([a-zA-Z0-9]+)[^>]*data-border="true"[^>]*>/g)];
console.log('Total elements with data-border="true":', borderMatches.length);

const borderClasses = new Set();
borderMatches.forEach(m => {
  const cls = m[0].match(/class="([^"]+)"/);
  const name = m[0].match(/data-framer-name="([^"]+)"/);
  console.log(`Tag <${m[1]}> name="${name ? name[1] : ''}" class="${cls ? cls[1] : ''}"`);
});
