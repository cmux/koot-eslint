## 1.2.0

**2019-09-02**

新增规则

-   `'react/no-arrow-function-lifecycle': 'warn'`
    <br>React: 警告使用箭头函数编写的生命周期方法
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
