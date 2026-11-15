const https = require('https');

const photos = [
  ["adrien-olichon-1eQKDWNiIUs-unsplash.jpg", "1eQKDWNiIUs"],
  ["agto-nugroho-1mnXGDl3iRY-unsplash.jpg", "1mnXGDl3iRY"],
  ["collab-media-t26cTnB0V1k-unsplash.jpg", "t26cTnB0V1k"],
  ["declan-sun-cQr2x2ALizA-unsplash.jpg", "cQr2x2ALizA"],
  ["lidya-nada-grQh_x_vZKM-unsplash.jpg", "grQh_x_vZKM"],
  ["shanjir-h-photo4life-au-hnYQUpNtBws-unsplash.jpg", "hnYQUpNtBws"],
  ["th-o-ph-m-b5ivLh4eD0A-unsplash.jpg", "b5ivLh4eD0A"],
  ["towel-studio-h7NX26Sh3uA-unsplash.jpg", "h7NX26Sh3uA"],
  ["winx-U6VKGLgsxz0-unsplash.jpg", "U6VKGLgsxz0"]
];

async function checkPhoto(filename, id) {
  return new Promise((resolve) => {
    https.get(`https://unsplash.com/photos/${id}`, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const titleMatch = data.match(/<title>([^<]+)<\/title>/);
        const descMatch = data.match(/<meta\s+name="description"\s+content="([^"]+)"/i) || data.match(/<meta\s+property="og:description"\s+content="([^"]+)"/i);
        resolve({
          filename,
          title: titleMatch ? titleMatch[1] : 'Unknown',
          desc: descMatch ? descMatch[1] : ''
        });
      });
    }).on('error', (err) => resolve({ filename, error: err.message }));
  });
}

(async () => {
  for (const [file, id] of photos) {
    const res = await checkPhoto(file, id);
    console.log(JSON.stringify(res, null, 2));
  }
})();
