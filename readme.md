trigger custom dom events without the ceremony:

```js
bubble = require('bubble-event');
document.addEventHandler('my-custom-event', function (data) {
    console.log(data.foo); // outputs 'abc'
});
bubble(myElement, 'my-custom-event', {foo: 'abc'});
```
