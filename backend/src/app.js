const http = require('http');
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
});

module.exports = app;
