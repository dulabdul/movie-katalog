const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      //bootstrap configure
      // ...
      {
        test: /\.(scss)$/,
        use: [
          {
            // inject CSS to page
            loader: 'style-loader',
          },
          {
            // translates CSS into CommonJS modules
            loader: 'css-loader',
          },
          {
            // Run postcss actions
            loader: 'postcss-loader',
            options: {
              // `postcssOptions` is needed for postcss 8.x;
              // if you use postcss 7.x skip the key
              postcssOptions: {
                // postcss plugins, can be exported to postcss.config.js
                plugins: function () {
                  return [require('autoprefixer')];
                },
              },
            },
          },
          {
            // compiles Sass to CSS
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
    }),
    new WebpackPwaManifest({
      filename: 'manifest.json',
      name: 'Nonton_Kuy',
      display: 'standalone',
      start_url: '/index.html',
      short_name: 'Nonton_Kuy',
      description: 'Movie Katalog By Nonton Kuy',
      background_color: '#18191A',
      theme_color: '#c1121f',
      crossorigin: null,
      inject: true,
      fingerprints: false,
      ios: true,
      publicPath: null,
      includeDirectory: true,
      icons: [
        {
          src: path.resolve('src/public/icons/favicon.png'),
          sizes: [72, 96, 128, 192, 384, 512],
          purpose: 'any maskable',
          destination: path.join('icons'),
        },
      ],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
    new WorkboxPlugin.InjectManifest({
      swSrc: './src/scripts/sw.js',
      swDest: 'sw.js',
    }),
  ],
};
