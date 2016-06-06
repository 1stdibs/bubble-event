const assign = require('lodash.assign');
module.exports = function (node, name, detail, options) {
    options = assign({
        bubbles: true,
        detail: detail
    }, options);
    return node.dispatchEvent(new CustomEvent(name, options));
};
