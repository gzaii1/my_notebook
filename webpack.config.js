const HtmlWebpackPlugin = require('html-webpack-plugin')
const fs = require('fs')

module.exports = function () {
    const filename = 'chunk.[contenthash].js'

    return {
        entry: {
            main: './src/index.js'
        },
        output: {
            filename: filename,
            path: `${__dirname}/built`,
        },
        mode: 'development',
        module: {
            rules: [
                {
                    test: /.css$/,
                    use: [
                        'style-loader',
                        'css-loader',
                    ]
                },
                {
                    test: /.less$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'less-loader'
                    ]
                },
                {
                    test: /.html$/,
                    loader: 'html-loader'    
                },
                {
                    test: /.(jpg|jpeg|gif|png)$/,
                    loader: 'file-loader'
                },
                {
                    // @babel/preset-env @babel/preset-react @babel/plugin-transform-runtime
                    test: /.jsx?$/,
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                "@babel/preset-env", 
                                { 
                                    "targets": "defaults" 
                                }
                            ],
                            "@babel/preset-react",
                        ],
                        plugins: [
                            [
                                "@babel/plugin-transform-runtime",
                                {
                                    absoluteRuntime: false,
                                    corejs: false,
                                    helpers: true,
                                    regenerator: true,
                                    version: "7.0.0-beta.0"
                                },
                            ]
                        ],
                        sourceType: 'unambiguous',
                    }
                }
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: `${__dirname}/src/public/index.html`,
                inject: true,
                cache: true
            }),
        ],
    }
}