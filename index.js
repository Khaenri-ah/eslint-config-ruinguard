/* eslint-disable */
module.exports = {
  extends: 'eslint:recommended',
  parserOptions: {
    sourceType: 'module',
    impliedStrict: true,
  },
  env: {
    node: true,
    es2021: true,
  },
  rules: {
    'no-async-promise-executor': 'off',
    'no-cond-assign': ['error', 'except-parens'],
    'no-fallthrough': 'off',

    'accessor-pairs': 'error',
    'arrow-body-style': ['warn', 'as-needed'],
    'camelcase': 'error',
    'class-methods-use-this': 'error',
    'curly': ["error", "multi-line"],
    'default-case-last': 'error',
    'default-param-last': 'error',
    'dot-notation': 'error',
    'func-name-matching': 'error',
    'func-style': ['error', 'declaration'],
    'grouped-accessor-pairs': 'error',
    'multiline-comment-style': ['error', 'bare-block'],
    'new-cap': ['error', { capIsNew: false }],
    'no-array-constructor': 'error',
    'no-caller': 'error',
    'no-else-return': 'warn',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-implicit-coercion': 'warn',
    'no-invalid-this': 'error',
    'no-labels': 'error',
    'no-lonely-if': 'error',
    'no-mixed-operators': 'error',
    'no-multi-assign': 'error',
    'no-multi-str': 'error',
    'no-nested-ternary': 'error',
    'no-new': 'error',
    'no-octal-escape': 'error',
    'no-return-await': 'error',
    'no-return-assign': 'error',
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    'no-useless-computed-key': 'error',
    'no-var': 'error',
    'no-warning-comments': 'warn',
    'object-shorthand': ['error', 'always', { avoidQuotes: true }],
    'prefer-const': 'error',
    'prefer-exponentiation-operator': 'error',
    'prefer-numeric-literals': 'error',
    'prefer-object-spread': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'quote-props': ['error', 'as-needed'],
    'spaced-comment': ['error', 'always', { block: { balanced: true } }],
    'yoda': 'error',

    'array-bracket-newline': ['error', { multiline: true }],
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'block-spacing': 'error',
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    'dot-location': ['error', 'property'],
    'func-call-spacing': 'error',
    'function-call-argument-newline': ['error', 'consistent'],
    'function-paren-newline': 'error',
    'implicit-arrow-linebreak': 'error',
    'indent': ['error', 2],
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'keyword-spacing': 'error',
    'linebreak-style': 'error',
    'max-statements-per-line': 'error',
    'multiline-ternary': ['error', 'always-multiline'],
    'no-multi-spaces': 'error',
    'no-tabs': 'error',
    'no-trailing-spaces': 'error',
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': 'error',
    'object-curly-newline': ['error', { multiline: true }],
    'object-curly-spacing': ['error', 'always'],
    'operator-linebreak': ['error', 'before'],
    'padded-blocks': ['error', 'never'],
    'quotes': ['warn', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'rest-spread-spacing': 'error',
    'semi': 'error',
    'semi-spacing': 'error',
    'semi-style': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
    'space-in-parens': 'error',
    'space-unary-ops': ['error', { words: true, nonwords: false }],
    'switch-colon-spacing': 'error',
    'template-curly-spacing': 'error',
    'template-tag-spacing': 'error',
    'wrap-iife': ['error', 'inside'],
  }
}
