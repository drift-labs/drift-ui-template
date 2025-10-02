import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import playwright from 'eslint-plugin-playwright'

export default tseslint.config(
    {
        ignores: [
            'eslint.config.mjs',
            './node_modules/**',
            '**/playwright-report/**',
            '**/public/**',
            '.yarn/',
        ],
    },
    {
        extends: [
            eslint.configs.recommended,
            tseslint.configs.strict,
            tseslint.configs.stylistic,
            playwright.configs['flat/recommended'],
        ],
        files: ['**/*.ts'],
        rules: {
            'eol-last': 'error',
            'no-empty-pattern': 'off',
            'no-trailing-spaces': 'error',
            'import/extensions': 'off',
            'comma-dangle': [
                'error', {
                    arrays: 'always-multiline',  // Trailing commas only for multiline arrays
                    objects: 'always-multiline', // Trailing commas only for multiline objects
                    imports: 'always-multiline', // Trailing commas only for multiline imports
                    exports: 'always-multiline', // Trailing commas only for multiline exports
                    functions: 'always-multiline', // Trailing commas only for multiline parameters
                },
            ],
            'no-console': [
                'error',
                {
                    allow: [
                        'warn',
                        'error',
                        'info',
                        'table',
                        'debug'
                    ],
                }
            ],
            'semi': 'error',
            'no-restricted-syntax': 'off',
            'max-len': ['warn', 180],
            'no-await-in-loop': 'off',
            'prefer-regex-literals': 'off',
            'prefer-destructuring': 'off',
            'no-promise-executor-return': 'off',
            'object-shorthand': ['error', 'always'],
            'indent': ['error', 4],
            'quotes': ['error', 'single', { 'avoidEscape': true }],
            'playwright/no-skipped-test': 'off',
            'playwright/no-conditional-in-test': 'off',
            'playwright/no-conditional-expect': 'off',
            'playwright/no-nested-step': 'off',
            '@typescript-eslint/no-extraneous-class': ['error', { allowStaticOnly: true } ],
             'no-multiple-empty-lines': ['error', { 'max': 1 }],
             'no-spaced-func': 'error',
             'space-in-parens': ['error', 'never'],
             'space-before-blocks': ['error', 'always'],
             'space-before-function-paren': ['error', 'never'],
             'keyword-spacing': ['error', { 'before': true, 'after': true }],
             'playwright/no-wait-for-timeout': 'off',
        }
    },
);