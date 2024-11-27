import eslintPluginAstro from "eslint-plugin-astro";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import eslintJsxA11y from "eslint-plugin-jsx-a11y";
import eslintJS from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslintJS.configs.recommended,
  tseslint.configs.recommended,
  eslintPluginReact.configs.flat.recommended,
  eslintJsxA11y.flatConfigs.recommended,
  eslintPluginPrettier,
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/no-array-index-key": "error",
      "react/button-has-type": "error",
      "react/jsx-key": "error",
    },
  },
);
