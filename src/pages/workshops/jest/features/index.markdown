---
title: Jest workshop - Overview
---

## What is Jest?

Jest is a simple test runner for JavaScript. Out of the box it has very sensible defaults, which can be
referred to as Zero Configuration. However, it is also configurable if required.

Out of the box Jest provides various tools that you will find useful.

## Expect

Expect is a powerful assertion library with various built-in matchers:

```javascript
expect(1 + 1).toBe(2);
expect(foo).toEqual(bar);
expect(mock).toHaveBeenCalledTimes(1);
expect(mock).toHaveBeenCalledWith(arg1, arg2, ...);
```

## Jest-mock

For simulating the behavior of a real object:

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

## Error Messages

On test failure it will generate useful error messages:

![](./test-failure.png "Example of Jest failing an equality check between between 5 and 7")

## Snapshot Testing

Storing the previous output of a function for future comparison.

![](./test-snapshot.png "Example of a test failing due to the latest test result being different")

## Code Coverage Reports

Inbuilt code coverage by supplying `--coverage` as an argument:

![](./test-coverage.png "Example of Jest showing the percentage of code that was successfully tested")

## Interactive Command Line

Jest comes with an interactive command line which can help you control which tests you wish to test.

## What's different?

There are various testing libraries in existence already. Why would a developer choose Jest, over something else - such as Mocha, or Jasmine?

On an average day, the key distinctions between Jest and \$otherFramework are:

- Snapshot testing
- `expect(...).toBe(...)` creates human readable diffs
- Advanced mocking capabilities, out of the box
- Inbuilt caching to decrease bootup + overall testing times
- Streamlined command line interface

As your codebase matures, and your codebase and tests increase in size, some benefits between Jest and \$otherFramework are:

- Tests are executed in parallel
- Each test ran in isolation
- [jest-codemods](https://github.com/skovhus/jest-codemods) available to update to newer Jest releases
- Community alignment on Jest - lots of tooling, tutorials, innovation
