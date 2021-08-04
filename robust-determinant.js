"use strict"

var twoProduct = require("two-product")
var robustSum = require("robust-sum")
var robustScale = require("robust-scale")
var compress = require("robust-compress")

var NUM_EXPANDED = 6

function determinant_2(sum, scale, prod, compress) {
  return function robustDeterminant2(m) {
    return compress(sum(prod(m[0][0], m[1][1]), prod(-m[0][1], m[1][0])))
  }
}

function determinant_3(sum, scale, prod, compress) {
  return function robustDeterminant3(m) {
    return compress(sum(scale(sum(prod(m[1][1], m[2][2]), prod(-m[1][2], m[2][1])), m[0][0]), sum(scale(sum(prod(m[1][0], m[2][2]), prod(-m[1][2], m[2][0])), -m[0][1]), scale(sum(prod(m[1][0], m[2][1]), prod(-m[1][1], m[2][0])), m[0][2]))))
  }
}

function determinant_4(sum, scale, prod, compress) {
  return function robustDeterminant4(m) {
    return compress(sum(sum(scale(sum(scale(sum(prod(m[2][2], m[3][3]), prod(-m[2][3], m[3][2])), m[1][1]), sum(scale(sum(prod(m[2][1], m[3][3]), prod(-m[2][3], m[3][1])), -m[1][2]), scale(sum(prod(m[2][1], m[3][2]), prod(-m[2][2], m[3][1])), m[1][3]))), m[0][0]), scale(sum(scale(sum(prod(m[2][2], m[3][3]), prod(-m[2][3], m[3][2])), m[1][0]), sum(scale(sum(prod(m[2][0], m[3][3]), prod(-m[2][3], m[3][0])), -m[1][2]), scale(sum(prod(m[2][0], m[3][2]), prod(-m[2][2], m[3][0])), m[1][3]))), -m[0][1])), sum(scale(sum(scale(sum(prod(m[2][1], m[3][3]), prod(-m[2][3], m[3][1])), m[1][0]), sum(scale(sum(prod(m[2][0], m[3][3]), prod(-m[2][3], m[3][0])), -m[1][1]), scale(sum(prod(m[2][0], m[3][1]), prod(-m[2][1], m[3][0])), m[1][3]))), m[0][2]), scale(sum(scale(sum(prod(m[2][1], m[3][2]), prod(-m[2][2], m[3][1])), m[1][0]), sum(scale(sum(prod(m[2][0], m[3][2]), prod(-m[2][2], m[3][0])), -m[1][1]), scale(sum(prod(m[2][0], m[3][1]), prod(-m[2][1], m[3][0])), m[1][2]))), -m[0][3]))))
  }
}

