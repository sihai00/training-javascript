/*
* 目标：去除数组中任意多个值
* 解释：实现一个摧毁(destroyer)函数，第一个参数是待摧毁的数组，其余的参数是待摧毁的值
* 例如：destroyer([1, 2, 3, 1, 2, 3], 2, 3) 应该返回 [1, 1]
* 
* */

function destroyer(arr,...arg) {
  if (!Array.isArray(arr)) return
  var result = []

  arr.forEach(v => {
    var bool = arg.every(k => {
      return v !== k
    })

    bool && result.push(v)
  })

  return result;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);