module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    jest: true
  },
  rules: {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'react/destructuring-assignment': 'off',
    'react/prefer-stateless-function': 'off',
    'class-methods-use-this': 'off',
    'comma-dangle': 'off',
    'no-extra-boolean-cast': 'off',
    semi: ['off', 'never']
  },
  globals: {
    fetch: false
  }
}
