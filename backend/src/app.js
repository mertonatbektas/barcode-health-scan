const http = require('http');
 codex/check-repo-status-and-update-readme.md-o5l5my
const { scanController, sendJson } = require('./controllers/scanController');

const app = http.createServer(async (req, res) => {
  const url = new URL(req.url, 'http://localhost');
  const { pathname } = url;

  if (req.method === 'GET' && pathname === '/api/health') {
    return sendJson(res, 200, { ok: true });
  }

  if (req.method === 'GET' && pathname.startsWith('/api/scan/')) {
    const barcode = pathname.replace('/api/scan/', '').trim();
    return scanController(req, res, barcode);
  }

  return sendJson(res, 404, { error: 'Route not found' });
=======

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ status: 'ok' }));
 main
});

module.exports = app;
