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

const GA = `<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-123654-14', 'auto');
  ga('send', 'pageview');
</script>`;

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
  entry: {
    index: [
      'babel-polyfill',
      './src/index.js'
    ],
    hello: [
      'babel-polyfill',
      './src/hello.js'
    ]
  },
  devServer: {
    contentBase: srcDir,
    historyApiFallback: true,
    hot: true
  },
  plugins: [

  ],
  output: {
    publicPath: '/',
    filename: '[name].js',
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
  config.output.filename = 'elwoods-pizza-[name]-v[hash].js';
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
      template: path.join(srcDir, 'index.html'),
      renderHTML() {
        return require('./src/render')();
      },
      endHTML() {
        return GA
      }
    }),
    new HtmlWebpackPlugin({
      minify: {},
      filename: 'hello.html',
      template: path.join(srcDir, 'hello.html'),
      renderHTML() {
        return require('./src/render')('hello');
      },
      endHTML() {
        return GA
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
  config.plugins.push(
    new HtmlWebpackPlugin({
      template: path.join(srcDir, 'index.html'),
      chunks: ['index'],
      renderHTML() {
        return '';
      },
      endHTML() {
        return '';
      }
    }),
    new HtmlWebpackPlugin({
      template: path.join(srcDir, 'hello.html'),
      filename: 'hello.html',
      chunks: ['hello'],
      renderHTML() {
        return '';
      },
      endHTML() {
        return '';
      }
    }),
  )
}

module.exports = config;
