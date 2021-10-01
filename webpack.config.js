const path = require("path");

module.exports = {
    entry: "./src/main.ts",
    mode: "development",
    cache: false,
    watch: true,

    output: {
        path: path.resolve("dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            }
        ]
    },
    devServer: {
        liveReload: true,
        static: {
            directory: path.join(__dirname, '/'),
            watch: true
        },
        watchFiles: {
            paths: ["src/*.ts"]
        },
        compress: true,
        port: 9000,
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};