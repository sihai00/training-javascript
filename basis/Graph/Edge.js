/**
 * 寻找路径
 */
module.exports = class Edge{
  constructor(a, b, weight){
    this.a = a
    this.b = b
    this.weight = weight
  }
  v(){
    return this.a
  }
  w(){
    return this.b
  }
  wt(){
    return this.weight
  }
  other(x){
    return x === this.a ? this.b : this.a
  }
}