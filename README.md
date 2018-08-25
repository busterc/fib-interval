# fib-interval [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

[![Greenkeeper badge](https://badges.greenkeeper.io/busterc/fib-interval.svg)](https://greenkeeper.io/)

> setInterval using a series of incrementing Fibonacci durations


## Install

```sh
$ npm install --save fib-interval
```


## Usage

- Unlike `setInterval`
  - The delay provided must be a numeric Array with the first 2 values to use
  - To stop a timer you must call `.clear()` on the instance
  - To snoop out the current delay time, call `.delay()` on the instance

**For Example:**

```js
'use strict';

var fibInterval = require('fib-interval');

// fibInterval(Function, [Number, Number]) : Object

var instance = fibInterval(function () {
  var delay = instance.delay();

  console.log(delay);

  if (delay === 800) {
    instance.clear();
    console.log('fatto');
  }
}, [0, 100]);

// ==> results:
// 0
// 100
// 100
// 200
// 300
// 500
// 800
// fatto

```

## License

ISC © [Buster Collings](http://about.me/buster)


[npm-image]: https://badge.fury.io/js/fib-interval.svg
[npm-url]: https://npmjs.org/package/fib-interval
[travis-image]: https://travis-ci.org/busterc/fib-interval.svg?branch=master
[travis-url]: https://travis-ci.org/busterc/fib-interval
