module.exports = {
  env: {
    browser: true,
    es2021: true,
    commonjs: true,
    es6: true,
  },
  extends: ["airbnb-base"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["promise"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  rules: {
    "import/extensions": [
      "error",
      {
        js: "always",
      },
    ],
  },
};
