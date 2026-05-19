const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Ahoj, svet!');
});

app.listen(3000, () => {
  console.log('Server běží na http://localhost:3000');
});