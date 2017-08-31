/**
 * 二分搜索树
 */
exports.insert = function(arr){
  var res = null

  arr.forEach(v =>{
    res = __insert(res, v)
  })

  return res
}

function __insert(node, val){
  if (node == null) {
    return new BST(val)
  }

  if (node.val === val) {
    return node
  }
  if (node.val > val) {
    node.left = __insert(node.left, val)
  }
  if (node.val < val) {
    node.right = __insert(node.right, val)
  }

  return node
}

function BST(val){
  this.val = val
}