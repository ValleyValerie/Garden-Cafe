module.exports = {
  env: {
    node: true,
    browser: true,
  },
  globals: {
    require: "readonly",
    process: "readonly",
  },
  extends: [
    "eslint:recommended",
  ],
};

