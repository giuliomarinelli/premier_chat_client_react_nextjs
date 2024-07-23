import { createProxyMiddleware } from 'http-proxy-middleware';

export default function middleware(req, res, next) {
  if (req.url.startsWith('/api')) {
    createProxyMiddleware({
      target: process.env.NEXT_PUBLIC_API_HOST,
      changeOrigin: true,
      pathRewrite: { '^/api': '/api' },
    })(req, res, next);
  } else if (req.url.startsWith('/socket.io')) {
    createProxyMiddleware({
      target: NEXT_PUBLIC_SOCKET_HOST,
      changeOrigin: true,
      ws: true, // Abilita il proxy per WebSocket
      pathRewrite: { '^/socket.io': '/socket.io' },
    })(req, res, next);
  } else {
    next();
  }
}