function determinant_5(sum, scale, prod, compress) {
  return function robustDeterminant5(m) {
    return compress(sum(sum(scale(sum(sum(scale(sum(scale(sum(prod(m[3][3], m[4][4]), prod(-m[3][4], m[4][3])), m[2][2]), sum(scale(sum(prod(m[3][2], m[4][4]), prod(-m[3][4], m[4][2])), -m[2][3]), scale(sum(prod(m[3][2], m[4][3]), prod(-m[3][3], m[4][2])), m[2][4]))), m[1][1]), scale(sum(scale(sum(prod(m[3][3], m[4][4]), prod(-m[3][4], m[4][3])), m[2][1]), sum(scale(sum(prod(m[3][1], m[4][4]), prod(-m[3][4], m[4][1])), -m[2][3]), scale(sum(prod(m[3][1], m[4][3]), prod(-m[3][3], m[4][1])), m[2][4]))), -m[1][2])), sum(scale(sum(scale(sum(prod(m[3][2], m[4][4]), prod(-m[3][4], m[4][2])), m[2][1]), sum(scale(sum(prod(m[3][1], m[4][4]), prod(-m[3][4], m[4][1])), -m[2][2]), scale(sum(prod(m[3][1], m[4][2]), prod(-m[3][2], m[4][1])), m[2][4]))), m[1][3]), scale(sum(scale(sum(prod(m[3][2], m[4][3]), prod(-m[3][3], m[4][2])), m[2][1]), sum(scale(sum(prod(m[3][1], m[4][3]), prod(-m[3][3], m[4][1])), -m[2][2]), scale(sum(prod(m[3][1], m[4][2]), prod(-m[3][2], m[4][1])), m[2][3]))), -m[1][4]))), m[0][0]), scale(sum(sum(scale(sum(scale(sum(prod(m[3][3], m[4][4]), prod(-m[3][4], m[4][3])), m[2][2]), sum(scale(sum(prod(m[3][2], m[4][4]), prod(-m[3][4], m[4][2])), -m[2][3]), scale(sum(prod(m[3][2], m[4][3]), prod(-m[3][3], m[4][2])), m[2][4]))), m[1][0]), scale(sum(scale(sum(prod(m[3][3], m[4][4]), prod(-m[3][4], m[4][3])), m[2][0]), sum(scale(sum(prod(m[3][0], m[4][4]), prod(-m[3][4], m[4][0])), -m[2][3]), scale(sum(prod(m[3][0], m[4][3]), prod(-m[3][3], m[4][0])), m[2][4]))), -m[1][2])), sum(scale(sum(scale(sum(prod(m[3][2], m[4][4]), prod(-m[3][4], m[4][2])), m[2][0]), sum(scale(sum(prod(m[3][0], m[4][4]), prod(-m[3][4], m[4][0])), -m[2][2]), scale(sum(prod(m[3][0], m[4][2]), prod(-m[3][2], m[4][0])), m[2][4]))), m[1][3]), scale(sum(scale(sum(prod(m[3][2], m[4][3]), prod(-m[3][3], m[4][2])), m[2][0]), sum(scale(sum(prod(m[3][0], m[4][3]), prod(-m[3][3], m[4][0])), -m[2][2]), scale(sum(prod(m[3][0], m[4][2]), prod(-m[3][2], m[4][0])), m[2][3]))), -m[1][4]))), -m[0][1])), sum(scale(sum(sum(scale(sum(scale(sum(prod(m[3][3], m[4][4]), prod(-m[3][4], m[4][3])), m[2][1]), sum(scale(sum(prod(m[3][1], m[4][4]), prod(-m[3][4], m[4][1])), -m[2][3]), scale(sum(prod(m[3][1], m[4][3]), prod(-m[3][3], m[4][1])), m[2][4]))), m[1][0]), scale(sum(scale(sum(prod(m[3][3], m[4][4]), prod(-m[3][4], m[4][3])), m[2][0]), sum(scale(sum(prod(m[3][0], m[4][4]), prod(-m[3][4], m[4][0])), -m[2][3]), scale(sum(prod(m[3][0], m[4][3]), prod(-m[3][3], m[4][0])), m[2][4]))), -m[1][1])), sum(scale(sum(scale(sum(prod(m[3][1], m[4][4]), prod(-m[3][4], m[4][1])), m[2][0]), sum(scale(sum(prod(m[3][0], m[4][4]), prod(-m[3][4], m[4][0])), -m[2][1]), scale(sum(prod(m[3][0], m[4][1]), prod(-m[3][1], m[4][0])), m[2][4]))), m[1][3]), scale(sum(scale(sum(prod(m[3][1], m[4][3]), prod(-m[3][3], m[4][1])), m[2][0]), sum(scale(sum(prod(m[3][0], m[4][3]), prod(-m[3][3], m[4][0])), -m[2][1]), scale(sum(prod(m[3][0], m[4][1]), prod(-m[3][1], m[4][0])), m[2][3]))), -m[1][4]))), m[0][2]), sum(scale(sum(sum(scale(sum(scale(sum(prod(m[3][2], m[4][4]), prod(-m[3][4], m[4][2])), m[2][1]), sum(scale(sum(prod(m[3][1], m[4][4]), prod(-m[3][4], m[4][1])), -m[2][2]), scale(sum(prod(m[3][1], m[4][2]), prod(-m[3][2], m[4][1])), m[2][4]))), m[1][0]), scale(sum(scale(sum(prod(m[3][2], m[4][4]), prod(-m[3][4], m[4][2])), m[2][0]), sum(scale(sum(prod(m[3][0], m[4][4]), prod(-m[3][4], m[4][0])), -m[2][2]), scale(sum(prod(m[3][0], m[4][2]), prod(-m[3][2], m[4][0])), m[2][4]))), -m[1][1])), sum(scale(sum(scale(sum(prod(m[3][1], m[4][4]), prod(-m[3][4], m[4][1])), m[2][0]), sum(scale(sum(prod(m[3][0], m[4][4]), prod(-m[3][4], m[4][0])), -m[2][1]), scale(sum(prod(m[3][0], m[4][1]), prod(-m[3][1], m[4][0])), m[2][4]))), m[1][2]), scale(sum(scale(sum(prod(m[3][1], m[4][2]), prod(-m[3][2], m[4][1])), m[2][0]), sum(scale(sum(prod(m[3][0], m[4][2]), prod(-m[3][2], m[4][0])), -m[2][1]), scale(sum(prod(m[3][0], m[4][1]), prod(-m[3][1], m[4][0])), m[2][2]))), -m[1][4]))), -m[0][3]), scale(sum(sum(scale(sum(scale(sum(prod(m[3][2], m[4][3]), prod(-m[3][3], m[4][2])), m[2][1]), sum(scale(sum(prod(m[3][1], m[4][3]), prod(-m[3][3], m[4][1])), -m[2][2]), scale(sum(prod(m[3][1], m[4][2]), prod(-m[3][2], m[4][1])), m[2][3]))), m[1][0]), scale(sum(scale(sum(prod(m[3][2], m[4][3]), prod(-m[3][3], m[4][2])), m[2][0]), sum(scale(sum(prod(m[3][0], m[4][3]), prod(-m[3][3], m[4][0])), -m[2][2]), scale(sum(prod(m[3][0], m[4][2]), prod(-m[3][2], m[4][0])), m[2][3]))), -m[1][1])), sum(scale(sum(scale(sum(prod(m[3][1], m[4][3]), prod(-m[3][3], m[4][1])), m[2][0]), sum(scale(sum(prod(m[3][0], m[4][3]), prod(-m[3][3], m[4][0])), -m[2][1]), scale(sum(prod(m[3][0], m[4][1]), prod(-m[3][1], m[4][0])), m[2][3]))), m[1][2]), scale(sum(scale(sum(prod(m[3][1], m[4][2]), prod(-m[3][2], m[4][1])), m[2][0]), sum(scale(sum(prod(m[3][0], m[4][2]), prod(-m[3][2], m[4][0])), -m[2][1]), scale(sum(prod(m[3][0], m[4][1]), prod(-m[3][1], m[4][0])), m[2][2]))), -m[1][3]))), m[0][4])))))
  }
}

