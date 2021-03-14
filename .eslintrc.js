module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'vue/comment-directive': 0,
    'nuxt/no-cjs-in-config': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-parsing-error': [
      2,
      {
        'unexpected-solidus-in-tag': false,
        'x-invalid-end-tag': false,
        'invalid-first-character-of-tag-name': false
      }
    ],
    'vue/name-property-casing': 'off',
    'vue/require-default-prop': 'off',
    'vue/require-prop-types': 'off',
    'vue/return-in-computed-property': 'off',
    'vue/html-self-closing': 'off',
    'vue/no-template-shadow': 'off', // 模版中的变量名禁止与前一个作用域重名
    'vue/attribute-hyphenation': 'off', // 限制自定义组件的属性风格
    'vue/prop-name-casing': 'off', // props 必须用驼峰式
    'vue/camelcase': 'off', // 变量名必须是 camelcase 风格的
    'vue/brace-style': 'off', // if 与 else 的大括号风格必须一致
    'vue/comma-dangle': 'off', // 对象的最后一个属性末尾必须有逗号
    'vue/component-name-in-template-casing': 'off', // 约束自定义标签的命名规则
    'vue/match-component-file-name': 'off', // 组件名称必须和文件名一致
    'vue/no-restricted-syntax': 'off', // 禁止使用特定的语法
    'generator-star-spacing': 0, // 生成器函数*的前后空格
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
        ignoreReadBeforeAssign: true
      }
    ],
    'callback-return': ['error', ['done', 'proceed', 'next', 'onwards', 'callback', 'cb']],
    'comma-style': ['warn', 'last'],
    'eol-last': ['warn'],
    'no-undef': 'off',
    'handle-callback-err': ['error'],
    'arrow-body-style': ['off', 2],
    'no-prototype-builtins': 'off',
    'linebreak-style': ['error', 'unix'],
    'no-dupe-keys': ['error'],
    'no-duplicate-case': ['error'],
    'no-extra-semi': ['warn'],
    'no-labels': ['error'],
    'no-mixed-spaces-and-tabs': [2, 'smart-tabs'],
    'no-redeclare': ['warn'],
    'no-return-assign': ['error', 'always'],
    'no-sequences': ['error'],
    'no-trailing-spaces': ['warn'],
    'no-unexpected-multiline': ['warn'],
    'no-unreachable': ['warn'],
    'no-magic-numbers': ['off'],
    'max-params': ['off'],
    'max-len': ['off'],
    'max-nested-callbacks': ['off'],
    'new-cap': ['off'],
    'consistent-this': ['error', 'that'],
    'no-unused-vars': ['off'],
    'no-use-before-define': [
      'error',
      {
        functions: false
      }
    ],
    'no-var': 2,
    'one-var': ['warn', 'never'],
    'prefer-arrow-callback': [
      'warn',
      {
        allowNamedFunctions: true
      }
    ],
    quotes: [
      'warn',
      'single',
      {
        avoidEscape: false,
        allowTemplateLiterals: true
      }
    ],
    semi: ['error', 'never'],
    'semi-spacing': [
      'warn',
      {
        before: false,
        after: true
      }
    ],
    'semi-style': ['warn', 'last'],
    'space-before-function-paren': [
      0,
      {
        anonymous: 'ignore',
        named: 'ignore',
        asyncArrow: 'ignore'
      }
    ],
    'no-param-reassign': 'off',
    'import/no-extraneous-dependencies': 'off'
  }
}
