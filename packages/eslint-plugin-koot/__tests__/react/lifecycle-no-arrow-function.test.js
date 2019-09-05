const rule = require('../../rules/react/lifecycle-no-arrow-function');
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester({
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module',
        ecmaFeatures: {
            globalReturn: false,
            impliedStrict: true,
            jsx: true
        }
    }
});

const result = ruleTester.run('koot/lifecycle-no-arrow-function', rule, {
    valid: [
        {
            code: `
            class Hello extends React.Component {
                render() {
                    return <div />;
                };
            }
            `,
            settings: { react: { version: '16.4.0' } }
        }
    ],
    invalid: [
        {
            code: `
            class Hello extends React.Component {
                render = () => {
                    return <div />;
                };
            }
            `,
            settings: { react: { version: '16.4.0' } },
            errors: [{ message: 'Unexpected invalid variable.' }]
        }
    ]
});

console.log(result);
