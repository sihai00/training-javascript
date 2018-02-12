/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 求一颗二叉树的最低深度
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  if(root === null){
    return 0;
  }
  // 若左子树不存在，则返回右子树的最低深度
  if(root.left === null){
    return minDepth(root.right) + 1;
  }
  // 若右子树不存在，则返回左子树的最低深度
  if(root.right === null){
    return minDepth(root.left) + 1;
  }
  
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};
