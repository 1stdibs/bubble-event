trigger custom dom events without the ceremony:

```js
import bubble from 'bubble-event';
document.addEventListener('my-custom-event', data => console.log(data.foo)); // outputs 'abc'
bubble(myElement, 'my-custom-event', {foo: 'abc'});
```
