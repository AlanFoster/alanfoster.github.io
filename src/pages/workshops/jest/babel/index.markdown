---
title:  Jest workshop - Babel
---

## Using the latest JavaScript features

You may have noticed the code we wrote did not make use of any modern syntax. In particular
we relied on Node's `require` syntax - rather than the more modern `import` syntax.

[Babel](https://babeljs.io/) is a simple tool that can convert your modern JavaScript with the
latest bells and whistles into an equivalent form that can run on older versions of JavaScript
that may exist in older browsers for instance.

Install Babel-Core, the integration support for jest, as well as babel-present-env - which is
will provide access to the latest language features.

```bash
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
