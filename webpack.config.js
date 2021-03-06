const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        library: 'bundle',
        libraryTarget: "umd",
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "./src/assets", to: "./assets"},
                { from: "./src/conf", to: "./conf"},
                { from: "./src/lib", to: "./lib"},
                { from: "./*.html", to: "./"}
            ],
        }),
    ]
};