const fs = require('fs');

// We have media_1792126005705_aa3705a5.png (image 3)
// Let's create an HTML file that displays it zoomed in, and let's check what's there
const html = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { background: #333; color: white; font-family: sans-serif; padding: 20px; }
    .crop {
      width: 200px;
      height: 200px;
      overflow: hidden;
      border: 2px solid red;
      position: relative;
    }
    .crop img {
      position: absolute;
      top: -360px;
      left: -60px;
      transform: scale(3);
      transform-origin: 60px 360px;
      image-rendering: pixelated;
    }
  </style>
</head>
<body>
  <h2>Zoomed corner of Image 3</h2>
  <div class="crop">
    <img src="../.user_uploaded/media_1792126005705_aa3705a5.png">
  </div>
</body>
</html>
`;

fs.writeFileSync('scratch/zoom.html', html);
console.log('Saved zoom.html');
