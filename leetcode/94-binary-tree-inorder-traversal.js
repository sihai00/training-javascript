/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 中序遍历
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  var res = []
  dfs(root, res)
  return res
};
var dfs = function(node, res) {
  if (!node) return

  dfs(node.left, res)
  res.push(node.val)
  dfs(node.right, res)
}