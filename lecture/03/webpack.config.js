const path = require('path');

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
        test: /.\(js|jsx)$/,
        loader: 'babel-loader',
        options: [
          [
            '@babel/preset-env',
            {
              targets: {
                browsers: ['> 1% in KR']
              }
            }
          ],
          '@babel/preset-react'
        ]
      }
    ]
  },
  plugins: []
};
