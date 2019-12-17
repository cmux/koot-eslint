## [Unreleased]

## [2.0.0] - 2019-12-17

**重大改动**

-   移除依赖库
    -   `eslint-plugin-prettier`

更新依赖库

-   `@typescript-eslint/eslint-plugin` -> _2.12.0_
-   `@typescript-eslint/parser` -> _2.12.0_
-   `eslint-config-react-app` -> _5.1.0_
-   `eslint-plugin-flowtype` -> _4.5.2_
-   `eslint-plugin-import` -> _2.19.1_
-   `eslint-plugin-react` -> _7.17.0_
-   `eslint-plugin-react-hooks` -> _2.3.0_

## [1.5.0] - 2019-09-26

调整规则

-   **no-console**
    -   调整前: `'warn'`
    -   调整后: `['warn', { allow: ['warn', 'error'] }]`
    -   调整后，将不再会有针对 `console.warn()` 和 `console.error()` 的警告 (黄色提示)

## [1.4.0] - 2019-09-17

-   `ESLint` 对应版本更新到 `>=6.4.0`

新增规则

-   `'no-import-assign': 'error'`
    <br>禁止对引入的 module 进行重新赋值
-   `'prefer-regex-literals': 'warn'`
    <br>警告不必要的正则表达式类的使用

## [1.3.0] - 2019-09-05

新增规则

-   `'koot/lifecycle-no-arrow-function': 'warn'`
    <br>React: 警告使用箭头函数编写的生命周期方法

## [1.2.0] - 2019-09-02

新增规则

-   `'react/no-direct-mutation-state': 'error'`
    <br>React: 禁止直接修改 state
-   `'react/no-access-state-in-setstate': 'error'`
    <br>React: 禁止在 setState 中调用 state (如有类似需求请在 setState 中使用函数用法)
-   `'react/no-is-mounted': 'error'`
    <br>React: 禁止使用 isMounted
-   `'react/no-render-return-value': 'error'`
    <br>React: 禁止使用 ReactDOM.render() 的返回值
-   `'react/no-string-refs': 'error'`
    <br>React: 禁止使用字符串形式的 ref
-   `'react/no-this-in-sfc': 'error'`
    <br>React: 禁止在函数组件中使用 this
-   `'react/void-dom-elements-no-children': 'error'`
    <br>React: 禁止空 HTML/DOM 元素 (void element) 出现子元素 (children)
