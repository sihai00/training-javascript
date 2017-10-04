const Edge = require('./Edge')

module.exports = class LazyPrimMST{
  constructor(graph, weight){
    this.graph = graph
    this.weight = weight

    // 最小队列，存放当前已遍历的所有边
    this.pq = []

    // 存放当前节点是否被标记
    this.marked = Array.from({length: graph.n}, n => false)
    // 存放已遍历的最小边
    this.mst = []
    // 最小的权值
    this.mstWeight = 0

    // 遍历0节点
    this.visit(0)

    while(this.pq.length > 0){
      let e = this.pq.sort((a, b) => a.weight - b.weight).shift()
      if (this.marked[e.v] == this.marked[e.w]) continue

      this.mst.push(e)
      if (!marked[e.v]) {
        this.visit(e.v)
      }else{
        this.visit(e.w)
      }
    }

    this.mstWeight = this.mst.reduce((pre, next) => pre + next.weight, 0)
  }
  mstEdges(){
    return this.mst
  }
  result(){
    return this.mstWeight
  }
  visit(v){
    if (!this.marked[v]) {
      this.marked[v] = true

      let adj = this.graph.adjterator(v)
      for (let m = adj.begin(); !adj.end(); m = adj.next()) {
        // 如果当前节点没有被遍历，那么把该节点的所有关联的边都加入marked中
        if (!this.marked[m]) {
          this.pq.push(m)
        }
      }
    }
  }
}