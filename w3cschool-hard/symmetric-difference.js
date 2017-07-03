/*
* 目标：集合交集
* 解释：创建一个函数，接受两个或多个数组，返回所给数组的 对等差分(symmetric difference) (△ or ⊕)数组.
* 例如：sym([1, 2, 3], [5, 2, 1, 4]) 应该返回 [3, 4, 5]
       sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) 应该返回 [1, 4, 5]
* */

function sym(...args) {
  if (!Array.isArray(args)) return

  return args.reduce((pre, next) => {
    // 寻找出两数组的查集
    var preArr = pre.filter(v => !next.includes(v))
    var nextArr = next.filter(v => !pre.includes(v))

    // 合并且去重
    return [...new Set(preArr.concat(nextArr))]
  }).sort()
}

sym([1, 2, 3], [5, 2, 1, 4]);