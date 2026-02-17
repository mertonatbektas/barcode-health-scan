const env = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: Number(process.env.PORT || 3000),
  OFF_BASE_URL: process.env.OFF_BASE_URL || 'https://world.openfoodfacts.org'
};

module.exports = env;
