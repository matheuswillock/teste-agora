const express = require('express');
const app = express();
const generateQueue = require('./scripts/generatePriorityQueue');

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/gerarfila', (req, res) => {
  let queue = generateQueue();
  res.send(queue);
});

app.listen(3000, () => {
  console.log('HTTP server running: http://localhost:3000/');
});
