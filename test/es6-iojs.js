var detect = require('../')
var test = require('tape')

test('.class()', function (t) {
  t.strictEqual(detect.class(), true)
  t.end()
})

test('.arrowFunction()', function (t) {
  t.strictEqual(detect.arrowFunction(), false)
  t.end()
})

test('.let()', function (t) {
  t.strictEqual(detect.let(), true)
  t.end()
})

test('.const()', function (t) {
  t.strictEqual(detect.const(), true)
  t.end()
})