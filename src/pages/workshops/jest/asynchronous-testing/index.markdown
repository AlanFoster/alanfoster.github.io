---
title:  Jest workshop - Asynchronous Testing
---

## Asynchronous Testing

In the land of JavaScript we often find ourselves writing callbacks, and asynchronous
code:

`meaning-of-life.js`

```javascript
// Let's pretend
const sevenAndAHalfMillionYears = 750;

export default function () {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve(42), sevenAndAHalfMillionYears)
  });
}
```

## Writing the test

Jest provides multiple ways of testing asynchronous code, however the `.resolves` and `.rejects`
syntax can often be the easiest:

```javascript
import meaningOfLife from '../';

describe('meaning-of-life', function () {
  it('calculates the meaning of life', function () {
    return expect(meaningOfLife()).resolves.toBe(42);
  });
});
```

*Note* - the `return` is important! Jest needs to know about the promise otherwise
it will fail to work.

## Your turn

Increase the time taken to compute the meaning of life, what happens? How do we fix it?

Write the corresponding test for an API call:

yarn add whatwg-fetch --save-dev

```
```
