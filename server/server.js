const express = require('express');
const cors = require('cors');
const app = express();
const proxy = require('http-proxy-middleware')
const port = 4000;

app.use(cors());
app.use(express.static('public'));

var PhotoCarouselProxy = proxy('/api/', {target: 'http://localhost:3000/'});
var MoreLikeThisProxy = proxy('/morelikethis/', {target: 'http://localhost:3001/'});
var ItemOverviewProxy = proxy('/movies/', {target: 'http://localhost:3002/'});
app.use(MoreLikeThisProxy);
app.use(PhotoCarouselProxy);
app.use(ItemOverviewProxy);

app.listen(port, () => {
  console.log('Server is listening at port ', port);
});