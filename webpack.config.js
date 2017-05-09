var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry : './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use:[{loader:'babel-loader',
                     options: {presets:['es2015', 'react']}
                    }],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve:{
        extensions:[".js",".jsx"]
    },
    plugins:[new HtmlWebpackPlugin({
        template: 'app/index.html'

    })]

}