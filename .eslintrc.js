module.exports = {
  
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
    
  },
//   "quotes": "error", // 默认

// "quotes": "warn", // 修改为警告

// "quotes": "off" ,// 修改不校验
  rules: {
    'space-before-function-paren': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
