var JSX = require('node-jsx').install(),
    React = require('react'),
    ReactDOMServer = require('react-dom/server'),
    BlogsList = React.createFactory(require('./components/BlogsList.react')),
    Blog = React.createFactory(require('./components/Blog.react')),
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
  },

  blogpost: function(req, res) {
    var blogdata = {},
        slug = req.params.slug;

    request({
      url: 'http://192.168.33.33/' + slug + '?_format=json',
      method: 'get',
      type: 'application/json'
    }, function(err, response, data) {
      if (!err && response.statusCode >= 200 && response.statusCode <=400) {

        data = JSON.parse(data);


        blogdata.body = data.body ? data.body[0].value : null;
        blogdata.title = data.title ? data.title[0].value : null;
        blogdata.author = data.author ? data.author[0].value : null;
        blogdata.created = data.created ? data.created[0].value : null;
        var markup = ReactDOMServer.renderToString(
          Blog({ key: 0, blog: blogdata })
        );
        res.render('blog', {
          markup: markup
        });
      } else {
        if (response.statusCode && response.statusCode == 403) {
          console.error('403: Permission denied.');
        }
        console.log(err);
      }
    });
  }
};