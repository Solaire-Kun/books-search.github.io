const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: {
        bundle: path.resolve(__dirname, './src/js/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'script.js',
        clean: true,
    },
    module : {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin ({
            filename: 'index.html',
            template: './src/template.html'
        }),
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
}