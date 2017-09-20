/**
 * 寻找路径
 */
module.exports = class Path{
  constructor(graph, s){
    this.graph = graph
    this.s = s
    // visited记录节点是否已经遍历过
    this.visited = []
    // 存储父节点（键为当前节点，值为父节点）
    this.from = []

    for (let i = 0; i < graph.n; i++) {
      this.visited[i] = false
      this.from[i] = -1
    }

    this.dfs(s)
  }
  // 递归访问该节点的所有邻接点
  dfs(v){
    this.visited[v] = true

    let adj = this.graph.adjterator(v)
    for (let m = adj.begin(); !adj.end(); m = adj.next()) {
      // console.log(m)
      if (!this.visited[m]) {
        // console.log('in')
        this.from[m] = v
        this.dfs(m)
        adj = this.graph.adjterator(v)
      }
    }
  }
  // 是否有路径
  hasPath(w){
    return this.from[w]
  }
  // 路径
  path(w){
    let p = w
    let res = []

    while(p !== -1){
      res.push(p)
      p = this.from[p]
    }

    this.path = []
    while(res.length !== 0){
      let top = res.pop()
      this.path.push(top)
    }

    return this
  }
  showPath(){
    let str = ''
    this.path.forEach((v, i) => {
      str += (this.path.length - 1) === i ? v : (v + '-->')
    })
    console.log(str)
  }
}