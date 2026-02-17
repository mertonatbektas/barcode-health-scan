const env = {
  NODE_ENV: process.env.NODE_ENV || 'development',
 codex/check-repo-status-and-update-readme.md-o5l5my
  PORT: Number(process.env.PORT || 3000),
  OFF_BASE_URL: process.env.OFF_BASE_URL || 'https://world.openfoodfacts.org'
=======
  PORT: Number(process.env.PORT || 3000)
 main
};

module.exports = env;
