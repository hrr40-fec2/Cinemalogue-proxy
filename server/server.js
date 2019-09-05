const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors());
app.use(express.static('public'));


app.listen(port, () => {
  console.log('Server is listening at port ', port);
});