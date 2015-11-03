# wwwtxt

> Unix fortune, but with early internet posts

![](https://img.shields.io/travis/sotojuan/wwwtxt.svg?style=flat-square)
[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square)](https://github.com/Flet/semistandard)

## Install
```
npm install -g wwwtxt
```

or

```
npm install wwwtxt
```

## Usage

### Global install

```
wwwtxt
```

Will print a random tweet.

```
wwwtxt --cow
```

Will print a random tweet using [cowsay](https://www.npmjs.com/package/cowsay)

### Module install

```javascript
var getRandomTweet = require('wwwtxt');

getRandomTweet()
  .then((tweet) => {
    console.log(tweet);
  });
```

## Why?

So you can do this:

![](https://i.imgur.com/AIIq6rN.jpg)

or this:

![](http://i.imgur.com/Hd4Hi1F.jpg)

## Source
[wwwtxt](https://twitter.com/wwwtxt)
