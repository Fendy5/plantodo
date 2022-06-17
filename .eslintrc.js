/*
 * @Author fendy
 * @CreateDate 2022/6/18
 * @Description
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    'vue/multi-word-component-names': 0,
    'semi': ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'no-undef': 0
  }
}
