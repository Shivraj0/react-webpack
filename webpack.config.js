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
        },
        {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [
                { 
                    loader: 'style-loader',
                    options: {
                        injectType: 'singletonStyleTag' // Default is `styleTag` which injects through multiple <style></style> tags.
                    }
                },
                { loader: 'css-loader' },
                { 
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: [
                                [ 'autoprefixer', {}, ],
                            ],
                        },
                    }
                }
            ]
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