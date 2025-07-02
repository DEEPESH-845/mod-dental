import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Add any custom rules here
      "@typescript-eslint/no-unused-vars": "warn",
      "@next/next/no-img-element": "off", // if you're using next/image
    },
  },
];

export default eslintConfig;