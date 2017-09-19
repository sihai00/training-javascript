// 稠密图 -- 邻接矩阵
exports.DenseGraph = class DenseGraph{
  constructor(n, directed){
    // 点
    this.n = n
    // 边
    this.m = 0
    // 是否有向图
    this.directed = directed
    // 储存数据
    this.graph = []

    for (var i = 0; i < n; i++) {
      this.graph.push(Array(n).join(',').split(',').map((v, i) => false))
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
      
    this.graph[v][w] = true 
    if (!this.directed) this.graph[w][v] = true 

    this.m += 1
  }
  hasEdge(v, w){
    if (v < 0 && v > this.n) return 
    if (w < 0 && w > this.n) return

    return this.graph[v][w]
  }
  show(){
    let graph = this.graph
    for (var i = 0; i < graph.length; i++) {
      let line = ''
      for (var j = 0; j < graph[i].length; j++) {
        line += ` ${graph[i][j] ? 1 : 0}`
      }
      console.log(`${i}: ${line}`)
    }
  }
  adjterator(v){
    this.v = v
    this.index = -1

    return this
  }
  begin(){
    this.index = -1
    // 寻找第一个为true的下标
    return this.next()
  }
  next(){
    let len = this.graph[this.v].length
    for (this.index += 1; this.index < len; this.index++) {
      let data = this.graph[this.v][this.index]
      if (data) return this.index
    }

    return -1
  }
  end(){
    return this.index >= this.graph[this.v].length
  }
}

// exports.adjterator = class adjterator{
//   constructor(graph, v){
//     this.v = v
//     this.index = -1
//     this.graph = graph
//   }
//   begin(){
//     this.index = -1
//     // 寻找第一个为true的下标
//     return this.next()
//   }
//   next(){
//     let len = this.graph[this.v].length
//     for (this.index += 1; this.index < len; this.index++) {
//       let data = this.graph[this.v][this.index]
//       if (data) return this.index
//     }

//     return -1
//   }
//   end(){
//     return this.index >= this.graph[this.v].length
//   }
// }