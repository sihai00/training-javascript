module.exports = class PrimMST{
  constructor(graph){
    this.graph = graph

    // 最小索引堆(索引数组，键为最小的节点，值为权值)
    this.ipq = []
    // 存储和每个节点相邻的最短的横切边
    this.edgeTo = []

    // 存放当前节点是否被标记
    this.marked = []
    // 存放已遍历的最小边
    this.mst = []
    // 最小的权值
    this.mstWeight = 0

    for (var i = 0; i < this.graph.n; i++) {
      this.marked[i] = false
      this.edgeTo[i] = null
    }

    // 遍历0节点
    this.visit(0)

    while(this.ipq.length > 0){
      let e = this.ipq.sort((a, b) => a.weight - b.weight).shift()
      // 若已遍历，跳出
      if (this.marked[e.v] == this.marked[e.w]) continue

      // 当前e为最小边
      this.mst.push(e)

      // 继续遍历当前边的另一个节点
      if (!this.marked[e.v]) {
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
      for (let e = adj.begin(); !adj.end(); e = adj.next()) {
        let w = e.other(v)
        if (!this.marked[w]) {
          if (!this.edgeTo[w]) {
            this.ipq[w] = e.weight
            this.edgeTo[w] = e
          }else if(e.weight < this.edgeTo[w].weight){
            this.edgeTo[w] = e
            this.ipq[w] = e.weight
          }
        }
      }
    }
  }
  show(){
    console.log(`This Lazy Prim MST`)
    this.mst.forEach(v => console.log(`${v.v} - ${v.w}: ${v.weight}`))
    console.log(`This MST weight is : ${this.mstWeight}`)
  }
}