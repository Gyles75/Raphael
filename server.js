//Install express server
const express   = require('express');
const path      = require('path');
const app       = express();
var httPproxy   = require('http-proxy');
var apiProxy    = httpProxy.createProxyServer();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/Raphael'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname+'/dist/Raphael/index.html'));
});

// Use proxy
app.all("/api/v1/**", function(req, res) {
    console.log('redirecting proxy to server');
    apiProxy.web(req, res, { target: 'https://raphael.cfapps.io' });
});

app.all("/oauth/*", function(req, res) {
    console.log('redirecting proxy to server');
    apiProxy.web(req, res, { target: 'https://raphael.cfapps.io' });
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
