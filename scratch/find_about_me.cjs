const fs = require('fs');
const html = fs.readFileSync('aboutdean.html', 'utf8');

const idx = html.indexOf('ABOUT ME');
console.log('ABOUT ME index:', idx);
if (idx !== -1) {
  const snippet = html.substring(idx - 1000, idx + 1000);
  console.log('Snippet around ABOUT ME:');
  console.log(snippet.substring(0, 500));
  
  // Find framer-Gf2HJ near ABOUT ME
  const near = html.substring(idx - 2000, idx + 2000);
  console.log('Stars near ABOUT ME:', (near.match(/framer-Gf2HJ/g) || []).length);
  console.log('Star container names near ABOUT ME:', near.match(/data-framer-name="[^"]*(?:Full|Up|Down|None)[^"]*"/g));
}
