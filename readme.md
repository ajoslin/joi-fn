# joi-fn [![Build Status](https://travis-ci.org/ajoslin/joi-fn.svg?branch=master)](https://travis-ci.org/ajoslin/joi-fn)

> Return a function that runs `Joi.attempt` with the given validator


## Install

```
$ npm install --save joi-fn
```


## Usage

```js
var joiFn = require('joi-fn')

joiFn('input')
//=> output
```

## API

#### `joiFn(input, [options])` -> `output`

##### input

*Required*  
Type: `string`

Lorem ipsum.

##### options

###### foo

Type: `boolean`  
Default: `false`

Lorem ipsum.


## License

MIT © [Andrew Joslin](http://ajoslin.com)
