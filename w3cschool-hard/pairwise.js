/*
* 目标：数据组合求值
* 解释：有一个能力数组[7,9,11,13,15]，按照最佳组合值为20来计算，只有7+13和9+11两种组合。返回其下标，0+3+1+2的和，即6
* 例如：pairwise([1, 4, 2, 3, 0, 5], 7) 应该返回 11
* */

function pairwise(arr, arg) {
  if (!Array.isArray(arr)){
     return
   }else if(arr.length === 0){
    return 0
   }
  var key = 0
  var result = []

  arr.forEach((v, i) => {
    for(var j = i + 1; j < arr.length; j++){
      if (v + arr[j] === arg && !result.some(w => (w.index === j && w.value === arr[j]) || (w.index === i && w.value === v))) {
        result = result.concat([{index: i, value: v}, {index: j, value: arr[j]}])
      }
    }
  })

  return result.reduce((pre, next) => {
    return {index: pre.index + next.index}
  }).index
}

pairwise([1,4,2,3,0,5], 7);
