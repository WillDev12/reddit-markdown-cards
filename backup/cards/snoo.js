var restify = require('restify');

function respond(req, res, next) {
  res.header('Content-Type', 'image/svg+xml');
  res.send('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="400" height="180"> <rect x="50" y="20" rx="20" ry="20" width="150" height="150" style="fill:red;stroke: black;stroke-width:5;opacity:0.5" /> </svg> ');
}

var server = restify.createServer();
server.get('/', respond);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});

module.exports = router;