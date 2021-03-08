const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Is it burning?! Well, see?!  Now you are learning!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
