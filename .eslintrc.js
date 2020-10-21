module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    mocha: true
  },
  'parserOptions': {
    'ecmaVersion': 9
  },
  extends: 'eslint:recommended',
  rules: {
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always']
  }
};
