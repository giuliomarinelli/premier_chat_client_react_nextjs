const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const { createProxyMiddleware } = require('http-proxy-middleware');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const port = parseInt(process.env.PORT, 10) || 3000;

// Configurazione dei proxy
const apiProxy = createProxyMiddleware('/api', {
  target: 'http://localhost:8085', // URL di destinazione per le richieste API
  changeOrigin: true,
  pathRewrite: { '^/api': '' },
});

const socketProxy = createProxyMiddleware('/socket.io', {
  target: 'http://localhost:8098', // URL di destinazione per WebSocket
  changeOrigin: true,
  ws: true, // Abilita il proxy per WebSocket
});

app.prepare().then(() => {
  createServer((req, res) => {
    if (req.url.startsWith('/api')) {
      apiProxy(req, res);
    } else if (req.url.startsWith('/socket.io')) {
      socketProxy(req, res);
    } else {
      handle(req, res, parse(req.url, true));
    }
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});