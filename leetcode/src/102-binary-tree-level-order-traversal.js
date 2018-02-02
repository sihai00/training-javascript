/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 实现广度优先遍历
 * 思路：使用对象结构，level表示层级以及结果数组对应的下标，例如arr[0]就是第一层以此类推
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  var res = []
  var stack = [{dom: root, level: 0}]

  if (!root) return []

  while(stack.length){
    var head = stack.shift()
    var level = head.level
    if (res[level]) {
      res[level].push(head.dom.val)
    }else{
      res[level] = [head.dom.val]
    }

    if (head.dom.left) stack.push({dom: head.dom.left, level: level + 1})
    if (head.dom.right) stack.push({dom: head.dom.right, level: level + 1})
  }

  return res
};

