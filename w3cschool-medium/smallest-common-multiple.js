/*
* 目标：最小公倍数
* 解释：找出能被两个给定参数和它们之间的连续数字整除的最小公倍数
* 例如：smallestCommons([1, 5]) 应该返回60; smallestCommons([5, 1]) 应该返回 60
* 
* */

function maxCommons(arr) {
  var min = arr[0]
  var max = arr[1]

  // 找出最大公约数
  while(max % min !== 0){
    [max, min] = [min, max % min]
  }

  return min;
}

function smallestCommons(arr){
  var result = [], max, min
  if (Array.isArray(arr)) {
    arr = arr.sort((a, b) => a - b)
  }else{
    return
  }

  min = arr[0]
  max = arr[1]
  // 组合数组，例如参数[1,5]，返回[1,2,3,4,5]
  while(result[result.length - 1] < max || result.length === 0){
    result.push(min)
    min += 1
  }
  // 两两相比得出最小公倍数。maxCommons为获取最大公约数
  return result.reduce((pre, next) => pre * next / maxCommons([pre, next]))
}

smallestCommons([1,5]);