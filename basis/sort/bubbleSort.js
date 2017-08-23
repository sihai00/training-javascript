var common = require('../common')

/**
 * 冒泡排序: 两两比较
 * 时间复杂度O(n^2)
 * 1.第一层循环用于存放当前冒泡的最大(小)值
 * 2.第二层循环依次便利，两两比较
 */

// 前往后冒泡
module.exports = function(arr){
  var res = arr
  var len = res.length

  for (var i = 1; i < len; i++) {
    for (var j = 0; j < len - i; j++) {
      if (arr[j] > arr[j + 1]) {
        res = swap(res, j, j + 1)
      }
    }
  }

  return res
}

// 后往前冒泡
// module.exports = function(arr){
//   var res = arr
//   var len = res.length

//   for (var i = 1; i < len; i++) {
//     for (var j = len - 1; j >= i; j--) {
//       if (res[j] < res[j - 1]) {
//         res = swap(res, j, j - 1)
//       }
//     }
//   }

//   return res
// }