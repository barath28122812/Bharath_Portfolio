const fs = require('fs');

const html = fs.readFileSync('aboutdean.html', 'utf8');

// Let's search for all elements with framer-r1e4h (which renders the 4-corner stars)
// and see which parent sections they belong to.
const regex = /<div[^>]*class="[^"]*framer-r1e4h[^"]*framer-v-([a-zA-Z0-9]+)[^"]*"[^>]*data-framer-name="([^"]+)"([\s\S]*?)<\/div>/g;
let m;
while ((m = regex.exec(html)) !== null) {
  const variant = m[1];
  const name = m[2];
  const inner = m[3];
  const starCount = (inner.match(/framer-Gf2HJ/g) || []).length;
  
  // Find context: 200 chars before
  const before = html.substring(Math.max(0, m.index - 300), m.index);
  const sectionMatch = before.match(/data-framer-name="([^"]+)"/g);
  
  if (starCount > 0) {
    console.log(`Star container: variant=${variant}, name=${name}, stars=${starCount}, near=[${sectionMatch ? sectionMatch.join(' > ') : 'none'}]`);
  }
}
