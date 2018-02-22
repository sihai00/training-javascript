/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 题意：给定一颗二叉树，返回所有从根节点到叶子节点的路径，其和为sum
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  if (!root) return []

  var res = []
  if (!root.left && !root.right) {
    if (sum - root.val === 0) {
      res.push(root.val)
      return [res]
    }else{
      return res
    }
  }

  return _pathSum(root, sum)
};

var _pathSum = function(root, sum){
  if (!root) return []

  var res = [], left = [], right = []
  if (!root.left && !root.right) {
    if (sum - root.val === 0) res.push(root.val)
    return res
  }

  if (root.left) {
    left = _pathSum(root.left, sum - root.val)

    for (var i = 0; i < left.length && left.length !== 0; i++) {
      res.push([root.val].concat(left[i]))
    }
  }
  
  if (root.right) {
    right = _pathSum(root.right, sum - root.val)

    for (var i = 0; i < right.length && right.length !== 0; i++) {
      res.push([root.val].concat(right[i]))
    }
  }

  return res
}

// more fast by others
var pathSum = function(root, sum) {
  const result = [];
  const val = [];
  
  if (!root) {
    return [];
  }
  
  const dfs = (node) => {
    val.push(node.val);
    
    if ((node.left === null) && (node.right === null) && (val.reduce((r,n) => r+n) === sum)) {
      result.push([...val]);
    }
    
    if (node.left) {
      dfs(node.left);
    }
    
    if (node.right) {
      dfs(node.right);
    }
    
    val.pop();
  };
  
  dfs(root);
  
  return result;
};
