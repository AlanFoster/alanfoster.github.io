---
title:  Jest workshop - Test Structure
---

# Globals

Jest provides global functions that can be called from within your spec files.

For example the `describe`, `it` and `expect` functions within our first tests:

```javascript
var add = require("./add");

describe("add", function() {
  it("adds 2 + 3 to be 5", function() {
    expect(add(2, 3)).toBe(5);
  });
});
```

## Describe

Describe is useful for grouping together functionality that you want to test. For example a
particular function, or UI component. These can be nested as many times as needed.

The function accepts two arguments:

```javascript
describe(name, function);
```

For example:

```javascript
describe("repository-list", function() {
  describe("when there is no data available", function() {
    it("renders no rows", function() {
      // ...
    });
  });

  describe("when there is data available", function() {
    it("renders no rows", function() {
      // ...
    });
  });
});
```

## It

All of your test assertions will be placed within an `it` block:

```javascript
it(description, function, timeout);
```

For example:

```javascript
it("returns false", function() {
  expect(yourFunction()).toBe(false);
});

it("returns true", function() {
  expect(yourOtherFunction()).toBe(true);
});
```

Note that in Jest, `it` and `test` are aliases for one another.

## Running specific tests

You can focus on particular tests with `it.only`:

```javascript {"highlight": "3"}
 describe('repository-list', function () {
   describe.only('when there is no data available', function () {
     it.only('renders no rows', function () {
       // ...
     });
   });

   describe('when there is data available', function () {
     it('renders rows', function () {
       // ...
     });
   });
 });
```

## beforeEach / afterEach

If you want to run a specific block of code before, or after each test:

```javascript {"highlight": "2-8"}
describe.only('my-library', function () {
  beforeEach(function () {
    console.log('Code called before each test');
  });

  afterEach(function () {
    console.log('Code called after each test');
  });

  it('works when...', function () {
    console.log('first test called');

    expect(true).toBe(true);
  });

  it('also works when...', function () {
    console.log('second test called');

    expect(true).toBe(true);
  });
});
```

### Example

![](./before-each.png "Picture shows a beforeEach console.log running before the test body log, followed by a subsequent afterEach log")

## Matchers

We made use of Jest's [expect library](https://facebook.github.io/jest/docs/en/expect.html) to
assert that the result of `add(2, 3)` was 5. For this scenario we used the `.toBe` matcher:

```javascript
expect(add(2, 3)).toBe(5);
```

Out of the box Jest provides lots of useful matchers, and you can even write your own!

Some common matchers that you might use are:

* .toBe(value)
* .toEqual(value)
* .toMatchSnapshot(optionalString)
* .toHaveBeenCalled()
* .toHaveBeenCalledTimes(number)
* .toHaveBeenCalledWith(arg1, arg2, ...)
* .toBeInstanceOf(Class)
* .toContain(item)
* .toThrow(error)

## Gotcha!

You may have missed it, but Jest actually provides two ways of asserting equality:

* .toBe(value)
* .toEqual(value)

You should use `toBe` for matching against primitives, or strict `===` equality.

```javascript
expect(result).toBe(primitive);
expect(result).toBe(exactEquality);

expect(result).toBe(1337); // result === 1337
expect(result).toBe(true);
expect(result).toBe(false);
expect(result).toBe("hello world");

expect(result).toBe(result); // result === result
```

You should use `toEqual` for other scenarios, for instance comparing complex objects

```javascript
expect(result).toEqual(someOtherObject); // result == someOtherObject

// For instance:
expect(result).toEqual({
  movies: [
    {
      title: "The Hitchhiker's Guide to the Galaxy",
      releaseYear: 2005
    }
  ]
});
```
