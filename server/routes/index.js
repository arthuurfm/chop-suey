import path from 'path';
import url from 'url';
import express from 'express';

const currentPath = url.fileURLToPath(import.meta.url);
const publicDirectory = path.join(currentPath, '../../..', 'public');

function routes(app) {
  app.get('/register', (req, res) => {
    res.sendFile(path.join(publicDirectory, 'pages/register/index.html'));
  });

  app.use(express.static(publicDirectory));
}

export default routes;