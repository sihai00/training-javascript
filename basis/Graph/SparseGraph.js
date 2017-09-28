const Edge = require('./Edge')

// 稀疏图 -- 邻接表
exports.SparseGraph = class SparseGraph{
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
      this.graph.push([])
    }
  }
  n(){
    return this.n
  }
  m(){
    return this.m
  }
  // 添加边
  addEdge(v, w, weight){
    if (v < 0 && v > this.n) return 
    if (w < 0 && w > this.n) return
    // if (this.hasEdge(v, w)) return
       
    this.graph[v].push(new Edge(v, w, weight))
    if (v !== w && !this.directed) this.graph[w].push(new Edge(w, v, weight))

    this.m += 1
  }
  hasEdge(v, w){
    if (v < 0 && v > this.n) return 
    if (w < 0 && w > this.n) return

    for (var i = 0; i < this.graph[v].length; i++) {
      if (this.graph[v][i].other(v) === w) return true
    }

    return false
  }
  show(){
    let graph = this.graph

    for (var i = 0; i < graph.length; i++) {
      let line = ''
      for (var j = 0; j < graph[i].length; j++) {
        line += ` ${graph[i][j] ? `(to:${graph[i][j].other(`${i}`)}, wt: ${graph[i][j]['weight']})` : null}`
      }
      console.log(`${i}: ${line}`)
    }
  }
  adjterator(v){
    this.v = v
    this.index = 0

    return this
  }
  begin(){
    this.index = 0
    let len = this.graph[this.v].length

    if (len) return this.graph[this.v][this.index]

    return null
  }
  next(){
    let len = this.graph[this.v].length
    this.index += 1

    if (this.index < len) return this.graph[this.v][this.index]

    return null
  }
  end(){
    // console.log('inner', this.v, this.graph[this.v], this.index >= this.graph[this.v].length)
    return this.index >= this.graph[this.v].length
  }
}

// exports.adjterator = class adjterator{
//   constructor(graph, v){
//     this.v = v
//     this.index = 0
//     this.graph = graph
//   }
//   begin(){
//     this.index = 0
//     let len = this.graph[this.v].length

//     if (len) return this.graph[this.v][this.index]

//     return -1
//   }
//   next(){
//     let len = this.graph[this.v].length
//     this.index += 1

//     if (this.index < len) return this.graph[this.v][this.index]

//     return -1
//   }
//   end(){
//     return this.index >= this.graph[this.v].length
//   }
// }

