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
        'import/prefer-default-export': 0,

        /** 警告 console 的使用 */
        'no-console': 'warn',

        /** 警告多个空行 */
        'no-multiple-empty-lines': [
            'warn',
            {
                max: 2,
                maxEOF: 1,
                maxBOF: 1
            }
        ],

        /** JSX: 不允许使用不安全的生命周期方法 (eg: componentWillMount) */
        'react/no-unsafe': ['error', { checkAliases: true }],

        /** JSX: 不允许使用无用的引号 */
        'react/jsx-curly-brace-presence': ['warn', 'never'],

        /** JSX: 不允许使用 bind 和 Render 里禁止动态方法 */
        'react/jsx-no-bind': 'warn',

        /** 如果变量无改变，优先使用 const */
        'prefer-const': [
            'warn',
            {
                destructuring: 'any',
                ignoreReadBeforeAssign: false
            }
        ]
    },

    overrides: [
        {
            files: '**/*.+(ts|tsx)',
            extends: ['plugin:@typescript-eslint/recommended'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                // typescript-eslint specific options
                warnOnUnsupportedTypeScriptVersion: true
            },
            plugins: ['prettier', '@typescript-eslint'],
            rules: {
                '@typescript-eslint/no-angle-bracket-type-assertion': 0
            }
        }
    ]
};
