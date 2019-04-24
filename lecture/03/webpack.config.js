const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development', // 배포시: production
  devtool: 'eval', // 배포시: hide-source-map,
  resolve: {
    extensions: ['.js', '.jsx']
  },

  entry: {
    app: ['./app']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  browsers: ['> 10% in KR']
                }
                // debug: true
              }
            ],
            '@babel/preset-react'
          ],
          plugins: ['@babel/plugin-proposal-class-properties']
        }
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true
    })
  ]
};
