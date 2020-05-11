const express = require('express');

const app = express();
const port = 3000;

app.get('/health', (req, res) => {
  res.send( { status: 'UP' } );
});

const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = server;