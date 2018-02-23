/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 题意：给定一颗二叉树，每个节点只包含数字0-9，
        从根节点到叶子节点的每条路径可以表示成一个数，求这些数的和
 * @param {TreeNode} root
 * @return {number}
 */
var ans

function dfs(root, sum) {
  if (!root.left && !root.right) {
    ans += sum * 10 + root.val
    return
  }

  if (root.left) dfs(root.left, sum * 10 + root.val)

  if (root.right) dfs(root.right, sum * 10 + root.val)
}

var sumNumbers = function(root) {
  if (root === null) return 0

  ans = 0
  dfs(root, 0)
  return ans
};
