const fs = require('fs');

const html = fs.readFileSync('aboutdean.html', 'utf8');

// Find each section and count framer-Gf2HJ
const sections = ['Hero', 'Projects', 'About', 'Services', 'Process', 'Testimonial', 'FAQ', 'Contact', 'Footer'];

sections.forEach(sec => {
  // Find where section starts
  const secStart = html.indexOf(`data-framer-name="${sec}"`);
  if (secStart === -1) {
    console.log(`Section "${sec}" not found by exact data-framer-name`);
    return;
  }
  
  // Find next section
  let nextStart = html.length;
  sections.forEach(other => {
    if (other !== sec) {
      const idx = html.indexOf(`data-framer-name="${other}"`, secStart + 20);
      if (idx !== -1 && idx < nextStart) {
        nextStart = idx;
      }
    }
  });
  
  const secHtml = html.substring(secStart, nextStart);
  const stars = (secHtml.match(/framer-Gf2HJ/g) || []).length;
  const starContainers = (secHtml.match(/framer-r1e4h/g) || []).length;
  console.log(`Section [${sec}]: stars = ${stars}, starContainers = ${starContainers}`);
});
