var express = require('express'),
    exphbs = require('express-handlebars'),
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


// Index route
app.get('/', routes.index);

// Set /public as static content dir
app.use('/', express.static(__dirname + '/public'));

// Start the server
var server = http.createServer(app).listen(port, function() {
  console.log('Express server listening on port ' + port);
});

