const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";
module.exports = {

    entry: './js/main.js',
    watch: true,

    output: {
        path: path.resolve(__dirname + '/dist'),
        filename: '[name].js',
        filename: 'bundle.js'
    },
    plugins: [
        new MiniCssExtractPlugin({

            filename: "[name].css",
            chunkFilename: "[id].css",
        }),
    ],
    module: {
        rules: [{
            test: /\.s[ac]ss$/i,

            use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: ''
                    }
                },
                {
                    loader: "css-loader",
                    options: { sourceMap: true }
                }, {
                    loader: "sass-loader",
                    options: { sourceMap: true }
                }
            ]
        }, ],
    },

};