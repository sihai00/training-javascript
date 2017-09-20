const DenseGraph = require('./DenseGraph')
const SparseGraph = require('./SparseGraph')
const ReadGraph = require('./ReadGraph')
const Component = require('./Component')
const Path = require('./Path')

var graph = ReadGraph(new SparseGraph.SparseGraph(6, false), 'test2.txt')
// const res = new Component(graph)
// console.dir(res.count(), {depth: null})

const res = new Path(graph, 0).path(5).showPath()



// for (var j = 0; j < 6; j++) {
//   var adj = graph.adjterator(j)
//   var col = ''

//   for (var m = adj.begin(); !adj.end(); m = adj.next()) {
//     col += (m + ' ')
//   }
//   console.log(j + ': ' + col)
// }
// console.dir(res, {depth: null})

