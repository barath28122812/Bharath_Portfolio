const fs = require('fs');
const html = fs.readFileSync('aboutdean.html', 'utf8');

const regex = /<div[^>]*framer-16wkbmu[^>]*>[\s\S]*?<\/div>/;
const match = html.match(regex);
if (match) {
  console.log('Matched framer-16wkbmu HTML:');
  console.log(match[0].slice(0, 1000));
} else {
  console.log('No direct regex match, searching index...');
  let pos = 0;
  while ((pos = html.indexOf('16wkbmu', pos)) !== -1) {
    console.log('Found at pos:', pos);
    console.log(html.substring(pos - 50, pos + 200));
    pos += 7;
  }
}
