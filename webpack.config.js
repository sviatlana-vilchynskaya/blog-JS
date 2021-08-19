const HTMLPlugin = require('html-webpack-plugin')

module.exports = {
    entry: ['@babel/polyfill','./src/index.js'],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    devServer: {
        port: 8000,
        hot: true,
        historyApiFallback: true
    },
    plugins: [
        new HTMLPlugin ({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env']
                }
                }
            }
        ]
    }
}