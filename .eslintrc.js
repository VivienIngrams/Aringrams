module.exports = {
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'next', 'next/core-web-vitals', "next/babel", "next/core-web-vitals"],
  rules: {
    'prettier/prettier': 1,
    'react/react-in-jsx-scope': 1,
    'react/prop-types': 1,
    'no-unused-vars': 1,
    'react/no-unescaped-entities': 1,
  },
}
