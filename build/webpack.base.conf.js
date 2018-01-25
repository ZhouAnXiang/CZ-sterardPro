var webpack =require('webpack')
var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
const vuxLoader = require('vux-loader')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

var webpackConfig = {
  entry: {
    app: ['babel-polyfill','./src/main.js']
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'jquery':'jquery'
    }
  },
  externals: {
    "BMap": "BMap"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      // {
      //   test: /\.css$/,
      //   loader: 'style-loader!css-loader!less-loader',
      // },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
            fallback: 'style-loader', 
            use: ['css-loader']
        })
    }, {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract({
            fallback: 'style-loader', 
            use: ['css-loader', 'less-loader']
        })
    },
      {
        test: /vue-preview.src.*?js$/,
        loader: 'babel'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
module.exports = vuxLoader.merge(webpackConfig, {
  options: {},
  plugins: [{
    name: 'vux-ui',
    // new webpack.optimize.CommonsChunkPlugin('common.js'),
    // new webpack.ProvidePlugin({
    //     jQuery: "jquery",
    //     $: "jquery"
    // })
  }]
})
