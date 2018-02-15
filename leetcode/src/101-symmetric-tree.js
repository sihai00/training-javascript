/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 给出一颗二叉树，判断其是否是左右对称的
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  return root === null || _isSymmetric(root.left, root.right);
};

function _isSymmetric (left, right) {
  if (left === null || right === null) return left === right;
  if (left.val !== right.val) return false;
  return _isSymmetric(left.left, right.right) && _isSymmetric(left.right, right.left);
}
