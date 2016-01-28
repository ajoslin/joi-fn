'use strict'

var test = require('tape')
var joiFn = require('./')
var Joi = require('joi')

test(function (t) {
  var fn = joiFn(Joi.number(), 'customMessage')

  t.throws(function () {
    fn('string')
  }, /customMessage/)

  t.equal(fn(1), 1)

  t.end()
})
