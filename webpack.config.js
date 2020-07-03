const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  mode: 'production',
  entry : ['./src/styles/Dev.scss'],
  output : {
    filename: '[name].css',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: { sourceMap: false }
        },
        {
          loader: 'sass-loader',
          options: { sourceMap: false }
        }
      ]
    }, {
      test: /\.(bmp|gif|jpe?g|png|svg)$/,
      use: {
        loader: require.resolve('url-loader'),
        options: {
          limit: 100000,
          name: 'assets/images/[name].[ext]'
        }
      }
    },
    {
      test: /\.(woff|woff2|eot|ttf|svg)$/,
      use: {
        loader: require.resolve('url-loader'),
        options: {
          limit: 100000,
          name: 'assets/fonts/[name].[ext]'
        }
      }
    }]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new MiniCssExtractPlugin({
      filename: 'ui-elements.css'
    })
  ]
};

module.exports = config;
