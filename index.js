module.exports = {
    extends: ['react-app', 'prettier', 'prettier/react'],

    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module',
        ecmaFeatures: {
            globalReturn: false,
            impliedStrict: true,
            jsx: true
        }
    },

    env: {
        browser: true,
        node: true,
        commonjs: true,
        es6: true,
        amd: true
    },

    globals: {
        __: 'readonly',
        __CLIENT__: 'readonly',
        __DEV__: 'readonly',
        __DIST__: 'readonly',
        __REDUX_STATE__: 'readonly',
        __SERVER__: 'readonly',
        __SPA__: 'readonly',
        KootExtend: 'readonly',
        ReducerTypes: 'readonly',
        ActionTypes: 'readonly',
        Api: 'readonly',
        Store: 'readonly',
        Project: 'readonly'
    },

    plugins: ['prettier'],

    settings: {
        'import/ignore': ['node_modules']
    },

    rules: {
        'react/jsx-filename-extension': [
            1,
            {
                extensions: ['.js', '.jsx', '.ts', '.tsx']
            }
        ],
        'react/prop-types': 0,
        'no-underscore-dangle': 0,
        'import/imports-first': ['error', 'absolute-first'],
        'import/newline-after-import': 'error',
        'import/no-extraneous-dependencies': 0,
        'import/prefer-default-export': 0
    },

    overrides: [
        {
            files: '**/*.+(ts|tsx)',
            extends: ['plugin:@typescript-eslint/recommended'],
            parser: '@typescript-eslint/parser',
            plugins: ['prettier', '@typescript-eslint'],
            rules: {
                '@typescript-eslint/no-angle-bracket-type-assertion': 0
            }
        }
    ]
};
