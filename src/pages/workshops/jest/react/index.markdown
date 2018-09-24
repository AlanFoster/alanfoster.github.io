---
title:  Jest workshop - React
---

## React Support

Jest has great support for React. Infact, if you're new to React, using [Create React App](https://github.com/facebook/create-react-app)
has support for Jest by default. We will continue this tutorial _without_ using Create React App for ease of demonstration.

## Movie List Component

We've been tasked with building a new React component for a movie list.
The component will:

* Tell us when there are no movies available
* When there are movies available; Show movie details

Below is an example of the component we have developed:

```react-example
// Simple Stateless/Functional React Component
// https://reactjs.org/docs/components-and-props.html
const MovieList = ({ movies }) => {
  if (movies.length === 0) {
    return <div>There are no movies.</div>;
  }

  return (
    <div>
      <div>There are {movies.length} movies</div>
      <ul>
        {movies.map(function (movie) {
          return (
            <li key={movie.title}>
              {movie.title} - {movie.releaseYear}
            </li>
          )
        })}
      </ul>
    </div>
  );
};

const mockServerResponse = {
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
};

render(<MovieList movies={mockServerResponse.movies} />);
```

We will write tests for the following two scenarios:

* When the Component has no movies
* When there are movies present

We will not test the undefined / null / error data scenarios.

## Setup: React + Jest

We will want to install the React dependencies as well as the core Jest dependencies:

```bash
yarn add --dev react react-dom
yarn add --dev react-test-renderer
yarn add --dev jest babel-jest babel-core babel-preset-env babel-preset-react
```

Ensure that your top level `.babelrc` looks like:

```json
{
  "presets": ["env", "react"]
}
```

## Writing tests

Let's create a file for the movie list component:

```javascript{"title": "src/movie-list/index.js"}
import React from "react";

// Simple Stateless/Functional React Component
// https://reactjs.org/docs/components-and-props.html
const MovieList = ({ movies }) => {
  if (movies.length === 0) {
    return <div>There are no movies.</div>;
  }

  return (
    <div>
      <div>There are {movies.length} movies</div>
      <ul>
        {movies.map(function(movie) {
          return (
            <li key={movie.title}>
              {movie.title} - {movie.releaseYear}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieList;
```

Additionally create the initial test file:

```javascript{"title": "src/movie-list/__tests__/index.spec.js"}
import React from "react";
import Component from "../";
import renderer from "react-test-renderer";

describe("movie-list", function() {
  describe("when there are no movies", function() {
    it("renders the empty message", function() {
      const movies = [];

      const tree = renderer.create(<Component movies={movies} />);

      expect(tree).toMatchSnapshot();
    });
  });
});
```

When you first run this test you will see that Jest will create a new snapshot file:

![](./recording-snapshot.png "Example of Jest recording a missing snapshot")

You can also see the additional snapshot file within your project structure:

```file-structure
  ├── __tests__/
  │   ├── __snapshots__/
  │   │   └── index.spec.js.snap <--- Newly created snapshot file
  │   └── index.spec.js
  └── index.js
```

Let's modify our React component message to have a different message:

```diff{"title": "src/movie-list/index.js"}
-    return <div>There are no movies.</div>;
+    return <div>Sorry, there are no movies available.</div>;
```

When we re-run our tests they should fail:

![](./recording-snapshot-failure.png "Example of Jest recording a missing snapshot")

Jest has compared the latest rendering and compared it to a previously recorded snapshot.
It has also provided us with a nice human readable diff.

To record a new snapshot you can simply run the test command with the `-u` flag which will update snapshots:

![](./record-snapshot-updated.png "Example of updating a snapshot with the -u flag")

## Your turn

Now that the first test has been written, it is up to you to write the second test:

* ~~When the Component has no movies~~
* When there are movies present

```javascript{"hasSpoilers": true}
import React from 'react';
import Component from '../';
import renderer from 'react-test-renderer';

describe('movie-list', function () {
  // ...

  describe('when there are multiple movies', function () {
    it('renders the movies', function () {
      const movies = [
        {
          "title": "The Hitchhiker's Guide to the Galaxy",
          "releaseYear": 2005
        },
        {
          "title": "Thor: Ragnarok",
          "releaseYear": 2017
        }
      ];

      const tree = renderer.create(
        <Component movies={movies} />
      );

      expect(tree).toMatchSnapshot();
    });
  });
});
```

## Mocking

If you have a more complex React render tree that you wish to mock out, you can make use of `jest.mock` to either
change the component's functionality entirely or provide a placeholder React component.

For instance, if you wished to provide a placeholder React component:

```javascript
jest.mock("third-party-component", function() {
  return () => "MockedThirdPartyComponent";
});
```

When used in conjunction with Jest's snapshotting capabilities, the generated snapshot will be readable:

```javascript
<div>
  <MockedThirdPartyComponent
    active={false}
    onClick={[MockFunction onClick]}
  />
</div>
```

In other scenarios you may wish to change the semantics of a third party component entirely. For instance if you wished
to change the behaviour of React-Virtualize's autosizer component:

```javascript
jest.mock("react-virtualized/dist/commonjs/AutoSizer", function() {
  return function(props) {
    const renderCallback = props.children;

    return renderCallback({
      width: 600
    });
  };
});
```
