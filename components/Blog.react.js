var React = require('react');

module.exports = Blog = React.createClass({
  renderRawMarkup: function(markupString) {
    return {
      __html: markupString
    }
  },
  render: function() {
    var blog = this.props.blog,
        rawBody = this.renderRawMarkup(blog.body)
    return (
      <article className="blog-post">
        <h2 className="blog-post__title">{blog.title}</h2>
        <div className="blog-post__meta">
          <h3 className="blog-post__author">{blog.author}</h3>
          <h3 className="blog-post__date">{blog.created}</h3>
        </div>
        <div className="blog-post__body" dangerouslySetInnerHTML={rawBody} >
        </div>
      </article>
    );
  }
});