---
title:  Jest workshop - More Mocks
---

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

```javascript {"title": "src/metrics/index.js"}
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

```javascript {"title": "src/metrics/__tests__/index.spec.js", "highlight": "7"}
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

```javascript {"highlight": "15"}
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

```javascript {"highlight": "15"}
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

// Globally override time, remember jest is sandboxed
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
    get: jest.fn().mockReturnValueOnce(/* ... */),
    post: jest.fn().mockReturnValueOnce(/* ... */),
    delete: jest.fn().mockReturnValueOnce(/* ... */)
  };
});
```

When testing you may find yourself manually mocking all exposed methods of a given file. In this scenario
it may be easier to rely on Jest's auto-mocking functionality which will mock all exposed functions by default
if you do not supply a factory argument:

```javascript
jest.mock("../foo", function() {
  return {
    fooMethod: jest.fn(),
    barMethod: jest.fn()
  };
});

// Equivalent to the above
// Mock all exposed methods
jest.mock("../foo");
```

With the automocking functionality, you can still spy on all functions within a module and modify particular behaviors too:

```javascript
// Although this line appears first,
// the `jest.mock` will run first.
import someModule from "some-module";

// This will spyOn all of your module's
// functions by default. This is hoisted
// and runs first
jest.mock("some-module");

// Your test
beforeEach(function() {
  someModule.foo.mockReturnValueOnce("...");
});
```

Before making use of any of Jest's advanced mocking capabilities, consider whether a`jest.spyOn` would suffice instead.
