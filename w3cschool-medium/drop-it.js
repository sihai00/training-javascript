/*
* 目标：数组取值
* 解释：让我们来丢弃数组(arr)的元素，从左边开始，直到回调函数return true就停止
* 例如：drop([1, 2, 3, 4], function(n) {return n >= 3;}) 应该返回 [3, 4]
       drop([0, 1, 0, 1], function(n) {return n === 1;}) 应该返回 [1, 0, 1]
* 
* */

function drop(arr, func) {
  if (!Array.isArray(arr) && func.constructor !== Function) return

  var index = arr.findIndex(func)
    
  return index !== -1 ? arr.slice(index) : []
}

drop([1, 2, 3], function(n) {return n < 3; });