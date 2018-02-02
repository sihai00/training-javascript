/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 实现逆序的广度优先遍历
 * 思路：遍历每一层时，把当前层级的所有节点再次遍历，即可得到所有节点值
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  var queue = [root]
  var res = []

  if (!root) return []

  while(queue.length){
    var val = []

    for (var i = 0, len = queue.length; i < len; i++) {
      var head = queue.shift()
      val.push(head.val)
      if (head.left) queue.push(head.left)
      if (head.right) queue.push(head.right)
    }

    res.unshift(val)
  }

  return res
};
