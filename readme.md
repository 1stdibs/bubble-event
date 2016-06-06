trigger custom dom events without the ceremony:

```js
document.addEventHandler('my-custom-event', function () {
    console.log('custom event handled!');
});
trigger(myElement, 'my-custom-event', {foo: 'abc'});
```
