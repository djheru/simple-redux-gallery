const path = require('path');
const combineLoaders = require('webpack-combine-loaders');

module.exports = {
  context: `${__dirname}/src`,
  entry: {
    javascript: './index.js',
    html: './index.html'
  },
  output: {
    filename: 'app.js',
    path: `${__dirname}/dist`
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    root: path.resolve(__dirname, './src')
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot', 'babel-loader'] },
      { test: /\.html$/, loader: 'file?name=[name].[ext]' },
      {
        test: /\.css$/,
        loader: combineLoaders([
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          }
        ])
      }
    ]
  }
};
