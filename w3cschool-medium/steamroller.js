/*
* 目标：数组简化
* 解释：对嵌套的数组进行扁平化处理。你必须考虑到不同层级的嵌套。
* 例如：steamroller([[["a"]], [["b"]]]) 应该返回 ["a", "b"]
* 思路：运用了concat特性，逐层的分解数组。例如[1].concat([2,[3]]) => [1,2,[3]]
* */

function steamroller(arr) {
  var result = []
  // 如果数组元素为基本数据类型，那么
  result = arr.reduce((pre, next) => {
    if (typeof next !== 'object') {
      // 基本数据类型: 转为数组，调用concat
      return pre.concat([next])
    }else{
      // 直接concat
      return pre.concat(next)
    }
  }, [])

  if (result.every(v => !Array.isArray(v))) {
    // 若所有数组元素都不为数组，那么就是我们想要的结构
    return result
  }else{
    // 否则，递归
    return steamroller(result)
  }
}

steamroller([1, [2], [3, [[4]]]]);