import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import { fixupConfigRules } from '@eslint/compat';
import eslintConfigPrettier from 'eslint-config-prettier';
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals.js';

export default [
  {
    ignores: [
      'node_modules/',
      '.next/',
      'out/',
      'coverage/',
      'public/',
      'dist/',
      '*.log',
      '*.config.js',
      '*.config.mjs',
      '.env',
      '.env.local',
      '.env.*.local',
    ],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        React: 'writable', // добавьте React в глобальные переменные
        document: 'readonly',
        window: 'readonly',
        console: 'readonly',
      },
      ...nextCoreWebVitals.languageOptions?.globals, // Add globals from next/core-web-vitals
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect the React version
      },
      ...nextCoreWebVitals.settings, // Add settings from next/core-web-vitals
    },
    rules: {
      ...eslintConfigPrettier.rules, // Rules from Prettier
      ...nextCoreWebVitals.rules, // Rules from next/core-web-vitals
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
  eslintConfigPrettier,
];
