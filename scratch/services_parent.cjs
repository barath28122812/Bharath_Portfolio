const fs = require('fs');
const html = fs.readFileSync('aboutdean.html', 'utf8');

const sIdx = html.indexOf('data-framer-name="Services"');
const idx = html.indexOf('data-framer-name="Full"', sIdx);
console.log('Services Full index:', idx);
if (idx !== -1) {
  console.log(html.substring(idx - 400, idx + 200));
}
