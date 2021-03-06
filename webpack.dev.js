var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var path = require('path');

module.exports = webpackMerge(commonConfig, {
    devtool: '#cheap-module-eval-source-map',

    // entry: {
    //     dev: 'webpack/hot/dev-server'
    // },

    output: {
        path: path.join(process.cwd(), '/dist'),
        publicPath: 'http://localhost:3020/',
        filename: '[name].js'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('[name].css')
    ],

    devServer: {
        historyApiFallback: true,
        stats: 'minimal',
        inline: true,
        hot: true
    }
});