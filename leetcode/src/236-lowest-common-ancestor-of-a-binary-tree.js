/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 题意：给定一颗二叉树和两个节点，寻找这两个节点的最近公共祖先
 * 思路：1.如果当前节点包含p、q，那么结果为当前节点
        2.如果只有一个子节点，那么结果在子节点中
        3.如果没有子节点，那么结果为null
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  if (root == null || p == root || q == root) return root

  let left = lowestCommonAncestor(root.left, p, q)
  let right = lowestCommonAncestor(root.right, p, q)

  return !left ? right : !right ? left : root
};
