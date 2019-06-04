
'use strict';

const express = require('express');

// Constants
const PORT = 9060;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/app2', (req, res) => {
  res.send('WELCOME TO APP2\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
