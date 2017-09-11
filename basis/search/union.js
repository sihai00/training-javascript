/**
 * 并查集
 * 数组表示，值表示parent指向其父节点
 */
module.exports = class union{
  constructor(count){
    this.parent = []
    // 层级数
    this.level = []
    // 初始化
    this.UF2(count)
  }
  UF2(count){
    for (var i = 0; i < count; i++) {
      this.parent[i] = i
      this.level[i] = 1
    }
  }
  /**
   * 寻找根节点
   */
  find(p){
    let parent = this.parent
    let len = parent.length

    if (len < 0) return 
    if (p < 0 || p >= len) return 

    // while(p !== parent[p]){
    //   // 压缩路径，直接寻找父节点的父节点。即使父节点是根，那么其还是指向自己
    //   p = parent[parent[p]]
    // }
    // return p

    // 压缩路径，直接把当前节点的父节点赋值为根节点
    if (p !== parent[p]) parent[p] = this.find(parent[p])

    return parent[p]
  }
  /**
   * 是否相连
   * 判断两节点的根是否相同
   */
  isConnected(p, q){
    return this.find(p) === this.find(q)
  }
  /**
   * 连接两节点
   * 把两个节点的父节点相连接
   */
  unionElements(p, q){
    let parent = this.parent
    let level = this.level
    let pRoot = this.find(p)
    let qRoot = this.find(q)

    // 根据节点的层级优化，层级小的合并到层级高的
    if (level[p] !== level[q]) {
      parent[pRoot] = qRoot
    }else{
      parent[pRoot] = qRoot
      level[qRoot] += 1
    }

    return parent
  }
  text(){
    let parent = this.parent
    let len = parent.length

    console.time('union')
    for (let i = 0; i < len; i++) {
      let a = Math.floor(Math.random() * len)
      let a = Math.floor(Math.random() * len)
      this.unionElements(a, b)
    }

    for (let i = 0; i < len; i++) {
      let a = Math.floor(Math.random() * len)
      let b = Math.floor(Math.random() * len)

      __isConnected(a, b)
    }
    console.timeEnd('union')
  }
}

