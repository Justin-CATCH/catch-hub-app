module.exports = {
  root: true,
  extends: [
    "@react-native-community",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  env: {
    browser: true,
    node: true,
    "jest/globals": true,
    es6: true,
  },
  rules: {
    "prettier/prettier": "error",
  },
};
