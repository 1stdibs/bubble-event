const jsdom = require('jsdom').jsdom;
const sinon = require('sinon');
const assert = require('assert');
global.document = jsdom(undefined, {});
global.window = document.defaultView;
global.Element = global.window.Element;
global.HTMLElement = global.window.HTMLElement;
global.CustomEvent = global.window.CustomEvent;
const trigger = require('..');

describe('trigger custom', function () {
    it('should trigger custom events', function () {
        const myDiv = document.createElement('div');
        const handler = sinon.spy();
        document.body.appendChild(myDiv);
        document.addEventListener('my-custom-event', handler);
        assert(!handler.calledOnce);
        trigger(myDiv, 'my-custom-event');
        assert(handler.calledOnce);
    });
});
