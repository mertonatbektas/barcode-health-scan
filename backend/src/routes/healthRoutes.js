 codex/check-repo-status-and-update-readme.md-o5l5my
const healthRoutes = {
  method: 'GET',
  path: '/api/health'
};
=======
const healthRoutes = [
  {
    method: 'GET',
    path: '/health'
  }
];
 main

module.exports = healthRoutes;
