/**
 * @fileoverview ESLint rules used by Koot.js & its boilerplate
 * @author Diablohu
 */

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports.rules = {
    'lifecycle-no-arrow-function': require('./rules/react/lifecycle-no-arrow-function')
};
