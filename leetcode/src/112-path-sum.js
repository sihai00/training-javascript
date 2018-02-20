/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 题意：给出一颗二叉树以及一个数组sum，
        判断在这颗二叉树上是否存在一条从根到叶子的路径，
        其路径上的所有节点和为sum
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if (!root) return false

  var sum = sum - root.val
  // 题意：从根到叶子
  if (!root.left && !root.right) {
    return sum === 0
  }

  return hasPathSum(root.left, sum) || hasPathSum(root.right, sum)
};
