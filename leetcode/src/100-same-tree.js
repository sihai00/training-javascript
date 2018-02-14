/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 给出两颗二叉树，判断这两颗二叉树是否完全一样
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if (p == null && q == null) {
    return true;
  }
  
  if (p == null || q == null) {
    return false;
  }    
  
  var leftSame = isSameTree(p.left, q.left);
  var rightSame = isSameTree(p.right, q.right);
  
  if (!leftSame || !rightSame) {    
    return false;
  }
  
  return p.val == q.val;
};
