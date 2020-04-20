
module.exports = {
  mode: 'development',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "null-loader"
          }
        ]
      }
    ]
  },
  devtool: 'inline-source-map'
};