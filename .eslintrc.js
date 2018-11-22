module.exports = {
  // For detail about @mi/eslint-config-mcfe-react-app
  // http://git.n.xiaomi.com/mcfe/create-mcfe-react-app/blob/master/packages/eslint-config-mcfe-react-app/index.js
  rules: {
    // add project level rules if need.
    'no-debugger': 'warn',
    // disable these rules error temporarily,
    // we shall fix them in the future
    'react/default-props-match-prop-types': 'warn',
    camelcase: 'warn',
    'no-return-assign': 'warn',
    'object-curly-newline': 'warn',
  }
}
