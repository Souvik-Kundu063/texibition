const fs = require('fs');
async function run() {
  const apiKey = 'AIzaSyC7JWzV0NV0_GkYi4QsY1-2kf3yPze36o8';
  const folderId = '1R901GFJstceL-41tc2F_iOP-W0FHWQS9';
  const q = `'${folderId}' in parents and mimeType contains 'image/' and trashed = false`;
  const url = `https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(q)}&key=${apiKey}&fields=files(id,name,thumbnailLink,webContentLink)&pageSize=35`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(JSON.stringify(data.files, null, 2));
}
run();
