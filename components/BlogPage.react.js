var React = require('react');

module.exports = BlogsList = React.createClass({
  getInitialState: function (props) {
    props = this.props || {};
console.log(props);
    return {
      blogs: JSON.parse(props.blogs)
    };
  },
  render: function() {
    var blogs = 'hello world';
    blogs = this.state.blogs.map(function(blog, index) {
      return (
        <Blog key={index} blog={blog} />
      );
    });
    return (
      <div className="blogs-list">
        {blogs}
      </div>
    )
  }
});