/**
 * 并查集
 * 数组表示，值表示parent指向其父节点
 */

exports.UF2 = function(count){
  var parent = []

  for (var i = 0; i < count; i++) {
    parent.push(i)
  }

  return parent
}

/**
 * 寻找根节点
 */
function __find(parent, p){
  var len = parent.length
  if (len < 0) return 
  if (p < 0 || p >= len) return 

  while(p !== parent[p]){
    p = parent[p]
  }

  return p
}

exports.find = __find

/**
 * 是否相连
 * 判断两节点的根是否相同
 */
function __isConnected(parent, p, q){
  return __find(parent, p) === __find(parent, q)
}

exports.isConnected = __isConnected

/**
 * 连接两节点
 * 把两个节点的父节点相连接
 */
function __unionElements(parent, p, q){
  var pRoot = __find(parent, p)
  var qRoot = __find(parent, q)

  if (pRoot != qRoot) parent[pRoot] = qRoot

  return parent
}

exports.unionElements = __unionElements

/**
 * 测试
 */
exports.text = function(parent){
  var len = parent.length
  var res = parent

  console.time('union')
  for (var i = 0; i < len; i++) {
    var a = Math.floor(Math.random() * len)
    var b = Math.floor(Math.random() * len)
    res = __unionElements(res, a, b)
  }

  for (var i = 0; i < len; i++) {
    var a = Math.floor(Math.random() * len)
    var b = Math.floor(Math.random() * len)

    __isConnected(parent, a, b)
  }
  console.timeEnd('union')
}
