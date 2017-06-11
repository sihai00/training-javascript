/*
* 目标：区间求值
* 解释：传递给你一个包含两个数字的数组。返回这两个数字和它们之间所有数字的和
* 例如：sumAll([5, 10]) 应该返回 45; sumAll([10, 5]) 应该返回 45。
* 
* */

function sumAll(arr) {
  if (!Array.isArray(arr) && typeof arr[0] !== 'number' && typeof arr[1] !== 'number') return
  var result = 0
  var max = Math.max(arr[0], arr[1])
  var min = Math.min(arr[0], arr[1])
  var i = 0
  // 获取最大值最小值，循环叠加即可
  while(min + i <= max){
    result += (min + i)
    i += 1
  }

  return result
}

sumAll([1, 4]);