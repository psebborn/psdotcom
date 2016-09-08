var React = require('react'),
    ReactDOM = require('react-dom'),
    Blogs = require('./components/Blogs.react'),
    initialState;

// Grab the state from the page.
initialState = JSON.parse(document.getElementById('initial-state').innerHTML);

ReactDOM.render(
  <Blogs blogs={initialState} />,
  document.getElementById('app-container')
);

