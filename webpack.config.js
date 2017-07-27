const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const WebpackSRI = require('webpack-subresource-integrity');

const env = process.env || {};
const isProd = env.NODE_ENV === 'production';
const rootDir = __dirname
const srcDir = path.join(rootDir, 'src')
const nodeModulesPath = path.join(rootDir, 'node_modules')

const useSass = isProd ? ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: ['css-loader', 'sass-loader']
}) : [
  'style-loader',
  { loader: 'css-loader' },
  { loader: 'sass-loader' }
];

const config = {
  context: rootDir,
  target: 'web',
  cache: true,
  devtool: 'eval-cheap-module-source-map',
  entry: [
    'babel-polyfill',
    './src/index.js'
  ],
  devServer: {
    contentBase: srcDir,
    historyApiFallback: true,
    hot: true
  },
  plugins: [

  ],
  output: {
    publicPath: '/',
    filename: 'bundle.js',
    chunkFilename: '[name].js',
    library: 'ElwoodsPizza',
    libraryTarget: 'var'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|ttf|woff2|eot|woff|svg)/,
        loader: 'url-loader'
      },
      {
        test: /\.flow/,
        loader: 'null-loader'
      },
      {
        test: /\.scss$/,
        use: useSass
      }
    ]
  },
  resolve: {
    modules: [
      'node_modules',
      nodeModulesPath
    ]
  },
  resolveLoader: {
    modules: [
      'node_modules',
      nodeModulesPath
    ]
  }
}

if (isProd) {
  config.output.filename = 'elwoods-pizza-[hash].js';
  config.output.publicPath = '/build/';
  config.output.path = path.join(rootDir, './build');
  config.output.crossOriginLoading = 'anonymous';

  config.devtool = '';
  config.plugins.push(
    new UglifyJSPlugin(),
    new ExtractTextPlugin({
      allChunks: true,
      filename: 'styles-[hash].css'
    }),
    new HtmlWebpackPlugin({
      minify: {},
      template: path.join(srcDir, 'build.html'),
      renderHTML() {
        return require('./src/render')();
      }
    }),
    new WebpackSRI({
      hashFuncNames: ['sha256', 'sha384'],
      enabled: true
    }),
  );
}
else {
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = config;
