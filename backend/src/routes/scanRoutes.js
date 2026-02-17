 codex/check-repo-status-and-update-readme.md-o5l5my
const scanRoutes = {
  method: 'GET',
  path: '/api/scan/:barcode'
};
=======
const scanRoutes = [
  {
    method: 'POST',
    path: '/scan'
  }
];
 main

module.exports = scanRoutes;
