var webpack = require("webpack");
var path = require('path');

// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
//     template: './client/index.html',
//     filename: 'index.html',
//     inject: 'body'
// })

module.exports = {
    entry: {
        app: "./src/App.js"
    },
    output: {
        filename: "build/bundle.js",
        sourceMapFilename: "build/bundle.map"
    },
    devtool: '#source-map',
    // plugins: [
    //     new webpack.optimize.UglifyJsPlugin({minimize: true}),
    // ],   
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        }]
    }
}
