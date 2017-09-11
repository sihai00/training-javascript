module.exports = class text {
  constructor(count){
    this.parent = []
    this.level = []

    this.UF2(count)
  }
  UF2(count){
    for (var i = 0; i < count; i++) {
      this.parent[i] = i
      this.level[i] = 1
    }
  }
  get(){
    return this
  }
}