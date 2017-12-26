module.exports = {
  root: true,
  parser: 'babel-eslint',
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
