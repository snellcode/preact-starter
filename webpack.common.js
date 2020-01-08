const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const styleLoader = process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader'

module.exports = {
  mode: 'development',
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      favicon: 'src/favicon.ico'
    }),
    new CopyWebpackPlugin([
      'src/manifest.json',
      'src/sw.js',
      'src/icon-512.png'
    ])
  ],
  entry: './src/index.tsx',
  output: {
    path: path.resolve('./dist'),
    filename: '[name].[hash].js'
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.json'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    alias: {
      '@src': path.resolve(__dirname, 'src/')
    }
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)|js(x?)$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        exclude: /node_modules/,
        options: {
          fix: true,
          emitWarning: true,
          configFile: './.eslintrc.js'
        }
      },
      {
        test: /\.ts(x?)|js(x?)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'ts-loader',
          options: {
            transpileOnly: true
          }
        }]
      },
      {
        test: /\.(s?)css$/i,
        use: [
          styleLoader,
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true }
          }
        ]
      }
    ]
  }
}
