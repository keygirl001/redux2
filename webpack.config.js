var webpack = require('webpack');
module.exports = {
    entry: {
        index: './src/js/index.js'
    },
    output: {
        path: './static/',
        publicPath: 'http://localhost:8080/static/',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {test: /.js$/, loader: 'babel-loader', query: {presets: ['es2015', 'react']}, exclude:/node_modules/},
            {test: /.less$/, loader: 'style!css!less'},
            {test: /.(jpg|png|gif)$/, loader: 'url-loader?limit=8129'}
        ]
    }
}