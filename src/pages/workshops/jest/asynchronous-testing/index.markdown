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

`meaning-of-life.spec.js`

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

We want to write a module for fetching a list of popular movies, and add the corresponding tests.

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

To load this data within JavaScript we can make use of `fetch`. Fetch is a modern way of loading fetching resources.
Although `fetch` is available on modern browsers, we can make use of a pollyfill to ensure that older
browsers also have support.

Add the fetch pollyfill dependency to your project:

```bash
yarn add --save-dev whatwg-fetch
```

Create your new module for retrieving the movie list:

`src/api/movies/index.js`

```javascript
import 'whatwg-fetch';

export const fetchMovies = function () {
  return fetch('http://www.alanfoster.me/movies.json')
    .then(response => response.json())
};
```

With the above implementation, you should be able to write a test for the above module with `.resolves` and a
suitable [matcher](/workshops/jest/globals-and-matchers/#matchers).

Look at the initial example for inspiration.

`src/api/movies/__tests__/index.spec.js`

```spoilers javascript
import * as service from '../';

describe('movies-api', function() {
  describe('fetchMovies', function() {
    it('returns the data', function() {
      return expect(service.fetchMovies()).resolves.toEqual({
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
      })
    });
  });
});
```
