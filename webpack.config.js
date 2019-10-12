const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './app.bundle.js' 
    // filename: '[name].[chunkhash].js'
  },
  devServer: {
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.pug',
    })
  ],
  module: {
    rules: [
      { 
        test: /\.pug$/, loader: ['raw-loader', 'pug-html-loader'] 
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.scss$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      }
    ]
  }
};