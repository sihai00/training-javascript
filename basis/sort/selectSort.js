var common = require('../common')

/**
 * 选择排序：
 * 时间复杂度O(n^2)
 * 1.找出数组中最小值
 * 2.依次与头部交换
 */
function selectSort(arr, n){
  var min = 0
  var res = arr
  var len = res.length
  
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

var res = selectSort([9, 8, 7, 6, 5, 4, 3, 2, 1])
console.log(res)