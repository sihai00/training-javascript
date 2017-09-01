/**
 * 二分搜索树
 * 当前节点比左孩子大，比右孩子小
 */
function BST(val, i){
  this.key = i
  this.val = val
}

/**
 * 插入
 */
function __insert(node, val, i){
  if (node == null) return new BST(val, i)

  if (node.val === val) return node
  if (node.val > val) node.left = __insert(node.left, val, i)
  if (node.val < val) node.right = __insert(node.right, val, i)

  return node
}
/**
 * 是否包含
 */
exports.contain = function __contain(node, key){
  if (node == null) return false

  if (node.key === key) return true
  if (node.key > key) return __contain(node.left, key)
  if (node.key < key) return __contain(node.right, key)
}
/**
 * 返回key所对应的val值
 */
exports.search = function __search(node, key){
  if (node == null) return false

  if (node.key === key) return node.val
  if (node.key > key) return __search(node.left, key)
  if (node.key < key) return __search(node.right, key)
}

exports.insert = function(arr){
  var res = null

  arr.forEach((v, i) =>{
    res = __insert(res, v, i + 1)
  })

  return res
}
