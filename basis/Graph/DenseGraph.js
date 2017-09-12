// 稠密图 -- 邻接矩阵
module.exports = class DenseGraph{
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
      this.data.push(Array(n).join(',').split(',').map((v, i) => false))
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
    // 去掉已存在和平行边
    if (this.hasEdge(v, w)) return
      
    this.data[v][w] = true 
    if (!this.directed) this.data[w][v] = true 

    this.m += 1
  }
  hasEdge(v, w){
    if (v < 0 && v > this.n) return 
    if (w < 0 && w > this.n) return

    return this.data[v][w]
  }
}