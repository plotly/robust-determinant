"use strict"

var det = require("../robust-determinant.js")

require("tape")(function(t) {


  console.log(det([[1,2,3],[3,4,5],[6,7,8]]))

  t.end()
})