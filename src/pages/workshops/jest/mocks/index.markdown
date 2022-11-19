---
title: Jest workshop - Mocks
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

## Why use mocks?

In the previous example we made use of `fetch` to retrieve a list of movies:

`http://www.alanfoster.me/movies.json`

```json
{
  "movies": [
    {
      "title": "The Hitchhiker's Guide to the Galaxy",
      "releaseYear": 2005
    },
    {
      "title": "Thor: Ragnarok",
      "releaseYear": 2017
    }
  ]
}
```

There are some issues with calling out to the _real_ service during tests:

- It's not possible to test edge cases i.e. empty payloads, lots of items, etc.
- The website has gone down, and now our tests are broken?
- Our tests are _slow_!

## Using Mocks

Starting with the following service:

```javascript {"title": "src/api/movies/index.js"}
import "whatwg-fetch";

export const fetchMovies = function () {
  return fetch("http://www.alanfoster.me/movies.json").then((response) =>
    response.json()
  );
};
```

We wish to test the scenario of our movies list being empty:

```javascript {"title": "src/api/movies/__tests__/index.spec.js"}
import * as service from "../";

describe("movies-api", function () {
  describe("fetchMovies", function () {
    describe("when there are no movies available", function () {
      it("returns the data", async function () {
        const result = await service.fetchMovies();
        expect(result).toEqual({
          movies: [],
        });
      });
    });
  });
});
```

You can run this test with `yarn run` you run this test, it will fail.

![](./empty-comparison-failure.png "Example of tests returning the real list of movies, and not being equal to an empty array as expected")

Why? Our server http://www.alanfoster.me/movies.json is currently returning multiple movies.

Fortunately Jest provides multiple ways to change the behaviour of objects, and the functionality to ensure that objects are called correctly.
In this scenario we can make use of Jest's [spyOn](https://facebook.github.io/jest/docs/en/jest-object.html#jestspyonobject-methodname) function:

```javascript
jest.spyOn(object, methodName);
```

A call to `jest.spyOn` will return a mock which we can configure. By default, the mock will call the original implementation.

Before our test runs we can spy on the fetch call and return our mock data:

```javascript {"highlight": "6-15"}
import * as service from "../";

describe("movies-api", function () {
  describe("fetchMovies", function () {
    describe("when there are no movies available", function () {
      beforeEach(function () {
        const fetchMock = jest.spyOn(global, "fetch");
        fetchMock.mockReturnValueOnce(
          Promise.resolve({
            json: function () {
              return Promise.resolve({
                movies: [],
              });
            },
          })
        );
      });

      it("returns the data", async function () {
        const result = await service.fetchMovies();
        expect(result).toEqual({
          movies: [],
        });
      });
    });
  });
});
```

We can add another expectation to ensure that the fetch API was called as expected:

```javascript {"highlight": "22"}
import * as service from "../";

describe("movies-api", function () {
  describe("fetchMovies", function () {
    describe("when there are no movies available", function () {
      beforeEach(function () {
        const fetchMock = jest.spyOn(global, "fetch");
        fetchMock.mockReturnValueOnce(
          Promise.resolve({
            json: function () {
              return Promise.resolve({
                movies: [],
              });
            },
          })
        );
      });

      it("returns the data", async function () {
        const result = await service.fetchMovies();
        expect(result).toEqual({
          movies: [],
        });
        expect(fetch).toHaveBeenCalledWith(
          "http://www.alanfoster.me/movies.json"
        );
      });
    });
  });
});
```

## Your turn

Add an additional test for when there are multiple movies return from the movies endpoint.

```javascript {"hasSpoilers": true}
import * as service from "../";

describe("movies-api", function () {
  describe("fetchMovies", function () {
    // ...

    describe("when there are multiple movies available", function () {
      beforeEach(function () {
        const fetchMock = jest.spyOn(global, "fetch");
        fetchMock.mockReturnValueOnce(
          Promise.resolve({
            json: function () {
              return Promise.resolve({
                movies: [
                  {
                    title: "The Hitchhiker's Guide to the Galaxy",
                    releaseYear: 2005,
                  },
                  {
                    title: "Thor: Ragnarok",
                    releaseYear: 2017,
                  },
                ],
              });
            },
          })
        );
      });

      it("returns the data", async function () {
        const result = await service.fetchMovies();
        expect(result).toEqual({
          movies: [
            {
              title: "The Hitchhiker's Guide to the Galaxy",
              releaseYear: 2005,
            },
            {
              title: "Thor: Ragnarok",
              releaseYear: 2017,
            },
          ],
        });
        expect(fetch).toHaveBeenCalledWith(
          "http://www.alanfoster.me/movies.json"
        );
      });
    });
  });
});
```
