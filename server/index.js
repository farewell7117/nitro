const fs = require('fs');

const express = require('express');

const app = express();
const port = 3000;

app.get('/posts', (req, res) => {
  res.setHeader('content-type', 'application/json');
  fs.createReadStream(`${__dirname}/data/posts.json`).pipe(res);
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
