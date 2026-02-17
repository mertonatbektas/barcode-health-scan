const app = require('./app');
 codex/check-repo-status-and-update-readme.md-o5l5my
const { PORT } = require('./config/env');
=======

const PORT = process.env.PORT || 3000;
 main

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
