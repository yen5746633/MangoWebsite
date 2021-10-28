module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    'jest/globals': true,
    jquery: true,
  },
  // globals: {
  //   BMap: true,
  // },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/experimental-script-setup-vars': 'off',
    'prettier/prettier': 'warn',
  },
  // overrides: [
  //   {
  //     files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
  //     env: {
  //       jest: true,
  //     },
  //   },
  // ],
  plugins: ['jest'],
}
