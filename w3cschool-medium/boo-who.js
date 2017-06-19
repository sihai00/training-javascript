/*
* 目标：输入检查
* 解释：检查一个值是否是基本布尔类型，并返回 true 或 false。基本布尔类型即 true 和 false
* 例如：[1, 2, 3, 5], [1, 2, 3, 4, 5] 应该返回 [4]
* 
* */

function boo(bool) {
  return typeof bool !== 'boolean' ? false : true
}

boo(null);