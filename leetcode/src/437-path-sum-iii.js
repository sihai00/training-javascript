/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 题意：给出一颗二叉树以及一个数字sum，判断在这棵二叉树存在多少条路径，
        其路径上的所有节点和为sum
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
  if (!root) return 0
  
  // 包含当前节点的路径
  var res = findPath(root, sum)

  // 不包含当前节点的路径
  res += pathSum(root.left, sum)
  res += pathSum(root.right, sum)

  return res
};

var findPath = function(root, sum){
  if (!root) return 0

  var res = 0
  if (root.val === sum) res += 1

  res += findPath(root.left, sum - root.val)
  res += findPath(root.right, sum - root.val)

  return res
};


