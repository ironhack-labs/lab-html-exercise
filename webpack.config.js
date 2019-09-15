const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/app.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "static")
    },
    devServer: {
        contentBase: path.join(__dirname, 'static'),
        compress: true,
        port: 9000
      }
}