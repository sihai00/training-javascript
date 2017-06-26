/*
* 目标：数组验证
* 解释：写一个 function，它浏览数组（第一个参数）并返回数组中第一个通过某种方法（第二个参数）验证的元素
* 例如：find([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) 应该返回 8
* 
* */

function find(arr, func) {
  if (!Array.isArray(arr) && func.constructor !== Function) return

  return arr.find(func)
}

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });