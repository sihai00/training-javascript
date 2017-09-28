/**
 * 广度优先遍历
 * 
 */ 

module.exports = class ShortestPath{
  constructor(graph, s){
    this.graph = graph
    // 起始点
    this.s = s
    // 记录节点是否已经遍历过
    this.visited = []
    // 存储父节点（键为当前节点，值为父节点）
    this.from = []
    // 从s到每个节点的最短距离
    this.ord = []

    for (var i = 0; i < graph.n; i++) {
      this.visited[i] = false
      this.from[i] = -1
      this.ord[i] = -1
    }

    // 广度优先遍历
    // 辅助队列
    this.q = [] 
    this.levelSearch(s)
  }
  levelSearch(s){
    this.q.push(s)
    this.visited[s] = true
    this.ord[s] = 0

    while(this.q.length !== 0){
      let top = this.q.shift()

      let adj = this.graph.adjterator(top)
      for (let m = adj.begin(); !adj.end(); m = adj.next()){
        if (!this.visited[m]) {
          this.visited[m] = true
          this.q.push(m)
          this.ord[m] = this.ord[top] + 1
          this.from[m] = top
        }
      }
    }
  }
  hasPath(w){
    return this.visited[w]
  }
  path(w){
    let p = w
    let res = []

    while(p !== -1){
      res.push(p)
      p = this.from[p]
    }

    this.path = []
    while(res.length !== 0){
      let pop = res.pop()
      this.path.push(pop)
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
  lengths(w){
    return ord[w]
  }
}