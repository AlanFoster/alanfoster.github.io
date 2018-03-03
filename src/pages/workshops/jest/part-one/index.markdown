---
layout: post
title:  Jest workshop
date:   2018-02-25 16:07:32
category: post
---

## What is Jest?

Jest is a simple test runner for JavaScript. Out of the box it has very
sensible defaults, which can be referred to as Zero Configuration. It is also configurable
if required.

Out of the box it provides:

- Expect
  - A powerful assertion library
- Jest-Mock
  - For simulating the behavior of a real object
- Snapshot Testing
  - Storing the previous output of a function for future comparison
- Running tests in Parallel
- Built-in code coverage reports
- ... and more

---

## Getting started

We will use Yarn to install Jest as a JavaScript dependency.

Firstly ensure that that you have yarn available:

```shell
$ yarn --version
v1.3.2
```

If you do not have yarn visit [installing Yarn](https://yarnpkg.com/en/docs/install) for
further details on how to install Yarn on your operating system. At the time of writing,
if you wish to install Yarn via homebrew:

```shell
brew install yarn
```

---

### Creating a new project

Firstly create a new directory where you want to run your project:

```shell
mkdir ~/Documents/jest-workshop
cd ~/Documents/jest-workshop
```

We can initialize a new `package.json` that will specify all of our project dependencies
via the `yarn init` command. You will asked various questions about this project, the
answers are not too important and can be left as their default value for the most part:

```shell
yarn init
```

This will generate a new `package.json` file similar to:

```json
{
  "name": "jest-workshop",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT"
}
```

Now we can install jest:

```shell
yarn add --dev jest
```

This command has also modified your package file:

```diff
 {
   "name": "jest-workshop",
   "version": "1.0.0",
   "main": "index.js",
-  "license": "MIT"
+  "license": "MIT",
+  "devDependencies": {
+    "jest": "^22.4.2"
+  }
 }
```

Let's define a script within our `package.json` file to run our test suite via jest:

```diff
 {
   "name": "jest-workshop",
   "version": "1.0.0",
   "main": "index.js",
   "license": "MIT",
+  "scripts": {
+    "test": "jest"
+  }
   "devDependencies": {
     "jest": "^22.4.2"
   }
 }
```

We can now run our JavaScript tests with the `yarn run` command:

```shell
$ yarn run test
yarn run v1.3.2
$ jest
No tests found
In ~/Documents/jest-workshop
  1 file checked.
  testMatch: **/__tests__/**/*.js?(x),**/?(*.)(spec|test).js?(x) - 0 matches
  testPathIgnorePatterns: /node_modules/ - 1 match
Pattern:  - 0 matches
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

Oops, no tests? Let's add some tests!

#### Section Overview

{% recording yarn-init.cast %}

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

```shell
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

Your Turn:

Now add an additional test that shows how to add the numbers -3 and -8.

## Using the latest JavaScript features

You may have noticed the code we wrote did not make use of any modern syntax. In particular
we relied on Node's `require` syntax - rather than the more modern `import` syntax.

[Babel](https://babeljs.io/) is a simple tool that can convert your modern JavaScript with the
latest bells and whistles into an equivalent form that can run on older versions of JavaScript
that may exist in older browsers for instance.

Install Babel-Core, the integration support for jest, as well as babel-present-env - which is
will provide access to the latest language features.

```shell
yarn add --save-dev babel-jest babel-core babel-preset-env
```

To configure Babel to use the latest syntax features, we can create a `.babelrc` file specifying
that we want to use the previously installed `babel-present-env` present:

```json
{
  "presets": ["env"]
}
```

If we re-run the tests, nothing will have changed. Verify this to prove to yourself that
this is true.

We can now however make use of the more modern export/import syntax as a result of this change.

`add.js`

```diff
-function add(x, y) {
-  return x + y;
-}
+const add = (x, y) => x + y;

-module.exports = add;
+export default add;
```

`add.spec.js`

```diff
-const add = require('./add');
+import add from './add';

 describe('add', function () {
   it('adds two numbers', function () {
```

Make these changes to your project, and run your tests again.

## Mocks

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

## Asynchronous Testing


## Matchers

We made use of Jest's [expect library](https://facebook.github.io/jest/docs/en/expect.html) to
assert that the result of `add(2, 3)` was 5. For this scenario we used the `.toBe` matcher:

```javascript
expect(add(2, 3)).toBe(5)
```

Out of the box Jest provides lots of useful matchers, and you can even write your own!

Some common matchers that you might use are:

- .toBe(value)
- .toHaveBeenCalled()
- .toHaveBeenCalledTimes(number)
- .toHaveBeenCalledWith(arg1, arg2, ...)
- .toHaveBeenLastCalledWith(arg1, arg2, ...)
- .toBeInstanceOf(Class)
- .toContain(item)
- .toEqual(value)
- .toMatchSnapshot(optionalString)
- .toThrow(error)

## React Example

## toMatchSnapshot matcher

## Additional Links

- [https://facebook.github.io/jest/](https://facebook.github.io/jest/)
