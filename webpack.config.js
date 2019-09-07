var path = require('path');

module.exports = {
  entry: {
    ItemOverview: path.join(__dirname, '../item-data-service/client/src/index.jsx'),
    PhotoCarousel: path.join(__dirname, '../Photo-Carousel/client/src/index.jsx'),
    MoreLikeThis: path.join(__dirname, '../more_like_this_service/client/src/index.jsx')
  },
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/public/dist',
  },
  optimization: {
    runtimeChunk: {
      name: 'vendor'
    },
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](styled-components)[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  resolve: {
    alias: {
      "styled-components": path.resolve(__dirname, "node_modules", "styled-components")
    }
  }
};