//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
const LIFE_CYCLE_LIST = [
    'render',
    'getSnapshotBeforeUpdate',
    'componentDidMount',
    'componentWillUnmount',
    'shouldComponentUpdate',
    'componentDidUpdate',
    'componentDidCatch'
];

module.exports = {
    meta: {
        docs: {
            description:
                'React component lifecycle method should not be arrow function',
            category: 'Best Practices',
            recommended: true
        },
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {
        function checkArrowLifecycle(node) {
            const methods = node.body.body;
            if (methods && methods.length) {
                const properties = methods.filter(
                    method =>
                        method.type === 'ClassProperty' &&
                        method.value &&
                        method.value.type === 'ArrowFunctionExpression'
                );
                if (properties.length) {
                    properties.forEach(item => {
                        if (LIFE_CYCLE_LIST.includes(item.key.name)) {
                            context.report({
                                node: item,
                                message:
                                    "React component's lifecycle '{{ name }}' method should not be arrow function",
                                data: {
                                    name: item.key.name
                                }
                            });
                        }
                    });
                }
            }
        }
        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            // give me methods
            ClassDeclaration(node) {
                checkArrowLifecycle(node);
            }
        };
    }
};
