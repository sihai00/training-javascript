var common = require('../common')

/**
 * 堆的优化：从下标为0开始
 * 入堆时间复杂度：O(nlogn)
 * 出堆时间复杂度：O(nlogn)
 */

module.exports = function(arr){
  var res = arr
  var len = res.length

  // heapify：生成堆
  for (var i = Math.floor((res.length - 1) / 2); i >= 0; i--) {
    // 在第一个非叶子节点（len - 1）/ 2执行shiftDown，保证以该节点为根的树符合堆的定义
    shiftDown(i, len)
  }

  // sort：堆排序
  for (var i = len - 1; i > 0; i--) {
    res = common.swap(res, i, 0)
    // 头尾交换，从尾部开始最大，维护除尾部外符合堆的定义
    shiftDown(0, i)
  }

  function shiftDown(s, e){
    // 判断是否存在左子树
    while(s * 2 + 1 < e){
      var j = s * 2 + 1
      // 判断是否存在右子树，目的找出子树中的最大值
      if (j + 1 < e && res[j] < res[j + 1]) j += 1
      // 如果当前节点比子树最大值大，那么不用交换
      if (res[s] > res[j]) break

      res = common.swap(res, s, j)
      s = j
    }
  }

  return res
}