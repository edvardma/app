module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  parser: 'babel-eslint',
  extends: ['plugin:react/recommended', 'airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    semi: [2, 'never'],
    'react/jsx-filename-extension': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/prop-types': 'off',
    'max-len': 'off',
    'react/no-array-index-key': 'off',
    'global-require': 'off',
    'no-param-reassign': 'off',
    'no-console': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'import/no-unresolved': [
      'error',
      {
        ignore: ['^[@~]'],
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
}
