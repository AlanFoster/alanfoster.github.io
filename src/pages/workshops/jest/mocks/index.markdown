---
title:  Jest workshop - Mocks
---

## Overview

Let's say we were writing a simple library for interacting with Github. We wanted to make use
of [Axios](https://github.com/axios/axios) to make the network requests to Github, as a richer alternative to
XHR/fetch. However, when running our unit tests we wouldn't actually want to make _real_ network calls - as this
can be slow and unreliable, as well as being difficult to test edge cases.

For this scenario we would want to make use of Mocks to spy on calls to Axios, or change the behaviour as needed.
In the terminology of Jest, mocks can also be referred to as a spies.

A mock can be configured to always return a default return value with `.mockReturnValue(value)`:

```javascript
const mock = jest.fn();
mock.mockReturnValue(0);
console.log(mock()); // 0
console.log(mock()); // 0

mock.mockReturnValue(1);
console.log(mock()); // 1
console.log(mock()); // 1
console.log(mock()); // 1
```

More complex mocks can be configured with multiple calls to `.mockReturnValue(value)`

```javascript
const mockCounter = jest.fn();
mockCounter
  .mockReturnValueOnce(1)
  .mockReturnValueOnce(2)
  .mockReturnValueOnce(3);

console.log(mockCounter()); // 1
console.log(mockCounter()); // 2
console.log(mockCounter()); // 3
```

Let's assume that our API is similar to:
