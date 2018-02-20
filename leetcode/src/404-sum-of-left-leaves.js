/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 题意：求一棵二叉树所有左叶子的和
 * 叶子：当前节点不包含左右子树
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
  if (!root) return 0

  var left = 0, right = 0, leftval = 0
  // 找出右子树中的左叶子
  if (root.right) right = sumOfLeftLeaves(root.right)

  // 找出左子树的左叶子
  if (root.left) {
    left = sumOfLeftLeaves(root.left)

    // 如果左子树的左节点不包含左右子树，那么想加
    if (!root.left.left && !root.left.right) leftval = root.left.val
  }

  return left + right + leftval
};
