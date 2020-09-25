const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/js/index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    devServer:{
        contentBase: path.resolve(__dirname,'./src/js'),
        publicPath: '/',
        watchContentBase: false,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/public/index.html',
            filename: 'index.html',
            inject: 'body'
        }),  
        new webpack.HotModuleReplacementPlugin()
    ]
};
