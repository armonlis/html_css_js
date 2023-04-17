const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
        filename: "./src/js/index.js",
    },
    output: {
        filename: "./src/js/index.js",
        clean: true
    },
    devServer: {
        watchFiles: ["index.html", "/src/js/*.js", "/src/css/*.css", "./src/sass/*.sass"],
        port: 4000,
        hot: true
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {from: "src/public", to: "./src/public"},
                {from: "src/css/style.css", to: "./src/css"},
                {from: "src/css/style.css.map", to: "./src/css"},
                {from: "./index.html", to: ""}
            ],
        }),
    ],
};