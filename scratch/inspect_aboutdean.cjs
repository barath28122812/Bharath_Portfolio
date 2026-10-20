const https = require('https');
const fs = require('fs');

https.get('https://aboutdean.framer.website/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    fs.writeFileSync('aboutdean.html', data);
    console.log('HTML saved, size:', data.length);
    
    // Search for framer-Gf2HJ
    const gMatches = data.match(/class="[^"]*framer-Gf2HJ[^"]*"/g) || [];
    console.log('framer-Gf2HJ occurrences:', gMatches.length);
    
    // Search for parent elements of framer-Gf2HJ
    const r1e4hMatches = data.match(/class="[^"]*framer-r1e4h[^"]*"/g) || [];
    console.log('framer-r1e4h occurrences:', r1e4hMatches.length);
  });
});
