const path = require('path');

const rule = require('../../rules/react/lifecycle-no-arrow-function');
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester({
    parser: path.resolve(
        __dirname,
        '../../../../node_modules/babel-eslint/lib/index.js'
    ),
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module',
        ecmaFeatures: {
            globalReturn: false,
            impliedStrict: true,
            jsx: true
        }
    },
    settings: {
        react: { version: '16.4.0' }
    }
});

//

const tests = {
    valid: [
        {
            code: `
class Hello extends React.Component {
    render() {
        return <div />;
    };
}`
        }
    ],

    invalid: [
        {
            code: `
class Hello extends React.Component {
    render = () => {
        return <div />;
    };
}`,
            errors: [
                {
                    message:
                        '`render` is a React lifecycle method, and should not be an arrow function. Use an instance method instead. For example: `render() {}`.'
                }
            ]
        },
        {
            code: `
class Hello extends React.Component {
    componentDidMount = () => {};
    render() {
        return <div />;
    };
}`,
            errors: [
                {
                    message:
                        '`componentDidMount` is a React lifecycle method, and should not be an arrow function. Use an instance method instead. For example: `componentDidMount() {}`.'
                }
            ]
        }
    ]
};

//

for (const cases of Object.values(tests)) {
    for (const t of cases) {
        t.code = t.code
            .replace(/\r/g, '')
            .replace(/\n/g, '')
            .replace(/\s{2}/g, '');
    }
}

ruleTester.run('koot/lifecycle-no-arrow-function', rule, tests);
