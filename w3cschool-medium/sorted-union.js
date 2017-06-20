/*
* 目标：数组去重
* 解释：传入两个或两个以上的数组，返回一个以给定的原始数组排序的不包含重复值的新数组
* 例如：unite([1, 3, 2], [5, 2, 1, 4], [2, 1]) 应该返回 [1, 3, 2, 5, 4]
* 
* */

function unite(...arg) {
  var result = []

  arg.forEach(v => {
    v.forEach(k => {
      !result.includes(k) && result.push(k)
    })
  })

  return result;
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);