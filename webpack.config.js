const path = require("path")
const webpack = require("webpack")
const nodeExternals = require('webpack-node-externals');

module.exports = (env) => ({
    mode: "development",
    entry: './src/index.ts',
    devtool: 'source-map',
    output: {
        filename: 'react-bricks.js',
        library: "$",
        libraryTarget: 'umd',
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new webpack.ProvidePlugin({process: 'process/browser'}),
    ],
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'ts-loader']
            },
            {
                test: /\.(?:svg|ttf|ico|gif|png|jpg|jpeg|eot|woff2|woff)$/i,
                type: 'asset/resource',
            }
        ],
    },
    externals: [nodeExternals()],
    resolve: {
        alias: {
            '@root': path.resolve(__dirname, 'src')
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    }
})
