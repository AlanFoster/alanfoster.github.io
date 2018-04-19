---
title:  Jest workshop - Basic Tests
---

## Adding our first test

Let's create a new file within the top level directory called `add.js`. It will be
a function that takes two numbers, and returns the added value:

`add.js`

```javascript
function add(x, y) {
  return x + y;
}

module.exports = add;
```

And let's add the subsequent test:

`add.spec.js`

```javascript
var add = require("./add");

describe("add", function() {
  it("adds 2 + 3 to be 5", function() {
    expect(add(2, 3)).toBe(5);
  });
});
```

We can re-run the tests and see that things are looking better:

![](./basic-test-running.png "Example of yarn run test showing one passing test")

## Your Turn

We now want a multiply function, with the relevant tests. Create the your new JavaScript file
for multiplying, and create a test - remember that the test file extension should be `.spec.js`

Remember to run your tests with `yarn run test`

`multiply.js`

```spoilers javascript
function multiply(x, y) {
  return x * y;
}

module.exports = multiply;
```

`multiply.spec.js`

```spoilers javascript
var multiply = require('./multiply')

describe('multiply', function () {
  it('multiples 2 * 3 to be 6', function () {
    expect(multiply(2, 3)).toBe(6)
  });
});
```
