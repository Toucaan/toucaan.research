const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries')
const CompressionPlugin = require('compression-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

function recursiveIssuer(m) {
  if (m.issuer) {
    return recursiveIssuer(m.issuer)
  } else if (m.name) {
    return m.name
  } else {
    return false
  }
}

const postcss = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      path: __dirname + '/postcss.config.js'
    }
  }
}

module.exports = {
  entry: {
    watch: path.resolve(`${__dirname}/toucaan/watch/watch.scss`),
    mobile: path.resolve(`${__dirname}/toucaan/mobile/mobile.scss`),
    tablet: path.resolve(`${__dirname}/toucaan/tablet/tablet.scss`),
    desktop: path.resolve(`${__dirname}/toucaan/desktop/desktop.scss`),
    television: path.resolve(`${__dirname}/toucaan/television/television.scss`)
  },
  mode: (process.env.NODE_ENV !== 'production') ? 'development' : 'production',
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      cacheGroups: {
        watchStyles: {
          name: 'watch',
          test: (m, c, entry = 'watch') =>
            m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
          chunks: 'all',
          enforce: true,
        },
        mobileStyles: {
          name: 'mobile',
          test: (m, c, entry = 'mobile') =>
            m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
          chunks: 'all',
          enforce: true,
        },
        tabletStyles: {
          name: 'tablet',
          test: (m, c, entry = 'tablet') =>
            m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
          chunks: 'all',
          enforce: true,
        },
        desktopStyles: {
          name: 'desktop',
          test: (m, c, entry = 'desktop') =>
            m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
          chunks: 'all',
          enforce: true,
        },
        televisionStyles: {
          name: 'television',
          test: (m, c, entry = 'television') =>
            m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
          chunks: 'all',
          enforce: true,
        }
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new FixStyleOnlyEntriesPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new CompressionPlugin()
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          postcss,
          "sass-loader"
        ],
        include: path.resolve(__dirname, 'toucaan')
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|jpe?g|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              outputPath: './dist/'
            }
          }
        ]
      },
    ],
  },
}
