---
title:  Jest workshop - Babel
---

## Using the latest JavaScript features

You may have noticed the code we wrote did not make use of any modern syntax. In particular
we relied on Node's `require` syntax - rather than the more modern `import` syntax.

Unfortunately, at the time of writing, not all JavaScript implementations support this new modern syntax.
For instance with node v8.9.4 using modern syntax will give you errors:

![](./without-babel.png "Example of the new modern import syntax failing to run on node v8.9.4")

[Babel](https://babeljs.io/) is a simple tool that can convert your modern JavaScript with the
latest bells and whistles into an equivalent form that can run on older versions of JavaScript
that may exist in older browsers:

![](./pipeline.png "Example of Modern source code being output to a transpiler such as babel, with the output being valid JavaScript that runs on legacy browsers")

For example, below shows two ways of writing the same function `add` which returns the sum of
two numbers. Both represent provide the same functionality, but the latter is an example
of the more terse lambda syntax available in ES6:

```javascript
// Plain ol' JavaScript
var add = function(x, y) {
  return x + y;
};

// Modern, Concise, ES6 Lambda Syntax
const add = (x, y) => x + y;
```

## Babel Terminology

Babel is easily configured via:

* Plugins - These read your code and output the transformed code
* Presets - A collection of Plugins

There are many presets available, but the main official presets are:

* `babel-preset-env` - Plugins to target a specific environment, i.e. browsers, or node
* `babel-preset-react` - Plugins related to React, transforming JSX code
* `babel-preset-flow` - Plugins to Facebook's [Flow](https://flow.org/)

## Your turn

To introduce this to your Jest setup, firstly install Babel-Core, the integration support for jest,
as well as `babel-present-env` - which will provide access to the latest language features:

```bash
yarn add --dev babel-jest babel-core babel-preset-env
```

To configure Babel to use the latest syntax features, we can create a `.babelrc` file specifying
that we want to use the previously installed `babel-present-env` present:

```json  {"title": ".babelrc"}
{
  "presets": ["env"]
}
```

If we re-run the tests, nothing will have changed. Verify this to prove to yourself that
this is true.

We can now make use of the more modern export/import syntax as a result of this change:

```diff {"title": "add.spec.js"}
-const add = require('./add');
+import add from './add';

 describe('add', function () {
   it('adds two numbers', function () {
```

```diff {"title": "add.js"}
-function add(x, y) {
-  return x + y;
-}
+const add = (x, y) => x + y;

-module.exports = add;
+export default add;
```

Make these changes to your project, and run your tests again.

## Further configuration

Babel provides the ability to configure your presets and plugins via `.babelrc`.
For instance, we can configure which environments we want to target:

```json  {"title": ".babelrc"}
{
  "presets": [
    [
      "env",
      {
        "targets": {
          "browsers": ["last 2 versions", "safari >= 7"]
        }
      }
    ]
  ]
}
```
