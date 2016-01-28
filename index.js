'use strict'

var Joi = require('joi')

module.exports = function JoiFn (validator, message) {
  return function validate (value) {
    return Joi.attempt(value, validator, message)
  }
}
