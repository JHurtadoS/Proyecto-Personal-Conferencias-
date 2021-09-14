const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

const devMode = process.env.NODE_ENV !== "production";

module.exports = {

    devtool: "source-map",
    mode: 'development',
    entry: './src/js/main.js',
    watch: true,


    output: {
        path: path.resolve(__dirname + '/build'),
        filename: '[name].js',
        filename: 'js/bundle.js'
    },

    module: {

        rules: [{
            test: /\.(jpe?g)$/i,
            type: "asset",
        }, ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "[id].css",
        }),
        new ImageMinimizerPlugin({
            test: /\.(jpe?g)$/i,
            filename: "img/[name].webp",
            minimizerOptions: {
                plugins: ["imagemin-webp"],
            },
        }),

    ],
    module: {
        rules: [{

            test: /.s?css$/,
            use: [MiniCssExtractPlugin.loader,
                { loader: "css-loader", options: { sourceMap: true } },
                { loader: "sass-loader", options: { sourceMap: true } },
            ],
        }, ],
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
        ],

    },


};