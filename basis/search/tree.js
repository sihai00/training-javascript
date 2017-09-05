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
function __contain(node, key){
  if (node == null) return false

  if (node.key === key) return true
  if (node.key > key) return __contain(node.child.left, key)
  if (node.key < key) return __contain(node.child.right, key)
}
exports.contain = __contain

/**
 * 返回key所对应的val值
 */
function __search(node, key){
  if (node == null) return false

  if (node.key === key) return node.val
  if (node.key > key) return __search(node.child.left, key)
  if (node.key < key) return __search(node.child.right, key)
}
exports.search = __search

/**
 * 深度优先遍历：前序遍历
 */
function __preOrder(node){
  if (node != null) {
    console.log(node.val)
    __preOrder(node.child.left)
    __preOrder(node.child.right)
  }
}
exports.preOrder = __preOrder

/**
 * 深度优先遍历：中序遍历
 */
function __inOrder(node){
  if (node != null) {
    __inOrder(node.child.left)
    console.log(node.val)
    __inOrder(node.child.right)
  }
}
exports.inOrder = __inOrder

/**
 * 深度优先遍历：后序遍历
 */
function __postOrder(node){
  if (node != null) {
    __postOrder(node.child.left)
    __postOrder(node.child.right)
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
    res.push(item.val)

    for(var key of Object.keys(item.child)){
      queue.push(item.child[key])
    }
  }

  return res
}
exports.leverOrder = __leverOrder

/**
 * 最大值
 */
function __max(node){
  if (node.child.right == null) {
    return node
  }

  return __max(node.child.right)
}
exports.max = __max

/**
 * 最小值
 */
function __min(node){
  if (node.child.left == null) {
    return node
  }

  return __min(node.child.left)
}
exports.min = __min

/**
 * 删除最小值
 */
function __removeMin(node){
  if (node.child.left == null) {
    return node.child.right
  }

  node.child.left =  __removeMin(node.child.left)
  return node
}
exports.removeMin = __removeMin

/**
 * 删除最大值
 */
function __removeMax(node){
  if (node.child.right == null) {
    return node.child.left
  }

  node.child.right =  __removeMax(node.child.right)
  return node
}
exports.removeMax = __removeMax

/**
 * 删除键值为key的节点
 * 1.递归寻找到键值为key的节点
 * 2.找出当前节点的右子树中的最小值作为替换节点
 * 3.删除当前节点，返回替换节点
 */
function __remove(node, key){
  if (node == null) return null

  if (node.key > key) {
    node.child.left = __remove(node.child.left, key)
    return node
  } 
  else if (node.key < key) {
    node.child.right = __remove(node.child.right, key)
    return node
  } 
  else { // key == node.key
    if (node.child.left == null) return node.child.right
    if (node.child.right == null) return node.child.left

    // 找到当前树中的最小值，赋值为替换节点
    var min = __min(node)
    var replace = new BST(min.val, min.key)
    // 删除最小值
    replace.child.left = __removeMin(node.child.left)
    replace.child.right = node.child.right
    // 返回替换节点
    return replace
  }
}
exports.remove = __remove

