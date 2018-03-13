---
title:  Jest workshop - Setup
---

## Getting started

We will use Yarn to install Jest as a JavaScript dependency.

Firstly ensure that that you have yarn available:

```bash
$ yarn --version
v1.3.2
```

If you do not have yarn visit [installing Yarn](https://yarnpkg.com/en/docs/install) for
further details on how to install Yarn on your operating system. At the time of writing,
if you wish to install Yarn via homebrew:

```bash
brew install yarn
```

### Creating a new project

Firstly create a new directory where you want to run your project:

```bash
mkdir ~/Documents/jest-workshop
cd ~/Documents/jest-workshop
```

We can initialize a new `package.json` that will specify all of our project dependencies
via the `yarn init` command. You will asked various questions about this project, the
answers are not too important and can be left as their default value for the most part:

```bash
yarn init
```

This will generate a new `package.json` file similar to:

```json
{
  "name": "jest-workshop",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT"
}
```

Now we can install jest:

```bash
yarn add --dev jest
```

This command has also modified your `package.json` file:

```json{6-8}
{
  "name": "jest-workshop",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "devDependencies": {
    "jest": "^22.4.2"
  }
}
```

Let's define a script within our `package.json` file to run our test suite via jest:

```json{6-8}
{
  "name": "jest-workshop",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "test": "jest"
  }
  "devDependencies": {
    "jest": "^22.4.2"
  }
}
```

We can now run our JavaScript tests with the `yarn run` command:

```bash
$ yarn run test
yarn run v1.3.2
$ jest
No tests found
In ~/Documents/jest-workshop
  1 file checked.
  testMatch: **/__tests__/**/*.js?(x),**/?(*.)(spec|test).js?(x) - 0 matches
  testPathIgnorePatterns: /node_modules/ - 1 match
Pattern:  - 0 matches
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

Oops, no tests? Let's add some tests!
