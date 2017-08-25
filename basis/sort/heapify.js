var common = require('../common')

/**
 * 堆：可用数组模拟，从下标为1开始，0不使用
 * 规则：
    1.任何一个节点都不大于它的父亲节点
    2.i节点的父节点计算：Math.floor(i / 2)。左孩子节点：2 * i。右孩子节点：2 * i + 1
 */

exports.heapify = function(arr){
  var res = []
  // 遍历数组，依次把元素插入
  for (var i = 0; i < arr.length; i++) {
    res[i + 1] = arr[i]
    // 校验是否满足堆的性质
    shiftUp(i + 1)
  }

  function shiftUp(i){
    // 如果当前元素比它的父(i / 2)大，那么不满足堆的性质，交换位置
    while(i > 1 && res[i] > res[Math.floor(i / 2)]){
      res = common.swap(res, i, Math.floor(i / 2))
      i = Math.floor(i / 2)
    }
  }

  return res
}