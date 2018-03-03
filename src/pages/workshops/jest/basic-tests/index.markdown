---
title:  Jest workshop - Basic Tests
---

## Adding our first test

Let's create a new file within the top level directory called `add.js`. It will be
a function that takes two numbers, and returns the added value:

```javascript
function add(x, y) {
  return x + y;
}

module.exports = add;
```

And let's add the subsequent test in a file called `add.spec.js`:

```javascript
var add = require('./add')

describe('add', function () {
  it('adds 2 + 3 to equal 5', function () {
    expect(add(2, 3)).toBe(5)
  });
});
```

We can re-run the tests and see that things are looking better:

```bash
➜  jest-workshop git:(master) ✗ yarn run test
yarn run v1.3.2
$ jest
 PASS  ./add.spec.js
  add
    ✓ adds two numbers (5ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.06s
Ran all test suites.
✨  Done in 1.90s.
```

## Your Turn

We now want a multiply function, with the relevant tests. Create the your new JavaScript file
for multiplying, and create a test - remember that the test file extension should be `.spec.js`

Remember to run your tests with `yarn run test`
