const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['./src/controllers/weatherAppController.js', './src/db/apiCalls.js'],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html',
        }),
    ],
    module: {
        rules: [
        {
            test: /\.s[ac]ss$/i,
            use: [
            'style-loader',
            'css-loader',
            'sass-loader',
            ],
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
            'file-loader',
            {
                loader: 'image-webpack-loader',
                options: {
                mozjpeg: {
                    progressive: true,
                    quality: 9
                },
                // optipng.enabled: false will disable optipng
                optipng: {
                    enabled: true,
                },
                pngquant: {
                    quality: [0.65, 0.90],
                    speed: 4
                },
                gifsicle: {
                    interlaced: false,
                },
                // the webp option will enable WEBP
                webp: {
                    quality: 75
                }
                }
            },
            ],
        },
        {
            test: /\.(jpg|png|gif|svg)$/,
            loader: 'image-webpack-loader',
            // Specify enforce: 'pre' to apply the loader
            // before url-loader/svg-url-loader
            // and not duplicate it in rules with them
            enforce: 'pre'
        }
        ],
    },
    optimization: {
        splitChunks: {
        chunks: 'all',
        },
    },
};