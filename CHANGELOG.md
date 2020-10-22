## [Unreleased]

## [3.1.0] - 2020-10-22

-   现在会根据安装的 _React_ 版本来确定是否启用针对全新 _JSX_ 转译器的规则
    -   _React_ 最低需求降级到 `16.0.0`

## [3.0.0] - 2020-10-22

重大更新

-   _React_ 最低需求提升到 `17.0.0`
-   针对全新 _JSX_ 转译器，现在不再要求必须引入 `react`

更新依赖库

-   `@typescript-eslint/eslint-plugin` -> _^4.5.0_
-   `@typescript-eslint/parser` -> _^4.5.0_
-   `eslint-config-prettier` -> _^6.14.0_
-   `eslint-plugin-import` -> _^2.22.1_
-   `eslint-plugin-react` -> _^7.21.5_
-   `eslint-plugin-react-hooks` -> _^4.2.0_

## [2.0.0] - 2020-09-16

重大更新

-   `eslint` 最低需求提升到 `7.0.0`
-   _TypeScript_ 最低需求提升到 `3.3.1`

更新依赖库

-   `@typescript-eslint/eslint-plugin` -> _^4.1.1_
-   `@typescript-eslint/parser` -> _^4.1.1_
-   `eslint-config-prettier` -> _^6.11.0_
-   `eslint-plugin-flowtype` -> _^5.2.0_
-   `eslint-plugin-import` -> _^2.22.0_
-   `eslint-plugin-jsx-a11y` -> _^6.3.1_
-   `eslint-plugin-prettier` -> _^3.1.4_
-   `eslint-plugin-react` -> _^7.20.6_
-   `eslint-plugin-react-hooks` -> _^4.1.2_

## [1.7.0] - 2020-03-25

新增规则

-   `'comma-dangle': ['warn', 'always-multiline']`
    <br>建议对对象、数组等区域的跨行代码结尾添加逗号

更新依赖库

-   `@typescript-eslint/eslint-plugin` -> _^2.25.0_
-   `@typescript-eslint/parser` -> _^2.25.0_
-   `babel-eslint` -> _^10.1.0_
-   `eslint-config-prettier` -> _^6.10.1_
-   `eslint-config-react-app` -> _^5.2.1_
-   `eslint-plugin-flowtype` -> _^4.7.0_
-   `eslint-plugin-import` -> _^2.20.1_
-   `eslint-plugin-react` -> _^7.19.0_
-   `eslint-plugin-react-hooks` -> _^3.0.0_

## [1.6.0] - 2019-12-17

更新依赖库

-   `@typescript-eslint/eslint-plugin` -> _2.12.0_
-   `@typescript-eslint/parser` -> _2.12.0_
-   `eslint-config-react-app` -> _5.1.0_
-   `eslint-plugin-flowtype` -> _4.5.2_
-   `eslint-plugin-import` -> _2.19.1_
-   `eslint-plugin-prettier` -> _3.1.2_
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
