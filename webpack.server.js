const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: {
        index: './entrance.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        port: 3099,
        hot: true,
        // openPage: './dist/index.html',
        watchOptions: {
            ignored: /node_modules/
        },

    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime'],
                    }
                }
            },
      



        ]
    },
    resolve: {
        extensions: ['.js'],
        
    },
    plugins: [


        new HtmlWebpackPlugin({
            title: 'Test',
            filename: 'index.html',
            template: './index.html',
        }),

    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        
    },

};