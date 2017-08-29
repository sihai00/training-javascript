var common = require('../common')

/**
 * 索引堆
 */
exports.heapify = function(arr){
  var res = []
  var indexs = []
  var len = arr.length

  for (var i = 0; i < len; i++) {
    if (i + 1 >= 1 && i + 1 <= len) {
      res[i + 1] = arr[i]
      indexs[i + 1] = i + 1
    }

    shiftUp(i + 1)
  }

  function shiftUp(i){
    while(i > 1 && res[indexs[i]] > res[indexs[Math.floor(i / 2)]]){
      indexs = common.swap(indexs, i, Math.floor(i / 2))
      i = Math.floor(i / 2)
    }
  }

  return indexs
}