const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries')

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
    config: {
      path: __dirname + '/postcss.config.js'
    }
  }
}

module.exports = {
  entry: {
    portrait: path.resolve(`${__dirname}/toucaan/portrait.scss`),
		landscape: path.resolve(`${__dirname}/toucaan/landscape.scss`),
		// App: path.resolve(`${__dirname}/public/javascripts/goose-app.js`)
	},
  mode: 'development',
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      cacheGroups: {
        portraitStyles: {
          name: 'portrait',
          test: (m, c, entry = 'portrait') =>
            m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
          chunks: 'all',
          enforce: true,
        },
        landscapeStyles: {
          name: 'landscape',
          test: (m, c, entry = 'landscape') =>
            m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  plugins: [
		new FixStyleOnlyEntriesPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
	],
	// output: {
  //   path: path.resolve(__dirname, 'public', 'dist'),
  //   filename: '[name].bundle.js'
  // },
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
                 loader: 'file-loader',
                 options: {
                    outputPath: './dist/'
                 }
               }
            ]
      },
    ],
  },
}
