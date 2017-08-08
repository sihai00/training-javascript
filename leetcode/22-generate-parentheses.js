/**
 * 给出数字n，求出所有合法的表达式
 * 思路：1.二叉树，递归实现 2.最多添加n个左括号，当左括号数大于右括号数时，才添加右括号
 * @param {number} n
 * @return {string[]}
 */
var result
var generateParenthesis = function(n) {
  if (n === 0) return []
  result = []
  dfs('', 0, 0, n)
  return result
};
function dfs(s, left, right, n){
  if (left === n && right === n) {
    result.push(s)
  }

  if (left + 1 <= n) {
    dfs(s + '(', left + 1, right, n)
  }
  if (right + 1 <= n && right + 1 <= left) {
    dfs(s + ')', left, right + 1, n)
  }
}

// more fast by other people
var generateParenthesis = function(n) {
  if (n <= 0) return []
  var result = []
  dfs(n, n, '', result)
  return result
};
function dfs(left, right, s, result){
  if (left === 0 && right === 0) {
    result.push(s)
    return
  }

  if (left > 0) {
    dfs(left - 1, right, s + '(', result)
  }

  if (left < right) {
    dfs(left, right - 1, s + ')', result)
  }
}