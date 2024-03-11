const semver = require('semver');
const tsRecommended1 = require('@typescript-eslint/eslint-plugin/use-at-your-own-risk/eslint-recommended-raw');
const {
    recommended: tsRecommended2,
} = require('@typescript-eslint/eslint-plugin');

const packageReact = (() => {
    try {
        return require('react/package.json');
    } catch (e) {
        return '';
    }
})();

// ============================================================================

const ruleReact17NewJSXTransform =
    packageReact &&
    semver.satisfies(
        semver.valid(semver.coerce(packageReact.version)),
        '>=17.0.0'
    )
        ? {
              'react/jsx-uses-react': 'off',
              'react/react-in-jsx-scope': 'off',
          }
        : {};

// ============================================================================

module.exports = {
    extends: ['react-app', 'prettier'],

    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module',
        ecmaFeatures: {
            globalReturn: false,
            impliedStrict: true,
            jsx: true,
        },
    },

    env: {
        browser: true,
        node: true,
        commonjs: true,
        es6: true,
        amd: true,
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
        Project: 'readonly',
    },

    plugins: ['koot'],

    settings: {
        'import/ignore': ['node_modules'],
    },

    rules: {
        'no-underscore-dangle': 0,

        /** 对象、数组、函数等结尾的逗号 */
        'comma-dangle': [
            'warn',
            {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                imports: 'always-multiline',
                exports: 'always-multiline',
                functions: 'ignore',
            },
        ],

        'import/imports-first': ['error', 'absolute-first'],
        'import/newline-after-import': 'error',
        'import/no-extraneous-dependencies': 0,
        'import/prefer-default-export': 0,

        /** 禁止对引入的 module 进行重新赋值 */
        'no-import-assign': 'error',

        /** 警告不必要的正则表达式类的使用 */
        'prefer-regex-literals': 'warn',

        /** 警告部分 console 日志的使用 */
        'no-console': ['warn', { allow: ['warn', 'error'] }],

        /** 警告多个空行 */
        'no-multiple-empty-lines': [
            'warn',
            {
                max: 2,
                maxEOF: 1,
                maxBOF: 1,
            },
        ],

        'no-var': 'error',

        /** 如果变量无改变，优先使用 const */
        'prefer-const': [
            'warn',
            {
                destructuring: 'any',
                ignoreReadBeforeAssign: false,
            },
        ],

        // React / JSX
        'react/jsx-filename-extension': [
            1,
            {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
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
        'koot/lifecycle-no-arrow-function': 'warn',

        ...ruleReact17NewJSXTransform,
    },

    overrides: [
        {
            files: '**/*.+(ts|tsx)',
            // extends: ['plugin:@typescript-eslint/recommended'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                // typescript-eslint specific options
                warnOnUnsupportedTypeScriptVersion: true,
            },
            plugins: ['prettier', '@typescript-eslint'],
            rules: Object.assign(
                {},
                // tsRecommended1.overrides[0].rules,
                tsRecommended1().rules,
                tsRecommended2.rules,
                {
                    '@typescript-eslint/no-angle-bracket-type-assertion': 0,
                }
            ),
        },
    ],
};
