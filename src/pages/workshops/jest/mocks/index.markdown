---
title:  Jest workshop - Mocks
---

## Mocks

A mock can be used to simulate the behavior of a real object:

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

## Real world example

Let's say we were writing a simple library for interacting with Github. We wanted to make use
of [Axios](https://github.com/axios/axios) to make the network requests to Github, as a richer alternative to
XHR/fetch. When running our unit tests we wouldn't want to make _real_ network calls - as this
can be slow, unreliable, and difficult to test edge cases.

Let's assume that our Github code is:

```javascript
TODO
```

We can test this easily with Mocks:

```javascript
TODO
```

### Your Turn
