const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const sass = require('sass')

const PATH_SOURCE = path.join(__dirname, './src')
const PATH_DIST = path.join(__dirname, './dist')

module.exports = (env) => ({
  mode: env.production ? 'production' : 'development',
  devServer: {
    contentBase: PATH_DIST,
    host: 'localhost',
    port: 8080,
    historyApiFallback: true,
    overlay: {
      errors: true,
      warnings: true,
    },
  },
  devtool: 'inline-source-map',
  entry: [path.join(PATH_SOURCE, './index.js')],
  output: {
    path: PATH_DIST,
    filename: 'js/[name].[hash].js',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.m?js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  debug: true,
                  useBuiltIns: 'usage',
                  corejs: 3,
                },
              ],
              '@babel/preset-react',
            ],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'sass-loader',
            options: { implementation: sass, sassOptions: { fiber: false } },
          },
        ],
      },
      { test: /\.css$/i, use: ['css-loader'] },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(PATH_SOURCE, './index.html'),
    }),
    // new HtmlWebpackPlugin.HotModuleReplacementPlugin(),
  ],
})
