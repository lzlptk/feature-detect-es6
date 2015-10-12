var detect = require('../')
var test = require('tape')

test('.class()', function (t) {
  t.strictEqual(detect.class(), false)
  t.end()
})

test('.arrowFunction()', function (t) {
  t.strictEqual(detect.arrowFunction(), false)
  t.end()
})

test('.let()', function (t) {
  t.strictEqual(detect.let(), false)
  t.end()
})

test('.const()', function (t) {
  t.strictEqual(detect.const(), false)
  t.end()
})

test('.newArrayFeatures()', function (t) {
  t.strictEqual(detect.newArrayFeatures(), false)
  t.end()
})

test('.collections()', function (t) {
  t.strictEqual(detect.collections(), true)
  t.end()
})

test('.generators()', function (t) {
  t.strictEqual(detect.generators(), false)
  t.end()
})

test('.promises()', function (t) {
  t.strictEqual(detect.generators(), false)
  t.end()
})

test('.templateStrings()', function (t) {
  t.strictEqual(detect.templateStrings(), false)
  t.end()
})

test('.symbols()', function (t) {
  t.strictEqual(detect.symbols(), false)
  t.end()
})