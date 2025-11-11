import antfu from "@antfu/eslint-config";
import eslintPluginBetterTailwindcss from "eslint-plugin-better-tailwindcss";
import eslintParserVue from "vue-eslint-parser";

export default antfu(
  {
    stylistic: {
      indent: 2,
      quotes: "double",
      semi: true,
    },
  },
  {
    rules: {
      "style/brace-style": ["error", "1tbs"],
    },
  },
  {
    ignores: ["database.types.ts", "android", "ios", "public"],
  },
  {
    files: ["**/*.vue"],
    languageOptions: {
      parser: eslintParserVue,
    },
  },
  {
    plugins: {
      "better-tailwindcss": eslintPluginBetterTailwindcss,
    },
    rules: {
      "better-tailwindcss/enforce-consistent-line-wrapping": [
        "warn",
        { printWidth: 100 },
      ],
    },
    settings: {
      "better-tailwindcss": {
        entryPoint: "app/assets/css/main.css",
      },
    },
  },
);
