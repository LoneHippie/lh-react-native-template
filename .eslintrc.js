module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["react", "react-native", "react-hooks"],
  env: {
    node: true,
    es6: true,
    "react-native/react-native": true,
    browser: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.d.ts"],
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  ],
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
    react: {
      version: "detect",
    },
  },
  rules: {
    "no-unused-vars": ["warn"],
    "react/jsx-key": ["warn"],
    "react/no-unescaped-entities": ["warn"],
    "react/prop-types": ["warn"],
    "no-undef": ["warn"],
  },
  ignorePatterns: ["*.png", "*.jpg", "*.svg", "*.jpeg", "*.tff"],
};
