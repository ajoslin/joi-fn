# joi-fn [![Build Status](https://travis-ci.org/ajoslin/joi-fn.svg?branch=master)](https://travis-ci.org/ajoslin/joi-fn)

> Return a function that runs `Joi.attempt` with the given validator

## Install

```
$ npm install --save joi-fn
```


## Usage

```js
var joiFn = require('joi-fn')
var Joi = require('joi')

var validate = joiFn(Joi.string(), 'custom error')

// Joi will convert a number-like string to a number for us
validate('1')
// => 1

validate('string')
// => throws an error with "custom error" as prefix
```

## API

#### `joiFn(validator, [message])` -> `function(value)`

##### vaildator

*Required*

A Joi validator

##### message

Type: `string|Constructor`
Default: `''`

A string to prefix Joi's error with, or a custom Error constructor to wrap errors with.

## License

MIT © [Andrew Joslin](http://ajoslin.com)
