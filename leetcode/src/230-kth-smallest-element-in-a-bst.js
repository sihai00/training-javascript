/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 题意：给定一棵二分搜索树，在这棵二分搜索树上寻找第k小元素
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  const count = countNodes(root.left)

  if (k <= count) {
    // 如果k比左子树的节点小，那么目标节点在左子树
    return kthSmallest(root.left, k)
  }else if(k > count + 1){
    // 如果k比左子树 + 自身节点大，那么目标节点在右子树
    return kthSmallest(root.right, k - 1 - count)
  }

  // 目标节点就是当前节点
  return root.val
};

var countNodes = function(root) {
  if (root == null) return 0

  return 1 + countNodes(root.left) + countNodes(root.right)
};
