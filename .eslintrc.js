module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
    "prettier",
  ],
  plugins: [
    // https://github.com/prettier/eslint-plugin-prettier#installation
    "prettier",
  ],
  rules: {
    "prettier/prettier": "error",
    "@next/next/no-img-element": "off",
  },
};
