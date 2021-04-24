const path = require('path');
module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'app-bundle.js',
        path: path.join(__dirname, 'bundle')
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    },
    mode: 'development',
    devServer: {
        contentBase: [
            path.join(__dirname, 'public'),
            path.join(__dirname, 'bundle')
        ]
    }
}