var DenseGraph = require('./DenseGraph')
var SparseGraph = require('./SparseGraph')

// var res = new DenseGraph(10, false)
var res = new SparseGraph(10, true)
res.addEdge(1,2)
console.dir(res, {depth: null})

