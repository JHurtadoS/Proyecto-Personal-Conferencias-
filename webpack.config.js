const path = require('path');
const ExcludeAssetsPlugin = require("webpack-exclude-assets-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

const devMode = process.env.NODE_ENV !== "production";
module.exports = {

    devtool: "source-map",
    mode: 'development',
    entry: './src/js/main.js',
    watch: true,
    cache: false,

    output: {
        path: path.resolve(__dirname + '/build'),
        filename: '[name].js',
        filename: 'js/bundle.js'
    },
    module: {
        loaders: [{
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: '/build/Fonts'
                    }
                }]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "dist/[id].css",
        }),
        new ImageMinimizerPlugin({
            test: /\.(jpe?g)$/i,
            filename: "img/[name].webp",
            minimizerOptions: {
                plugins: ["imagemin-webp"],
            },
        }),
        new ExcludeAssetsPlugin({
            path: ['/build/img']
        }),



    ],


    module: {
        rules: [{
                test: /.s?css$/,

                use: [MiniCssExtractPlugin.loader,
                    { loader: "css-loader", options: { sourceMap: true } },
                    { loader: "postcss-loader", options: { sourceMap: true } },
                    { loader: "sass-loader", options: { sourceMap: true } },
                ],
            },


        ],
    },


    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
        ],

    },



};