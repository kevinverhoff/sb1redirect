const express = require('express');
const app = express();

app.use((req, res) => {
  const target = 'https://braunbudgethurtshoosiers.com';
  const path = req.originalUrl || '';
  res.redirect(301, target + path);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Redirect service running on port ${port}`);
});
