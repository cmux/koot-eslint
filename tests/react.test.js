const fs = require('fs');
const path = require('path');

const config = require('../index.js');
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester({
    parserOptions: { ...config.parserOptions }
});

ruleTester.run('koot-rules', config.rules, {
    valid: [],
    invalid: [
        {
            code: fs.readFileSync(
                path.resolve(__dirname, './react.source.js'),
                'utf-8'
            ),
            errors: [{ message: 'Unexpected invalid variable.' }]
        }
    ]
});
