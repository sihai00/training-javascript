/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 题意：给定一颗二叉树，验证其是否为二分搜索树
 * 二分搜索树：当前节点比左孩子大，比右孩子小
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  return isBST(root, -Infinity, Infinity);
};

function isBST(root, min, max) {
  if(root === null) return true; 
  
  if(root.val <= min || root.val >= max) return false;
  
  return isBST(root.left, min, root.val) && isBST(root.right, root.val, max);
}
