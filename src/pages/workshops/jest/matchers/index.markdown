---
title:  Jest workshop - Matchers
---

## Matchers

We made use of Jest's [expect library](https://facebook.github.io/jest/docs/en/expect.html) to
assert that the result of `add(2, 3)` was 5. For this scenario we used the `.toBe` matcher:

```javascript
expect(add(2, 3)).toBe(5)
```

Out of the box Jest provides lots of useful matchers, and you can even write your own!

Some common matchers that you might use are:

- .toBe(value)
- .toHaveBeenCalled()
- .toHaveBeenCalledTimes(number)
- .toHaveBeenCalledWith(arg1, arg2, ...)
- .toHaveBeenLastCalledWith(arg1, arg2, ...)
- .toBeInstanceOf(Class)
- .toContain(item)
- .toEqual(value)
- .toMatchSnapshot(optionalString)
- .toThrow(error)


