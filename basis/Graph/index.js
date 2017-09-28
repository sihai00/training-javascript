const DenseGraph = require('./DenseGraph')
const SparseGraph = require('./SparseGraph')
const ReadGraph = require('./ReadGraph')
const Component = require('./Component')
const Path = require('./Path')
const ShortestPath = require('./ShortestPath')

var graph = ReadGraph(new SparseGraph.SparseGraph(8, false), 'test3.txt').show()
// const res = new Component(graph)
// console.dir(graph, {depth: null})

// new Path(graph, 0).path(5).showPath()
// new ShortestPath(graph, 0).path(5).showPath()

// for (var j = 0; j < 6; j++) {
//   var adj = graph.adjterator(j)
//   var col = ''

//   for (var m = adj.begin(); !adj.end(); m = adj.next()) {
//     col += (m + ' ')
//   }
//   console.log(j + ': ' + col)
// }
// console.dir(res, {depth: null})

