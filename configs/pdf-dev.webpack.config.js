const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './pdf/index.tsx',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    fallback:
      {
        stream: require.resolve('stream-browserify'),
        zlib: require.resolve('browserify-zlib'),
        assert: require.resolve('assert/'),
      },

  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    open: true,
    port: 8000,
  },
  module: {
    rules: [
      {
        test: /\.((c|sa|sc)ss)$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg|png)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      { test: /\.(html)$/, use: ['html-loader'] },
    ],
  },
};
