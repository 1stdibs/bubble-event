'use strict';
const jsdom = require('jsdom').jsdom;
const sinon = require('sinon');
const assert = require('assert');
global.document = jsdom(undefined, {});
global.window = document.defaultView;
global.Element = global.window.Element;
global.HTMLElement = global.window.HTMLElement;
global.CustomEvent = global.window.CustomEvent;
const bubble = require('..');

describe('trigger custom', function () {
    let myDiv;
    let handler;
    beforeEach(function () {
        myDiv = document.createElement('div');
        handler = sinon.spy();
        document.body.appendChild(myDiv);
        document.addEventListener('my-custom-event', handler);
    });
    it('should trigger custom events', function () {
        bubble(myDiv, 'my-custom-event');
        assert(handler.calledOnce);
    });
    it('should pass on the third argument as event.detail', function () {
        const detail = {foo: 'bar'};
        bubble(myDiv, 'my-custom-event', detail);
        assert.strictEqual(handler.firstCall.args[0].detail, detail);
    });
});
