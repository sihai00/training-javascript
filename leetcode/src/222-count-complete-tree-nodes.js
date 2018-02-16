/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 给定一颗完全二叉树，求完全二叉树的节点个数
 * 思路：先计算左右的深度是否相等，相等则为满二叉树，满二叉树的节点个数为深度的平方减一,即depth^2-1；
        如果不相等，则递归以同样的方式计算左子树和右子树，并返回两者个数之和加一
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
  if (!root) {
    return 0;
  }
  var lDepth = 0, rDepth = 0;
  
  var lNode = root.left;
  while(lNode) {
    lDepth++;
    lNode = lNode.left;
  }
  
  var rNode = root.right;
  while(rNode) {
    rDepth++;
    rNode = rNode.right;
  }
  
  if (lDepth === rDepth) {
    return Math.pow(2, lDepth + 1) - 1;
  }
  
  return 1 + countNodes(root.left) + countNodes(root.right);
};
