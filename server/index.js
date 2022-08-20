const express = require('express');
const path = require('path');
const routes = require('./routes');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

app.use('/', routes);

app.listen(3000, () => {
  console.log('Server is running at port 3000');
});
