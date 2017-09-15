const DenseGraph = require('./DenseGraph')
const SparseGraph = require('./SparseGraph')
const ReadGraph = require('./ReadGraph')

var res = ReadGraph(new DenseGraph.DenseGraph(13, false), 'test1.txt').show()

// for (var j = 0; j < n; j++) {
//   var adj = new DenseGraph.adjterator(res.data, j)
//   var col = ''

//   for (var m = adj.begin(); !adj.end(); m = adj.next()) {
//     col += (m + ' ')
//   }
//   console.log(j + ': ' + col)
// }
// console.dir(res, {depth: null})

