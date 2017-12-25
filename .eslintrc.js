module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascripts-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ]
}
