import webpack from 'webpack';
import path from 'path';

export default {
    entry : './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle..js'
    },
    module : {
        rules: [
            {test: /\.(js)$/, use: 'babel-loader'},
            {test: /\.css$/, use: ['style-loader','css-loader']}
        ]
    },
    
}