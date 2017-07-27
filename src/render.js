require('babel-register');
require('ignore-styles');

const React = require('react')
const ReactDom = require('react-dom/server')
const App = require('./index').App;

module.exports = function render() {
  return ReactDom.renderToStaticMarkup(
    React.createElement(App)
  );
};
