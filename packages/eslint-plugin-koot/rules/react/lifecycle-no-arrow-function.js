/**
 * @fileoverview It is not necessary to use arrow function for lifecycle methods
 * @author Tan Nguyen
 */

const Components = require('eslint-plugin-react/lib/util/Components');
const astUtil = require('eslint-plugin-react/lib/util/ast');

const lifecycleMethods = [
    'getDefaultProps',
    'getInitialState',
    'getChildContext',
    'getDerivedStateFromProps',
    'componentWillMount',
    'UNSAFE_componentWillMount',
    'componentDidMount',
    'componentWillReceiveProps',
    'UNSAFE_componentWillReceiveProps',
    'shouldComponentUpdate',
    'componentWillUpdate',
    'UNSAFE_componentWillUpdate',
    'getSnapshotBeforeUpdate',
    'componentDidUpdate',
    'componentDidCatch',
    'componentWillUnmount',
    'render'
];

module.exports = {
    meta: {
        docs: {
            description:
                'It is not necessary to use arrow function for lifecycle methods',
            category: 'Best Practices',
            recommended: false
        },
        schema: []
    },

    create: Components.detect((context, components) => {
        /**
         * @param {Array} properties list of component properties
         */
        function reportNoArrowFunctionLifecycle(properties) {
            properties.forEach(node => {
                const propertyName = astUtil.getPropertyName(node);
                const nodeType = node.value && node.value.type;
                const isLifecycleMethod =
                    lifecycleMethods.indexOf(propertyName) !== -1;

                if (
                    nodeType === 'ArrowFunctionExpression' &&
                    isLifecycleMethod
                ) {
                    context.report({
                        node,
                        message:
                            '`{{propertyName}}` is a React lifecycle method, and should not be an arrow function. Use an instance method instead. For example: `{{propertyName}}() {}`.',
                        data: {
                            propertyName
                        }
                    });
                }
            });
        }

        return {
            'Program:exit': function() {
                const list = components.list();
                Object.keys(list).forEach(component => {
                    const properties = astUtil.getComponentProperties(
                        list[component].node
                    );
                    reportNoArrowFunctionLifecycle(properties);
                });
            }
        };
    })
};
