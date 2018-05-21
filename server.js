//Install express server
const express   = require('express');
const path      = require('path');
const app       = express();
var proxy       = require('express-http-proxy');

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/Raphael'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname+'/dist/Raphael/index.html'));
});

// Use proxy
express.use('/api/v1/**', proxy('https://raphael.cfapps.io'));
express.use('/oauth/token', proxy('https://raphael.cfapps.io'));

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
