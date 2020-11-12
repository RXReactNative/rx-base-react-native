module.exports = {
  env: {
    browser: true,
    es2021: true,
    'es6': true,
    'react-native-globals/all': true,
  },
  'parser': 'babel-eslint',
  extends: ['plugin:react/recommended', 'standard'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-native-globals',
  ],
  globals: {},
  rules: {
    semi: ['error', 'never', {'beforeStatementContinuationChars': 'never'}],
    // 要求或禁止函数圆括号之前有一个空格 https://eslint.bootcss.com/docs/rules/space-before-function-paren
    'space-before-function-paren': ['error', {'anonymous': 'always', 'named': 'never', 'asyncArrow': 'always'}],
    // 要求或禁止文件末尾存在空行 https://eslint.bootcss.com/docs/rules/eol-last
    'eol-last': 0,
    // 要求或禁止末尾逗号
    'comma-dangle': ['error', 'only-multiline'],
    // 禁止可以表达为更简单结构的三元操作符 https://eslint.bootcss.com/docs/rules/no-unneeded-ternary
    'no-unneeded-ternary': 0,
    // https://eslint.bootcss.com/docs/rules/no-tabs
    'no-tabs': 0,
    indent: 0,
    'no-useless-constructor': 0,
    'multiline-ternary': 0,
    'no-useless-escape': 0,

    // 特殊的
    camelcase: ['error', {allow: ['^UNSAFE_', '^tab_', '^img_', '^icon_']}],
    
    // node
    'node/handle-callback-err': 0,

    // defatult
    'default-param-last': 0,
    
    // react
    'react/prop-types': 0,
    'react/display-name': 0,
    'react/jsx-key': 0,
  },
}