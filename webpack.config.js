const path = require("path")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require("webpack")
const { DefinePlugin } = require('webpack');

module.exports = (env) => ({
    mode: 'development',
    entry: './src/index.ts',
    devtool: 'source-map',
    output: {
        filename: 'react-bricks.js',
        path: path.resolve(__dirname, 'lib'),
        assetModuleFilename: 'assets/[hash][ext]',
        publicPath: "/"
    },
    resolve: {
        fallback: {
            fs: false,
            'process/browser': require.resolve("process/browser")
        },
        extensions: [".tsx", ".ts", "..."]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new webpack.ProvidePlugin({process: 'process/browser'}),
    ],
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    "presets": ["@babel/preset-typescript", "@babel/preset-env", "@babel/preset-react"]
                }
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.less/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', {
                    loader: 'less-loader',
                    options: {
                        lessOptions:{
                            javascriptEnabled: true
                        }
                    }
                }]
            },
            {
                test: /\.(?:svg|ttf|ico|gif|png|jpg|jpeg|eot|woff2|woff)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ],
    }
})
