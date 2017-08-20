var common = require('../common')

/**
 * 选择排序：寻找最小值往依次往前排
 * 时间复杂度O(n^2)
 * 1.找出数组中最小值
 * 2.依次与头部子项交换
 */
module.exports = function(arr){
  var res = arr
  var len = res.length
  var min = 0

  // 寻找[i, len)区间里的最小值
  for (var i = 0; i < len; i++) {
    min = i
    // 注意：j为i后的子项，因为j之前已排序好
    for (var j = i + 1; j < len; j++) {
      // 比较最小值
      if (res[j] < res[min]) min = j
    }
    // 交换
    res = common.swap(res, i, min)
  }

  return res
}