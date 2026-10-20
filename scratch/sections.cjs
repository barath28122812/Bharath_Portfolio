const fs = require('fs');

const html = fs.readFileSync('aboutdean.html', 'utf8');

// Find all sections or main containers
const sectionRegex = /<(section|header|footer)[^>]*data-framer-name="([^"]+)"[^>]*>/g;
let m;
while ((m = sectionRegex.exec(html)) !== null) {
  console.log(`Tag: <${m[1]}>, Name: ${m[2]}`);
}
