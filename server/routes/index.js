import fs from 'fs';
import path from 'path';
import url from 'url';
import express from 'express';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function routes(app) {
  // diretório public.
  const publicDirectory = path.join(__dirname, '../..', 'public');
  // diretório pages.
  const pagesDirectory = path.join(publicDirectory, 'pages');

  // lê todas as pastas dentro de public/pages.
  const folders = fs.readdirSync(pagesDirectory);

  folders.forEach(folder => {
    // caminho da pasta.
    const folderPath = path.join(pagesDirectory, folder);
    // se caminho da pasta tem index.html.
    const indexFile = path.join(folderPath, 'index.html');

    // se existir, envia a rota.
    if (fs.existsSync(indexFile)) {
      app.get(`/${folder}`, (req, res) => {
        res.sendFile(indexFile);
      });
    }
  });
  
  app.use(express.static(publicDirectory));

  app.use((req, res) => {
    res.status(404).sendFile(path.join(publicDirectory, 'pages/notFound/index.html'));
  });
}

export default routes;