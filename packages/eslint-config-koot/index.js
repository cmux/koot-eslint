const tsRecommended1 = require('@typescript-eslint/eslint-plugin/dist/configs/eslint-recommended.js')
    .default;
const tsRecommended2 = require('@typescript-eslint/eslint-plugin/dist/configs/recommended.json');

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

    plugins: ['prettier', 'koot'],

    settings: {
        'import/ignore': ['node_modules']
    },

    rules: {
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

        /** 如果变量无改变，优先使用 const */
        'prefer-const': [
            'warn',
            {
                destructuring: 'any',
                ignoreReadBeforeAssign: false
            }
        ],

        // React / JSX
        'react/jsx-filename-extension': [
            1,
            {
                extensions: ['.js', '.jsx', '.ts', '.tsx']
            }
        ],
        'react/prop-types': 0,
        /** React: 不允许使用不安全的生命周期方法 (eg: componentWillMount) */
        'react/no-unsafe': ['error', { checkAliases: true }],
        /** React: 禁止直接修改 state */
        'react/no-direct-mutation-state': 'error',
        /** React: 禁止在 setState 中调用 state (如有类似需求请在 setState 中使用函数用法) */
        'react/no-access-state-in-setstate': 'error',
        /** React: 禁止使用 isMounted */
        'react/no-is-mounted': 'error',
        /** React: 禁止使用 ReactDOM.render() 的返回值 */
        'react/no-render-return-value': 'error',
        /** React: 禁止使用字符串形式的 ref */
        'react/no-string-refs': 'error',
        /** React: 禁止在函数组件中使用 this */
        'react/no-this-in-sfc': 'error',
        /** React: 禁止空 HTML/DOM 元素 (void element) 出现子元素 (children) */
        'react/void-dom-elements-no-children': 'error',
        /** JSX: 禁止使用无用的引号 */
        'react/jsx-curly-brace-presence': ['warn', 'never'],
        /** JSX: 警告在 render 中使用使用的 bind 或箭头函数 */
        'react/jsx-no-bind': 'warn',

        /** React: 警告使用箭头函数编写的生命周期方法 */
        'koot/lifecycle-no-arrow-function': 'warn'
    },

    overrides: [
        {
            files: '**/*.+(ts|tsx)',
            // extends: ['plugin:@typescript-eslint/recommended'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                // typescript-eslint specific options
                warnOnUnsupportedTypeScriptVersion: true
            },
            plugins: ['prettier', '@typescript-eslint'],
            rules: Object.assign(
                {},
                tsRecommended1.overrides[0].rules,
                tsRecommended2.rules,
                {
                    '@typescript-eslint/no-angle-bracket-type-assertion': 0
                }
            )
        }
    ]
};