const express = require('express');
const path = require('path');

const app = express();
app.use(express.static('public'));
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log('server running on port 8080');
});
