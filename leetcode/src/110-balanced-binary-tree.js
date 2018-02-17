/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 判断一颗二叉树是否为平衡二叉树
 * 递归root左右子树的子节点相差是否大于1
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  if (!root) return true
  return _isBalanced(root) !== -1
};

var _isBalanced = function(root){
  if (!root) return 0

  var left = _isBalanced(root.left), right = _isBalanced(root.right)

  if (left === -1 || right === -1 || Math.abs(left - right) > 1) return -1

  return 1 + Math.max(left, right)
}
