/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 题意：给定一颗二分搜索树和两个节点，寻找这两个节点的最近公共祖先
 * 二分搜索树：当前节点比左子节点大，比右子节点小
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  if (!root) return null

  // 当root比q、p大时，说明目标节点在右子树
  if (root.val < p.val && root.val < q.val) return lowestCommonAncestor(root.right, p, q)

  // 当root比q、p大时，说明目标节点在右子树
  if (root.val > p.val && root.val > q.val) return lowestCommonAncestor(root.left, p, q)

  // 否则证明当前节点就是目标节点
  return root
};
