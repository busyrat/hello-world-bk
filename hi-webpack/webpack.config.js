const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "development",
  entry: {
    app: "./index.js",
    util: './utils.js'
  },
  output: {
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
          test: /\.css$/,
          use: [
              MiniCssExtractPlugin.loader, // 创建一个 link 标签
              'css-loader', // css-loader 负责解析 CSS 代码, 处理 CSS 中的依赖
          ],
      },
    ]
  },
  plugins: [
    // 用 MiniCssExtractPlugin 抽离出 css 文件，以 link 标签的形式引入样式文件
    new MiniCssExtractPlugin({
        // filename: 'index.bundle.css' // 输出的 css 文件名为 index.css
    }),
  ]
};
