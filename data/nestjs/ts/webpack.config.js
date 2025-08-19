const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.html$/,                   // 👈 for HTML files
                use: 'html-loader'
            },
            {
                test: /\.css$/,                    // (optional) CSS support
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'         // 👈 HTML file to include
        })
    ],
    mode: 'development',
    devServer: {
        static: './dist',
        port: 3000,
        open: true
    }
};
