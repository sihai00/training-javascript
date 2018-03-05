/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 给定一颗二分搜索树，删除其中一个节点
 * 1.root.val和key不想等，若key大于root.val，则在右子树。若key小于root.val，则在左子树
 * 2.如果相等，开始删除操作
     2.1 当前节点没有左右孩子，返回null
     2.2 当前节点没有左孩子，返回右孩子
     2.3 当前节点没有右孩子，返回左孩子
     2.4 当前节点有左右孩子，寻找右孩子的最小值作为当前节点的值，递归删除右孩子的最小值
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
  if (root == null) return null

  if (root.val > key) {
    root.left = deleteNode(root.left, key)
  }else if(root.val < key){
    root.right = deleteNode(root.right, key)
  }else{
    if (root.left == null) return root.right
    if (root.right == null) return root.left

    let minRight = findMin(root.right)
    root.val = minRight
    root.right = deleteNode(root.right, minRight)
  }

  return root
};

var findMin = function(node) {
  while(node.left != null){
    node = node.left
  }

  return node.val
}
