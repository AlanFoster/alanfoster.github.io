---
title:  Jest workshop - Approaches
---

## Approaches

As a developer you will notice common patterns when using Jest.

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

## Mocking Approaches

It is possible to use `jest.spyOn` for most of your mocking needs.

For instance, let's say we want to track how a user interacts with our website.
If the user clicks on our banner, we will send a custom metrics event:

```javascript
import sendMetric from "./send-metric";

const trackBannerClick = function() {
  sendMetric({
    eventType: "click.banner"
  });
};

const Banner = () => (
  <a href="..." onClick={trackBannerClick}>
    <img src="..." />
  </a>
);
```

For the implementation we will take the given eventType, and interact with the
metrics service with the current time, and a unique marker showing the origin of the
event:

`src/metrics/index.js`

```javascript
import * as metricsService from "./metrics-service";

export default function({ eventType }) {
  metricsService.send({
    event: `my_application_namespace.${eventType}`,
    time: Date.now()
  });
}
```

Writing a test is very easy for this scenario. We can import the underlying
metrics API, directly use **`jest.spyOn`**, and mock the functionality as required,
and assert that we have interacted with the API as intended:

`src/metrics/__tests__/index.spec.js`

```javascript
import sendMetric from "../index";
import * as originalMetricsService from "../metrics-service";

describe("metrics-mocking-example", function() {
  describe("when calling with a custom eventType", function() {
    beforeEach(function() {
      jest.spyOn(originalMetricsService, "send").mockReturnValueOnce(true);

      sendMetric({ eventType: "click.banner" });
    });

    it("calls the metrics service as expected", function() {
      expect(originalMetricsService.send).toHaveBeenCalledWith({
        event: "my_application_namespace.click_banner",
        time: 1523724949703
      });
    });
  });
});
```

The tests passed initially, but when we ran our tests again they failed:

![](./time-failure.png "Example of a test failing due to non-deterministic")

It turns out that the hard-coded time stamp is the issue:

```javascript{15}
import sendMetric from "../index";
import * as originalMetricsService from "../metrics-service";

describe("metrics-mocking-example", function() {
  describe("when calling with a custom eventType", function() {
    beforeEach(function() {
      jest.spyOn(originalMetricsService, "send").mockReturnValueOnce(true);

      sendMetric({ eventType: "click.banner" });
    });

    it("calls the metrics service as expected", function() {
      expect(originalMetricsService.send).toHaveBeenCalledWith({
        event: "my_application_namespace.click_banner",
        time: 1523724949703
      });
    });
  });
});
```

There's many ways to fix this functionality. Firstly, if we do not care about the
particular of the time, other than requiring it being a number:

```javascript{15}
import sendMetric from "../index";
import * as originalMetricsService from "../metrics-service";

describe("metrics-mocking-example", function() {
  describe("when calling with a custom eventType", function() {
    beforeEach(function() {
      jest.spyOn(originalMetricsService, "send").mockReturnValueOnce(true);

      sendMetric({ eventType: "click.banner" });
    });

    it("calls the metrics service as expected", function() {
      expect(originalMetricsService.send).toHaveBeenCalledWith({
        event: "my_application_namespace.click_banner",
        time: expect.any(Number)
      });
    });
  });
});
```

If we care about the particular value, we can modify our test to include
one of the following solutions:

```javascript
// Use spyOn
jest.spyOn(Date, "now").mockReturnValueOnce(1234);

// Globally override time
Date.now = function() {
  return 1234;
};
```

## Advanced Jest Mocking

Jest additionally provides a very powerful module mocking system. However, the semantics
of this can be unexpected in certain scenarios - as it uses babel to inspect and rewrite your code before it is ran.

Unlike `jest.spyOn`, you can use **`jest.mock(moduleName, factory, options)`** to rewrite entire modules:

```javascript
jest.mock("../client", function() {
  return {
    get: jest.fn()
  };
});
```

For example, it is possible to entirely rewrite the functionality of an arbitrary file and change the semantics
as desired:

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

If possible, I recommend avoiding the usage of this style of mocking as it is can easily be mis-used.

## Debugging

It is possible to debug your Jest tests with ease. First add a `debugger;' statement as appropriate:

```javascript{4}
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

## Difficulty testing?

If your code is hard to test, perhaps there is an issue with your code. A common testing smell is a test which heavily
relies on various complex mocks, or one which requires many imports.
