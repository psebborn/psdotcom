var express = require('express'),
    exphbs = require('express-handlebars'),
    bodyParser = require('body-parser'),
    // mongoose = require('mongoose'),
    http = require('http'),
    request = require('request'),
    routes=  require('./routes');



// Create express instance
var app = express(),
    port = process.env.PORT || 8080;


// Set handlebars as the template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());

// Index route
app.get('/', routes.index);

// Individual blog post
app.get('/:slug', routes.blogpost);

// Set /public as static content dir
app.use('/', express.static(__dirname + '/public'));

// Start the server
var server = http.createServer(app).listen(port, function() {
  console.log('Express server listening on port ' + port);
});

