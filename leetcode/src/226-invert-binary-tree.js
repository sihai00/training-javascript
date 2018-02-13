/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 反转一颗二叉树
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (!root) return root

  if (root.left) invertTree(root.left)
  if (root.right) invertTree(root.right)

  var left = root.left
  var right = root.right
  root.left = right
  root.right = left

  return root
};
