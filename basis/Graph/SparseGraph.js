// 稀疏图 -- 邻接表
module.exports = class SparseGraph{
  constructor(n, directed){
    // 点
    this.n = n
    // 边
    this.m = 0
    // 是否有向图
    this.directed = directed
    // 储存数据
    this.data = []

    for (var i = 0; i < n; i++) {
      this.data.push([])
    }
  }
  n(){
    return this.n
  }
  m(){
    return this.m
  }
  // 添加边
  addEdge(v, w){
    if (v < 0 && v > this.n) return 
    if (w < 0 && w > this.n) return
    // if (this.hasEdge(v, w)) return
      
    this.data[v].push(w)
    if (v !== w && !this.directed) this.data[w].push(v)

    this.m += 1
  }
  hasEdge(v, w){
    if (v < 0 && v > this.n) return 
    if (w < 0 && w > this.n) return

    for (var i = 0; i < this.data[v].length; i++) {
      if (this.data[v][i] === w) return true
    }

    return false
  }
}