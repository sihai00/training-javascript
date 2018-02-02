/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 前序遍历栈
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  var res = []
  dfs(root, res)
  return res
};

var dfs = function(node, res){
  if (!node) return

  res.push(node.val)
  dfs(node.left, res)
  dfs(node.right, res)
}
