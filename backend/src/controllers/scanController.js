function scanController(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ message: 'scan endpoint placeholder' }));
}

module.exports = { scanController };
