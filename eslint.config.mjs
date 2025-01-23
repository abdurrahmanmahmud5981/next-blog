// eslint.config.mjs
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...compat.extends("next/core-web-vitals"), // Extend recommended Next.js rules
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"], // Match JS/TS files
    rules: {
      "no-unused-vars": "warn", // Warn about unused variables
      "react/react-in-jsx-scope": "off", // React in scope is unnecessary for Next.js
    },
  },
];
