const assign = require('lodash.assign');
const CustomEvent = require('custom-event');
module.exports = function (node, name, detail, options) {
    options = assign({
        bubbles: true,
        detail: detail
    }, options);
    return node.dispatchEvent(new CustomEvent(name, options));
};
