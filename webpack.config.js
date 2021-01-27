const path = require('path');
const {
    VueLoaderPlugin
} = require('vue-loader');
module.exports = {
    mode: 'development',
    entry: {
        index: './main.js',
    },

    module: {
        rules: [{
                test: /\.vue$/,
                use: 'vue-loader'
            },
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
            //处理css
            {
                test: /\.css$/,
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                    },
                ],
            },



        ]
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            // 'vue$': 'vue/dist/vue.common.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
            'vue$': 'vue/dist/vue.esm.js',
        }
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        library: 'Vueinit',
        libraryTarget: 'umd',
        libraryExport: 'default',
        umdNamedDefine: true
    },

};