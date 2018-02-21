/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 给定一颗二叉树，返回所有从根节点到叶子节点路径的字符串
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  var res = [], left = [], right = []
  if (!root) return res

  // 如果是叶子，则返回数组
  if (!root.left && !root.right) {
    res.push(`${root.val}`)
    return res
  }

  // 寻找左子树的路径
  if (root.left) {
    left = binaryTreePaths(root.left)
    // 把左子树的路径与当前节点结合
    for (var i = 0; i < left.length; i++) {
      res.push(root.val + '->' + left[i])
    }
  }

  // 寻找右子树的路径
  if (root.right) {
    right = binaryTreePaths(root.right)
    // 把右子树的路径与当前节点结合
    for (var i = 0; i < right.length; i++) {
      res.push(root.val + '->' + right[i])
    }
  }

  return res
};
