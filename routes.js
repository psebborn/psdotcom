var JSX = require('node-jsx').install(),
    React = require('react'),
    ReactDOMServer = require('react-dom/server'),
    BlogsList = React.createFactory(require('./components/BlogsList.react')),
    Blog = require('./components/Blog.react'),
    request = require('request');


module.exports = {

  index: function(req, res) {
    var blogdata = {};
    request('http://192.168.33.33/blog', function(err, response, data) {
      if (!err && response.statusCode >= 200 && response.statusCode <=400) {
        blogdata = data;
        var markup = ReactDOMServer.renderToString(
          BlogsList({ blogs: blogdata })
        );
        res.render('home', {
          markup: markup
        });
      } else {

        console.log(err);
      }
    });
  }
};