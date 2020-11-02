module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['prettier'],
    extends: [
        'eslint:recommended',
        'airbnb-base',
        'prettier',
        'plugin:prettier/recommended',
    ],
    env: {
        browser: true,
        es2021: true,
    },
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    overrides: [
        {
            files: ['**/*.ts'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaVersion: 12,
                sourceType: 'module',
                project: './tsconfig.json',
            },
            plugins: ['prettier', '@typescript-eslint'],
            extends: [
                'eslint:recommended',
                'airbnb-typescript/base',
                'plugin:@typescript-eslint/recommended',
                'prettier',
                'prettier/@typescript-eslint',
                'plugin:prettier/recommended',
            ],
            rules: {
                '@typescript-eslint/typedef': [
                    'error',
                    {
                        arrayDestructuring: true,
                        arrowParameter: true,
                        memberVariableDeclaration: true,
                        objectDestructuring: true,
                        parameter: true,
                        propertyDeclaration: true,
                        variableDeclaration: true,
                        variableDeclarationIgnoreFunction: false,
                    },
                ],
                '@typescript-eslint/explicit-function-return-type': [
                    'error',
                    {
                        allowExpressions: false,
                        allowTypedFunctionExpressions: false,
                        allowHigherOrderFunctions: false,
                        allowDirectConstAssertionInArrowFunctions: false,
                        allowConciseArrowFunctionExpressionsStartingWithVoid: false,
                    },
                ],
                'no-unused-vars': 'off',
                '@typescript-eslint/no-unused-vars': ['error', {varsIgnorePattern: '^_'}],
                '@typescript-eslint/naming-convention': [
                    'error',
                    {
                        selector: 'typeLike',
                        format: ['PascalCase'],
                        leadingUnderscore: 'allow',
                    },
                ],
                'no-underscore-dangle': 'off',
            },
            env: {
                browser: true,
                es2021: true,
            },
            globals: {
                Atomics: 'readonly',
                SharedArrayBuffer: 'readonly',
            },
        },
    ],
};
