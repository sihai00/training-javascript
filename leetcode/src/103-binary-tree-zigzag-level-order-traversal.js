/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 对一个二叉树进行层序遍历，按照“之”字形的顺序返回所有节点
 * 思路：用一个变量标识方向
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  var queue = [root]
  var res = []
  var direction = true

  if (!root) return []

  while(queue.length){
    var val = []
    for (var i = 0, len = queue.length; i < len; i++) {
      var head = queue.shift()
      if (direction) {
        val.push(head.val)
      }else{
        val.unshift(head.val)
      }

      if (head.left) queue.push(head.left)
      if (head.right) queue.push(head.right)
    }

    res.push(val)
    direction = !direction
  }

  return res
};
