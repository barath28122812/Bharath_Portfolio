const fs = require('fs');

const html = fs.readFileSync('aboutdean.html', 'utf8');

const idx = html.indexOf('framer-x71g8f-container');
if (idx !== -1) {
  const before = html.substring(Math.max(0, idx - 1000), idx);
  console.log('Preceding names for x71g8f:');
  console.log(before.match(/data-framer-name="([^"]+)"/g));
  console.log('Snippet before x71g8f:');
  console.log(before.slice(-400));
}
