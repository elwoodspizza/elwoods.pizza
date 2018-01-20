require('babel-register');
require('ignore-styles');

const React = require('react')
const ReactDom = require('react-dom/server')
const App = require('./index').App;
const Hello = require('./hello').App;

module.exports = function render(what) {
  return ReactDom.renderToStaticMarkup(
    React.createElement(what === 'hello' ? Hello : App)
  );
};
