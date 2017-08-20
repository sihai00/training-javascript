var common = require('../common')

/**
 * 插入排序：扑克牌
 * 时间复杂度O(n^2)，可提前终止
 * 1.顺序获取当前值，然后倒叙与前一个值相比较，小则交换
 */

// module.exports = function(arr){
//   var res = arr
//   var len = res.length

//   for (var i = 1; i < len; i++) {
//     for(var j = i; j > 0 && res[j - 1] > res[j]; j--){
//       res = common.swap(res, j, j - 1)
//     }
//   }

//   return res
// }

module.exports = function(arr){
  var res = arr
  var len = res.length

  for (var i = 1; i < len; i++) {
    var e = res[i]

    for(var j = i; j > 0 && res[j - 1] > e; j--){
      res[j - 1] = res[j]
    }
    res[j] = e
  }

  return res
}