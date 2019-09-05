# Don't use arrow function for lifecycle methods (koot/no-arrow-function-lifecycle)

It is not neccessary to use arrow function for lifecycle methods

## Rule Details

The following patterns are considered warnings:

```jsx
class Hello extends React.Component {
    render = () => {
        return <div />;
    };
}
var AnotherHello = createReactClass({
    render: () => {
        return <div />;
    }
});
```

The following patterns are **not** considered warnings:

```jsx
class Hello extends React.Component {
    render() {
        return <div />;
    }
}
var AnotherHello = createReactClass({
    render: function() {
        return <div />;
    }
});
```

## When Not To Use It

If you don't care about performance of your application, you can disable this rule.
