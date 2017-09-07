/**
 * 二分搜索树
 * 当前节点比左孩子大，比右孩子小
 */
function BST(val){
  this.val = val
  // this.left = null
  // this.right = null
}

/**
 * 插入
 */
function __insert(node, val){
  if (node == null) return new BST(val)

  if (node.val === val) return node
  if (node.val > val) node.left = __insert(node.left, val)
  if (node.val < val) node.right = __insert(node.right, val)

  return node
}
exports.insert = function(arr){
  var res = null

  arr.forEach(v =>{
    res = __insert(res, v)
  })

  return res
}

/**
 * 是否包含
 */
function __contain(node, val){
  if (node == null) return false

  if (node.val === val) return true
  if (node.val > val) return __contain(node.left, val)
  if (node.val < val) return __contain(node.right, val)
}
exports.contain = __contain

/**
 * 返回val所对应的val值
 */
function __search(node, val){
  if (node == null) return false

  if (node.val === val) return node
  if (node.val > val) return __search(node.left, val)
  if (node.val < val) return __search(node.right, val)
}
exports.search = __search

/**
 * 深度优先遍历：前序遍历
 */
function __preOrder(node){
  if (node != null) {
    console.log(node.val)
    __preOrder(node.left)
    __preOrder(node.right)
  }
}
exports.preOrder = __preOrder

/**
 * 深度优先遍历：中序遍历
 */
function __inOrder(node){
  if (node != null) {
    __inOrder(node.left)
    console.log(node.val)
    __inOrder(node.right)
  }
}
exports.inOrder = __inOrder

/**
 * 深度优先遍历：后序遍历
 */
function __postOrder(node){
  if (node != null) {
    __postOrder(node.left)
    __postOrder(node.right)
    console.log(node.val)
  }
}
exports.postOrder = __postOrder

/**
 * 广度优先遍历
 * 1.声明一个数组queue，将node入队
 * 2.遍历该数组，只要不为空就继续执行
 * 3.出队数组头节点，然后把该节点的子节点依次入队，直到节点没有子节点
 */
function __leverOrder(node){
  var res = []
  var queue = [node]

  while(queue.length !== 0){
    var item = queue.shift()
    
    if (item) {
      res.push(item.val)
      if (item.left) queue.push(item.left)
      if (item.right) queue.push(item.right)
    }
  }

  return res
}
exports.leverOrder = __leverOrder

/**
 * 最大值
 */
function __max(node){
  if (node.right == null) {
    return node
  }

  return __max(node.right)
}
exports.max = __max

/**
 * 最小值
 */
function __min(node){
  if (node.left == null) {
    return node
  }

  return __min(node.left)
}
exports.min = __min

/**
 * 删除最小值
 */
function __removeMin(node){
  if (node.left == null) {
    return node.right
  }

  node.left =  __removeMin(node.left)
  return node
}
exports.removeMin = __removeMin

/**
 * 删除最大值
 */
function __removeMax(node){
  if (node.right == null) {
    return node.left
  }

  node.right =  __removeMax(node.right)
  return node
}
exports.removeMax = __removeMax

/**
 * 前驱：寻找val节点的前一个节点（key必须存在于树中）
 * 思路：key树中左子树的最大值
 */
function __predecessor(node, val){
  var res = __search(node, val)
  if (res == null) return null

  if (res.left != null) return __max(res.left)

  res = predecessorFromAncestor(node, val)
  return res ? res : null
}
exports.predecessor = __predecessor
  
function predecessorFromAncestor(node, val){
  if (node.val === val) return null

  var max = null
  if (node.val > val) return predecessorFromAncestor(node.left, val)
  else{
    max = predecessorFromAncestor(node.right, val)

    if (max) {
      return max.val > node.val ? max : node
    }else{
      return node
    }
  }
}
/**
 * 后继：寻找key节点的后一个节点（key必须存在于树中）
 * 思路：key树中右子树的最小值
 */
function __successor(node, val){
  if (node == null) return null

  var res = __search(node, val)
  if (res.right != null) return __min(res.right)

  res = successorFromAncestor(node, val)
  return res ? res : null
}
exports.successor = __successor

function successorFromAncestor(node, val){
  if (node.val === val) return null

  var min = null
  if (node.val < val) return successorFromAncestor(node.right, val)
  else{
    min = successorFromAncestor(node.left, val)

    if (min) {
      return min.val < val ? min.val : val
    }else{
      return node
    }
  }
}
/**
 * 删除值为val的节点
 * 1.递归寻找到值为val的节点
 * 2.找出当前节点的右子树中的最小值作为替换节点
 * 3.删除当前节点，返回替换节点
 */
function __remove(node, val){
  if (node == null) return null

  if (node.val > val) {
    node.left = __remove(node.left, val)
    return node
  }
  else if (node.val < val) {
    node.right = __remove(node.right, val)
    return node
  }
  else { // val == node.val
    if (node.left == null) return node.right
    if (node.right == null) return node.left

    // 找到当前树中的最小值，赋值为替换节点
    var min = __min(node.right)
    var replace = new BST(min.val)
    // 删除最小值
    replace.left = node.left
    replace.right = __removeMin(node.right)
    // 返回替换节点
    return replace
  }
}
exports.remove = __remove

