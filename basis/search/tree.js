/**
 * 二分搜索树
 * 当前节点比左孩子大，比右孩子小
 */
function BST(val, i){
  this.key = i
  this.val = val
  this.child = {}
}

/**
 * 插入
 */
function __insert(node, val, i){
  if (node == null) return new BST(val, i)

  if (node.val === val) return node
  if (node.val > val) node.child.left = __insert(node.child.left, val, i)
  if (node.val < val) node.child.right = __insert(node.child.right, val, i)

  return node
}
exports.insert = function(arr){
  var res = null

  arr.forEach((v, i) =>{
    res = __insert(res, v, i + 1)
  })

  return res
}

/**
 * 是否包含
 */
exports.contain = function __contain(node, key){
  if (node == null) return false

  if (node.key === key) return true
  if (node.key > key) return __contain(node.child.left, key)
  if (node.key < key) return __contain(node.child.right, key)
}
/**
 * 返回key所对应的val值
 */
exports.search = function __search(node, key){
  if (node == null) return false

  if (node.key === key) return node.val
  if (node.key > key) return __search(node.child.left, key)
  if (node.key < key) return __search(node.child.right, key)
}
/**
 * 深度优先遍历：前序遍历
 */
exports.preOrder = function __preOrder(node){
  if (node != null) {
    console.log(node.val)
    __preOrder(node.child.left)
    __preOrder(node.child.right)
  }
}
/**
 * 深度优先遍历：中序遍历
 */
exports.inOrder = function __inOrder(node){
  if (node != null) {
    __inOrder(node.child.left)
    console.log(node.val)
    __inOrder(node.child.right)
  }
}
/**
 * 深度优先遍历：后序遍历
 */
exports.postOrder = function __postOrder(node){
  if (node != null) {
    __postOrder(node.child.left)
    __postOrder(node.child.right)
    console.log(node.val)
  }
}

/**
 * 广度优先遍历
 * 1.声明一个数组queue，将node入队
 * 2.遍历该数组，只要不为空就继续执行
 * 3.出队数组头节点，然后把该节点的子节点依次入队，直到节点没有子节点
 */
exports.leverOrder = function __leverOrder(node){
  var res = []
  var queue = [node]

  while(queue.length !== 0){
    var item = queue.shift()
    res.push(item.val)

    for(var key of Object.keys(item.child)){
      queue.push(item.child[key])
    }
  }

  return res
}

/**
 * 最大值
 */
exports.max = function __max(node){
  if (node.child.right == null) {
    return node.val
  }

  return __max(node.child.right)
}

/**
 * 最小值
 */
exports.min = function __min(node){
  if (node.child.left == null) {
    return node.val
  }

  return __min(node.child.left)
}

/**
 * 删除最小值
 */
exports.removeMin = function __removeMin(node){
  if (node.child.left == null) {
    return node.child.right
  }

  node.child.left =  __removeMin(node.child.left)
  return node
}

/**
 * 删除最大值
 */
exports.removeMax = function __removeMax(node){
  if (node.child.right == null) {
    return node.child.left
  }

  node.child.right =  __removeMax(node.child.right)
  return node
}
