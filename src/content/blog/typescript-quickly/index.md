---
title: Learn Typescript Quickly
slug: typescript-quickly
pubDate: 2023-09-08T11:22:47.574Z
# TODO updated date
description: Typescript Crash Course
tags: ["typescript", "react"]
---

# Learn Typescript in 5minutes
The best way to learn typescript is to start using it. Take a `.js` file and rename it to `.ts`. (if it has react JSX in it, name it `.tsx` instead.)

From there, just fix the red _squigglies_.

> "But how?"

Step 1. Read this page: [Ts basics](https://www.typescriptlang.org/docs/handbook/2/basic-types.html). This is a great primer. Don't try to study this page. Just read thru to get an _idea_ and come back to it later.

Next open a project, and start changing `.js` files to `.ts`. Use the docs or ask [Perplexity](https://perplexity.ai) to explain it to you. If you provide perplexity with a snippet and the error message + a question, it does a reasonably good job at telling you whats wrong and it might even link your some more resources.


## Best Practice Examples - js vs ts
Below are some condensed snippets to help you move your code from js to ts.

## Functions
```js
// js
function myFunc(value) {
  return value + 2
}
const myArrow = value => value + 2
```

```ts
// ts
function myFunc(value: number): number {
  return value + 2
}
const myArrow = (value: number): number => value + 2
//                                ^? this type, is the return of the function.
//                    it is optional, since ts can "figure out" the return type based on what you return
//                    this is whats called "type inference"
```

## React Component prop types
If you're using propTypes, you can throw those away. Typescript does what that library does and better.

> If you're not using the `prop-types` package, skip down to the typescript snippet

```js
// js
import React from 'react
import PropTypes from 'prop-types';

const MyComponent = ({ name }) => {
  return <div>Hello, {name}!</div>
}

MyComponent.propTypes = {
  name: PropTypes.string.isRequired
}
```
<!-- TODO [twoslash + highlighter](https://fatihkalifa.com/blog/typescript-twoslash) -->
```ts
// ts
import React, FC from 'react
type Props = {
  name: string
}
const MyComponent: FC<Props> = ({ name }) => {
  return <div>Hello, {name}!</div>
}
```

In both these snippets if name isn't provided, you'll get a compile error. This is because name is required.

If instead you wanted it to be optional you would do this:
```ts
// ts
import React, FC from 'react
type Props = {
  // question mark denotes that name is optional.
  // Its equivalent to `name: string|undefined`
  name?: string
}
const MyComponent: FC<Props> = ({ name }) => {
  return <div>Hello, {name ?? 'World'}!</div>
}
```

In react, its best practice to use Arrow functions for components, since "traditional" functions don't have access to FC.

This is the equivalent in using traditional functions:
```ts
// ts
function MyComponent(props: Props): JSX.Element {

}
```

---
## Heres some Resources:
- the [official docs](https://www.typescriptlang.org/docs/handbook/2/basic-types.html)
- [google](https://google.com)
- AI tools like [Perplexity](https://perplexity.ai) (my favorite way as of recently).
- [React's learn typescript](https://react.dev/learn/typescript)
- Heres a neat [recap](https://basarat.gitbook.io/typescript/recap) on what typescript does for us as developers.