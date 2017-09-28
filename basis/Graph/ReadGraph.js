const fs = require('fs')
const path = require('path')

// 读取文件写入图中
module.exports = function(graph, filename){
  let data = fs.readFileSync(path.join(__dirname, `/${filename}`), 'utf8').split('\n')
  let first = data[0].split(' ')

  if (+first[0] === graph.n) {
    for (let i = 1; i < data.length; i++) {
      let line = data[i].split(' ')
      graph.addEdge(line[0], line[1], parseFloat(line[2]))
    }
  }
  return graph
}