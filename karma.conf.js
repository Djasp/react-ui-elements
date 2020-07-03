const path = require('path');

module.exports = function (config) {
  config.set({
    basePath: process.cwd(),
    files: [
      'node_modules/@babel/polyfill/dist/polyfill.js',
      'test/index.js'
    ],
    preprocessors: {
      'src/**/*.js': ['coverage'],
      'test/index.js': ['webpack', 'sourcemap']
    },
    frameworks: ['mocha', 'chai'],
    reporters: ['mocha', 'coverage-istanbul', 'html'],
    htmlReporter: {
      outputDir: path.join(__dirname, 'reports'),
      reportName: 'test-result'
    },
    coverageIstanbulReporter: {
      reports: ['lcov', 'text'],
      dir: path.join(__dirname, 'reports/coverage'),
      fixWebpackSourcePaths: true,
      skipFilesWithNoCoverage: false,
      thresholds: {
        emitWarning: true,
        global: {
          statements: 90,
          lines: 90,
          branches: 90,
          functions: 90
        }
      }
    },
    browsers: [
      'PhantomJS'
    ],
    browserDisconnectTolerance: 2,
    browserNoActivityTimeout: 50000,
    webpack: {
      mode: 'development',
      devtool: 'inline-source-map',
      module: {
        rules: [{
          test: /\.(css|scss)$/,
          use: [
            require.resolve('style-loader'),
            {
              loader: require.resolve('css-loader'),
              options: {
                importLoaders: 1
              }
            },
            require.resolve('sass-loader')
          ]
        }, {
          test: /\.(js|jsx)$/,
          loader: require.resolve('babel-loader'),
          exclude: /node_modules/
        }, {
          test: /\.(woff|woff2|eot|ttf|svg)$/,
          loader: 'url-loader?limit=100000&name=/assets/fonts/[name].[ext]'
        }, {
          enforce: 'post',
          test: /\.(js|jsx)$/,
          include: /src/,
          exclude: /node_modules/,
          loader: 'istanbul-instrumenter-loader'
        }]
      },
      resolve: {
        alias: {
          src: path.resolve(__dirname, 'src/')
        },
        extensions: ['.js', '.jsx']
      },
      externals: {
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
      },
      watch: true
    },
    webpackMiddleware: {
      noInfo: true,
      stats: {
        chunks: false
      }
    },
    plugins: [
      require('karma-webpack'),
      require('karma-sourcemap-loader'),
      require('karma-mocha-reporter'),
      require('karma-coverage'),
      require('karma-html-reporter'),
      require('karma-phantomjs-launcher'),
      require('karma-mocha'),
      require('karma-chai'),
      require('karma-coverage-istanbul-reporter'),
      require('istanbul-instrumenter-loader')
    ]
  });
};