function compileDeterminant(n) {
  var fn =
    n === 2 ? determinant_2 :
    n === 3 ? determinant_3 :
    n === 4 ? determinant_4 :
    n === 5 ? determinant_5 : undefined
  return fn(robustSum, robustScale, twoProduct, compress)
}

var CACHE = [
  function robustDeterminant0() { return [0] },
  function robustDeterminant1(m) { return [m[0][0]] }
]

function generateDispatch() {
  while(CACHE.length < NUM_EXPANDED) {
    CACHE.push(compileDeterminant(CACHE.length))
  }
  var procArgs = []
  var code = ["function robustDeterminant(m){switch(m.length){"]
  for(var i=0; i<NUM_EXPANDED; ++i) {
    procArgs.push("det" + i)
    code.push("case ", i, ":return det", i, "(m);")
  }
  code.push("}\
var det=CACHE[m.length];\
if(!det)\
det=CACHE[m.length]=gen(m.length);\
return det(m);\
}\
return robustDeterminant")
  procArgs.push("CACHE", "gen", code.join(""))
  var proc = Function.apply(undefined, procArgs)
  module.exports = proc.apply(undefined, CACHE.concat([CACHE, compileDeterminant]))
  for(var i=0; i<CACHE.length; ++i) {
    module.exports[i] = CACHE[i]
  }
}

generateDispatch()