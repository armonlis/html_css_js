const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
        app: "./src/js/index-app.js",
        index: "./src/js/index.js",        
    },
    output: {
        filename: "./src/js/[name].js",
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