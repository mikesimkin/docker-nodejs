'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
var i = 0;
// App
const app = express();
app.get('/', (req, res) => {
  res.send(`Hello world ${i}\n`);
  i++;
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);