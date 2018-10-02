module.exports = [
  { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
  {
    test: /\.(otf)$/,
    use: [
      {
        loader: 'file-loader',
      }
    ]
  },
  {
    test: /\.sass$|\.css$/,
    use: [{
      loader: "style-loader"
    }, {
      loader: "css-loader",
      options: {
        modules: true,
        sourceMap: true,
        localIdentName: '[local]___[hash:base64:5]',
      }
    }, {
      loader: "sass-loader",
      options: {
        includePaths: ["src"]
      }
    }]
  }
];