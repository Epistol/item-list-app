module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    "@typescript-eslint/no-unused-vars": "warn",
    "curly": "off",
    "comma-dangle": [
      "error",
      "always-multiline"
    ],
  }
}
