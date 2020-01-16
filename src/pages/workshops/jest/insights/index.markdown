---
title:  Jest workshop - Approaches
---

## Insights

Below are some examples / patterns / recipes / approaches you may find
useful when developing.

## Watch Mode

Following Test Driven Development you will write your tests,
and develop your code until your tests are green.

The watch mechanism incorporated in to Jest is very powerful
in this scenario. It can be activated with **`yarn run test --watch`**

```asciinema
./watch-jest.cast
```

## Debugging

It is possible to debug your Jest tests with ease. First add a `debugger;` statement as appropriate:

```javascript {"highlight": "4"}
import * as metricsService from './metrics-service';

export default function ({ eventType }) {
  debugger;

  metricsService.send({
    event: `my_application_namespace.${eventType}`,
    time: Date.now()
  })
};
```

The command to run your tests is slightly different:

```bash
# Run all tests. `--runInBand` stops Jest from running in parallel.
$ node --inspect-brk node_modules/.bin/jest --runInBand

# Running particular file
$ node --inspect-brk node_modules/.bin/jest --runInBand ./src/metrics
```

We can now see that the Jest process is paused until a debugger attaches:

![](./paused-jest.png "Example of Jest waiting until a debugger has attached")

There are various debuggers available, however for this workshop we will use Chrome's.
It is accessible via:

```
chrome://inspect/#devices
```

As a full example:

```video
./debugger-example.mp4
```

At the time of writing there is also support for:

* VS Code
* Webstorm
* [etc etc](https://facebook.github.io/jest/docs/en/troubleshooting.html)

## Test structure

Although test descriptions and structure can be arbitrary, it can be useful to follow similar conventions.
Although aimed at Ruby, you can follow some of the approaches recommended by http://www.betterspecs.org/

For instance, you may like the convention for writing descriptions such as:

* `#` to describe functions you wish to test, `#add`
* `::` to describe class methods

You may also find it easier to have one **single expectation per test**. This means if you are applying TDD, you can gradually make your tests pass,
rather than attempt to make one test pass - which actually contains multiple assertions.

This can be combined with using `it.only` to focus on one particular assertion at a time.

For example:

```javascript {"highlight": "6,18,21-23,25-28}"}
import * as service from "../";

describe("movies-api", function() {
  describe("#fetchMovies", function() {
    describe("when there are no movies available", function() {
      let testContext;

      beforeEach(async function() {
        testContext = {};

        const fetchMock = jest.spyOn(global, "fetch");
        fetchMock.mockReturnValueOnce(
          Promise.resolve({
            json: () => Promise.resolve({ movies: [] })
          })
        );

        testContext.result = await service.fetchMovies();
      });

      it("returns the data", function() {
        expect(testContext.result).toEqual({ movies: [] });
      });

      it("fetches from the correct endpoint", function() {
        expect(fetch).toHaveBeenCalledWith(
          "http://www.alanfoster.me/movies.json"
        );
      });
    });
  });
});
```

## Adding matchers

You can extend Jest's default matchers. There are various open source libraries available, for instance:

* [jest-image-snapshot](https://www.npmjs.com/package/jest-image-snapshot) - visual regression testing
* [jest-extended](https://github.com/jest-community/jest-extended) - Additional useful matchers
* [jest-immutable-matchers](https://www.npmjs.com/package/jest-immutable-matchers) - Matchers for Facebook's [ImmutableJS](https://facebook.github.io/immutable-js/)
* ... And more [awesome-jest](https://github.com/jest-community/awesome-jest)

Or you can add your own custom matchers:

```javascript
expect.extend({
  toBePotato(received) {
    if (received === "potato") {
      return {
        message: () => `expected ${received} to not be potato`,
        pass: true
      };
    } else {
      return {
        message: () => `expected ${received} to be potato`,
        pass: false
      };
    }
  }
});

it("works successfully", function() {
  expect("potato").toBePotato();
  expect("sausage roll").not.toBePotato();
});
```

There is also support for colored diffing etc, [full details](https://facebook.github.io/jest/docs/en/expect.html#expectextendmatchers).

## Difficulty testing?

If your code is hard to test, perhaps there is an issue with your code. A common testing smell is a test which heavily
relies on various complex mocks, or one which requires many imports.
