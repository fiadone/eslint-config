module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "es2021": true,
    "jest": true,
    "node": true,
    "worker": true
  },
  "extends": [
    "eslint:recommended"
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {
    "array-callback-return": "error",
    "arrow-parens": ["error", "as-needed"],
    "block-scoped-var": "error",
    "comma-dangle": ["error", "never"],
    "comma-spacing": ["error", {
      "before": false,
      "after": true
    }],
    "computed-property-spacing": ["error", "never"],
    "consistent-return": "error",
    "curly": ["error", "multi-line"],
    "dot-location": ["error", "property"],
    "eqeqeq": ["error", "always"],
    "max-classes-per-file": ["error", 1],
    "no-async-promise-executor": "error",
    "no-else-return": "error",
    "no-import-assign": "error",
    "no-prototype-builtins": "off",
    "no-trailing-spaces": ["error", {
      "ignoreComments": true,
      "skipBlankLines": true
    }],
    "no-unused-vars": ["error", {
      "vars": "all",
      "args": "after-used",
      "ignoreRestSiblings": true
    }],
    "object-curly-spacing": ["error", "always", {
      "arraysInObjects": true,
      "objectsInObjects": true
    }],
    "prefer-const": "error",
    "quotes": ["error", "single"],
    "semi": [2, "never"]
  }
}
