const fs = require('fs');

const express = require('express');

const app = express();
const port = 3000;

app.get('/posts', (req, res) => {
  res.setHeader('content-type', 'application/json');
  // Allow webpack-dev-server to fetch selected resource
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  fs.createReadStream(`${__dirname}/data/posts.json`).pipe(res);
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
