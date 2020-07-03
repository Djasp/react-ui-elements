const { NODE_ENV } = process.env

const isESBuild = NODE_ENV === 'build-es'

const browsers = [
  'last 8 versions',
  'safari > 8',
  'firefox > 23',
  'chrome > 24',
  'opera > 15',
  'not ie < 11',
  'not ie_mob <= 11',
]

const plugins = [
  'transform-decorators-legacy'
].filter(Boolean)

module.exports = () => ({
  compact: false,
  presets: [
    [
      'env',
      {
        modules: isESBuild ? false : 'commonjs',
        targets: { browsers },
      },
    ],
    'stage-1',
    'react',
    "flow"
  ],
  plugins,
})