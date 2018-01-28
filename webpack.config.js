const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const imagesPath = path.join(__dirname, './src/images');
const iconsPath = path.join(__dirname, './src/icons');
const soundsPath = path.join(__dirname, './src/sounds');
const sourcePath = path.join(__dirname, './src');

// Common rules
const rules = [
  {
    test: /.jsx?$/,
    exclude: /node_modules/,
    use: [
      'babel-loader',
    ],
  },
  {
    test: /\.scss$/,
    exclude: /node_modules/,
    use: [
      'style-loader?sourceMap',
      'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
      'resolve-url-loader',
      // 'postcss-loader',
      'sass-loader?sourceMap'
    ],
  },
  {
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
      fallback: "style-loader",
      use: "css-loader"
    })
  },
  {
    test: /\.(ico|jpe?g|png|gif|svg|mp3|html)$/,
    include: [imagesPath, soundsPath],
    use: 'file-loader?name=[path][name].[ext]',
  },
]

module.exports = {
  devtool: 'source-map',

  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    './src/index'
  ],

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],

  module: {
    rules,
  },
}
