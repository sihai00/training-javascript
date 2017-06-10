/*
* 目标：删除数组中特定值
* 解释：删除数组中的所有假值,在JavaScript中，假值有false、null、0、""、undefined 和 NaN
* 例如：bouncer([7, "ate", "", false, 9]) 应该返回 [7, "ate", 9]
* 
* */

function bouncer(arr) {
  if (!Array.isArray(arr)) return
  var result = []

  arr.forEach(v => {
    // 如果存在就更新数组
    !!v && result.push(v)
  })

  return result
}

function bouncer2(arr) {
  if (!Array.isArray(arr)) return
  var result = []
  // filter会过滤为空的数组元素
  result = arr.filter(v => {
    return !!v && v
  })

  return result
}

bouncer([7, "ate", "", false, 9]);
bouncer2([7, "ate", "", false, 9]);

