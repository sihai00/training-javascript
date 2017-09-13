var DenseGraph = require('./DenseGraph')
var SparseGraph = require('./SparseGraph')

// var res = new DenseGraph(10, false)
var n = 20
var m = 100
var res = new DenseGraph.DenseGraph(n, false)

for (var i = 0; i < m; i++) {
  var a = Math.floor(Math.random() * n)
  var b = Math.floor(Math.random() * n)
  res.addEdge(a, b)
}

console.log(res.data[0], 'res')

for (var j = 0; j < n; j++) {
  var adj = new DenseGraph.adjterator(res.data, j)
  var col = ''

  for (var m = adj.begin(); !adj.end(); m = adj.next()) {
    col += (m + ' ')
  }
  console.log(j + ': ' + col)
}
// console.dir(res, {depth: null})

