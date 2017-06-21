var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var vueLoaderConfig = require('./build/vue-loader.conf');

module.exports = {
  entry: {
    main: './src/main.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   use: ExtractTextPlugin.extract({
      //     use: 'css-loader'
      //   })
      // },
      {
        test: /\.styl$/,
        use: ['style-loader', 'css-loader', 'resolve-url-loader', 'stylus-loader?sourceMap']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'resolve-url-loader', 'css-loader']
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          css: 'vue-style-loader!css-loader',
          stylus: 'vue-style-loader!css-loader!stylus-loader'
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, 'src')
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[ext]'
        }
      },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'imgs/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    // new ExtractTextPlugin('style.css')
  //   new webpack.optimize.CommonsChunkPlugin({
  //     name: 'vendor',
  //     minChunks: function (module) {
  //       return module.context && module.context.indexOf('node_modules') !== -1;
  //     }
  //   }),
  //   new webpack.optimize.CommonsChunkPlugin({
  //     name: 'manifest'
  //   })
  ]
};

