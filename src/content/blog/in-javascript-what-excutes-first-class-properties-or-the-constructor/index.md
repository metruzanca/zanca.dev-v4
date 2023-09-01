---
title: "In Javascript, what excutes first: Class Properties or the Constructor?"
slug: in-javascript-what-excutes-first-class-properties-or-the-constructor
pubDate: 2020-11-29T09:40:43.627Z
description: A short blog post where I document my approach to finding a
  solution to a question I had.
tags: ["programming", "javascript", "til"]
heroImage: '/blog-placeholder-2.jpg'
---

In most languages its the Properties first, but with how javascript doesn't conform to normal OOP and instead uses a prototypal inheritance model I wanted to double check.

As per usual, when I test things out in js I'm either using the browser console or Quokka the Vscode extension.

I wrote this small script out which uses a generator (something I don't use much).
```js
  function* when(){
    let i = 0;
    while(true){
      yield i;
      i++;
    }
  }
  const w = when()
  const next = () => w.next().value

  class Test{
    prop = next()
    constructor(){
      this.constr = next()
    }
  }
  const t = new Test()
  console.log(t)
```
The output proves that like most other languages the props get evaluated first and the constructor second.
```
Object { prop: 0, constr: 1 }
```

