var mongoose = require('mongoose'),
    schema = new mongoose.Schema({
      'id'     : String,
      'title'  : String,
      'body'   : String,
      'images' : [String]
    });



// Create a static getBlogs method, which returns blog data from db
schema.statics.getBlogs = function(page, skip, callback) {
  var blogs = [],
      start = (page * 10) + (skip * 1);

  //Query DB, using skip and limit to get page chunks
  Blog.find({}, 'id title body images', {
    skip: start,
    limit: 10
  }).sort({
    date : 'desc'
  }).exec(function(err, docs) {
    if (!err) {
      blogs = docs;
      blogs.forEach(function(tweet) {
        blog.active = true;
      });
    }

    callback(blogs);
  });
};



module.exports = Blog = new mongoose.model('Blog', Schema);