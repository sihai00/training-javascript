const DenseGraph = require('./DenseGraph')
const SparseGraph = require('./SparseGraph')

// 深度优先遍历所有的节点
module.exports = class Component{
  constructor(graph){
    this.graph = graph
    this.visited = []
    this.ccount = 0

    // 初始化
    for (let i = 0; i < graph.n; i++) {
      this.visited[i] = false
    }
    console.dir(this.visited, {depth: null})
    // 遍历，如果当前节点没有访问过，则调用dfs
    for (let i = 0; i < graph.n; i++) {
      if (!this.visited[i]){
       this.dfs(i)

       console.dir(this.visited, {depth: null})

       this.ccount += 1
      }
    }
  }
  count(){
    return this.ccount
  }
  // 递归访问该节点的所有邻接点
  dfs(v){
    this.visited[v] = true
    // console.log(v, this.visited)

    let adj = this.graph.adjterator(v)
    for (let m = adj.begin(); !adj.end(); m = adj.next()) {
      console.log(m)
      if (!this.visited[m]) {
        console.log('in')
        this.dfs(m)
        adj = this.graph.adjterator(v)
      }
    }
  }
}