module.exports = {
  extends: ['next', 'turbo', '@antfu', 'plugin:tailwindcss/recommended'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-closing-bracket-location': [1, 'line-aligned'],
    'no-console': 'off',
  },
  parserOptions: {
    ecmaVersion: 'latest',
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
}
