/**
 * 寻找路径
 */
module.exports = class Edge{
  constructor(v, w, weight){
    this.v = v
    this.w = w
    this.weight = weight
  }
  v(){
    return this.v
  }
  w(){
    return this.w
  }
  wt(){
    return this.weight
  }
  other(x){
    return x === this.v ? this.w : this.v
  }
}