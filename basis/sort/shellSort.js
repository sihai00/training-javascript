var common = require('../common')

/**
 * 希尔排序：递减增量排序算法
 * 时间复杂度O(n^2)
 * 什么叫递减增量呢，就是定义一个间隔序列，例如是5，3，1。第一次处理所有间隔为5的，下一次会处理间隔为3的，最后一次处理间隔为1的元素
 * http://www.cnblogs.com/xianyulaodi/p/6001122.html#_label2
 */

module.exports = function(arr){
  var res = arr
  var len = res.length
  var gap = Math.floor(len / 2)
  
  while(gap > 0){
    for (var i = gap; i < len; i++) {
      var temp = res[i]
      for (var j = i; j >= gap && temp < res[j-gap]; j -= gap) {
        res[j] = res[j-gap]
      }
      res[j] = temp
    }
    gap = Math.floor(gap / 2)
  }

  return res
}